import Link from 'next/link';
import TechSphere from './TechSphere';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-background/50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
           From idea to execution
          </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              👋 Hi, I'm Rohan Kashid — A motivated and adaptable Computer Science Engineering graduate seeking an entry-level position to apply my technical skills and gain exposure to advanced technologies. Eager to contribute to the growth of an organization while continuously enhancing my knowledge.
          </p>
          </div>

          {/* Technologies/Skills */}
          <div className="bg-card/50 p-6 rounded-xl border border-border/50 hover:border-border/80 transition-colors">
            <p className="text-lg font-semibold mb-3 flex items-center gap-2">
              <span className="text-2xl">🛠️</span>
              Technologies I work with daily
            </p>
            <div className="flex justify-center items-center py-8">
              <TechSphere />
          </div>
          </div>

          {/* Education */}
          <div className="bg-card/50 p-6 rounded-xl border border-border/50 hover:border-border/80 transition-colors">
            <p className="text-lg font-semibold mb-3 flex items-center gap-2">
              <span className="text-2xl">🎓</span>
              <span className="text-black">Education</span>
            </p>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2"></span>
                <span>Tatyasaheb Kore Institute of Engineering And Tech., Warananagar - B.Tech CSE (2021 - 2025)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2"></span>
                <span>D.B.F. Dayanand College of Arts And Science, Solapur - Higher Secondary Education (2020 - 2021)</span>
              </li>
             </ul>
          </div>

          {/* Certifications */}
          <div className="bg-card/50 p-6 rounded-xl border border-border/50 hover:border-border/80 transition-colors">
            <p className="text-lg font-semibold mb-3 flex items-center gap-2">
              <span className="text-2xl">🏆</span>
              <span className="text-black">Certifications</span>
            </p>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2"></span>
                <span>Python for Machine Learning and Data Science - Shivaji University, Kolhapur (March 2024)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2"></span>
                <span>Data Structures and Algorithms with C++ - Apttech Solution (July 2024)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2"></span>
                <span>Introduction to Cloud Computing - Infosys, Springboard (Sep 2024)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2"></span>
                <span>AWS Cloud Practitioner Essentials - AWS</span>
              </li>
            </ul>
          </div>

          {/* Coding Platforms */}
          <div className="bg-card/50 p-6 rounded-xl border border-border/50 hover:border-border/80 transition-colors">
            <p className="text-lg font-semibold mb-3 flex items-center gap-2">
              <span className="text-2xl">💻</span>
              <span className="text-black">Coding Platforms</span>
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Completed over 100 problems on{' '}
              <a 
                href="https://leetcode.com/u/RohanUK/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-purple-500 hover:text-pink-500 transition-colors underline underline-offset-4"
              >
                leetcode
              </a>
              , honing technical skills in data structures and performance optimization.
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap items-center gap-6 text-foreground/80">
            <a 
              href="#" 
              className="flex items-center gap-2 hover:text-purple-500 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
              View Résumé
            </a>
            <a 
              href="mailto:rohankashid25753@gmail.com" 
              className="flex items-center gap-2 hover:text-purple-500 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              rohankashid25753@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 