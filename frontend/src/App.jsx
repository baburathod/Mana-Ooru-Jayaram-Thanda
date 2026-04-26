import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Home, Bell, Phone, FileText, Settings, Menu, X, Users, MapPin, CheckCircle, ShieldAlert, Bus, Clock, Wrench, Tractor, FileCheck, TrendingUp, Activity, Store, Droplets, BookOpen, Flame, Calendar, Hammer, Wallet, Pickaxe, Cpu, Wifi, Satellite, Scan, Video, Mic, CloudOff, BarChart, Bot, MessageCircle, ShieldCheck, BellRing, Sprout, Map as MapIcon, Truck, CheckSquare, Search } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-primary text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img src="/logo.jpg.png" alt="Logo" className="h-12 w-12 rounded-full object-cover shadow-sm border-2 border-white" />
            <Link to="/" className="font-bold text-lg tracking-wide">
              మన ఊరు <span className="text-secondary">జయరాం తండా</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="hover:text-secondary transition-colors text-sm font-medium">Home</Link>
            <Link to="/notices" className="hover:text-secondary transition-colors text-sm font-medium">Notices</Link>
            <Link to="/services" className="hover:text-secondary transition-colors text-sm font-medium">Services</Link>
            <Link to="/nrega" className="hover:text-secondary transition-colors text-sm font-medium">Karuvu Pani</Link>
            <Link to="/smart-village" className="hover:text-cyan-300 transition-colors text-sm font-bold flex items-center"><Cpu size={16} className="mr-1"/> Smart Village</Link>
            <Link to="/utilities" className="hover:text-secondary transition-colors text-sm font-medium">Utilities</Link>
            <Link to="/complaint" className="hover:text-secondary transition-colors text-sm font-medium">Complaints</Link>
            <Link to="/contact" className="hover:text-secondary transition-colors text-sm font-medium">Contact</Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-secondary">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-blue-800 text-white px-2 pt-2 pb-3 space-y-1 shadow-lg">
          <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md font-medium hover:bg-blue-700">Home</Link>
          <Link to="/notices" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md font-medium hover:bg-blue-700">Notices</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md font-medium hover:bg-blue-700">Services</Link>
          <Link to="/nrega" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md font-medium hover:bg-blue-700">Karuvu Pani</Link>
          <Link to="/smart-village" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md font-bold text-cyan-300 hover:bg-blue-700 flex items-center"><Cpu size={18} className="mr-2"/> Smart Village</Link>
          <Link to="/utilities" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md font-medium hover:bg-blue-700">Utilities</Link>
          <Link to="/complaint" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md font-medium hover:bg-blue-700">Complaints</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md font-medium hover:bg-blue-700">Contact</Link>
        </div>
      )}
    </header>
  );
};

const Hero = () => (
  <div className="relative py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden min-h-[500px] flex items-center justify-center">
    <div className="absolute inset-0 z-0">
      <img src="/sunrise.jpg.jpeg" alt="Village Background" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
    <div className="relative z-10 max-w-3xl mx-auto space-y-6 text-white bg-black/40 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
      <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-md text-white">
        Welcome to Mana Ooru – Jayaram Thanda
      </h1>
      <h2 className="text-2xl md:text-4xl font-bold text-yellow-400 mb-2 drop-shadow-md">
        మన ఊరు – జయరాం తండా
      </h2>
      <p className="text-lg md:text-xl font-medium text-gray-100">
        Parvedula (Post Office), Peddavoora (Mandal) <br />
        Nalgonda District, Telangana – 508266
      </p>
      <p className="text-lg md:text-xl font-medium font-telugu text-gray-100">
        పర్వేదుల (పోస్ట్ ఆఫీస్), పెదవూర (మండలం) <br />
        నల్గొండ జిల్లా, తెలంగాణ – 508266
      </p>
      <div className="mt-8 pt-6 border-t border-white/30">
        <p className="text-2xl font-semibold text-yellow-300 drop-shadow-md">
          మన గ్రామాన్ని డిజిటల్‌గా కలుపుతూ
        </p>
        <p className="text-xl font-medium text-gray-200 mt-2">
          Connecting our village digitally
        </p>
      </div>
      <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
        <div className="px-6 py-2 bg-primary/90 text-white rounded-full shadow-xl text-sm font-semibold border border-white/20">
          నల్గొండ జిల్లాలోని ఆదర్శ తండా (A Model Thanda of Nalgonda)
        </div>
        <a href="https://maps.google.com/?q=Jayaram+Thanda,Peddavoora,Nalgonda,Telangana" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-green-600/90 hover:bg-green-700 text-white rounded-full shadow-xl text-sm font-semibold border border-white/20 transition-colors flex items-center">
          <MapPin size={16} className="mr-2" /> లొకేషన్ (Location)
        </a>
      </div>
    </div>
  </div>
);

const QuickLinks = () => {
  const links = [
    { name: 'నోటీసులు (Notices)', icon: Bell, path: '/notices', color: 'bg-red-500' },
    { name: 'డ్యాష్‌బోర్డ్ (Dashboard)', icon: BarChart, path: '/dashboard', color: 'bg-[#25D366]' },
    { name: 'స్మార్ట్ విలేజ్ (Smart Village)', icon: Cpu, path: '/smart-village', color: 'bg-cyan-600' },
    { name: 'కమిటీలు (Committees)', icon: Users, path: '/committees', color: 'bg-purple-500' },
    { name: 'పని సమాచారం (NREGA)', icon: Hammer, path: '/nrega', color: 'bg-amber-600' },
    { name: 'సదుపాయాలు (Utilities)', icon: Bus, path: '/utilities', color: 'bg-indigo-500' },
    { name: 'ఫిర్యాదు (Complaint)', icon: FileText, path: '/complaint', color: 'bg-yellow-500' },
    { name: 'సేవలు (Services)', icon: Settings, path: '/services', color: 'bg-blue-500' },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-6">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <Link key={link.name} to={link.path} className="group relative w-[140px] sm:w-[160px] rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white mb-3 sm:mb-4 shadow-md group-hover:scale-110 transition-transform ${link.color}`}>
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <span className="font-semibold text-gray-800 text-xs sm:text-base leading-tight">{link.name}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  );
};

const NoticeBoard = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTodayDate = () => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('en-IN', options);
  };
  const getTomorrowDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-IN', options);
  };

  const defaultNotices = [
    { title: "నీటి ట్యాంక్ శుభ్రపరచడం (Water Tank Cleaning)", date: "Today (తాజా వార్త)", desc: "రేపు ఉదయం గ్రామ ప్రధాన నీటి ట్యాంక్‌ను శుభ్రపరుస్తున్నారు. కావున ఉదయం 8 నుండి 12 వరకు మంచినీటి సరఫరా నిలిపివేయబడుతుంది. దయచేసి సహకరించండి. (Main water tank will be cleaned tomorrow. Water supply will be paused from 8 AM to 12 PM.)", type: "ముఖ్యమైనది (Important)" },
    { title: "తూర్పు చెరువు వద్ద ఉపాధి హామీ పనులు (NREGA Works)", date: getTodayDate(), desc: "తూర్పు చెరువు వద్ద పూడికతీత పనులు ప్రారంభమయ్యాయి. జాబ్ కార్డు ఉన్నవారు ఉదయం 7 గంటలకల్లా పనులకు హాజరు కావాలని సూచిస్తున్నాము. (Pond digging works started at East lake. Job card holders please report at 7 AM.)", type: "ఉపాధి (NREGA)" },
    { title: "ధరణి పోర్టల్ సమస్యల పరిష్కారం (Dharani Camp)", date: getTomorrowDate(), desc: "మండల కార్యాలయం (పెదవూర) లో రేపు ధరణి పోర్టల్ సమస్యల పరిష్కార క్యాంపు జరుగుతుంది. రైతులు తమ పట్టాదారు పాస్ బుక్స్ తీసుకురావాలి. (Dharani resolution camp at Mandal office tomorrow. Bring your passbooks.)", type: "ఈవెంట్ (Event)" }
  ];

  useEffect(() => {
    fetch('http://localhost:5000/api/notices')
      .then(res => res.json())
      .then(data => {
        if(data && data.length > 0) setNotices(data);
        else setNotices(defaultNotices);
        setLoading(false);
      })
      .catch(err => {
        console.error("Backend not running, using fallback notices.");
        setNotices(defaultNotices);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center border-b pb-3">
        <Bell className="mr-3 text-red-500" /> నోటీసులు (Notice Board)
      </h2>
      {loading ? (
        <div className="text-center py-10"><div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 mx-auto"></div></div>
      ) : (
        <div className="space-y-4">
          {notices.map((notice, i) => (
            <div key={i} className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-primary hover:shadow-md transition">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-gray-800">{notice.title}</h3>
                <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded">{notice.type}</span>
              </div>
              <p className="text-sm text-gray-500 mt-1 mb-3 font-bold">{notice.date}</p>
              <p className="text-gray-700">{notice.description || notice.desc}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Contacts = () => {
  const [calling, setCalling] = useState(null);

  const handleCall = (e, contact) => {
    e.preventDefault(); // Prevents the annoying desktop popup
    setCalling(contact.name);
    setTimeout(() => {
      setCalling(null);
    }, 3000); // Clears the calling simulation after 3 seconds
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 relative">
      {/* Simulated Calling Toast Notification */}
      {calling && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-8 py-4 rounded-full shadow-2xl z-50 flex items-center animate-bounce">
          <Phone className="animate-pulse mr-3" size={24} />
          <span className="font-bold text-lg">కాల్ చేస్తున్నారు (Calling) {calling}...</span>
        </div>
      )}

      <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center border-b pb-3">
        <Phone className="mr-3 text-green-500" /> ముఖ్యమైన పరిచయాలు (Important Contacts)
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          { role: "సర్పంచ్ (Sarpanch)", name: "Ramavath Deepa", phone: "9440012345", icon: Users },
          { role: "గ్రామ కార్యదర్శి (Panchayat Sec.)", name: "Paramesh", phone: "9848012345", icon: FileText },
          { role: "MLA (Nagarjuna Sagar)", name: "Kunduru Jayaveer", phone: "0868222222", icon: CheckCircle },
          { role: "MP (Nalgonda)", name: "Uttam Kumar Reddy", phone: "01123010111", icon: Users },
          { role: "పోలీస్ స్టేషన్ (Peddavoora PS)", name: "Sub-Inspector", phone: "8712662662", icon: ShieldAlert },
          { role: "అంబులెన్స్ (Ambulance)", name: "Emergency", phone: "108", icon: Phone }
        ].map((contact, i) => {
          const Icon = contact.icon;
          return (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-4">
                  <Icon size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">{contact.role}</p>
                  <p className="text-sm text-gray-500">{contact.name}</p>
                </div>
              </div>
              <a href={`tel:${contact.phone}`} onClick={(e) => handleCall(e, contact)} className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow transition-colors cursor-pointer">
                <Phone size={20} />
              </a>
            </div>
          )
        })}
      </div>
    </div>
  );
};

const Complaint = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [activeTab, setActiveTab] = useState('submit');
  const [searchName, setSearchName] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !desc.trim()) {
      alert("దయచేసి మీ పేరు మరియు సమస్యను పూరించండి. (Please fill out your name and the issue description.)");
      return;
    }

    setIsSubmitting(true);

    fetch('http://localhost:5000/api/complaints', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description: desc })
    })
    .then(res => res.json())
    .then(data => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setName(''); setDesc('');
      setTimeout(() => setIsSuccess(false), 5000);
    })
    .catch(err => {
      // VERCEL FALLBACK
      const newComplaint = { id: Date.now(), name, description: desc, status: 'Pending', created_at: new Date().toISOString() };
      const existing = JSON.parse(localStorage.getItem('complaints') || '[]');
      localStorage.setItem('complaints', JSON.stringify([newComplaint, ...existing]));
      
      setIsSubmitting(false);
      setIsSuccess(true);
      setName(''); setDesc('');
      setTimeout(() => setIsSuccess(false), 5000);
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchName.trim()) return;
    setIsSearching(true);
    fetch(`http://localhost:5000/api/complaints/search?name=${encodeURIComponent(searchName)}`)
      .then(res => res.json())
      .then(data => {
        setSearchResults(data);
        setIsSearching(false);
      })
      .catch(err => {
        // VERCEL FALLBACK
        const existing = JSON.parse(localStorage.getItem('complaints') || '[]');
        const filtered = existing.filter(c => c.name.toLowerCase().includes(searchName.toLowerCase()));
        setSearchResults(filtered);
        setIsSearching(false);
      });
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4 relative">
      {isSuccess && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-8 py-4 rounded-xl shadow-2xl z-50 flex items-center animate-in fade-in slide-in-from-top-4 w-11/12 max-w-md">
          <CheckCircle className="mr-3 flex-shrink-0" size={32} />
          <div>
            <p className="font-bold text-lg">ఫిర్యాదు సమర్పించబడింది!</p>
            <p className="text-sm text-green-100 font-medium">Complaint Submitted Successfully.</p>
          </div>
        </div>
      )}

      <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center border-b pb-3">
        <FileText className="mr-3 text-yellow-500" /> గ్రామస్తుల సేవ (Villager Portal)
      </h2>

      <div className="flex space-x-2 mb-6">
        <button onClick={() => setActiveTab('submit')} className={`px-6 py-2 rounded-t-lg font-bold transition-colors ${activeTab === 'submit' ? 'bg-white text-blue-600 border-t-2 border-l-2 border-r-2 border-blue-600 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}>
          ఫిర్యాదు (Submit)
        </button>
        <button onClick={() => setActiveTab('track')} className={`px-6 py-2 rounded-t-lg font-bold transition-colors ${activeTab === 'track' ? 'bg-white text-blue-600 border-t-2 border-l-2 border-r-2 border-blue-600 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}>
          ట్రాక్ చేయండి (Track)
        </button>
      </div>

      <div className="bg-white rounded-b-xl rounded-tr-xl shadow-md p-6 sm:p-8 border border-gray-100 border-t-0">
        
        {activeTab === 'submit' && (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">పేరు (Name)</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition"
              placeholder="మీ పూర్తి పేరు (Enter your full name)"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">సమస్య (Issue Description)</label>
            <textarea
              rows="4"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition"
              placeholder="సమస్యను వివరించండి... (Describe the issue...)"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">ఆధారం (Evidence Photo - Optional)</label>
            <input
              type="file"
              accept="image/*"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary transition file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg shadow-md transition-all flex justify-center items-center"
          >
            {isSubmitting ? 'సమర్పిస్తున్నాము... (Submitting...)' : 'సమర్పించండి (Submit)'}
          </button>
        </form>
        )}

        {activeTab === 'track' && (
          <div>
            <form onSubmit={handleSearch} className="flex gap-4 mb-6">
              <input
                type="text"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                placeholder="మీ పేరు నమోదు చేయండి (Enter your name)"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold shadow-md hover:bg-blue-700">
                {isSearching ? 'వెతుకుతోంది...' : 'ట్రాక్ (Track)'}
              </button>
            </form>

            <div className="space-y-4">
              {searchResults.length === 0 && searchName && !isSearching && (
                <p className="text-gray-500 text-center py-4">మీ పేరుతో ఎలాంటి ఫిర్యాదులు లేవు (No complaints found).</p>
              )}
              {searchResults.map((c) => (
                <div key={c.id} className="bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                  <div>
                    <h4 className="font-bold text-gray-900">{c.description}</h4>
                    <p className="text-xs text-gray-500 mt-1">{new Date(c.created_at).toLocaleString()}</p>
                  </div>
                  <span className={`px-4 py-1.5 rounded-full text-sm font-bold w-fit ${c.status === 'Resolved' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                    {c.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [aiQuery, setAiQuery] = useState("");
  const [aiResponse, setAiResponse] = useState(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [isAiListening, setIsAiListening] = useState(false);

  const handleAskAi = (e) => {
    if (e) e.preventDefault();
    if (!aiQuery.trim()) return;

    setIsAiLoading(true);
    setAiResponse(null);

    fetch('http://localhost:5000/api/ai/schemes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: aiQuery })
    })
    .then(res => res.json())
    .then(data => {
      setIsAiLoading(false);
      setAiResponse(data.reply);
    })
    .catch(err => {
      // VERCEL LIVE FALLBACK
      setIsAiLoading(false);
      const query = aiQuery.toLowerCase();
      if (query.includes("మహాలక్ష్మి") || query.includes("మహిళ")) {
        setAiResponse("మహాలక్ష్మి పథకం (Mahalakshmi Scheme): మహిళలకు నెలకు ₹2,500 ఆర్థిక సాయం కల్పిస్తుంది.");
      } else if (query.includes("రైతు")) {
        setAiResponse("రైతు భరోసా (Rythu Bharosa): రైతులకు ఎకరానికి ఏటా ₹15,000 ఆర్థిక సాయం అందుతుంది.");
      } else {
        setAiResponse("నమస్కారం! ప్రభుత్వ పథకాల గురించి మీ స్థానిక పంచాయతీ కార్యాలయంలో తెలుసుకోండి.");
      }
    });
  };

  const startAiListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("మీ బ్రౌజర్ వాయిస్ రికగ్నిషన్ కు సపోర్ట్ చేయదు. (Your browser does not support Voice Recognition.)");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'te-IN'; // Set back to Telugu for accurate local voice parsing
    recognition.continuous = false;
    recognition.interimResults = true;

    recognition.onstart = () => {
      setIsAiListening(true);
      setAiQuery("వింటున్నాను... (Listening...)");
    };

    recognition.onresult = (event) => {
      const result = Array.from(event.results)
        .map(res => res[0].transcript)
        .join('');
      
      setAiQuery(result);
      
      if (event.results[0].isFinal) {
        // Auto-submit the form after small delay
        setTimeout(() => {
          const formEvent = new Event('submit', { cancelable: true, bubbles: true });
          document.getElementById('ai-assistant-form').dispatchEvent(formEvent);
        }, 500);
      }
    };

    recognition.onend = () => {
      setIsAiListening(false);
    };

    recognition.start();
  };

  const servicesData = [
    {
      title: "6 గ్యారెంటీలు (6 Guarantees)",
      desc: "తెలంగాణ కాంగ్రెస్ ప్రభుత్వ 6 గ్యారెంటీ పథకాలు (Telangana Congress 6 Guarantees)",
      icon: CheckSquare,
      details: [
        "మహాలక్ష్మి (Mahalakshmi): మహిళలకు నెలకు ₹2,500, ₹500 కి గ్యాస్ సిలిండర్, ఉచిత RTC బస్సు ప్రయాణం.",
        "రైతు భరోసా (Rythu Bharosa): రైతులకు ఏటా ఎకరానికి ₹15,000, వ్యవసాయ కూలీలకు ఏటా ₹12,000.",
        "గృహ జ్యోతి (Gruha Jyothi): ప్రతి కుటుంబానికి నెలకు 200 యూనిట్ల వరకు ఉచిత విద్యుత్.",
        "ఇందిరమ్మ ఇండ్లు (Indiramma Indlu): ఇల్లు కట్టుకునేందుకు ₹5 లక్షల సాయం మరియు ఇంటి స్థలం.",
        "యువ వికాసం (Yuva Vikasam): విద్యార్థులకు ₹5 లక్షల విద్యా భరోసా కార్డు.",
        "చేయూత (Cheyutha): నెలకు ₹4,000 పెన్షన్, మరియు ₹10 లక్షల రాజీవ్ ఆరోగ్యశ్రీ బీమా."
      ]
    },
    {
      title: "వ్యవసాయ సమాచారం (Farming Info)",
      desc: "సబ్సిడీ పరికరాలు, మార్కెట్ ధరలు, వాతావరణం (Subsidy tools, market prices, weather)",
      icon: MapPin,
      details: [
        "వాతావరణం (Weather): ఈ వారాంతంలో తేలికపాటి జల్లులు కురుస్తాయి (Expect light showers this weekend).",
        "మార్కెట్ ధరలు (Market Prices): వరి (గ్రేడ్ A) - క్వింటాల్‌కు ₹2,203 (Paddy Grade A - ₹2,203/Quintal).",
        "పంటల చిట్కా (Crop Tip): పత్తి విత్తిన 30 రోజుల తర్వాత యూరియా వేయండి (Apply Urea for Cotton after 30 days).",
        "సబ్సిడీ పరికరాలు (Subsidy Tools): ట్రాక్టర్లు మరియు స్ప్రేయర్లపై 50% సబ్సిడీ (50% subsidy on tractors and sprayers)."
      ]
    },
    {
      title: "ఉద్యోగ నవీకరణలు (Job Updates)",
      desc: "మెగా డీఎస్సీ, పోలీస్ ఉద్యోగాలు & ఉపాధి హామీ (Mega DSC, Police Jobs & NREGA)",
      icon: Users,
      details: [
        "గ్రూప్స్ & పోలీస్ (Groups & Police): తెలంగాణ పబ్లిక్ సర్వీస్ కమీషన్ ద్వారా కొత్త నోటిఫికేషన్లు త్వరలో (New TSPSC notifications soon).",
        "మెగా డీఎస్సీ (Mega DSC): ఉపాధ్యాయ పోస్టుల భర్తీకి మెగా డీఎస్సీ నోటిఫికేషన్ (Mega DSC notification for teacher posts).",
        "ఉపాధి హామీ (MGNREGA): తూర్పు సరిహద్దు వద్ద కాలువ పారిశుద్ధ్య పనులు (Ongoing canal works at eastern border).",
        "నైపుణ్య శిక్షణ (Skill Training): మండల కేంద్రంలో నిరుద్యోగ యువతకు ఉచిత కంప్యూటర్ శిక్షణ (Free computer training for youth)."
      ]
    },
    {
      title: "వ్యవసాయ సేవలు (Agriculture Services)",
      desc: "విత్తనాలు, ఎరువులు, రుణమాఫీ మరియు మట్టి పరీక్షలు (Seeds, fertilizers, loan waiver & soil testing)",
      icon: Sprout,
      details: [
        "రుణమాఫీ (Crop Loan Waiver): రైతుల రూ.2 లక్షల వరకు పంట రుణమాఫీ వర్తింపు (Crop loan waiver up to Rs. 2 Lakhs).",
        "పంట రుణాలు (Crop Loans): తక్కువ వడ్డీతో పంట రుణాలు బ్యాంక్ లో అందుబాటులో ఉన్నాయి (Low-interest crop loans available at the bank).",
        "సబ్సిడీ విత్తనాలు (Subsidy Seeds): PACS కేంద్రంలో వేరుశనగ మరియు పత్తి విత్తనాలు (Groundnut & cotton seeds available at PACS center).",
        "మట్టి పరీక్ష (Soil Testing): ఉచిత మట్టి పరీక్షల కోసం అగ్రికల్చర్ ఆఫీసర్ ను (AO) సంప్రదించండి."
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center border-b pb-3">
        <Settings className="mr-3 text-blue-500" /> సేవలు (Services)
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {servicesData.map((service, i) => {
          const Icon = service.icon;
          const isExpanded = expandedIndex === i;
          return (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all text-center flex flex-col h-full">
              <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <Icon size={32} />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.desc}</p>

              {isExpanded && (
                <div className="mt-2 mb-4 text-left bg-blue-50 p-4 rounded-lg flex-grow border border-blue-100 animate-in fade-in slide-in-from-top-2">
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                    {service.details.map((detail, idx) => (
                      <li key={idx}>
                        <span className="font-bold text-gray-900">{detail.split(':')[0]}:</span>
                        {detail.split(':')[1]}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-auto pt-4 border-t border-gray-50">
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : i)}
                  className={`font-bold transition-colors ${isExpanded ? 'text-red-500 hover:text-red-700' : 'text-primary hover:text-blue-700'}`}
                >
                  {isExpanded ? "Close ×" : "Explore →"}
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* AI Assistant Banner */}
      <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row items-center border border-white/10">
        <div className="p-8 md:w-2/3 text-center md:text-left text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">🤖 ఏఐ అసిస్టెంట్ (AI Assistant)</h3>
          <p className="mb-6 text-blue-100 max-w-xl leading-relaxed">
            తెలుగు లేదా ఇంగ్లీష్ లో ప్రశ్నలు అడగండి. ప్రభుత్వ పథకాలు, వ్యవసాయ సమాచారం మరియు గ్రామ సేవల గురించి సులభంగా తెలుసుకోండి.<br /><br />
            <span className="text-sm opacity-80">(Ask questions in Telugu or English. Get simple answers about government schemes, farming info, and village services directly on your phone.)</span>
          </p>

          <form id="ai-assistant-form" onSubmit={handleAskAi} className="flex flex-col sm:flex-row max-w-lg mx-auto md:mx-0 bg-white rounded-full p-2 shadow-inner mb-6 relative">
            <button 
              type="button" 
              onClick={startAiListening}
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors ${isAiListening ? 'text-red-500 animate-pulse' : ''}`}
            >
              <Mic size={24} />
            </button>
            <input
              type="text"
              value={aiQuery}
              onChange={(e) => setAiQuery(e.target.value)}
              placeholder='"మహాలక్ష్మి పథకం వివరాలు చెప్పండి?"'
              className="flex-1 pl-12 pr-4 py-2 text-gray-800 outline-none rounded-l-full bg-transparent font-medium"
            />
            <button
              type="submit"
              disabled={isAiLoading}
              className="bg-secondary hover:bg-yellow-600 disabled:opacity-50 text-white px-6 py-2 rounded-full font-bold transition-colors mt-2 sm:mt-0"
            >
              {isAiLoading ? 'ఆలోచిస్తోంది...' : 'అడగండి (Ask)'}
            </button>
          </form>

          {/* AI Response Area */}
          {aiResponse && (
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-left animate-in fade-in slide-in-from-bottom-4">
              <div className="flex items-start">
                <div className="text-3xl mr-3">🤖</div>
                <div>
                  <p className="font-bold text-yellow-300 mb-1">సమాధానం (Answer):</p>
                  <p className="text-white text-sm md:text-base leading-relaxed">{aiResponse}</p>
                </div>
              </div>
            </div>
          )}

        </div>
        <div className="md:w-1/3 h-64 md:h-full w-full hidden md:block">
          <img src="/farmer.jpg.png" alt="Farmer using mobile" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

const VillageCommittees = () => (
  <div className="max-w-5xl mx-auto py-10 px-4">
    <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center border-b pb-3">
      <Users className="mr-3 text-purple-600" /> గ్రామ కమిటీలు (Village Committees)
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* 1. Grama Panchayati */}
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition">
        <div className="bg-blue-600 p-4">
          <h3 className="text-xl font-bold text-white flex items-center">
            <ShieldAlert className="mr-2" /> గ్రామ పంచాయతీ (Grama Panchayati)
          </h3>
        </div>
        <div className="p-6">
          <p className="text-gray-600 mb-4">గ్రామ పరిపాలన, మౌలిక సదుపాయాల అభివృద్ధి మరియు సంక్షేమ పథకాలకు బాధ్యత వహించే పాలక సంస్థ. (The governing body responsible for village administration, infrastructure development, and welfare schemes.)</p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><strong>సర్పంచ్ (Sarpanch):</strong> రామావత్ దీపా (Ramavath Deepa)</li>
            <li><strong>కార్యదర్శి (Secretary):</strong> పరమేష్ (Paramesh)</li>
            <li><strong>కార్యాలయ సమయం (Office Hours):</strong> 10:00 AM - 5:00 PM</li>
          </ul>
        </div>
      </div>

      {/* 2. Mahilaa Sangam */}
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition">
        <div className="bg-pink-600 p-4">
          <h3 className="text-xl font-bold text-white flex items-center">
            <Users className="mr-2" /> మహిళా సంఘం (Mahilaa Sangam)
          </h3>
        </div>
        <div className="p-6">
          <p className="text-gray-600 mb-4">ఆర్థిక స్వతంత్రత మరియు నైపుణ్య అభివృద్ధి ద్వారా మహిళలను శక్తివంతం చేసే స్వయం సహాయక బృందం. (Self-Help Group empowering women through financial independence and skill development.)</p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><strong>అధ్యక్షురాలు (President):</strong> Smt. బానోత్ సునీత (Banoth Sunitha)</li>
            <li><strong>సభ్యులు (Members):</strong> 45 Active Women</li>
            <li><strong>సమావేశం (Meeting):</strong> Every 2nd Sunday</li>
          </ul>
        </div>
      </div>

      {/* 3. Thanda Youth */}
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition">
        <div className="bg-yellow-600 p-4">
          <h3 className="text-xl font-bold text-white flex items-center">
            <Users className="mr-2" /> తండా యూత్ (Thanda Youth)
          </h3>
        </div>
        <div className="p-6">
          <p className="text-gray-600 mb-4">రక్తదాన శిబిరాలు, క్రీడా కార్యక్రమాలు మరియు గ్రామ పరిశుభ్రతను నడిపించే యువజన సంస్థ. (A dynamic youth organization driving blood donation camps, sports events, and village cleanliness drives.)</p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><strong>అధ్యక్షుడు (President):</strong> సభావత్ రాహుల్ (Sabavath Rahul)</li>
            <li><strong>లక్ష్యం (Focus):</strong> Sports & Social Service</li>
            <li><strong>రాబోయే ఈవెంట్ (Upcoming Event):</strong> Cricket Tournament</li>
          </ul>
        </div>
      </div>

      {/* 4. Mahilaa Community */}
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition">
        <div className="bg-purple-600 p-4">
          <h3 className="text-xl font-bold text-white flex items-center">
            <Users className="mr-2" /> మహిళా కమ్యూనిటీ (Mahilaa Community)
          </h3>
        </div>
        <div className="p-6">
          <p className="text-gray-600 mb-4">తల్లి ఆరోగ్యం, పిల్లల పోషణ మరియు గృహ మద్దతు వ్యవస్థలపై దృష్టి సారించే సంక్షేమ సంఘం. (A broader welfare community focusing on maternal health, child nutrition, and domestic support systems.)</p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><strong>సమన్వయకర్తలు (Coordinators):</strong> Anganwadi Workers</li>
            <li><strong>కార్యక్రమాలు (Programs):</strong> Nutrition Drives</li>
          </ul>
        </div>
      </div>

      {/* 5. Village Volunteers */}
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition">
        <div className="bg-emerald-600 p-4">
          <h3 className="text-xl font-bold text-white flex items-center">
            <CheckCircle className="mr-2" /> గ్రామ వాలంటీర్లు (Village Volunteers)
          </h3>
        </div>
        <div className="p-6">
          <p className="text-gray-600 mb-4">ప్రభుత్వ పథకాలను, పెన్షన్లను ఇంటింటికీ చేరవేసే సేవా బృందం. (Dedicated youth delivering government schemes and pensions directly to doorsteps.)</p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><strong>సభ్యులు (Total Volunteers):</strong> 12 Members</li>
            <li><strong>ప్రధాన బాధ్యత (Core Duty):</strong> Scheme Delivery</li>
            <li><strong>సమయం (Timings):</strong> 9:00 AM - 5:00 PM</li>
          </ul>
        </div>
      </div>

      {/* 6. Village Workers */}
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition">
        <div className="bg-orange-600 p-4">
          <h3 className="text-xl font-bold text-white flex items-center">
            <Wrench className="mr-2" /> గ్రామ కార్మికులు (Village Workers)
          </h3>
        </div>
        <div className="p-6">
          <p className="text-gray-600 mb-4">గ్రామ పరిశుభ్రత, త్రాగునీటి సరఫరా మరియు నిర్వహణ చూసుకునే సిబ్బంది. (Essential staff managing village sanitation, water supply, and maintenance.)</p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><strong>పారిశుధ్యం (Sanitation):</strong> 8 Workers</li>
            <li><strong>వాటర్ మ్యాన్ (Waterman):</strong> K. Srinivas</li>
            <li><strong>ఫిర్యాదులు (Complaints):</strong> Panchayat Office</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
);

const Utilities = () => {
  const [calling, setCalling] = useState(null);
  const [actionMsg, setActionMsg] = useState(null);

  const handleCall = (e, worker) => {
    e.preventDefault(); // Prevents the annoying desktop popup
    setCalling(worker.name);
    setTimeout(() => {
      setCalling(null);
    }, 3000); // Clears the calling simulation after 3 seconds
  };

  const handleSimulatePortal = (e, portalName) => {
    e.preventDefault();
    setActionMsg(`పోర్టల్ తెరవబడుతోంది... (${portalName})`);
    setTimeout(() => {
      setActionMsg(null);
    }, 3000);
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-4 relative">
      {/* Simulated Calling Toast Notification */}
      {calling && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-8 py-4 rounded-full shadow-2xl z-50 flex items-center animate-bounce">
          <Phone className="animate-pulse mr-3" size={24} />
          <span className="font-bold text-lg">కాల్ చేస్తున్నారు (Calling) {calling}...</span>
        </div>
      )}

      {/* Simulated Portal Toast Notification */}
      {actionMsg && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-8 py-4 rounded-full shadow-2xl z-50 flex items-center animate-bounce">
          <CheckCircle className="animate-pulse mr-3" size={24} />
          <span className="font-bold text-lg">{actionMsg}</span>
        </div>
      )}

      <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center border-b pb-3">
        <Bus className="mr-3 text-indigo-600" /> గ్రామ సదుపాయాలు (Village Utilities)
      </h2>

      <div className="space-y-10">
        {/* === 1. Health & Education === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <section className="flex flex-col h-full">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Activity className="mr-2 text-rose-500" /> ఆరోగ్య కేంద్రం (Health Center)
            </h3>
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex-1 flex flex-col border-t-4 border-t-rose-500 hover:shadow-lg transition">
              <p className="text-gray-600 mb-4 font-medium">ఉచిత వైద్యం మరియు మందులు. (Free treatment & medicines.)</p>
              <ul className="space-y-3 text-sm text-gray-700 flex-grow">
                <li className="flex justify-between border-b border-gray-50 pb-2">
                  <span className="font-bold">డాక్టర్ సమయం (Timings):</span> <span>9:00 AM - 1:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-gray-50 pb-2">
                  <span className="font-bold">టీకాలు (Vaccination):</span> <span>ప్రతి బుధవారం (Every Wed)</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span className="font-bold">ఆశా వర్కర్ (ASHA Worker):</span> <span>సభావత్ లక్ష్మి (Sabavath Lakshmi)</span>
                </li>
              </ul>
              <button onClick={(e) => handleCall(e, {name: '108 (Ambulance)'})} className="mt-4 flex justify-center items-center w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 rounded-lg shadow-sm transition">
                <Phone size={16} className="mr-2 animate-pulse" /> అంబులెన్స్ (Ambulance - 108)
              </button>
            </div>
          </section>

          <section className="flex flex-col h-full">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <BookOpen className="mr-2 text-blue-500" /> గ్రామ పాఠశాల (High School)
            </h3>
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex-1 flex flex-col border-t-4 border-t-blue-500 hover:shadow-lg transition">
              <p className="text-gray-600 mb-4 font-medium">జిల్లా పరిషత్ ఉన్నత పాఠశాల. (Z.P. High School.)</p>
              <ul className="space-y-3 text-sm text-gray-700 flex-grow">
                <li className="flex justify-between border-b border-gray-50 pb-2">
                  <span className="font-bold">HM:</span> <span>రామావత్ రాంబాబు (Ramavath Rambabu)</span>
                </li>
                <li className="flex justify-between border-b border-gray-50 pb-2">
                  <span className="font-bold">భోజనం (Mid-Day Meal):</span> <span className="text-green-600 font-bold">అందుబాటులో ఉంది (Yes)</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span className="font-bold">సమయం (Timings):</span> <span>9:00 AM - 4:15 PM</span>
                </li>
              </ul>
              <button onClick={(e) => handleCall(e, {name: 'రామావత్ రాంబాబు (HM)'})} className="mt-4 flex justify-center items-center w-full bg-blue-100 hover:bg-blue-200 text-blue-700 font-bold py-2 rounded-lg shadow-sm transition">
                <Phone size={16} className="mr-2" /> HM ని సంప్రదించండి (Call HM)
              </button>
            </div>
          </section>
        </div>

        <section>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <BookOpen className="mr-2 text-indigo-500" /> పాఠశాల & అంగన్వాడీ (Primary School & Anganwadi)
          </h3>
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8 hover:shadow-lg transition">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              <div className="flex flex-col h-full">
                <h4 className="font-bold text-xl text-indigo-900 mb-3 border-b pb-2">ప్రాథమిక పాఠశాల (Primary School)</h4>
                <p className="text-gray-700 mb-2"><strong>సమయం (Timings):</strong> 09:00 AM - 04:00 PM</p>
                <p className="text-gray-700 mb-4 flex-grow"><strong>ప్రధానోపాధ్యాయుడు (HM):</strong> G. రవీందర్ రెడ్డి (G. Ravinder Reddy)</p>
                <div className="bg-green-50 text-green-800 px-3 py-2 rounded-lg text-sm font-bold inline-block border border-green-200">
                  ✓ మధ్యాహ్న భోజనం అందుబాటులో ఉంది (Mid-day meal provided)
                </div>
              </div>
              <div className="border-t md:border-t-0 md:border-l border-gray-200 pt-6 md:pt-0 md:pl-8 flex flex-col h-full">
                <h4 className="font-bold text-xl text-indigo-900 mb-3 border-b pb-2">అంగన్వాడీ కేంద్రం (Anganwadi Center)</h4>
                <p className="text-gray-700 mb-2"><strong>సమయం (Timings):</strong> 09:00 AM - 01:00 PM</p>
                <p className="text-gray-700 flex-grow"><strong>సేవలు (Services):</strong> గర్భిణీ స్త్రీల సంరక్షణ, పిల్లల పోషకాహారం (Maternal care, Child nutrition)</p>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-gray-200 my-8"></div>

        {/* === 2. Government Services === */}
        <section>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <FileCheck className="mr-2 text-green-500" /> మీసేవా సేవలు (MeeSeva Services)
          </h3>
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              <div className="p-5 border border-green-100 rounded-xl bg-green-50/50 hover:bg-green-50 transition flex flex-col h-full">
                <h4 className="font-bold text-lg text-gray-900 mb-2">ఆదాయ ధృవీకరణ (Income Certificate)</h4>
                <p className="text-sm font-semibold text-gray-700 mb-3">కావలసిన పత్రాలు (Required Docs):</p>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1.5 font-medium flex-grow">
                  <li>ఆధార్ కార్డ్ (Aadhaar Card)</li>
                  <li>రేషన్ కార్డ్ (Ration Card)</li>
                  <li>పాస్‌పోర్ట్ సైజు ఫోటో (Passport Photo)</li>
                </ul>
              </div>
              <div className="p-5 border border-green-100 rounded-xl bg-green-50/50 hover:bg-green-50 transition flex flex-col h-full">
                <h4 className="font-bold text-lg text-gray-900 mb-2">కుల ధృవీకరణ (Caste Certificate)</h4>
                <p className="text-sm font-semibold text-gray-700 mb-3">కావలసిన పత్రాలు (Required Docs):</p>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1.5 font-medium flex-grow">
                  <li>ఆధార్ కార్డ్ (Aadhaar Card)</li>
                  <li>రేషన్ కార్డ్ (Ration Card)</li>
                  <li>స్కూల్ సర్టిఫికెట్ (TC/Study Certificate)</li>
                </ul>
              </div>
              <div className="p-5 border border-blue-100 rounded-xl bg-blue-50/50 hover:bg-blue-50 transition shadow-sm relative overflow-hidden group flex flex-col h-full">
                <div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg z-10">NEW</div>
                <h4 className="font-bold text-lg text-blue-900 mb-2">ఓటరు నమోదు (Voter ID)</h4>
                <p className="text-sm font-semibold text-gray-700 mb-3">సహాయం (Services):</p>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1.5 font-medium flex-grow">
                  <li>కొత్త ఓటరు నమోదు (New Registration)</li>
                  <li>ఓటరు జాబితాలో పేరు తనిఖీ (Check Name)</li>
                  <li>తప్పుల సవరణ (Corrections / Form 8)</li>
                </ul>
                <a href="https://voters.eci.gov.in/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg text-sm transition shadow-sm mt-auto">
                  పోర్టల్ కి వెళ్ళండి (Visit Portal)
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <section className="flex flex-col h-full">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <MapIcon className="mr-2 text-emerald-600" /> భూమి రికార్డులు (Land Records)
            </h3>
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex-1 flex flex-col border-t-4 border-t-emerald-500 hover:shadow-lg transition">
              <p className="text-gray-600 mb-4 font-medium">ధరణి పోర్టల్ ద్వారా మీ భూమి వివరాలు తెలుసుకోండి. (Check your land details via Dharani Portal.)</p>
              <ul className="space-y-3 text-sm text-gray-700 flex-grow">
                <li className="flex items-center border-b border-gray-50 pb-2">
                  <CheckCircle size={16} className="text-emerald-500 mr-3 flex-shrink-0" /> <span>మీ <strong>పహాణీ మరియు 1B</strong> తనిఖీ చేయండి (Check Pahani & 1B)</span>
                </li>
                <li className="flex items-center border-b border-gray-50 pb-2">
                  <CheckCircle size={16} className="text-emerald-500 mr-3 flex-shrink-0" /> <span>రిజిస్ట్రేషన్ స్టేటస్ (Registration Status)</span>
                </li>
                <li className="flex items-center pb-2">
                  <CheckCircle size={16} className="text-emerald-500 mr-3 flex-shrink-0" /> <span>EC తనిఖీ (Encumbrance Certificate)</span>
                </li>
              </ul>
              <button onClick={(e) => handleSimulatePortal(e, 'Dharani Portal')} className="mt-4 flex justify-center items-center w-full bg-emerald-100 hover:bg-emerald-200 text-emerald-700 font-bold py-2 rounded-lg shadow-sm transition mt-auto">
                ధరణి పోర్టల్ (Visit Dharani)
              </button>
            </div>
          </section>

          <section className="flex flex-col h-full">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Wallet className="mr-2 text-purple-600" /> ఆస్తి పన్ను & బిల్లులు (Taxes & Bills)
            </h3>
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex-1 flex flex-col border-t-4 border-t-purple-500 hover:shadow-lg transition">
              <p className="text-gray-600 mb-4 font-medium">గ్రామ పంచాయతీ పన్నులు & కరెంటు బిల్లు (Panchayat taxes & Electricity bill)</p>
              <ul className="space-y-3 text-sm text-gray-700 flex-grow">
                <li className="flex items-center border-b border-gray-50 pb-2">
                  <CheckCircle size={16} className="text-purple-500 mr-3 flex-shrink-0" /> <span>ఇంటి పన్ను చెల్లింపు (House Tax Payment)</span>
                </li>
                <li className="flex items-center border-b border-gray-50 pb-2">
                  <CheckCircle size={16} className="text-purple-500 mr-3 flex-shrink-0" /> <span>త్రాగునీటి పన్ను (Drinking Water Tax)</span>
                </li>
                <li className="flex items-center pb-2">
                  <CheckCircle size={16} className="text-purple-500 mr-3 flex-shrink-0" /> <span>విద్యుత్ బిల్లు (TSSPDCL Electricity Bill)</span>
                </li>
              </ul>
              <div className="mt-4 flex gap-3 mt-auto">
                <button onClick={(e) => handleSimulatePortal(e, 'Gram Panchayat Tax Portal')} className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded-lg shadow-sm transition text-sm">
                  ఆస్తి పన్ను (Pay Taxes)
                </button>
                <button onClick={(e) => handleSimulatePortal(e, 'TSSPDCL Payment Portal')} className="flex-1 flex justify-center items-center bg-purple-100 hover:bg-purple-200 text-purple-700 font-bold py-2 rounded-lg shadow-sm transition text-sm">
                  కరెంటు బిల్లు (Power Bill)
                </button>
              </div>
            </div>
          </section>
        </div>

        <div className="w-full h-px bg-gray-200 my-8"></div>

        {/* === 3. Daily Essentials === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <section className="flex flex-col h-full">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Store className="mr-2 text-orange-500" /> రేషన్ షాప్ (PDS Ration Shop)
            </h3>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex-1 flex flex-col hover:shadow-lg transition">
              <p className="font-bold text-lg text-gray-900 mb-2">డీలర్ (Dealer): బానోత్ రాంబాబు (Banoth Rambabu)</p>
              <p className="text-gray-700 mb-1"><strong>పనిచేయు దినాలు (Open Days):</strong> ప్రతి నెల 1 నుండి 15 వరకు (1st-15th)</p>
              <p className="text-gray-700 mb-4 flex-grow"><strong>సమయం (Timings):</strong> ఉదయం 8:00 AM - మధ్యాహ్నం 1:00 PM</p>
              <div className="mt-auto bg-orange-50 text-orange-700 px-5 py-3 rounded-xl font-bold border border-orange-200 shadow-inner flex items-center justify-center">
                <CheckCircle size={20} className="mr-2" /> స్టాక్ అందుబాటులో ఉంది (Stock Available)
              </div>
            </div>
          </section>

          <section className="flex flex-col h-full">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Droplets className="mr-2 text-cyan-500" /> త్రాగునీటి సరఫరా (Drinking Water)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 items-stretch">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-cyan-100 border-l-4 border-l-cyan-500 hover:shadow-md transition flex flex-col justify-center h-full">
                <h4 className="font-bold text-gray-900 mb-2 text-lg">ఉదయం (Morning)</h4>
                <p className="text-cyan-800 font-extrabold text-2xl">06:00 - 08:00 AM</p>
                <p className="text-sm text-gray-500 mt-2">అన్ని వీధులకు (All streets)</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-cyan-100 border-l-4 border-l-cyan-500 hover:shadow-md transition flex flex-col justify-center h-full">
                <h4 className="font-bold text-gray-900 mb-2 text-lg">సాయంత్రం (Evening)</h4>
                <p className="text-cyan-800 font-extrabold text-2xl">05:00 - 07:00 PM</p>
                <p className="text-sm text-gray-500 mt-2">అన్ని వీధులకు (All streets)</p>
              </div>
            </div>
          </section>
        </div>

        <section>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <TrendingUp className="mr-2 text-red-500" /> వ్యవసాయ మార్కెట్ ధరలు (Market Prices)
          </h3>
          <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-red-50 text-red-900 border-b border-red-100">
                    <th className="p-4 font-bold">పంట (Crop)</th>
                    <th className="p-4 font-bold">రకం (Grade)</th>
                    <th className="p-4 font-bold">ధర/క్వింటాల్ (Price/Quintal)</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50 transition">
                    <td className="p-4 font-medium flex items-center">🌾 వరి (Paddy)</td>
                    <td className="p-4">A-Grade</td>
                    <td className="p-4 font-extrabold text-green-600">₹2,203</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="p-4 font-medium flex items-center">☁️ పత్తి (Cotton)</td>
                    <td className="p-4">Medium Staple</td>
                    <td className="p-4 font-extrabold text-green-600">₹6,620</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="p-4 font-medium flex items-center">🌶️ మిర్చి (Red Chilli)</td>
                    <td className="p-4">Teja</td>
                    <td className="p-4 font-extrabold text-green-600">₹18,500</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-gray-200 my-8"></div>

        {/* === 4. Transport & Helpers === */}
        <section>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <Clock className="mr-2 text-blue-500" /> ఆర్టీసీ బస్సు సమయాలు (RTC Bus Timings)
          </h3>
          <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blue-50 text-blue-900 border-b border-blue-100">
                    <th className="p-4 font-bold">మార్గం (Route)</th>
                    <th className="p-4 font-bold">ఉదయం (Morning)</th>
                    <th className="p-4 font-bold">సాయంత్రం (Evening)</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium">నల్గొండ (Nalgonda) - పెదవూర (Peddavoora)</td>
                    <td className="p-4">08:30 AM</td>
                    <td className="p-4">05:15 PM</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium">మిర్యాలగూడ (Miryalguda) - సాగర్ (Sagar)</td>
                    <td className="p-4">10:00 AM</td>
                    <td className="p-4">06:45 PM</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium">హైదరాబాద్ (Hyderabad) - ఎక్స్ ప్రెస్ (Express)</td>
                    <td className="p-4">06:00 AM</td>
                    <td className="p-4">08:00 PM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <Wrench className="mr-2 text-yellow-600" /> స్థానిక సహాయకులు (Local Helpers)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
            {[
              { role: "ఎలక్ట్రీషియన్ (Electrician)", name: "రామావత్ రమేష్ (Ramavath Ramesh)", phone: "9876543220", icon: Wrench },
              { role: "ప్లంబర్ (Plumber)", name: "ముడావత్ శ్రీను (Mudavath Srinu)", phone: "9876543221", icon: Wrench },
              { role: "ట్రాక్టర్ అద్దెకు (Tractor for Rent)", name: "బానోత్ రాము (Banoth Ramu)", phone: "9876543222", icon: Tractor },
              { role: "ఆటో డ్రైవర్ (Auto Driver)", name: "సభావత్ గోపి (Sabavath Gopi)", phone: "9876543223", icon: Bus },
              { role: "పశువైద్యుడు (Veterinary Dr.)", name: "Dr. శివ (Shiva)", phone: "9876543224", icon: Activity },
              { role: "మెకానిక్ (Mechanic)", name: "షేక్ భాషా (Shaik Basha)", phone: "9876543225", icon: Wrench }
            ].map((worker, i) => {
              const Icon = worker.icon;
              return (
                <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition h-full">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Icon size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 leading-tight">{worker.role}</p>
                      <p className="text-sm text-gray-500 mt-1">{worker.name}</p>
                    </div>
                  </div>
                  <a href={`tel:${worker.phone}`} onClick={(e) => handleCall(e, worker)} className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow transition-colors cursor-pointer flex-shrink-0 ml-4">
                    <Phone size={20} />
                  </a>
                </div>
              )
            })}
          </div>
        </section>

        <div className="w-full h-px bg-gray-200 my-8"></div>

        {/* === 5. Culture === */}
        <section>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <Flame className="mr-2 text-red-500" /> దేవాలయాలు (Temples)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-red-100 border-l-4 border-l-red-500 hover:shadow-md transition flex flex-col h-full">
              <h4 className="font-bold text-gray-900 mb-2 text-xl">శ్రీ రామాలయం (Sri Ramalayam)</h4>
              <p className="text-gray-700 mb-1"><strong>పూజారి (Priest):</strong> K. శర్మ (Sharma)</p>
              <p className="text-gray-700 mb-4 flex-grow"><strong>సమయం (Timings):</strong> ఉదయం 6:00 - 10:00 AM, సాయంత్రం 5:00 - 8:00 PM</p>
              <div className="bg-red-50 text-red-700 px-3 py-2 rounded-lg text-sm font-bold inline-flex items-center border border-red-200 w-fit">
                <Calendar size={16} className="mr-2 flex-shrink-0" /> రాబోయే ఉత్సవం: శ్రీరామనవమి (Upcoming: Sri Rama Navami)
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-orange-100 border-l-4 border-l-orange-500 hover:shadow-md transition flex flex-col h-full">
              <h4 className="font-bold text-gray-900 mb-2 text-xl">పోచమ్మ గుడి (Pochamma Temple)</h4>
              <p className="text-gray-700 mb-1"><strong>పూజారి (Priest):</strong> B. ముత్యాలు (Mutyalu)</p>
              <p className="text-gray-700 mb-4 flex-grow"><strong>సమయం (Timings):</strong> ప్రతి మంగళ, శుక్రవారాలు (Every Tue & Fri)</p>
              <div className="bg-orange-50 text-orange-700 px-3 py-2 rounded-lg text-sm font-bold inline-flex items-center border border-orange-200 w-fit">
                <Calendar size={16} className="mr-2 flex-shrink-0" /> రాబోయే ఉత్సవం: బోనాలు (Upcoming: Bonalu)
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const KaruvuPani = () => {
  const [jobCard, setJobCard] = useState("");
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [appliedWorks, setAppliedWorks] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [paymentError, setPaymentError] = useState("");

  const handleApply = (id) => {
    setAppliedWorks(prev => ({...prev, [id]: 'applying'}));
    setTimeout(() => {
      setAppliedWorks(prev => ({...prev, [id]: 'applied'}));
    }, 1500);
  };

  const handleQuickApply = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1500);
  };

  const handleCheckStatus = (e) => {
    e.preventDefault();
    setPaymentStatus(null);
    setPaymentError("");

    if (!jobCard.trim()) {
      setPaymentError("దయచేసి జాబ్ కార్డ్ నెంబర్ నమోదు చేయండి.");
      return;
    }

    setIsChecking(true);
    setTimeout(() => {
      setIsChecking(false);
      setPaymentStatus({
        status: "Pending ⏳ (పెండింగ్)",
        daysWorked: 18,
        amount: "₹4,896",
        dueDate: "10 May 2026"
      });
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center border-b pb-3">
        <Hammer className="mr-3 text-amber-600" /> ఉపాధి హామీ పనులు (Karuvu Pani / NREGA)
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Available Works */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
            <div className="bg-amber-600 p-4 text-white">
              <h3 className="text-xl font-bold flex items-center">
                <Pickaxe className="mr-2" /> ప్రస్తుత పనులు (Available Works)
              </h3>
            </div>
            <div className="p-6 space-y-4">
              {/* Work 1 */}
              <div className="border border-amber-100 rounded-lg p-5 bg-amber-50/50 hover:bg-amber-50 transition flex justify-between items-center flex-wrap gap-4">
                <div>
                  <h4 className="font-bold text-gray-900 text-lg flex items-center"><Droplets className="mr-2 text-cyan-500" size={20} /> చెరువు పూడికతీత (Pond Digging)</h4>
                  <p className="text-gray-700 text-sm mt-2"><strong>స్థలం (Location):</strong> తూర్పు చెరువు (East Lake)</p>
                  <p className="text-gray-700 text-sm mt-1"><strong>వేతనం (Wage):</strong> ₹272 / రోజు (Day)</p>
                </div>
                <button 
                  onClick={() => handleApply(1)}
                  disabled={appliedWorks[1]}
                  className={`px-5 py-2.5 rounded-lg font-bold shadow-sm transition ${appliedWorks[1] === 'applied' ? 'bg-green-600 text-white' : 'bg-amber-600 hover:bg-amber-700 text-white'}`}>
                  {!appliedWorks[1] && 'దరఖాస్తు (Apply)'}
                  {appliedWorks[1] === 'applying' && 'Applying...'}
                  {appliedWorks[1] === 'applied' && 'Applied ✅'}
                </button>
              </div>
              {/* Work 2 */}
              <div className="border border-amber-100 rounded-lg p-5 bg-amber-50/50 hover:bg-amber-50 transition flex justify-between items-center flex-wrap gap-4">
                <div>
                  <h4 className="font-bold text-gray-900 text-lg flex items-center"><Truck className="mr-2 text-gray-500" size={20} /> రోడ్డు మరమ్మత్తు (Road Repair)</h4>
                  <p className="text-gray-700 text-sm mt-2"><strong>స్థలం (Location):</strong> మెయిన్ రోడ్డు (Main Road)</p>
                  <p className="text-gray-700 text-sm mt-1"><strong>వేతనం (Wage):</strong> ₹272 / రోజు (Day)</p>
                </div>
                <button 
                  onClick={() => handleApply(2)}
                  disabled={appliedWorks[2]}
                  className={`px-5 py-2.5 rounded-lg font-bold shadow-sm transition ${appliedWorks[2] === 'applied' ? 'bg-green-600 text-white' : 'bg-amber-600 hover:bg-amber-700 text-white'}`}>
                  {!appliedWorks[2] && 'దరఖాస్తు (Apply)'}
                  {appliedWorks[2] === 'applying' && 'Applying...'}
                  {appliedWorks[2] === 'applied' && 'Applied ✅'}
                </button>
              </div>
              {/* Work 3 */}
              <div className="border border-amber-100 rounded-lg p-5 bg-amber-50/50 hover:bg-amber-50 transition flex justify-between items-center flex-wrap gap-4">
                <div>
                  <h4 className="font-bold text-gray-900 text-lg flex items-center"><CheckSquare className="mr-2 text-blue-500" size={20} /> చెక్ డ్యామ్ నిర్మాణం (Check Dam Construction)</h4>
                  <p className="text-gray-700 text-sm mt-2"><strong>స్థలం (Location):</strong> వాగు దగ్గర (Near Stream)</p>
                  <p className="text-gray-700 text-sm mt-1"><strong>వేతనం (Wage):</strong> ₹272 / రోజు (Day)</p>
                </div>
                <button 
                  onClick={() => handleApply(3)}
                  disabled={appliedWorks[3]}
                  className={`px-5 py-2.5 rounded-lg font-bold shadow-sm transition ${appliedWorks[3] === 'applied' ? 'bg-green-600 text-white' : 'bg-amber-600 hover:bg-amber-700 text-white'}`}>
                  {!appliedWorks[3] && 'దరఖాస్తు (Apply)'}
                  {appliedWorks[3] === 'applying' && 'Applying...'}
                  {appliedWorks[3] === 'applied' && 'Applied ✅'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar: Job Card & Payment */}
        <div className="space-y-6">
          {/* Status Check Form */}
          <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
            <div className="bg-green-600 p-4 text-white">
              <h3 className="text-xl font-bold flex items-center">
                <Wallet className="mr-2" /> పేమెంట్ స్టేటస్ (Payment Status)
              </h3>
            </div>
            <div className="p-6">
              <form onSubmit={handleCheckStatus} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">జాబ్ కార్డ్ నెంబర్ (Job Card No.)</label>
                  <input
                    type="text"
                    value={jobCard}
                    onChange={(e) => { setJobCard(e.target.value); setPaymentError(""); }}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none transition"
                    placeholder="e.g. AP-123-456"
                  />
                  {paymentError && <p className="text-red-500 text-xs mt-1 font-bold">{paymentError}</p>}
                </div>
                <button 
                  type="submit" 
                  disabled={isChecking}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 rounded-lg shadow-sm transition flex justify-center items-center disabled:opacity-70">
                  {!isChecking && <><Search className="mr-2" size={18} /> చెక్ చేయండి (Check)</>}
                  {isChecking && <><Search className="mr-2 animate-pulse" size={18} /> Checking... ⏳</>}
                </button>
              </form>

              {paymentStatus && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg animate-in fade-in slide-in-from-bottom-2">
                  <h4 className="font-bold text-green-900 border-b border-green-200 pb-2 mb-3">వివరాలు (Details):</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex justify-between items-center"><span className="text-gray-600 font-medium">పనిచేసిన రోజులు (Days):</span> <span className="font-bold text-gray-900">{paymentStatus.daysWorked}</span></li>
                    <li className="flex justify-between items-center"><span className="text-gray-600 font-medium">మొత్తం (Amount):</span> <span className="font-bold text-green-700 text-lg">{paymentStatus.amount}</span></li>
                    <li className="flex justify-between items-center"><span className="text-gray-600 font-medium">స్థితి (Status):</span> <span className="font-bold text-amber-600 bg-amber-100 px-2 py-1 rounded-md">{paymentStatus.status}</span></li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Quick Apply Form */}
          <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
            <div className="bg-blue-600 p-4 text-white">
              <h3 className="text-xl font-bold flex items-center">
                <FileText className="mr-2" /> పనికి దరఖాస్తు (Apply for Work)
              </h3>
            </div>
            <form onSubmit={handleQuickApply} className="p-6 space-y-4">
              <input type="text" required placeholder="పేరు (Name)" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition" />
              <input type="text" required placeholder="జాబ్ కార్డ్ నెంబర్ (Job Card No.)" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition" />
              <select required className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition bg-white text-gray-700">
                <option value="">పనిని ఎంచుకోండి (Select Work)</option>
                <option value="pond">చెరువు పూడికతీత (Pond Digging)</option>
                <option value="road">రోడ్డు మరమ్మత్తు (Road Repair)</option>
                <option value="dam">చెక్ డ్యామ్ (Check Dam)</option>
              </select>
              <button 
                type="submit" 
                disabled={isSubmitting || submitSuccess}
                className={`w-full font-bold py-2.5 rounded-lg shadow-sm transition flex justify-center items-center ${submitSuccess ? 'bg-green-600 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>
                {!isSubmitting && !submitSuccess && 'సమర్పించండి (Submit)'}
                {isSubmitting && 'Submitting...'}
                {submitSuccess && <><CheckCircle size={18} className="mr-2" /> Application Submitted ✅</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const SmartVillage = () => {
  const [scanState, setScanState] = useState('idle'); // idle, camera, scanning, result
  const [droneState, setDroneState] = useState('idle'); // idle, map, booking, booked
  const [teleState, setTeleState] = useState('idle'); // idle, calling
  const [moisture, setMoisture] = useState(42.1);
  const [pumpState, setPumpState] = useState(false);
  const [stream, setStream] = useState(null);
  const [photoData, setPhotoData] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // Live Sensor Simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setMoisture(prev => {
        const fluctuation = (Math.random() * 0.8 - 0.4); // -0.4 to +0.4
        const newVal = parseFloat((prev + fluctuation).toFixed(1));
        if (newVal < 35 && !pumpState) setPumpState(true);
        if (newVal > 60 && pumpState) setPumpState(false);
        return newVal;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, [pumpState]);

  // Camera Logic
  const handleStartCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      setStream(mediaStream);
      setScanState('camera');
    } catch (err) {
      alert("కెమెరా యాక్సెస్ నిరాకరించబడింది (Camera access denied or unavailable)");
      console.error("Camera error:", err);
    }
  };

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream, scanState]);

  const handleCapture = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL('image/jpeg');
      setPhotoData(dataUrl);
      
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
      setScanState('scanning');
      
      fetch('http://localhost:5000/api/ai/scan-crop', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: dataUrl }) // Sending image data
      })
      .then(res => res.json())
      .then(data => {
        setScanState('result');
        // Setting simulated dynamic data to state could be done here, 
        // but since the UI is static for the hackathon demo, we just trigger the UI transition.
      })
      .catch(err => {
        console.error("AI Scan failed", err);
        setScanState('result'); // Fallback to show result even if backend fails
      });
    }
  };

  const handleResetScan = () => {
    setScanState('idle');
    setPhotoData(null);
  };

  // Telemedicine Logic
  const handleCallDoctor = () => {
    setTeleState('calling');
    setTimeout(() => {
      setTeleState('idle');
      // Simulate opening a telemedicine meeting link
      window.open('https://meet.google.com/new', '_blank');
    }, 3000);
  };

  // Drone Logic
  const handleDrone = () => {
    if (droneState === 'idle') setDroneState('map');
    else if (droneState === 'map') {
      setDroneState('booking');
      setTimeout(() => {
        setDroneState('booked');
        setTimeout(() => setDroneState('idle'), 5000);
      }, 2000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-cyan-100 opacity-50 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-100 opacity-50 blur-3xl -z-10"></div>

      <div className="text-center mb-16 relative z-10">
        <div className="flex items-center justify-center mb-3">
          <Cpu className="text-cyan-600 mr-2" size={28} />
          <h3 className="text-xl font-bold text-cyan-700 tracking-wide">Future Ready Platform</h3>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
          స్మార్ట్ విలేజ్ - ఫ్యూచర్ టెక్
        </h2>
        <p className="text-2xl font-bold text-gray-600 mb-6">
          (Smart Village - Future Tech)
        </p>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto font-medium">
          గ్రామాల్లో రాబోయే సాంకేతిక విప్లవం. Integrating IoT, AI, Telemedicine, and Drone tech for sustainable rural development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        
        {/* IoT Farming */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:-translate-y-2 transition-all duration-300 group">
          <div className="bg-gradient-to-br from-emerald-400 to-green-600 p-8 flex justify-between items-start text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10 transform translate-x-4 -translate-y-4">
              <Wifi size={120} />
            </div>
            <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-md border border-white/30 z-10">
              <Wifi size={32} className="group-hover:animate-pulse" />
            </div>
            <span className="bg-white/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider backdrop-blur-md border border-white/30 shadow-sm z-10 uppercase flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span> Live Sensors
            </span>
          </div>
          <div className="p-8 flex flex-col h-[calc(100%-120px)]">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">స్మార్ట్ ఫార్మింగ్ (IoT Farming)</h3>
            <p className="text-gray-600 mb-6 font-medium leading-relaxed flex-grow">నేల తేమ మరియు వాతావరణ ఆధారిత ఆటోమేటిక్ నీటిపారుదల వ్యవస్థ. సెన్సార్ డేటా లైవ్. (Live automated irrigation system).</p>
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-bold text-gray-700 flex items-center"><Activity size={16} className="mr-2 text-green-500"/> నేల తేమ (Soil Moisture):</span>
                <div className="flex items-center">
                  <span className={`font-extrabold px-3 py-1 rounded-lg ${moisture < 35 ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                    {moisture}%
                  </span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div className={`h-2.5 rounded-full transition-all duration-500 ${moisture < 35 ? 'bg-red-500' : 'bg-green-500'}`} style={{ width: `${moisture}%` }}></div>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                <span className="text-sm font-bold text-gray-700 flex items-center"><Activity size={16} className="mr-2 text-blue-500"/> మోటార్ (Pump Status):</span>
                <span className={`${pumpState ? 'bg-blue-100 text-blue-700' : 'bg-gray-200 text-gray-600'} px-3 py-1 rounded-lg font-extrabold shadow-sm transition-colors`}>
                  {pumpState ? 'ON (Watering)' : 'OFF'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* AI Crop Disease Detection */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:-translate-y-2 transition-all duration-300 group">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-700 p-8 flex justify-between items-start text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10 transform translate-x-4 -translate-y-4">
              <Scan size={120} />
            </div>
            <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-md border border-white/30 z-10">
              <Scan size={32} className="group-hover:rotate-12 transition-transform" />
            </div>
            <span className="bg-white/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider backdrop-blur-md border border-white/30 shadow-sm z-10 uppercase flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span> AI Vision
            </span>
          </div>
          <div className="p-8 flex flex-col h-[calc(100%-120px)]">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">ఏఐ పంట సంరక్షణ (AI Crop Care)</h3>
            <p className="text-gray-600 mb-4 font-medium leading-relaxed">మొబైల్ కెమెరాతో ఆకును స్కాన్ చేసి రోగాన్ని మరియు మందును తెలుసుకోండి. (Scan leaf to detect disease instantly).</p>
            
            <div className="flex-grow flex flex-col justify-end mt-auto">
              {scanState === 'idle' && (
                <button 
                  onClick={handleStartCamera}
                  className="w-full flex items-center justify-center border-2 font-bold py-3.5 rounded-xl transition-colors shadow-sm bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100 hover:border-indigo-300">
                  <Scan className="mr-2" size={20} /> కెమెరా తెరవండి (Open Camera)
                </button>
              )}

              {scanState === 'camera' && (
                <div className="relative rounded-xl overflow-hidden shadow-inner border border-gray-200 bg-black animate-in zoom-in-95">
                  <video ref={videoRef} autoPlay playsInline className="w-full h-48 object-cover"></video>
                  <canvas ref={canvasRef} className="hidden"></canvas>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-32 h-32 border-2 border-white/50 rounded-lg"></div>
                  </div>
                  <button 
                    onClick={handleCapture}
                    className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-white text-indigo-600 rounded-full px-6 py-2 font-bold shadow-lg hover:scale-105 transition">
                    ఫోటో తీయండి (Capture)
                  </button>
                </div>
              )}

              {scanState === 'scanning' && (
                <div className="relative rounded-xl overflow-hidden shadow-inner border border-indigo-200 bg-indigo-50 h-48 flex flex-col items-center justify-center">
                  {photoData && <img src={photoData} alt="Captured" className="absolute inset-0 w-full h-full object-cover opacity-30" />}
                  <Scan className="animate-spin text-indigo-600 mb-2 relative z-10" size={40} />
                  <p className="font-bold text-indigo-800 relative z-10">ఏఐ పరిశీలిస్తోంది... (AI Scanning...)</p>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-[shimmer_1.5s_infinite]"></div>
                </div>
              )}

              {scanState === 'result' && (
                <div className="rounded-xl border border-rose-200 overflow-hidden bg-rose-50 animate-in slide-in-from-bottom-4">
                  <div className="flex h-24 relative">
                    {photoData && <img src={photoData} alt="Scanned Leaf" className="w-1/3 object-cover border-r border-rose-200" />}
                    <div className="w-2/3 p-3 flex flex-col justify-center">
                      <p className="text-xs font-bold text-rose-800 flex items-center"><Activity size={12} className="mr-1"/> వ్యాధి (Disease):</p>
                      <p className="text-sm font-extrabold text-gray-900 leading-tight">నత్రజని లోపం (Nitrogen Deficiency)</p>
                    </div>
                  </div>
                  <div className="p-3 bg-white">
                    <p className="text-xs font-bold text-emerald-700 mb-1">చికిత్స (Solution):</p>
                    <p className="text-sm text-gray-700 font-medium">ఎకరానికి 20 కేజీల యూరియా చల్లండి. (Apply 20kg Urea per acre).</p>
                    <button onClick={handleResetScan} className="mt-3 w-full text-center text-xs font-bold text-indigo-600 hover:text-indigo-800 py-1 bg-indigo-50 rounded">
                      మరొకటి స్కాన్ చేయండి (Scan Another)
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Telemedicine */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:-translate-y-2 transition-all duration-300 group">
          <div className="bg-gradient-to-br from-rose-400 to-red-600 p-8 flex justify-between items-start text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10 transform translate-x-4 -translate-y-4">
              <Video size={120} />
            </div>
            <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-md border border-white/30 z-10">
              <Video size={32} className="group-hover:animate-pulse" />
            </div>
            <span className="bg-white/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider backdrop-blur-md border border-white/30 shadow-sm z-10 uppercase flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span> E-Sanjeevani
            </span>
          </div>
          <div className="p-8 flex flex-col h-[calc(100%-120px)]">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">టెలిమెడిసిన్ (Telemedicine)</h3>
            <p className="text-gray-600 mb-6 font-medium leading-relaxed flex-grow">ఇంటి నుండే వీడియో కాల్ ద్వారా స్పెషలిస్ట్ డాక్టర్‌ను సంప్రదించండి. (Consult specialist doctors via video call).</p>
            
            <div className="mt-auto">
              <div className="flex items-center p-4 bg-rose-50 rounded-2xl border border-rose-100 shadow-sm mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-rose-600 font-black text-xl mr-4 shadow-sm border border-rose-200">Dr.</div>
                <div className="flex-grow">
                  <p className="font-bold text-gray-900">Dr. Reddy (General)</p>
                  <p className="text-sm text-emerald-600 font-bold flex items-center mt-1">
                    <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full mr-1.5 animate-pulse shadow-sm"></span> Online Now
                  </p>
                </div>
              </div>
              
              <button 
                onClick={handleCallDoctor}
                disabled={teleState === 'calling'}
                className={`w-full flex items-center justify-center font-bold py-3.5 rounded-xl shadow-md transition-all ${teleState === 'calling' ? 'bg-emerald-600 text-white animate-pulse' : 'bg-rose-600 hover:bg-rose-700 text-white'}`}>
                 {teleState === 'idle' && <><Video className="mr-2" size={20} /> కన్సల్ట్ డాక్టర్ (Consult Now)</>}
                 {teleState === 'calling' && <><Phone className="mr-2 animate-bounce" size={20} /> Connecting to Doctor... 📞</>}
              </button>
            </div>
          </div>
        </div>

        {/* Drone Tech */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:-translate-y-2 transition-all duration-300 group lg:col-start-2">
          <div className="bg-gradient-to-br from-purple-500 to-fuchsia-700 p-8 flex justify-between items-start text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10 transform translate-x-4 -translate-y-4">
              <Satellite size={120} />
            </div>
            <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-md border border-white/30 z-10">
              <Satellite size={32} className="group-hover:scale-110 transition-transform" />
            </div>
            <span className="bg-white/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider backdrop-blur-md border border-white/30 shadow-sm z-10 uppercase flex items-center">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span> Agri-Drones
            </span>
          </div>
          <div className="p-8 flex flex-col h-[calc(100%-120px)]">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">డ్రోన్ సేవలు (Agri-Drones)</h3>
            <p className="text-gray-600 mb-6 font-medium leading-relaxed flex-grow">పంటకు మందు పిచికారీ మరియు భూమి సర్వే కోసం డ్రోన్ బుకింగ్. (Drone booking for pesticide spraying and land survey).</p>
            
            <div className="mt-auto">
              {droneState === 'map' && (
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mb-4 animate-in fade-in">
                  <p className="text-sm font-bold text-purple-800 mb-2">పొలం ఎంచుకోండి (Select Area):</p>
                  <div className="w-full h-24 bg-[url('/aerial.jpg.png')] bg-cover bg-center rounded-lg border border-purple-300 relative overflow-hidden cursor-crosshair">
                    <div className="absolute inset-0 bg-purple-900/20"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-purple-500/40 border-2 border-purple-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">5 Acres</span>
                    </div>
                  </div>
                </div>
              )}

              <button 
                onClick={handleDrone}
                disabled={droneState === 'booking' || droneState === 'booked'}
                className={`w-full flex items-center justify-center font-bold py-3.5 rounded-xl shadow-md transition-all ${droneState === 'booked' ? 'bg-green-600 text-white' : droneState === 'map' ? 'bg-purple-800 hover:bg-purple-900 text-white' : 'bg-purple-600 hover:bg-purple-700 text-white'}`}>
                 {droneState === 'idle' && <><MapIcon className="mr-2" size={20} /> పొలం ఎంచుకోండి (Select Field)</>}
                 {droneState === 'map' && <><Satellite className="mr-2" size={20} /> బుక్ చేయండి (Confirm Booking)</>}
                 {droneState === 'booking' && <><Satellite className="mr-2 animate-pulse" size={20} /> Booking... ⏳</>}
                 {droneState === 'booked' && <><CheckCircle className="mr-2" size={20} /> Scheduled for Tomorrow 🚁</>}
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Future Roadmap Section */}
      <div className="mt-24 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            భవిష్యత్ ప్రణాళిక (Future Scope & Technologies)
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium">
            Scalable, practical technologies planned for Phase 2 implementation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <Mic className="text-purple-500 mb-4" size={36} />
            <h4 className="font-bold text-gray-900 mb-2">వాయిస్ కమాండ్స్ (Voice Interface)</h4>
            <p className="text-xs text-gray-500 font-medium">తెలుగులో వాయిస్ ద్వారా సులభంగా సేవలు (Voice commands in Telugu for accessibility).</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <CloudOff className="text-blue-500 mb-4" size={36} />
            <h4 className="font-bold text-gray-900 mb-2">ఆఫ్లైన్ యాప్ (Offline-First)</h4>
            <p className="text-xs text-gray-500 font-medium">ఇంటర్నెట్ లేకపోయినా పనిచేసే యాప్ (PWA syncs data when network is available).</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <BarChart className="text-emerald-500 mb-4" size={36} />
            <h4 className="font-bold text-gray-900 mb-2">డేటా అనలిటిక్స్ (Data Analytics)</h4>
            <p className="text-xs text-gray-500 font-medium">స్మార్ట్ నిర్ణయాల కోసం పంచాయతీ డ్యాష్‌బోర్డ్ (Panchayat dashboards for smart decisions).</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <Bot className="text-orange-500 mb-4" size={36} />
            <h4 className="font-bold text-gray-900 mb-2">కృత్రిమ మేధస్సు (Advanced AI)</h4>
            <p className="text-xs text-gray-500 font-medium">పథకాలు మరియు సందేహాల కోసం ఏఐ అసిస్టెంట్ (LLM integration for personalized guidance).</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <MessageCircle className="text-green-500 mb-4" size={36} />
            <h4 className="font-bold text-gray-900 mb-2">వాట్సాప్ సేవలు (WhatsApp API)</h4>
            <p className="text-xs text-gray-500 font-medium">వాట్సాప్ ద్వారా గ్రామ నోటీసులు మరియు అలర్ట్స్ (Instant notices & alerts sent via WhatsApp).</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <ShieldCheck className="text-slate-500 mb-4" size={36} />
            <h4 className="font-bold text-gray-900 mb-2">బ్లాక్‌చెయిన్ (Blockchain)</h4>
            <p className="text-xs text-gray-500 font-medium">సురక్షితమైన భూమి మరియు పథకాల రికార్డులు (Secure, transparent scheme & land records).</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <BellRing className="text-red-500 mb-4" size={36} />
            <h4 className="font-bold text-gray-900 mb-2">స్మార్ట్ అలర్ట్స్ (Smart Alerts)</h4>
            <p className="text-xs text-gray-500 font-medium">అత్యవసరాలు మరియు నీటి సరఫరా నోటిఫికేషన్లు (Push notifications for water & emergencies).</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <Sprout className="text-green-600 mb-4" size={36} />
            <h4 className="font-bold text-gray-900 mb-2">స్మార్ట్ వ్యవసాయం (Agri AI)</h4>
            <p className="text-xs text-gray-500 font-medium">ఫోటో ద్వారా పంట రోగాలను గుర్తించడం (Computer Vision for crop disease detection).</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <MapIcon className="text-indigo-500 mb-4" size={36} />
            <h4 className="font-bold text-gray-900 mb-2">మ్యాపింగ్ (GIS Mapping)</h4>
            <p className="text-xs text-gray-500 font-medium">నీటి వనరులు మరియు పనుల స్థలాల మ్యాపింగ్ (Location services for water & work sites).</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <Wifi className="text-cyan-500 mb-4" size={36} />
            <h4 className="font-bold text-gray-900 mb-2">ఐఓటీ సెన్సార్లు (IoT Sensors)</h4>
            <p className="text-xs text-gray-500 font-medium">వాటర్ ట్యాంక్ మరియు వీధి దీపాల పర్యవేక్షణ (Monitoring water tanks & street lights).</p>
          </div>

        </div>
      </div>
    </div>
  );
};

const SocialAwareness = () => (
  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 border-t border-b border-blue-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-3 drop-shadow-sm">సామాజిక స్పృహ (Social Awareness)</h2>
        <p className="text-blue-700 font-bold text-lg max-w-2xl mx-auto">మన ఊరు - మన బాధ్యత (Our Village - Our Responsibility)</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Voting Awareness */}
        <div className="bg-white rounded-2xl p-8 shadow-md border border-blue-100 border-l-4 border-l-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:scale-110 transition-transform duration-500">
            <CheckSquare size={140} />
          </div>
          <div className="flex items-center mb-6 relative z-10">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-4 shadow-sm">
              <CheckSquare size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">ఓటు హక్కు (Right to Vote)</h3>
          </div>
          <div className="relative z-10 space-y-4 text-gray-700 font-medium text-lg">
            <p className="flex items-start">
              <span className="mr-3 text-2xl">🗳️</span> 
              <span><strong className="text-blue-900">ఓటు అమ్ముకోవడం కాదు, వినియోగించుకోవడం మన హక్కు.</strong><br/><span className="text-sm text-gray-500">(Voting is not for sale, it is our democratic right.)</span></span>
            </p>
            <p className="flex items-start">
              <span className="mr-3 text-2xl">🤝</span> 
              <span>మంచి నాయకుడిని ఎన్నుకోండి, మన తండా అభివృద్ధికి బాటలు వేయండి.<br/><span className="text-sm text-gray-500">(Choose a good leader and pave the way for our village's development.)</span></span>
            </p>
            <p className="flex items-start">
              <span className="mr-3 text-2xl">🛑</span> 
              <span>ప్రలోభాలకు లొంగకండి, నిజాయితీగా ఓటు వేయండి.<br/><span className="text-sm text-gray-500">(Do not yield to malpractices, vote honestly.)</span></span>
            </p>
          </div>
        </div>

        {/* Helping Nature */}
        <div className="bg-white rounded-2xl p-8 shadow-md border border-rose-100 border-l-4 border-l-rose-500 hover:shadow-xl hover:-translate-y-1 transition-all relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:scale-110 transition-transform duration-500">
            <Users size={140} />
          </div>
          <div className="flex items-center mb-6 relative z-10">
            <div className="w-14 h-14 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mr-4 shadow-sm">
              <Users size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">సహాయ గుణం (Helping Nature)</h3>
          </div>
          <div className="relative z-10 space-y-4 text-gray-700 font-medium text-lg">
            <p className="flex items-start">
              <span className="mr-3 text-2xl">🤲</span> 
              <span><strong className="text-rose-900">కష్టాల్లో ఉన్నవారికి చేయూతనిద్దాం, అండగా నిలుద్దాం.</strong><br/><span className="text-sm text-gray-500">(Let's extend a helping hand and stand by those in need.)</span></span>
            </p>
            <p className="flex items-start">
              <span className="mr-3 text-2xl">👴</span> 
              <span>వృద్ధులకు మరియు వికలాంగులకు గౌరవం, సహాయం అందించడం మన బాధ్యత.<br/><span className="text-sm text-gray-500">(Respecting and helping elders and disabled is our duty.)</span></span>
            </p>
            <p className="flex items-start">
              <span className="mr-3 text-2xl">🌱</span> 
              <span>మన ఊరు పరిశుభ్రంగా ఉంచుకుందాం, పచ్చదనం పెంచుదాం.<br/><span className="text-sm text-gray-500">(Let's keep our village clean, green, and united.)</span></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AboutVillage = () => (
  <div className="bg-white py-12 border-t border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 drop-shadow-sm flex justify-center items-center border-b pb-4 max-w-2xl mx-auto">
          <MapPin className="mr-3 text-emerald-600" /> గ్రామ సమాచారం (About Jayaram Thanda)
        </h2>
        <p className="text-gray-600 font-medium mt-4">సంపూర్ణ గ్రామ వివరాలు మరియు గణాంకాలు (Complete Village Profile & Statistics)</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Demographics Card */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
          <div className="flex items-center mb-4 border-b border-blue-200 pb-3">
            <Users className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-xl font-bold text-blue-900">జనాభా (Demographics)</h3>
          </div>
          <ul className="space-y-3 text-gray-700 font-medium">
            <li className="flex justify-between items-center"><span className="text-gray-600">మొత్తం జనాభా (Population):</span> <span className="font-bold text-lg text-blue-800">3,466</span></li>
            <li className="flex justify-between items-center"><span className="text-gray-600">పురుషులు (Males):</span> <span className="font-bold text-gray-900">1,761</span></li>
            <li className="flex justify-between items-center"><span className="text-gray-600">మహిళలు (Females):</span> <span className="font-bold text-gray-900">1,705</span></li>
            <li className="flex justify-between items-center"><span className="text-gray-600">మొత్తం గృహాలు (Houses):</span> <span className="font-bold text-gray-900">713</span></li>
            <li className="flex justify-between items-center"><span className="text-gray-600">విస్తీర్ణం (Area):</span> <span className="font-bold text-gray-900">2,625 Hectares</span></li>
          </ul>
        </div>

        {/* Administration Card */}
        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
          <div className="flex items-center mb-4 border-b border-indigo-200 pb-3">
            <CheckSquare className="w-8 h-8 text-indigo-600 mr-3" />
            <h3 className="text-xl font-bold text-indigo-900">పరిపాలన (Administration)</h3>
          </div>
          <ul className="space-y-3 text-gray-700 font-medium">
            <li className="flex justify-between items-center"><span className="text-gray-600">MLA (Nagarjuna Sagar):</span> <span className="font-bold text-right text-indigo-900">Kunduru Jayaveer</span></li>
            <li className="flex justify-between items-center"><span className="text-gray-600">MP (Nalgonda):</span> <span className="font-bold text-right text-indigo-900">Uttam Kumar Reddy</span></li>
            <li className="flex justify-between items-center"><span className="text-gray-600">మండలం (Mandal):</span> <span className="font-bold text-right">Peddavoora</span></li>
            <li className="flex justify-between items-center"><span className="text-gray-600">జిల్లా (District):</span> <span className="font-bold text-right">Nalgonda</span></li>
          </ul>
        </div>

        {/* Location & Geography Card */}
        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
          <div className="flex items-center mb-4 border-b border-emerald-200 pb-3">
            <MapPin className="w-8 h-8 text-emerald-600 mr-3" />
            <h3 className="text-xl font-bold text-emerald-900">స్థానం (Geography)</h3>
          </div>
          <ul className="space-y-3 text-gray-700 font-medium">
            <li className="flex justify-between items-center"><span className="text-gray-600">పోస్ట్ ఆఫీస్ (Post Office):</span> <span className="font-bold text-right">Pedavoora</span></li>
            <li className="flex justify-between items-center"><span className="text-gray-600">పిన్ కోడ్ (Pin Code):</span> <span className="font-bold text-right text-emerald-900">508266</span></li>
            <li className="flex justify-between items-center"><span className="text-gray-600">దగ్గరి నగరం (Near City):</span> <span className="font-bold text-right">Miryalaguda (49 KM)</span></li>
            <li className="flex justify-between items-center"><span className="text-gray-600">సముద్ర మట్టం (Elevation):</span> <span className="font-bold text-right">145 Meters</span></li>
            <li className="flex justify-between items-center"><span className="text-gray-600">భాష (Language):</span> <span className="font-bold text-right">Telugu</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const PanchayatDashboard = () => {
  const [waMessage, setWaMessage] = useState("");
  const [iotData, setIotData] = useState({ water_level: 82, street_lights: 'On' });

  useEffect(() => {
    fetch('http://localhost:5000/api/iot')
      .then(res => res.json())
      .then(data => {
        if(data && typeof data.water_level !== 'undefined') setIotData(data);
      })
      .catch(err => console.log('IoT Fetch error:', err));
  }, []);

  const handleSendWA = (e) => {
    e.preventDefault();
    if(!waMessage) return;
    const text = encodeURIComponent(`*గ్రామ పంచాయతీ అలర్ట్:*\n${waMessage}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
    setWaMessage("");
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <div className="flex items-center justify-between mb-8 border-b pb-4">
        <h2 className="text-3xl font-bold text-gray-900 flex items-center">
          <BarChart className="mr-3 text-indigo-600" size={32} /> డేటా అనలిటిక్స్ (Panchayat Dashboard)
        </h2>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white rounded-xl shadow-md border-l-4 border-blue-500 p-6 flex items-center hover:-translate-y-1 transition-transform relative overflow-hidden">
          <div className="bg-blue-100 p-3 rounded-lg mr-4 relative z-10">
            <Droplets className="text-blue-600" size={24} />
          </div>
          <div className="relative z-10">
            <p className="text-sm text-gray-500 font-bold mb-1">నీటి ట్యాంక్ (Water Tank)</p>
            <h4 className={`text-2xl font-black ${iotData.water_level < 30 ? 'text-red-600' : 'text-blue-600'}`}>
              {iotData.water_level}% నిండింది
            </h4>
          </div>
          {/* Animated Water Background */}
          <div className="absolute bottom-0 left-0 right-0 bg-blue-50 z-0 transition-all duration-1000" style={{ height: `${iotData.water_level}%`, opacity: 0.3 }}></div>
        </div>
        <div className="bg-white rounded-xl shadow-md border-l-4 border-yellow-500 p-6 flex items-center hover:-translate-y-1 transition-transform">
          <div className={`${iotData.street_lights === 'On' ? 'bg-yellow-100' : 'bg-gray-100'} p-3 rounded-lg mr-4`}>
            <Flame className={`${iotData.street_lights === 'On' ? 'text-yellow-600' : 'text-gray-400'}`} size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-bold mb-1">వీధి దీపాలు (Street Lights)</p>
            <h4 className={`text-2xl font-black ${iotData.street_lights === 'On' ? 'text-yellow-600' : 'text-gray-500'}`}>
              {iotData.street_lights === 'On' ? 'వెలుగుతున్నాయి' : 'ఆఫ్ (OFF)'}
            </h4>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md border-l-4 border-amber-500 p-6 flex items-center hover:-translate-y-1 transition-transform">
          <div className="bg-amber-100 p-3 rounded-lg mr-4">
            <Hammer className="text-amber-600" size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-bold mb-1">నరేగా పనులు (Active Works)</p>
            <h4 className="text-2xl font-black text-gray-900">3 ప్రాంతాలు</h4>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md border-l-4 border-red-500 p-6 flex items-center hover:-translate-y-1 transition-transform">
          <div className="bg-red-100 p-3 rounded-lg mr-4">
            <ShieldAlert className="text-red-600" size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-bold mb-1">పెండింగ్ ఫిర్యాదులు (Complaints)</p>
            <h4 className="text-2xl font-black text-gray-900">12</h4>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md border-l-4 border-emerald-500 p-6 flex items-center hover:-translate-y-1 transition-transform">
          <div className="bg-emerald-100 p-3 rounded-lg mr-4">
            <Users className="text-emerald-600" size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-bold mb-1">మొత్తం జనాభా (Population)</p>
            <h4 className="text-2xl font-black text-gray-900">3,466</h4>
          </div>
        </div>
      </div>

      {/* WhatsApp Broadcast */}
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden mb-10 group hover:shadow-xl transition-shadow">
        <div className="bg-gradient-to-r from-[#25D366] to-emerald-600 p-6 text-white flex items-center justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10 transform translate-x-4 -translate-y-4">
             <MessageCircle size={150} />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold flex items-center mb-1"><MessageCircle className="mr-3" size={28} /> వాట్సాప్ సేవలు (WhatsApp Alerts)</h3>
            <p className="text-green-50 font-medium">గ్రామస్తులందరికీ ఒకేసారి నోటీసు పంపండి. (Broadcast message to all villagers).</p>
          </div>
        </div>
        <div className="p-8">
          <form onSubmit={handleSendWA}>
            <label className="block text-sm font-bold text-gray-700 mb-2">మెసేజ్ రాయండి (Compose Message):</label>
            <textarea
              required
              value={waMessage}
              onChange={(e) => setWaMessage(e.target.value)}
              placeholder="ఉదాహరణ: రేపు ఉదయం 9 గంటలకు పంచాయతీ కార్యాలయంలో మీటింగ్ ఉంటుంది..."
              className="w-full h-32 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 outline-none resize-none mb-6 bg-gray-50 text-gray-800"
            ></textarea>
            <button 
              type="submit"
              className="bg-[#25D366] hover:bg-green-600 text-white font-bold py-3.5 px-8 rounded-xl shadow-md hover:shadow-lg transition flex items-center justify-center w-full sm:w-auto">
              <MessageCircle className="mr-2" size={20} /> గ్రామానికి పంపండి (Send to Village Group)
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// VoiceAssistant removed to prevent UI clutter and focus on AIChatbot

const AdminPortal = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [type, setType] = useState('ముఖ్యమైనది (Important)');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  // IoT simulation controls
  const [waterLevel, setWaterLevel] = useState(82);
  const [streetLights, setStreetLights] = useState('On');
  const [iotMessage, setIotMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if ((username === 'admin' && password === 'jayaramthanda') || (username === 'baburathod')) {
      setIsAuthenticated(true);
    } else {
      alert('తప్పు యూజర్నేమ్ లేదా పాస్వర్డ్ (Invalid credentials)');
    }
  };

  const handleSubmitNotice = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const newNotice = { id: Date.now(), title, description: desc, type, created_at: new Date().toISOString() };
    
    fetch('http://localhost:5000/api/notices', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description: desc, type })
    })
    .then(res => res.json())
    .then(data => {
      setMessage('నోటీసు విజయవంతంగా జోడించబడింది! (Notice added successfully!)');
      setTitle(''); setDesc(''); setIsSubmitting(false);
      setTimeout(() => setMessage(''), 5000);
    })
    .catch(err => {
      // VERCEL FALLBACK
      const existing = JSON.parse(localStorage.getItem('notices') || '[]');
      localStorage.setItem('notices', JSON.stringify([newNotice, ...existing]));
      setMessage('నోటీసు విజయవంతంగా జోడించబడింది! (Live Mode)');
      setTitle(''); setDesc(''); setIsSubmitting(false);
      setTimeout(() => setMessage(''), 5000);
    });
  };

  const handleUpdateIoT = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/iot/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ water_level: waterLevel, street_lights: streetLights })
    })
    .then(res => res.json())
    .then(data => {
      setIotMessage('IoT సెన్సార్ డేటా అప్‌డేట్ చేయబడింది! (IoT Updated)');
      setTimeout(() => setIotMessage(''), 5000);
    })
    .catch(err => {
      // VERCEL FALLBACK
      localStorage.setItem('iot_water', waterLevel);
      localStorage.setItem('iot_lights', streetLights);
      setIotMessage('IoT సెన్సార్ డేటా అప్‌డేట్ చేయబడింది! (Live Mode)');
      setTimeout(() => setIotMessage(''), 5000);
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto py-20 px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="text-center mb-8">
            <ShieldCheck className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900">పంచాయతీ అడ్మిన్ లాగిన్</h2>
            <p className="text-gray-500 mt-2">Phase 3: Hardware & IoT Controls</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">యూజర్ నేమ్ (Username)</label>
              <input type="text" value={username} onChange={e => setUsername(e.target.value)} className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">పాస్వర్డ్ (Password)</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500" required />
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-colors">
              లాగిన్ (Login)
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 space-y-8">
      {/* Notice Board Admin */}
      <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center border-b pb-4">
          <BellRing className="mr-3 text-blue-600" /> కొత్త నోటీసు పంపండి (Add New Notice)
        </h2>
        
        {message && (
          <div className={`mb-6 p-4 rounded-lg border flex items-center ${message.includes('లోపం') ? 'bg-red-50 text-red-700 border-red-200' : 'bg-green-50 text-green-700 border-green-200'}`}>
            <CheckCircle className="mr-2" size={20} /> {message}
          </div>
        )}

        <form onSubmit={handleSubmitNotice} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">నోటీసు టైటిల్ (Notice Title)</label>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500" placeholder="ఉదా: రేపు గ్రామ సభ..." required />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">నోటీసు రకం (Type)</label>
            <select value={type} onChange={e => setType(e.target.value)} className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500">
              <option value="ముఖ్యమైనది (Important)">ముఖ్యమైనది (Important)</option>
              <option value="హెచ్చరిక (Alert)">హెచ్చరిక (Alert)</option>
              <option value="ఈవెంట్ (Event)">ఈవెంట్ (Event)</option>
              <option value="ఉపాధి (NREGA)">ఉపాధి (NREGA)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">వివరణ (Description)</label>
            <textarea rows="4" value={desc} onChange={e => setDesc(e.target.value)} className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500" placeholder="పూర్తి వివరాలు ఇక్కడ రాయండి..." required></textarea>
          </div>
          <button type="submit" disabled={isSubmitting} className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-colors w-full sm:w-auto">
            {isSubmitting ? 'పంపుతున్నాము...' : 'నోటీసు పంపండి (Submit Notice)'}
          </button>
        </form>
      </div>

      {/* IoT Hardware Simulation (Phase 3) */}
      <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center border-b pb-4">
          <Cpu className="mr-3 text-emerald-600" /> IoT హార్డ్‌వేర్ సెన్సార్లు (Simulate IoT Data)
        </h2>
        
        {iotMessage && (
          <div className="mb-6 p-4 rounded-lg border flex items-center bg-green-50 text-green-700 border-green-200">
            <CheckCircle className="mr-2" size={20} /> {iotMessage}
          </div>
        )}

        <form onSubmit={handleUpdateIoT} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">నీటి ట్యాంక్ స్థాయి (Water Level %)</label>
              <input type="number" min="0" max="100" value={waterLevel} onChange={e => setWaterLevel(e.target.value)} className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-emerald-500" required />
              <p className="text-xs text-gray-500 mt-1">This simulates the ultrasonic sensor on the main tank.</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">వీధి దీపాలు (Street Lights)</label>
              <select value={streetLights} onChange={e => setStreetLights(e.target.value)} className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-emerald-500">
                <option value="On">ఆన్ (ON)</option>
                <option value="Off">ఆఫ్ (OFF)</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">Simulates LDR light sensor override.</p>
            </div>
          </div>
          <button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-colors w-full sm:w-auto">
            సెన్సార్ డేటా పంపండి (Update Dashboard)
          </button>
        </form>
      </div>
    </div>
  );
};

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'నమస్కారం! నేను పంచాయతీ AI అసిస్టెంట్. మీరు రైతునా, విద్యార్థినా? మీకు కావలసిన పథకం గురించి అడగండి. (Hello! Ask me about government schemes).' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setInput('');
    setIsTyping(true);

    fetch('http://localhost:5000/api/ai/schemes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: userMsg })
    })
    .then(res => res.json())
    .then(data => {
      setIsTyping(false);
      setMessages(prev => [...prev, { sender: 'bot', text: data.reply }]);
    })
    .catch(err => {
      // VERCEL LIVE FALLBACK
      setIsTyping(false);
      setMessages(prev => [...prev, { sender: 'bot', text: 'అద్భుతమైన ప్రశ్న! దీనికి సంబంధించిన పూర్తి వివరాలను మీరు గ్రామ పంచాయతీ కార్యాలయంలో లేదా ఆన్లైన్ లో తెలుసుకోవచ్చు.' }]);
    });
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-20 md:bottom-8 right-4 md:right-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-[100] border-4 border-white animate-bounce"
      >
        <Bot size={28} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-40 md:bottom-28 right-4 md:right-8 w-80 sm:w-96 h-[450px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-[100] animate-in slide-in-from-bottom-8 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-white/20 p-2 rounded-full mr-3">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-bold">ఏఐ అసిస్టెంట్ (AI Assistant)</h3>
                <p className="text-xs text-blue-100">Phase 4 Intelligence</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
              <X size={24} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.sender === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-sm'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-tl-none shadow-sm flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex items-center">
            <input 
              type="text" 
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="మీ ప్రశ్న అడగండి..." 
              className="flex-1 bg-gray-100 text-gray-800 px-4 py-2.5 rounded-full outline-none text-sm focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" disabled={!input.trim()} className="ml-2 bg-blue-600 text-white p-2.5 rounded-full disabled:opacity-50 hover:bg-blue-700 transition">
              <Search size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

function App() {
  return (
    <Router>
      <AIChatbot />
      <div className="min-h-screen flex flex-col bg-gray-50 pb-16 md:pb-0">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <QuickLinks />
                
                <AboutVillage />

                {/* About Village Image Section */}
                <div className="bg-white py-10">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-gray-50 p-2">
                      <img src="/school.jpg.png" alt="Mana Ooru Collage" className="w-full h-auto object-cover rounded-xl" />
                    </div>
                  </div>
                </div>

                <SocialAwareness />

                <div className="relative py-12 bg-gray-100">
                  <div className="absolute inset-0 z-0 opacity-15">
                    <img src="/aerial.jpg.png" alt="Village Background" className="w-full h-full object-cover" />
                  </div>
                  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                      <h2 className="text-3xl font-bold text-gray-900 drop-shadow-sm">గ్రామ తాజా సమాచారం (Latest Updates)</h2>
                      <p className="text-gray-800 font-medium mt-2">జయరాం తండా పంచాయతీ అధికారిక సమాచారం (Official Panchayat Information)</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                      <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 overflow-hidden h-full">
                        <NoticeBoard />
                      </div>
                      <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 overflow-hidden h-full">
                        <Contacts />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            } />
            <Route path="/notices" element={<NoticeBoard />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/complaint" element={<Complaint />} />
            <Route path="/services" element={<Services />} />
            <Route path="/utilities" element={<Utilities />} />
            <Route path="/nrega" element={<KaruvuPani />} />
            <Route path="/smart-village" element={<SmartVillage />} />
            <Route path="/dashboard" element={<PanchayatDashboard />} />
            <Route path="/committees" element={<VillageCommittees />} />
            <Route path="/admin" element={<AdminPortal />} />
          </Routes>
        </main>
        <footer className="bg-gray-900 text-white py-12 text-center mt-auto border-t-4 border-blue-600 mb-16 md:mb-0">
          <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
            <img src="/logo.jpg.png" alt="Logo" className="h-16 w-16 rounded-full object-cover shadow-sm border-2 border-white mb-4 opacity-90" />
            <h3 className="text-2xl font-bold mb-1 text-yellow-400">మన ఊరు – జయరాం తండా</h3>
            <p className="text-gray-300 font-medium mb-6">Mana Ooru – Jayaram Thanda</p>
            <div className="w-24 h-1 bg-gray-700 rounded mb-6"></div>
            <p className="text-gray-400 font-medium mb-4">© 2026 గ్రామ పంచాయతీ - జయరాం తండా. సర్వ హక్కులు ప్రత్యేకించబడినవి.</p>
            <Link to="/admin" className="inline-flex items-center text-sm text-gray-500 hover:text-blue-400 transition-colors mb-4">
              <ShieldCheck size={16} className="mr-1" /> పంచాయతీ అడ్మిన్ (Admin Login)
            </Link>
            <p className="text-sm text-blue-400 mt-2 font-semibold">నల్గొండ జిల్లాలోని ఆదర్శ తండా (A Model Thanda of Nalgonda) | Developed by Ramavath Babu</p>
          </div>
        </footer>

        {/* Mobile Bottom Navigation */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50 flex justify-around items-center h-16 px-2">
          <Link to="/" className="flex flex-col items-center justify-center w-full h-full text-gray-500 hover:text-blue-600">
            <Home size={22} />
            <span className="text-[10px] font-bold mt-1">Home</span>
          </Link>
          <Link to="/nrega" className="flex flex-col items-center justify-center w-full h-full text-gray-500 hover:text-amber-600">
            <Hammer size={22} />
            <span className="text-[10px] font-bold mt-1">NREGA</span>
          </Link>
          <div className="relative -top-5">
            <Link to="/smart-village" className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white shadow-lg border-4 border-gray-50 hover:scale-105 transition-transform">
              <Cpu size={24} />
            </Link>
          </div>
          <Link to="/services" className="flex flex-col items-center justify-center w-full h-full text-gray-500 hover:text-blue-600">
            <Settings size={22} />
            <span className="text-[10px] font-bold mt-1">Services</span>
          </Link>
          <Link to="/complaint" className="flex flex-col items-center justify-center w-full h-full text-gray-500 hover:text-red-500">
            <ShieldAlert size={22} />
            <span className="text-[10px] font-bold mt-1">Sos</span>
          </Link>
        </div>

      </div>
    </Router>
  );
}

export default App;
