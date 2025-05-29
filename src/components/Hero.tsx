import Link from 'next/link';
import Image from 'next/image';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({ subsets: ["latin"] });

const Hero = () => {
  return (
    <section className="section-padding">
      <div className="container-custom flex flex-col md:flex-row items-center md:items-start justify-between min-h-[calc(100vh-80px)] pt-20">
        {/* Left Content */}
        <div className="max-w-3xl flex-grow">
          <h1 className={`${orbitron.className} text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 animate-gradient`}>
            Software Dev | Mobile & Web Developer | Developing Scalable Projects
          </h1>
          <p className="text-xl md:text-2xl mb-8 gradient-text">
            Software Engineer with interest in mobile and web development, AI/ML.
          </p>
          {/* Social Links */}
          <div className="flex gap-6 items-center gradient-text">
            <a href="https://github.com/Rohankashid" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://x.com/VascoDGaama" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">X</a> {/* Placeholder for X/Twitter */}
            <a href="https://www.linkedin.com/in/rohan-kashid/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            {/* <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a> Placeholder for Instagram */}
          </div>
        </div>

        {/* Right Visual Element Placeholder */}
        <div className="mt-12 md:mt-0 md:ml-8 w-full md:w-1/3 flex justify-center items-center">
          {/* You can add your visual element (e.g., an image or animation) here */}
          <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg">
             <Image
               src="/profile.jpg" // Replace with the actual path to your image
               alt="Rohan Kashid"
               layout="fill"
               objectFit="cover"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 