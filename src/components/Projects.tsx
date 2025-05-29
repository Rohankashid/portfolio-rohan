import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      title: 'Tower of Hanoi',
      description: 'Recursive solution with step-by-step graphical display of disk movements.',
      technologies: ['C Programming', 'recursion'],
      image: '/250px-Iterative_algorithm_solving_a_6_disks_Tower_of_Hanoi.gif', // Placeholder image
    },
    {
      title: 'Online Auction System',
      description: 'Web-based platform for real-time bidding and dynamic item listing.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'Django'],
      image: '/auction.jpeg', // Placeholder image
    },
    {
      title: 'Deep fake Detection Model',
      description: 'Developing a deep fake detection system using LSTM and ResNet50.',
      technologies: ['LSTM', 'ResNet50', 'Keras', 'Tensorflow'],
      image: '/deep_fake_gif_small_final.gif', // Placeholder image
    },
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-background to-background/80">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group project-card bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-300"
                    >
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