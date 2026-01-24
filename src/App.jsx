import React from 'react';
// IMAGES - Ensure these match your filenames in src/assets/
import cert1 from './assets/cert-react.jpg'; 
import cert2 from './assets/cert-php.jpg';   
import cert3 from './assets/cert-java.jpg';  
import cert4 from './assets/cert-python.jpg'; 
import cert5 from './assets/cert-c.jpg';      
import profilePhoto from './assets/profile-photo.jpg';

// Reusable "Glass" Card Component
const Card = ({ children, className = "", title }) => (
  <div className={`bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl hover:border-white/20 transition-all duration-300 ${className}`}>
    {title && (
      <h2 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4 tracking-wide flex items-center gap-3">
        {title}
      </h2>
    )}
    {children}
  </div>
);

// Reusable Tech Badge
const TechBadge = ({ label }) => (
  <span className="text-[10px] md:text-xs font-mono bg-blue-900/30 text-blue-300 px-2 py-1 rounded border border-blue-500/20">
    {label}
  </span>
);

export default function App() {
  const certificates = [
    { title: "Frontend Master (React/JS)", date: "Nov 15, 2025", desc: "Modern front-end React framework & Responsive Design.", image: cert1 },
    { title: "PHP, MySQL & Laravel API", date: "Oct 15, 2025", desc: "Full-stack development, DB design & RESTful APIs.", image: cert2 },
    { title: "Advanced Java & MySQL", date: "Jun 15, 2025", desc: "Enterprise patterns, Reporting & DB Integration.", image: cert3 },
    { title: "Python & Flask Web App", date: "Mar 15, 2025", desc: "From basics to deploying web apps with Flask.", image: cert4 },
    { title: "C/C++ & OOP Algorithms", date: "Oct 15, 2024", desc: "Systems programming, OOP principles & Optimization.", image: cert5 }
  ];

  return (
    <div className="min-h-screen bg-black text-gray-300 font-sans selection:bg-blue-500 selection:text-white pb-12">
      
      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-900/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-900/20 rounded-full blur-[100px]"></div>
        <div className="absolute top-[40%] left-[20%] w-64 h-64 bg-cyan-900/10 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10">
        
        {/* Header Section */}
        <header className="mb-8">
          <Card className="md:flex md:items-center md:justify-between bg-gradient-to-r from-gray-900/80 to-gray-900/40 border-blue-500/10">
            <div className="flex flex-col md:flex-row items-center text-center md:text-left mb-6 md:mb-0">
              {/* Professional Logo & Photo */}
              <div className="relative mb-4 md:mb-0 md:mr-8 group">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all duration-500">
                  <img src={profilePhoto} alt="Meng Rithisak" className="w-full h-full object-cover" />
                </div>
                {/* Floating Logo Icon */}
                <div className="absolute -bottom-2 -right-2 bg-black/80 backdrop-blur-md p-2 rounded-full border border-blue-400/30 shadow-lg">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                </div>
              </div>
              
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2">
                  MENG RITHISAK
                </h1>
                <p className="text-xl text-blue-400 font-medium tracking-wide">Frontend Developer & Full-Stack Learner</p>
                <p className="text-gray-400 mt-3 max-w-xl leading-relaxed text-sm md:text-base">
                  Passionate developer who fast-tracked full-stack mastery during my freshman year. Committed to building clean, scalable applications with modern technologies.
                </p>
              </div>
            </div>
            
            {/* Quick Contact Chips */}
            <div className="flex flex-col gap-3 text-sm w-full md:w-auto">
               <div className="bg-white/5 px-4 py-3 rounded-xl border border-white/5 hover:bg-white/10 transition flex items-center group">
                 <div className="bg-blue-500/20 p-1.5 rounded-lg mr-3 text-blue-400 group-hover:text-white transition">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                 </div>
                 <span className="text-gray-300 font-mono tracking-wide">0964221831</span>
               </div>
               <div className="bg-white/5 px-4 py-3 rounded-xl border border-white/5 hover:bg-white/10 transition flex items-center group">
                 <div className="bg-blue-500/20 p-1.5 rounded-lg mr-3 text-blue-400 group-hover:text-white transition">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                 </div>
                 <span className="text-gray-300 font-mono tracking-wide">ishowskill@gmail.com</span>
               </div>
               <div className="bg-white/5 px-4 py-3 rounded-xl border border-white/5 hover:bg-white/10 transition flex items-center group">
                 <div className="bg-blue-500/20 p-1.5 rounded-lg mr-3 text-blue-400 group-hover:text-white transition">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                 </div>
                 <span className="text-gray-300">Phnom Penh, Cambodia</span>
               </div>
            </div>
          </Card>
        </header>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* --- LEFT COLUMN (4 cols) --- */}
          <div className="md:col-span-4 space-y-6">
            
            {/* Social Links */}
            <Card title="Connect">
              <div className="space-y-3">
                <a href="https://github.com/rithisak165" target="_blank" rel="noreferrer" className="block p-4 rounded-xl bg-white/5 hover:bg-blue-600/20 hover:border-blue-500/30 border border-transparent transition flex items-center justify-between group">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3 text-gray-400 group-hover:text-white transition" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                    <span className="font-semibold text-gray-300 group-hover:text-white">GitHub</span>
                  </div>
                  <span className="text-gray-500 group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a href="https://t.me/rithysak_meng" target="_blank" rel="noreferrer" className="block p-4 rounded-xl bg-white/5 hover:bg-blue-600/20 hover:border-blue-500/30 border border-transparent transition flex items-center justify-between group">
                   <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3 text-gray-400 group-hover:text-blue-300 transition" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"></path></svg>
                    <span className="font-semibold text-gray-300 group-hover:text-blue-300">Telegram</span>
                  </div>
                  <span className="text-gray-500 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </Card>

            {/* Technical Skills */}
            <Card title="Technical Stack">
              <div className="space-y-6">
                <div>
                  <h3 className="text-blue-400 font-bold mb-3 text-xs tracking-wider uppercase">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Tailwind', 'Bootstrap', 'HTML5/CSS3', 'ES6+'].map(skill => (
                      <span key={skill} className="bg-gray-800/60 text-gray-300 text-xs px-3 py-1.5 rounded-full border border-gray-700/50 hover:border-blue-500/50 hover:text-white transition cursor-default">{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-blue-400 font-bold mb-3 text-xs tracking-wider uppercase">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Laravel', 'PHP', 'Python', 'Java', 'C++', 'PostgreSQL', 'MySQL'].map(skill => (
                      <span key={skill} className="bg-gray-800/60 text-gray-300 text-xs px-3 py-1.5 rounded-full border border-gray-700/50 hover:border-blue-500/50 hover:text-white transition cursor-default">{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-blue-400 font-bold mb-3 text-xs tracking-wider uppercase">Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Git/GitHub', 'REST APIs', 'Deployment'].map(skill => (
                      <span key={skill} className="bg-gray-800/60 text-gray-300 text-xs px-3 py-1.5 rounded-full border border-gray-700/50 hover:border-blue-500/50 hover:text-white transition cursor-default">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Education */}
            <Card title="University">
               <div className="relative pl-4 border-l-2 border-blue-500/30">
                <h3 className="font-bold text-white text-lg">Norton University</h3>
                <p className="text-gray-400 text-sm mb-2">Phnom Penh</p>
                <div className="inline-block bg-blue-500/10 text-blue-400 text-xs px-2 py-0.5 rounded mb-3 border border-blue-500/20 font-mono">
                  Graduation: 2026
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  2nd-year Student. <br/> Currently focusing on computer science fundamentals and software architecture.
                </p>
              </div>
            </Card>

            {/* --- THIS IS THE NEW CARD FILLING THE EMPTY SPACE --- */}
            <Card title="Accelerated Journey">
              <div className="relative border-l-2 border-blue-500/30 pl-4 space-y-4">
                <p className="text-sm text-gray-400 leading-relaxed">
                  During my <strong className="text-white">Year 1 at Norton University</strong>, I dedicated my free time to mastering a complete software curriculum at <strong className="text-blue-300">ETEC Center</strong>.
                </p>
                
                <div className="space-y-3">
                  {/* Phase 1 */}
                  <div>
                    <h4 className="text-white text-sm font-bold flex items-center">
                       <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                       Logic & Foundation
                    </h4>
                    <p className="text-xs text-gray-500 ml-3.5 mt-1">C • C++ • Python • Flask</p>
                  </div>
                  
                  {/* Phase 2 */}
                  <div>
                    <h4 className="text-white text-sm font-bold flex items-center">
                       <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                       Data & Enterprise
                    </h4>
                    <p className="text-xs text-gray-500 ml-3.5 mt-1">Java • SQL • MySQL</p>
                  </div>

                  {/* Phase 3 */}
                  <div>
                    <h4 className="text-white text-sm font-bold flex items-center">
                       <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                       Modern Web Stack
                    </h4>
                    <p className="text-xs text-gray-500 ml-3.5 mt-1">HTML • CSS • JS • React</p>
                    <p className="text-xs text-gray-500 ml-3.5 mt-0.5">Tailwind • Bootstrap</p>
                    <p className="text-xs text-gray-500 ml-3.5 mt-0.5">PHP • Laravel</p>
                  </div>
                </div>
              </div>
            </Card>
            {/* ---------------------------------------------------- */}

          </div>

          {/* --- RIGHT COLUMN (8 cols) --- */}
          <div className="md:col-span-8 space-y-6">
            
            {/* Projects */}
            <Card title="Featured Projects">
              <div className="space-y-8">
                
                {/* Project 1 */}
                <div className="group pl-4 border-l-2 border-gray-700 hover:border-blue-500 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition">E-Commerce Web App</h3>
                    <span className="text-[10px] uppercase tracking-wider bg-blue-900/40 px-2 py-1 rounded text-blue-200 border border-blue-500/20">Private Repo</span>
                  </div>
                  <div className="flex gap-2 mb-3">
                     <TechBadge label="React" />
                     <TechBadge label="Laravel" />
                     <TechBadge label="MySQL" />
                  </div>
                  <ul className="list-disc list-inside text-sm text-gray-400 space-y-1.5 ml-1 marker:text-blue-500">
                    <li>Designed responsive product catalog with filtering capabilities.</li>
                    <li>Implemented user auth, shopping cart, and backend RESTful API.</li>
                    <li>Optimized database queries for high performance.</li>
                  </ul>
                </div>
                
                {/* Project 2 */}
                <div className="group pl-4 border-l-2 border-gray-700 hover:border-blue-500 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition">Task Management System</h3>
                    <span className="text-[10px] uppercase tracking-wider bg-blue-900/40 px-2 py-1 rounded text-blue-200 border border-blue-500/20">Private Repo</span>
                  </div>
                  <div className="flex gap-2 mb-3">
                     <TechBadge label="React" />
                     <TechBadge label="PHP" />
                     <TechBadge label="PostgreSQL" />
                  </div>
                  <ul className="list-disc list-inside text-sm text-gray-400 space-y-1.5 ml-1 marker:text-blue-500">
                    <li>Full-stack CRUD application with real-time dashboard updates.</li>
                    <li>Secure backend API implementation with strict input validation.</li>
                  </ul>
                </div>

                {/* Project 3 */}
                <div className="group pl-4 border-l-2 border-gray-700 hover:border-blue-500 transition-colors">
                   <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition">Portfolio & Learning</h3>
                    <a href="https://github.com/rithisak165" className="text-[10px] uppercase tracking-wider bg-green-900/40 px-2 py-1 rounded text-green-200 border border-green-500/20 hover:bg-green-800/60 transition">Public Repo</a>
                  </div>
                  <div className="flex gap-2 mb-3">
                     <TechBadge label="Python" />
                     <TechBadge label="Flask" />
                     <TechBadge label="C++" />
                  </div>
                  <ul className="list-disc list-inside text-sm text-gray-400 space-y-1.5 ml-1 marker:text-blue-500">
                    <li>Algorithm implementations and practice projects on GitHub.</li>
                    <li>Python scripts and Flask web applications.</li>
                  </ul>
                </div>

              </div>
            </Card>

            {/* Certificates */}
            <Card title="Professional Certificates">
              <p className="text-gray-400 text-sm mb-6 italic">Issued by ETEC Center - Engineering of Technology</p>
              <p className="text-gray-400 text-sm mb-6 italic">I learned all this course in my first year of University</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certificates.map((cert, index) => (
                  <div key={index} className="bg-black/20 p-5 rounded-xl border border-white/5 hover:border-blue-500/30 hover:bg-black/40 transition group relative overflow-hidden flex flex-col h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10 flex flex-col flex-grow">
                      <h4 className="font-bold text-gray-100 text-base mb-1 group-hover:text-blue-300 transition line-clamp-1">{cert.title}</h4>
                      <p className="text-xs text-blue-400 mb-3 font-mono">{cert.date}</p>
                      <p className="text-sm text-gray-500 leading-snug mb-4 flex-grow">{cert.desc}</p>
                    </div>
                    <a href={cert.image} target="_blank" rel="noreferrer" className="mt-auto relative w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg hover:from-blue-700 hover:to-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300/50 transition-all shadow-lg hover:shadow-blue-500/30 overflow-hidden group/btn">
                      <span className="relative z-10 flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                        View Certificate
                      </span>
                      <div className="absolute inset-0 h-full w-full scale-0 rounded-lg transition-all duration-300 group-hover/btn:scale-100 group-hover/btn:bg-white/10"></div>
                    </a>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center border-t border-white/5 pt-8">
          <p className="text-gray-500 text-sm">© 2026 Meng Rithisak. All rights reserved.</p>
        </footer>

      </div>
    </div>
  );
}