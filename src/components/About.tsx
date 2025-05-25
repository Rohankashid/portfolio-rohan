import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom flex flex-col lg:flex-row items-start gap-12">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            I'm Rohan Kashid. I live in <br /> India, where I build the future.
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            👋 Hi, I'm Rohan Kashid — {`A motivated and adaptable Computer Science Engineering graduate seeking an entry-level position to apply my technical skills and gain exposure to advanced technologies. Eager to contribute to the growth of an organization while continuously enhancing my knowledge.`}
          </p>

          {/* Technologies/Skills */}
          <div className="mb-6">
            <p className="text-lg font-semibold text-white mb-2">🛠️ Technologies I work with daily:</p>
            <p className="text-gray-300">
              {`C/C++, Python, Java, JavaScript, ExpresJS, NodeJS, npm, Postman, GitHub, VScode, Pycharm, Eclipse, MySQL, MongoDB, AWS`}
            </p>
          </div>

          {/* Education (simplified for this layout) */}
          <div className="mb-6">
             <p className="text-lg font-semibold text-white mb-2">Education:</p>
             <ul className="list-disc list-inside text-gray-300">
               <li>Tatyasaheb Kore Institute of Engineering And Tech., Warananagar - B.Tech CSE (2021 - 2025)</li>
               <li>D.B.F. Dayanand College of Arts And Science, Solapur - Higher Secondary Education (2020 - 2021)</li>
               <li>English School Narkhed, Solapur - Secondary Education (2018 - 2019)</li>
             </ul>
          </div>

          {/* Certifications (simplified) */}
           <div className="mb-6">
             <p className="text-lg font-semibold text-white mb-2">Certifications:</p>
             <ul className="list-disc list-inside text-gray-300">
               <li>Python for Machine Learning and Data Science - Shivaji University, Kolhapur (March 2024)</li>
               <li>Data Structures and Algorithms with C++ - Apttech Solution (July 2024)</li>
               <li>Introduction to Cloud Computing - Infosys, Springboard (Sep 2024)</li>
               <li>AWS Cloud Practitioner Essentials - AWS</li>
             </ul>
          </div>

          {/* Coding Platforms (simplified) */}
           <div className="mb-6">
             <p className="text-lg font-semibold text-white mb-2">Coding Platforms:</p>
             <p className="text-gray-300">
               Completed over 100 problems on <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline text-white">leetcode</a>, honing technical skills in data structures and performance optimization.
             </p>
          </div>


          {/* Notable Projects (simplified) */}
          <div className="mb-6">
            <p className="text-lg font-semibold text-white mb-2">📌 Notable Projects:</p>
            <ul className="list-disc list-inside text-gray-300">
              <li>Tower of Hanoi: Recursive solution with step-by-step graphical display.</li>
              <li>Online Auction System: Web-based platform for real-time bidding and dynamic listing.</li>
              <li>Deep fake Detection Model: Developing using LSTM and ResNet50.</li>
            </ul>
          </div>

        </div>

        {/* Right Content: Image and Links */}
        <div className="lg:w-1/3 flex flex-col items-center lg:items-start">
          <div className="relative w-64 h-64 rounded-xl overflow-hidden shadow-lg mb-6">
             {/* Placeholder for your image */}
             <Image
               src="/placeholder-image.jpg" // Replace with your image path
               alt="Rohan Kashid"
               layout="fill"
               objectFit="cover"
             />
          </div>

          {/* View Resume / Download */}
          <div className="flex items-center gap-4 mb-4 text-gray-300">
             <a href="#" className="hover:underline">View Résumé</a> {/* Replace # with resume link */}
             {/* Download Icon - Placeholder */}
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          </div>

          {/* Email */}
          <div className="flex items-center text-gray-300">
             {/* Email Icon - Placeholder */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
             <span className="ml-2">rohankashid25753@gmail.com</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About; 