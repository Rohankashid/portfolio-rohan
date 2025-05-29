"use client"
import { useEffect, useRef } from 'react';
import { 
  SiCplusplus, 
  SiPython, 
  SiJavascript, 
  SiExpress, 
  SiNodedotjs, 
  SiNpm, 
  SiPostman, 
  SiGithub, 
  SiPycharm, 
  SiEclipseide, 
  SiMysql, 
  SiMongodb, 
  SiAmazon
} from 'react-icons/si';
import { FaJava, FaCode } from 'react-icons/fa';

const TechSphere = () => {
  const sphereRef = useRef<HTMLDivElement>(null);
  const technologies = [
    { icon: SiCplusplus, name: 'C++', color: '#00599C' },
    { icon: SiPython, name: 'Python', color: '#3776AB' },
    { icon: FaJava, name: 'Java', color: '#007396' },
    { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
    { icon: SiExpress, name: 'Express', color: '#000000' },
    { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
    { icon: SiNpm, name: 'npm', color: '#CB3837' },
    { icon: SiPostman, name: 'Postman', color: '#FF6C37' },
    { icon: SiGithub, name: 'GitHub', color: '#181717' },
    { icon: FaCode, name: 'VS Code', color: '#007ACC' },
    { icon: SiPycharm, name: 'PyCharm', color: '#000000' },
    { icon: SiEclipseide, name: 'Eclipse', color: '#2C2255' },
    { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
    { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
    { icon: SiAmazon, name: 'AWS', color: '#232F3E' },
  ];

  useEffect(() => {
    const sphere = sphereRef.current;
    if (!sphere) return;

    let rotation = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = sphere.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      mouseX = (e.clientX - centerX) / 50;
      mouseY = (e.clientY - centerY) / 50;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      rotation += 0.2;
      targetRotationX += (mouseY - targetRotationX) * 0.05;
      targetRotationY += (mouseX - targetRotationY) * 0.05;
      
      sphere.style.transform = `
        rotateY(${rotation}deg)
        rotateX(${targetRotationX}deg)
        rotateZ(${targetRotationY}deg)
      `;
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-80 h-80 perspective-1000">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl animate-pulse" />
      <div 
        ref={sphereRef}
        className="absolute w-full h-full transform-style-3d transition-transform duration-1000"
      >
        {technologies.map((tech, index) => {
          const angle = (index * 360) / technologies.length;
          const radius = 150;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const z = radius * Math.sin((angle * Math.PI) / 180);
          
          return (
            <div
              key={tech.name}
              className="absolute w-14 h-14 transform-style-3d transition-all duration-300 hover:scale-125"
              style={{
                transform: `translateX(${x}px) translateZ(${z}px)`,
                left: '50%',
                top: '50%',
                marginLeft: '-28px',
                marginTop: '-28px',
              }}
            >
              <div 
                className="w-full h-full flex items-center justify-center bg-card/80 backdrop-blur-md rounded-full p-3 shadow-lg hover:shadow-2xl transition-all duration-300"
                style={{
                  boxShadow: `0 0 20px ${tech.color}40`,
                }}
              >
                <tech.icon 
                  className="w-8 h-8 transition-transform duration-300 hover:scale-110" 
                  style={{ color: tech.color }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechSphere; 