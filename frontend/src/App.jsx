import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
      <div className="inline-block mt-4 px-6 py-2 bg-primary/90 text-white rounded-full shadow-xl text-sm font-semibold border border-white/20">
        "This portal is for our people"
      </div>
    </div>
  </div>
);

const QuickLinks = () => {
  const links = [
    { name: 'నోటీసులు (Notices)', icon: Bell, path: '/notices', color: 'bg-red-500' },
    { name: 'స్మార్ట్ విలేజ్ (Smart Village)', icon: Cpu, path: '/smart-village', color: 'bg-cyan-600' },
    { name: 'కమిటీలు (Committees)', icon: Users, path: '/committees', color: 'bg-purple-500' },
    { name: 'పని సమాచారం (NREGA)', icon: Hammer, path: '/nrega', color: 'bg-amber-600' },
    { name: 'సదుపాయాలు (Utilities)', icon: Bus, path: '/utilities', color: 'bg-indigo-500' },
    { name: 'ఫిర్యాదు (Complaint)', icon: FileText, path: '/complaint', color: 'bg-yellow-500' },
    { name: 'సేవలు (Services)', icon: Settings, path: '/services', color: 'bg-blue-500' },
    { name: 'సంప్రదించండి (Contact)', icon: Phone, path: '/contact', color: 'bg-green-500' },
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

const NoticeBoard = () => (
  <div className="max-w-4xl mx-auto py-10 px-4">
    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center border-b pb-3">
      <Bell className="mr-3 text-red-500" /> నోటీసులు (Notice Board)
    </h2>
    <div className="space-y-4">
      {[
        { title: "పంచాయతీ సమావేశం రేపు (Panchayat Meeting Tomorrow)", date: "April 25, 2026", desc: "గ్రామస్థులందరూ ఉదయం 10 గంటలకు గ్రామ సభకు హాజరు కావాలని మనవి. (All villagers are requested to attend the Gram Sabha meeting at 10 AM.)", type: "ఈవెంట్ (Event)" },
        { title: "నీటి సరఫరా నవీకరణ (Water Supply Update)", date: "April 24, 2026", desc: "ఈరోజు సాయంత్రం 6 నుండి రాత్రి 8 గంటల వరకు తూర్పు వీధులకు నీరు సరఫరా చేయబడుతుంది. (Water will be supplied to the eastern streets between 6 PM and 8 PM today.)", type: "వినియోగం (Utility)" },
        { title: "ఉచిత వైద్య శిబిరం (Health Camp)", date: "April 28, 2026", desc: "ప్రాథమిక పాఠశాలలో ఉచిత వైద్య పరీక్షలు. దయచేసి మీ పేర్లను నమోదు చేసుకోండి. (Free medical check-up at the local primary school. Please register your names.)", type: "ఆరోగ్యం (Health)" }
      ].map((notice, i) => (
        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-primary hover:shadow-md transition">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold text-gray-800">{notice.title}</h3>
            <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded">{notice.type}</span>
          </div>
          <p className="text-sm text-gray-500 mt-1 mb-3">{notice.date}</p>
          <p className="text-gray-700">{notice.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

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
          { role: "సర్పంచ్ (Sarpanch)", name: "R. Venkat", phone: "9876543210", icon: Users },
          { role: "ఆరోగ్య కార్యకర్త (Health Worker)", name: "S. Lakshmi", phone: "9876543211", icon: CheckCircle },
          { role: "అంగన్వాడీ వర్కర్ (Anganwadi)", name: "E. Mounika", phone: "9876543212", icon: Users },
          { role: "పోలీస్ స్టేషన్ (Police Station)", name: "Peddavoora PS", phone: "100", icon: ShieldAlert },
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !desc.trim()) {
      alert("దయచేసి మీ పేరు మరియు సమస్యను పూరించండి. (Please fill out your name and the issue description.)");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setName('');
      setDesc('');

      // Clear success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
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
        <FileText className="mr-3 text-yellow-500" /> ఫిర్యాదు (Complaint System)
      </h2>
      <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 border border-gray-100">
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
            <label className="block text-sm font-semibold text-gray-700 mb-2">ఫోటో అప్‌లోడ్ (Photo Upload - Optional)</label>
            <input type="file" accept="image/*" className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-primary hover:file:bg-blue-100 transition" />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg shadow-md transition-all flex justify-center items-center"
          >
            {isSubmitting ? 'సమర్పిస్తున్నాము... (Submitting...)' : 'సమర్పించండి (Submit)'}
          </button>
        </form>
      </div>
    </div>
  );
};

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [aiQuery, setAiQuery] = useState("");
  const [aiResponse, setAiResponse] = useState(null);
  const [isAiLoading, setIsAiLoading] = useState(false);

  const handleAskAi = (e) => {
    e.preventDefault();
    if (!aiQuery.trim()) return;

    setIsAiLoading(true);
    setAiResponse(null);

    // Simulate network request to AI model
    setTimeout(() => {
      setIsAiLoading(false);
      const query = aiQuery.toLowerCase();
      if (query.includes("kisan") || query.includes("కిసాన్")) {
        setAiResponse("పీఎం కిసాన్ (PM Kisan) పథకం కింద అర్హులైన రైతులకు ఏటా ₹6,000 అందుతుంది. దరఖాస్తు చేయడానికి మీరు మీ ఆధార్ మరియు పట్టాదారు పాస్ బుక్ జిరాక్స్ కాపీలను మన పంచాయతీ ఆఫీసులో సమర్పించాలి.");
      } else if (query.includes("rythu") || query.includes("రైతు")) {
        setAiResponse("రైతు బంధు (Rythu Bandhu) ద్వారా ప్రతి ఎకరానికి ₹5,000 చొప్పున పెట్టుబడి సాయం మీ ఖాతాలో జమవుతుంది. తదుపరి విడత జూన్ రెండవ వారంలో రావచ్చు.");
      } else if (query.includes("pension") || query.includes("పెన్షన్")) {
        setAiResponse("ఆసరా పెన్షన్లు (Aasara Pensions) ప్రతి నెలా 1వ తేదీన ఉదయం 10 నుండి మధ్యాహ్నం 2 గంటల వరకు మన గ్రామ పంచాయతీ ఆఫీసులో పంపిణీ చేయబడతాయి.");
      } else if (query.includes("nrega") || query.includes("పని") || query.includes("work")) {
        setAiResponse("ప్రస్తుతం తూర్పు చెరువు వద్ద పూడికతీత పనులు మరియు రోడ్డు మరమ్మత్తు పనులు (Pond digging & Road repair) జరుగుతున్నాయి. రోజువారీ వేతనం ₹272. దరఖాస్తు కోసం 'ఉపాధి హామీ పనులు' సెక్షన్ చూడండి.");
      } else if (query.includes("payment") || query.includes("డబ్బు") || query.includes("డబ్బులు")) {
        setAiResponse("మీ ఉపాధి హామీ (NREGA) పేమెంట్ స్టేటస్ తెలుసుకోవడానికి 'ఉపాధి హామీ పనులు' సెక్షన్ లో మీ జాబ్ కార్డ్ నెంబర్ (Job Card No.) ఎంటర్ చేసి చెక్ చేసుకోండి.");
      } else {
        setAiResponse("నమస్కారం! నేను 'మన ఊరు' ఏఐ (AI) అసిస్టెంట్ ని. మీ సమస్యలు మరియు ప్రభుత్వ పథకాలకు సంబంధించిన వివరాలను తెలుగులో సులభంగా తెలియజేయడానికి నేను ఇక్కడే ఉన్నాను!");
      }
    }, 1500);
  };

  const servicesData = [
    {
      title: "ప్రభుత్వ పథకాలు (Govt Schemes)",
      desc: "రైతు బంధు, పీఎం కిసాన్, పెన్షన్ వివరాలు (Rythu Bandhu, PM Kisan, Pensions)",
      icon: FileText,
      details: [
        "రైతు బంధు (Rythu Bandhu): రైతుల కోసం ఎకరానికి ప్రతి సీజన్‌కు ₹5,000 (₹5,000 per acre per season).",
        "పీఎం కిసాన్ (PM Kisan): ఏటా 3 విడతల్లో ₹6,000 (₹6,000 per year in 3 installments).",
        "ఆసరా పెన్షన్లు (Aasara Pensions): వృద్ధులకు, వితంతువులకు నెలవారీ పెన్షన్ (Monthly pension for widows, elderly)."
      ]
    },
    {
      title: "వ్యవసాయ సమాచారం (Farming Info)",
      desc: "వాతావరణ అప్‌డేట్‌లు, మార్కెట్ ధరలు, పంటల సమాచారం (Weather, market prices, crop info)",
      icon: MapPin,
      details: [
        "వాతావరణం (Weather): ఈ వారాంతంలో తేలికపాటి జల్లులు కురుస్తాయి (Expect light showers this weekend).",
        "మార్కెట్ ధరలు (Market Prices): వరి (గ్రేడ్ A) - క్వింటాల్‌కు ₹2,203 (Paddy Grade A - ₹2,203/Quintal).",
        "పంటల చిట్కా (Crop Tip): పత్తి విత్తిన 30 రోజుల తర్వాత యూరియా వేయండి (Apply Urea for Cotton after 30 days)."
      ]
    },
    {
      title: "ఉద్యోగ నవీకరణలు (Job Updates)",
      desc: "స్థానిక ఉపాధి అవకాశాలు & ఉపాధి హామీ పథకం (Local employment & NREGA)",
      icon: Users,
      details: [
        "ఉపాధి హామీ (MGNREGA): తూర్పు సరిహద్దు వద్ద కాలువ పారిశుద్ధ్య పనులు జరుగుతున్నాయి (Ongoing canal works at eastern border).",
        "ప్రైవేట్ జాబ్ (Private Job): మండల కార్యాలయంలో డేటా ఎంట్రీ ఆపరేటర్ అవసరం (Data Entry Operator needed at Mandal Office).",
        "నైపుణ్య శిక్షణ (Skill Training): వచ్చే నెలలో ఉచిత కుట్టు శిక్షణ తరగతులు (Free tailoring classes starting next month)."
      ]
    },
    {
      title: "వ్యవసాయ సేవలు (Agriculture Services)",
      desc: "విత్తనాలు, ఎరువులు, పంట రుణాలు మరియు మట్టి పరీక్షలు (Seeds, fertilizers, loans & soil testing)",
      icon: Sprout,
      details: [
        "పంట రుణాలు (Crop Loans): తక్కువ వడ్డీతో పంట రుణాలు బ్యాంక్ లో అందుబాటులో ఉన్నాయి (Low-interest crop loans available at the bank).",
        "సబ్సిడీ విత్తనాలు (Subsidy Seeds): PACS కేంద్రంలో వేరుశనగ మరియు పత్తి విత్తనాలు (Groundnut & cotton seeds available at PACS center).",
        "మట్టి పరీక్ష (Soil Testing): ఉచిత మట్టి పరీక్షల కోసం అగ్రికల్చర్ ఆఫీసర్ ను సంప్రదించండి (Contact AO for free soil testing)."
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

          <form onSubmit={handleAskAi} className="flex flex-col sm:flex-row max-w-lg mx-auto md:mx-0 bg-white rounded-full p-2 shadow-inner mb-6">
            <input
              type="text"
              value={aiQuery}
              onChange={(e) => setAiQuery(e.target.value)}
              placeholder='"పీఎం కిసాన్ ఎలా అప్లై చేయాలి?"'
              className="flex-1 px-4 py-2 text-gray-800 outline-none rounded-l-full bg-transparent"
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
            <li><strong>సర్పంచ్ (Sarpanch):</strong> R. Venkat</li>
            <li><strong>కార్యదర్శి (Secretary):</strong> M. Srinivas</li>
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
            <li><strong>అధ్యక్షురాలు (President):</strong> Smt. K. Sunitha</li>
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
            <li><strong>అధ్యక్షుడు (President):</strong> V. Rahul</li>
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
                  <span className="font-bold">ఆశా వర్కర్ (ASHA Worker):</span> <span>M. లక్ష్మి (Lakshmi)</span>
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
                  <span className="font-bold">HM:</span> <span>K. రాంబాబు (Rambabu)</span>
                </li>
                <li className="flex justify-between border-b border-gray-50 pb-2">
                  <span className="font-bold">భోజనం (Mid-Day Meal):</span> <span className="text-green-600 font-bold">అందుబాటులో ఉంది (Yes)</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span className="font-bold">సమయం (Timings):</span> <span>9:00 AM - 4:15 PM</span>
                </li>
              </ul>
              <button onClick={(e) => handleCall(e, {name: 'K. రాంబాబు (HM)'})} className="mt-4 flex justify-center items-center w-full bg-blue-100 hover:bg-blue-200 text-blue-700 font-bold py-2 rounded-lg shadow-sm transition">
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
                <p className="text-gray-700 mb-4 flex-grow"><strong>ప్రధానోపాధ్యాయుడు (HM):</strong> K. రవీందర్ రెడ్డి</p>
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
              <p className="font-bold text-lg text-gray-900 mb-2">డీలర్ (Dealer): M. రాంబాబు (Rambabu)</p>
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
              { role: "ఎలక్ట్రీషియన్ (Electrician)", name: "K. రమేష్ (Ramesh)", phone: "9876543220", icon: Wrench },
              { role: "ప్లంబర్ (Plumber)", name: "M. శ్రీను (Srinu)", phone: "9876543221", icon: Wrench },
              { role: "ట్రాక్టర్ అద్దెకు (Tractor for Rent)", name: "V. రాము (Ramu)", phone: "9876543222", icon: Tractor },
              { role: "ఆటో డ్రైవర్ (Auto Driver)", name: "B. గోపి (Gopi)", phone: "9876543223", icon: Bus },
              { role: "పశువైద్యుడు (Veterinary Dr.)", name: "Dr. N. శివ (Shiva)", phone: "9876543224", icon: Activity },
              { role: "మెకానిక్ (Mechanic)", name: "S. భాషా (Basha)", phone: "9876543225", icon: Wrench }
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
  const [scanState, setScanState] = useState('idle');
  const [droneState, setDroneState] = useState('idle');

  const handleScan = () => {
    if (scanState !== 'idle') return;
    setScanState('scanning');
    setTimeout(() => {
      setScanState('result');
      setTimeout(() => setScanState('idle'), 4000);
    }, 2000);
  };

  const handleDrone = () => {
    if (droneState !== 'idle') return;
    setDroneState('booking');
    setTimeout(() => {
      setDroneState('booked');
      setTimeout(() => setDroneState('idle'), 4000);
    }, 2000);
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
            <span className="bg-white/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider backdrop-blur-md border border-white/30 shadow-sm z-10 uppercase">Live Sensors</span>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">స్మార్ట్ ఫార్మింగ్ (IoT Farming)</h3>
            <p className="text-gray-600 mb-6 font-medium leading-relaxed">నేల తేమ మరియు వాతావరణ ఆధారిత ఆటోమేటిక్ నీటిపారుదల వ్యవస్థ. (Soil moisture based automated irrigation system).</p>
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-bold text-gray-700 flex items-center"><Activity size={16} className="mr-2 text-green-500"/> నేల తేమ (Soil Moisture):</span>
                <span className="text-green-700 font-extrabold bg-green-100 px-3 py-1 rounded-lg">42% (Optimal)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-gray-700 flex items-center"><Activity size={16} className="mr-2 text-red-500"/> మోటార్ (Pump Status):</span>
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-lg font-extrabold shadow-sm">OFF</span>
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
            <span className="bg-white/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider backdrop-blur-md border border-white/30 shadow-sm z-10 uppercase">AI Vision</span>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">ఏఐ పంట సంరక్షణ (AI Crop Care)</h3>
            <p className="text-gray-600 mb-6 font-medium leading-relaxed">మొబైల్ కెమెరాతో ఆకును స్కాన్ చేసి రోగాన్ని మరియు మందును తెలుసుకోండి. (Scan leaf to detect disease instantly).</p>
            <button 
              onClick={handleScan}
              disabled={scanState !== 'idle'}
              className={`w-full flex items-center justify-center border-2 font-bold py-3.5 rounded-xl transition-colors shadow-sm ${scanState === 'result' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100 hover:border-indigo-300'}`}>
              {scanState === 'idle' && <><Scan className="mr-2" size={20} /> మొక్కను స్కాన్ చేయండి (Scan)</>}
              {scanState === 'scanning' && <><Scan className="mr-2 animate-spin" size={20} /> Scanning... 🔍</>}
              {scanState === 'result' && <><CheckCircle className="mr-2" size={20} /> No Disease Detected ✅</>}
            </button>
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
            <span className="bg-white/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider backdrop-blur-md border border-white/30 shadow-sm z-10 uppercase">E-Sanjeevani</span>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">టెలిమెడిసిన్ (Telemedicine)</h3>
            <p className="text-gray-600 mb-6 font-medium leading-relaxed">ఇంటి నుండే వీడియో కాల్ ద్వారా స్పెషలిస్ట్ డాక్టర్‌ను సంప్రదించండి. (Consult specialist doctors via video call).</p>
            <div className="flex items-center p-4 bg-rose-50 rounded-2xl border border-rose-100 shadow-sm">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-rose-600 font-black text-xl mr-4 shadow-sm border border-rose-200">Dr.</div>
              <div>
                <p className="font-bold text-gray-900">Dr. Reddy (General)</p>
                <p className="text-sm text-emerald-600 font-bold flex items-center mt-1"><span className="w-2.5 h-2.5 bg-emerald-500 rounded-full mr-1.5 animate-pulse shadow-sm"></span> Online Now</p>
              </div>
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
            <span className="bg-white/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider backdrop-blur-md border border-white/30 shadow-sm z-10 uppercase">Agri-Drones</span>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">డ్రోన్ సేవలు (Agri-Drones)</h3>
            <p className="text-gray-600 mb-6 font-medium leading-relaxed">పంటకు మందు పిచికారీ మరియు భూమి సర్వే కోసం డ్రోన్ బుకింగ్. (Drone booking for pesticide spraying and land survey).</p>
            <button 
              onClick={handleDrone}
              disabled={droneState !== 'idle'}
              className={`w-full flex items-center justify-center font-bold py-3.5 rounded-xl shadow-md transition-all ${droneState === 'booked' ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-purple-600 hover:bg-purple-700 text-white'}`}>
               {droneState === 'idle' && <><Satellite className="mr-2" size={20} /> డ్రోన్ బుక్ చేయండి (Book Drone)</>}
               {droneState === 'booking' && <><Satellite className="mr-2 animate-pulse" size={20} /> Booking... ⏳</>}
               {droneState === 'booked' && <><CheckCircle className="mr-2" size={20} /> Scheduled for Tomorrow 🚁</>}
            </button>
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

const VillageDemographics = () => (
  <div className="bg-white py-12 border-t border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 drop-shadow-sm flex justify-center items-center">
          <BarChart className="mr-3 text-blue-600" /> గ్రామ జనాభా (Village Demographics)
        </h2>
        <p className="text-gray-600 font-medium mt-2">ఎన్నికలు మరియు ప్రణాళికల కోసం తాజా గణాంకాలు (Latest stats for elections & planning)</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
          <Users className="w-12 h-12 mx-auto text-blue-600 mb-3 opacity-80" />
          <p className="text-sm text-gray-600 font-bold mb-1">మొత్తం జనాభా (Total)</p>
          <h3 className="text-4xl font-black text-blue-900">4,250</h3>
        </div>
        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
          <Users className="w-12 h-12 mx-auto text-indigo-600 mb-3 opacity-80" />
          <p className="text-sm text-gray-600 font-bold mb-1">పురుషులు (Male)</p>
          <h3 className="text-4xl font-black text-indigo-900">2,150</h3>
        </div>
        <div className="bg-gradient-to-br from-pink-50 to-pink-100 border border-pink-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
          <Users className="w-12 h-12 mx-auto text-pink-600 mb-3 opacity-80" />
          <p className="text-sm text-gray-600 font-bold mb-1">మహిళలు (Female)</p>
          <h3 className="text-4xl font-black text-pink-900">2,100</h3>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition transform hover:-translate-y-1 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">2026</div>
          <CheckSquare className="w-12 h-12 mx-auto text-green-600 mb-3 opacity-80" />
          <p className="text-sm text-gray-600 font-bold mb-1">మొత్తం ఓటర్లు (Voters)</p>
          <h3 className="text-4xl font-black text-green-900">3,120</h3>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 pb-16 md:pb-0">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <QuickLinks />
                
                <VillageDemographics />

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
                      <h2 className="text-3xl font-bold text-gray-900 drop-shadow-sm">Recent Updates</h2>
                      <p className="text-gray-800 font-medium mt-2">"Simple, official, and reliable"</p>
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
            <Route path="/committees" element={<VillageCommittees />} />
          </Routes>
        </main>
        <footer className="bg-gray-900 text-white py-12 text-center mt-auto border-t-4 border-blue-600 mb-16 md:mb-0">
          <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
            <img src="/logo.jpg.png" alt="Logo" className="h-16 w-16 rounded-full object-cover shadow-sm border-2 border-white mb-4 opacity-90" />
            <h3 className="text-2xl font-bold mb-1 text-yellow-400">మన ఊరు – జయరాం తండా</h3>
            <p className="text-gray-300 font-medium mb-6">Mana Ooru – Jayaram Thanda</p>
            <div className="w-24 h-1 bg-gray-700 rounded mb-6"></div>
            <p className="text-gray-400 font-medium">© 2026 Smart Village Initiative. All rights reserved.</p>
            <p className="text-sm text-blue-400 mt-2 font-semibold">Connecting our village digitally | Developed by Jayaram Thanda Team</p>
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
