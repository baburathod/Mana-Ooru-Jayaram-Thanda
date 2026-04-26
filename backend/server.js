const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Initialize SQLite Database
const dbPath = path.resolve(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database', err);
  } else {
    console.log('Connected to SQLite database.');
    
    // Create Tables
    db.run(`CREATE TABLE IF NOT EXISTS complaints (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT NOT NULL,
      status TEXT DEFAULT 'Pending',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS notices (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      type TEXT NOT NULL,
      date TEXT NOT NULL
    )`, (err) => {
      // Seed initial notices if empty
      if (!err) {
        db.get('SELECT COUNT(*) as count FROM notices', (err, row) => {
          if (row && row.count === 0) {
            const seedNotices = [
              { title: "నీటి ట్యాంక్ శుభ్రపరచడం (Water Tank Cleaning)", desc: "రేపు ఉదయం గ్రామ ప్రధాన నీటి ట్యాంక్‌ను శుభ్రపరుస్తున్నారు. కావున ఉదయం 8 నుండి 12 వరకు మంచినీటి సరఫరా నిలిపివేయబడుతుంది. దయచేసి సహకరించండి. (Main water tank will be cleaned tomorrow. Water supply will be paused from 8 AM to 12 PM.)", type: "ముఖ్యమైనది (Important)", date: "Today (తాజా వార్త)" },
              { title: "తూర్పు చెరువు వద్ద ఉపాధి హామీ పనులు (NREGA Works)", desc: "తూర్పు చెరువు వద్ద పూడికతీత పనులు ప్రారంభమయ్యాయి. జాబ్ కార్డు ఉన్నవారు ఉదయం 7 గంటలకల్లా పనులకు హాజరు కావాలని సూచిస్తున్నాము. (Pond digging works started at East lake. Job card holders please report at 7 AM.)", type: "ఉపాధి (NREGA)", date: new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }) },
              { title: "ధరణి పోర్టల్ సమస్యల పరిష్కారం (Dharani Camp)", desc: "మండల కార్యాలయం (పెదవూర) లో రేపు ధరణి పోర్టల్ సమస్యల పరిష్కార క్యాంపు జరుగుతుంది. రైతులు తమ పట్టాదారు పాస్ బుక్స్ తీసుకురావాలి. (Dharani resolution camp at Mandal office tomorrow. Bring your passbooks.)", type: "ఈవెంట్ (Event)", date: new Date(Date.now() + 86400000).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }) }
            ];
            
            const stmt = db.prepare('INSERT INTO notices (title, description, type, date) VALUES (?, ?, ?, ?)');
            seedNotices.forEach(n => stmt.run([n.title, n.desc, n.type, n.date]));
            stmt.finalize();
            console.log('Database seeded with initial notices.');
          }
        });
      }
    });

    db.run(`CREATE TABLE IF NOT EXISTS iot_data (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      water_level INTEGER DEFAULT 85,
      street_lights TEXT DEFAULT 'On',
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`, (err) => {
      if (!err) {
        db.get('SELECT COUNT(*) as count FROM iot_data', (err, row) => {
          if (row && row.count === 0) {
            db.run('INSERT INTO iot_data (water_level, street_lights) VALUES (85, "On")');
            console.log('Database seeded with initial IoT data.');
          }
        });
      }
    });
  }
});

// Root route
app.get('/', (req, res) => {
  res.send('Mana Ooru Backend API is running!');
});

// GET all notices
app.get('/api/notices', (req, res) => {
  db.all('SELECT * FROM notices ORDER BY id ASC', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// POST a new notice
app.post('/api/notices', (req, res) => {
  const { title, description, type } = req.body;
  const date = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
  
  db.run('INSERT INTO notices (title, description, type, date) VALUES (?, ?, ?, ?)', 
    [title, description, type, date], 
    function(err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID, title, description, type, date });
  });
});

// GET all complaints
app.get('/api/complaints', (req, res) => {
  db.all('SELECT * FROM complaints ORDER BY id DESC', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// POST a new complaint
app.post('/api/complaints', (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) return res.status(400).json({ error: 'Name and description are required' });
  
  db.run('INSERT INTO complaints (name, description) VALUES (?, ?)', 
    [name, description], 
    function(err) {
      if (err) return res.status(500).json({ error: err.message });
      console.log(`New complaint stored from ${name}`);
      res.json({ id: this.lastID, name, description, status: 'Pending', message: 'Complaint registered successfully' });
  });
});

// GET complaints by user name (Tracker)
app.get('/api/complaints/search', (req, res) => {
  const { name } = req.query;
  if (!name) return res.status(400).json({ error: 'Name query parameter is required' });
  
  db.all('SELECT * FROM complaints WHERE name LIKE ? ORDER BY id DESC', [`%${name}%`], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// GET IoT Sensor Data
app.get('/api/iot', (req, res) => {
  db.get('SELECT * FROM iot_data ORDER BY id DESC LIMIT 1', [], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(row || { water_level: 85, street_lights: 'On' });
  });
});

// POST IoT Sensor Data (For Hardware/Admin to Update)
app.post('/api/iot/update', (req, res) => {
  const { water_level, street_lights } = req.body;
  
  db.run('INSERT INTO iot_data (water_level, street_lights) VALUES (?, ?)', 
    [water_level, street_lights], 
    function(err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ success: true, water_level, street_lights });
  });
});

// PHASE 4: AI Crop Scanner Simulation
app.post('/api/ai/scan-crop', (req, res) => {
  // Simulate AI processing delay
  setTimeout(() => {
    res.json({
      success: true,
      disease: "కాండం తొలుచు పురుగు (Stem Borer)",
      accuracy: "96.4%",
      treatment: "క్లోరిపైరిఫాస్ (Chlorpyrifos 20% EC) ఎకరానికి 500 ml చొప్పున పిచికారీ చేయండి."
    });
  }, 2500); // 2.5 second delay to feel like real AI processing
});

// PHASE 4: AI Scheme Recommendation
app.post('/api/ai/schemes', (req, res) => {
  const { query } = req.body;
  const lowerQuery = query.toLowerCase();
  
  let reply = "";
  if (lowerQuery.includes('farmer') || lowerQuery.includes('రైతు') || lowerQuery.includes('ఎకరాలు') || lowerQuery.includes('acres')) {
    reply = "మీరు రైతు కాబట్టి, మీకు **రైతు బంధు (Rythu Bandhu)** కింద సంవత్సరానికి ఎకరానికి ₹10,000 మరియు **PM కిసాన్** కింద ₹6,000 వస్తాయి. బ్యాంక్ పాస్ బుక్ మరియు పట్టాదారు పాస్ బుక్ తో మీ-సేవా కేంద్రానికి వెళ్ళండి.";
  } else if (lowerQuery.includes('student') || lowerQuery.includes('చదువు') || lowerQuery.includes('విద్యార్థి')) {
    reply = "విద్యార్థులకు **పోస్ట్ మెట్రిక్ స్కాలర్‌షిప్** మరియు **ఫీజు రీయింబర్స్‌మెంట్** అందుబాటులో ఉన్నాయి. కుల, ఆదాయ ధృవీకరణ పత్రాలతో ePass పోర్టల్ లో దరఖాస్తు చేసుకోండి.";
  } else if (lowerQuery.includes('house') || lowerQuery.includes('ఇల్లు') || lowerQuery.includes('గృహం')) {
    reply = "సొంత ఇల్లు లేని వారు **గృహలక్ష్మి పథకం** కింద ₹3 లక్షల ఆర్థిక సహాయం పొందవచ్చు. రేషన్ కార్డు మరియు ఆధార్‌తో పంచాయతీ కార్యాలయంలో దరఖాస్తు చేసుకోండి.";
  } else {
    reply = "నమస్కారం! నేను పంచాయతీ AI అసిస్టెంట్. మీరు రైతునా, విద్యార్థినా, లేదా మీకు ఇల్లు కావాలా? మీ వివరాలు చెప్పండి, నేను సరైన పథకం చెబుతాను. (Tell me your profession to get scheme details).";
  }

  // Simulate thinking time
  setTimeout(() => {
    res.json({ reply });
  }, 1500);
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
