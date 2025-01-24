import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
  githubLink?: string;
}

const ProjectCard = ({ title, description, image, technologies, demoLink, githubLink }: ProjectCardProps) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-fadeIn">
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <Image
          width={1500}
          height={1500}
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-semibold text-navy">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 pt-4">
          <Link
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-navy text-white rounded-full hover:bg-opacity-90 transition-colors"
          >
            Report Link
          </Link>
          {
            githubLink && (

              <Link
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border border-navy text-navy rounded-full hover:bg-navy hover:text-white transition-colors"
              >
                GitHub
              </Link>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;