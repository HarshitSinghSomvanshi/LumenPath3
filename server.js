import React from 'react';
import { TrendingUp, Flame, Database, Cpu } from 'lucide-react';

const Dashboard = () => {
  // Data based on your uploaded dashboard image
  const skills = [
    { name: 'Rust', score: 84, color: 'bg-emerald-400' },
    { name: 'Python', score: 81, color: 'bg-emerald-400' },
    { name: 'SQL', score: 77, color: 'bg-emerald-400' },
    { name: 'React', score: '+4.2 →', color: 'bg-emerald-400' },
    { name: 'JavaScript', score: 72, color: 'bg-emerald-500/60' },
    { name: 'AWS', score: 65, color: 'bg-emerald-500/40' },
    { name: 'Redis', score: 62, color: 'bg-emerald-500/40' },
    { name: 'React Native', score: 53, color: 'bg-emerald-600/30' },
    { name: 'Flutter', score: 26, color: 'bg-red-400/60' },
  ];

  return (
    <div className="min-h-screen bg-[#04110c] text-white p-6 font-sans">
      {/* Top Navigation Bar */}
      <div className="flex justify-between items-center mb-8 border-b border-emerald-900/30 pb-4">
        <h1 className="text-2xl font-bold text-emerald-400">LumenPath.</h1>
        <div className="flex gap-6 text-sm text-emerald-100/70">
          <span>Technology</span>
          <span>Dashboard</span>
          <span>Pricing</span>
        </div>
        <button className="bg-emerald-500 text-black px-4 py-1.5 rounded-lg text-sm font-bold">Get Started</button>
      </div>

      {/* Live Market Ticker */}
      <div className="flex gap-8 overflow-x-hidden text-[10px] uppercase tracking-widest text-emerald-400/60 mb-8 border-y border-emerald-900/20 py-2">
        <span>Python +2.6%</span><span>Rust +6.2%</span><span>React +8.7%</span><span>GenAI +15.6%</span>
      </div>

      <h2 className="text-xl font-semibold mb-6">Skill Analysis for Your Profile</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Skill Proficiency Scores */}
        <div className="bg-[#071f17]/50 border border-emerald-900/30 rounded-2xl p-6">
          <h3 className="text-sm text-emerald-200/80 mb-6">Skill Proficiency Scores</h3>
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name} className="flex items-center justify-between group">
                <span className="text-sm w-24 text-emerald-100/80">{skill.name}</span>
                <div className="flex-1 mx-4 h-1.5 bg-emerald-950 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${skill.color} transition-all duration-1000`} 
                    style={{ width: typeof skill.score === 'number' ? `${skill.score}%` : '90%' }}
                  ></div>
                </div>
                <span className={`text-xs font-mono ${skill.name === 'Flutter' ? 'text-red-400' : 'text-emerald-400'}`}>
                  {skill.score}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Salary Analysis */}
        <div className="bg-[#071f17]/50 border border-emerald-900/30 rounded-2xl p-6 flex flex-col justify-between">
          <h3 className="text-sm text-emerald-200/80 mb-4">Monthly Salary Analysis</h3>
          <div className="relative h-48 w-full border-l border-b border-emerald-900/50">
             {/* Simulated SVG Graph Path */}
             <svg className="absolute bottom-0 left-0 w-full h-full">
                <path d="M0 160 Q 100 140, 200 100 T 400 40" fill="none" stroke="#10b981" strokeWidth="3" />
                <circle cx="200" cy="100" r="4" fill="#10b981" />
             </svg>
             <div className="absolute top-10 right-4 bg-emerald-950/80 border border-emerald-500/30 p-2 rounded text-center">
                <p className="text-[10px] text-emerald-200/50 uppercase">Predicted Salary</p>
                <p className="text-lg font-bold text-emerald-400">$10,200</p>
             </div>
          </div>
          <div className="flex gap-4 mt-6">
            <button className="flex-1 bg-emerald-500 text-black py-3 rounded-xl font-bold text-sm">Improve Skills →</button>
            <button className="flex-1 border border-emerald-800 text-emerald-200 py-3 rounded-xl font-bold text-sm">Explore Roles →</button>
          </div>
        </div>

        {/* Top Skill Gaps & In-Demand */}
        <div className="space-y-6">
          <div className="bg-[#071f17]/50 border border-emerald-900/30 rounded-2xl p-6">
            <h3 className="text-sm flex items-center gap-2 text-emerald-200/80 mb-4"><Flame size={16} className="text-orange-400" /> Top Skill Gaps</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-emerald-950/30 p-3 rounded-lg border border-emerald-900/20">
                <span className="text-sm">React Native → Flutter</span>
                <span className="text-emerald-400 text-xs">+11.9%</span>
              </div>
            </div>
          </div>

          <div className="bg-[#071f17]/50 border border-emerald-900/30 rounded-2xl p-6">
            <h3 className="text-sm flex items-center gap-2 text-emerald-200/80 mb-4"><TrendingUp size={16} className="text-emerald-400" /> Top In-Demand Skills</h3>
            <div className="space-y-3">
              {['AI Ethics (+12.0%)', 'GenAI (+15.6%)', 'Flutter (+11.9%)'].map(skill => (
                <div key={skill} className="text-xs text-emerald-400/80 bg-emerald-950/20 px-3 py-2 rounded-md">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Powered By */}
      <div className="mt-12 flex justify-center gap-8 text-[10px] text-emerald-200/30 uppercase tracking-[0.2em]">
        <div className="flex items-center gap-2"><Cpu size={12}/> Powered By: Gemini 1.5</div>
        <div className="flex items-center gap-2"><Database size={12}/> Vector DB</div>
      </div>
    </div>
  );
};

export default Dashboard;