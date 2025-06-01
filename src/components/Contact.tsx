import Link from 'next/link';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gray-900">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Get in Touch</h2>
        <div className="max-w-2xl">
          <p className="text-gray-300 mb-8">
            I&apos;m always open to new opportunities and collaborations.
            Feel free to reach out if you&apos;d like to work together!
          </p>
          <div className="flex gap-4">
            <a 
              href="mailto:rohankashid25753@gmail.com" 
              className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Email Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 