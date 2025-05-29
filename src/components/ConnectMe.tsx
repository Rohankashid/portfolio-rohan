"use client"
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const ConnectMe = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/yourusername',
      color: 'hover:text-[#333] dark:hover:text-[#fff]',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/yourusername',
      color: 'hover:text-[#0077B5] dark:hover:text-[#0077B5]',
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: 'https://twitter.com/yourusername',
      color: 'hover:text-[#1DA1F2] dark:hover:text-[#1DA1F2]',
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:your.email@example.com',
      color: 'hover:text-[#EA4335] dark:hover:text-[#EA4335]',
    },
  ];

  return (
    <section id="connect" className="section-padding bg-black text-white">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Let's Connect
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-gray-300 mb-12 text-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 ${link.color}`}
              >
                <link.icon className="w-8 h-8 mb-3" />
                <span className="text-sm font-medium">{link.name}</span>
              </a>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-4">Based in</p>
            <p className="text-xl font-semibold text-white">Your Location</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectMe; 