import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "FlowAI",
    description: "FlowAI unifies customer insights by integrating data from LinkedIn, Salesforce, HubSpot, and other CRMs into a single platform.",
    image: "/projects/project1.png",
    tags: ["React", "Node.js", "AWS DevOps"],
  },
  {
    id: 2,
    title: "VR Video Recommendation",
    description:
      "Graph Learning–Powered VR Video Recommendation with Adaptive Bitrate Streaming.",
    image: "/projects/project2.png",
    tags: ["Docker", ".NET Core", "PyTorch"],
  },
  {
    id: 3,
    title: "BYJU's",
    description:
      "Byju's is an ed-tech platform, developed React.js dashboards and Spring Boot microservices.",
    image: "/projects/project3.png",
    tags: ["React", "Spring Boot", "RESTful API"],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-15 px-2 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Below are some of my projects, and companies I enjoyed working with. 
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/udaycancode"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
