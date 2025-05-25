import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      title: 'Tower of Hanoi',
      description: 'Recursive solution with step-by-step graphical display of disk movements.',
      technologies: ['C Programming', 'recursion'],
      image: '/project-hanoi.jpg', // Placeholder image
    },
    {
      title: 'Online Auction System',
      description: 'Web-based platform for real-time bidding and dynamic item listing.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'Django'],
      image: '/project-auction.jpg', // Placeholder image
    },
    {
      title: 'Deep fake Detection Model',
      description: 'Developing a deep fake detection system using LSTM and ResNet50.',
      technologies: ['LSTM', 'ResNet50', 'Keras', 'Tensorflow'],
      image: '/project-deepfake.jpg', // Placeholder image
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-gray-800 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 