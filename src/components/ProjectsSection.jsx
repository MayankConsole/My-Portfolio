import { Description } from "@radix-ui/react-toast"

const projects = [
    {
       id: 1,
       title: "AI Chat Bot",
       description: "A beatifull chat-bot using Gemini-api-key",
       video: "/projects/AI-Chat-bot.mp4",
       tags: ["HTML/CSS","JavaScript"],
       githubUrl: "#"
    },
    {
       id: 2,
       title: "Food Website",
       description: "A beatifull Mordern UI Food Website",
       video: "/projects/food-website.mp4",
       tags: ["HTML/CSS","JavaScript"],
       githubUrl: "#"
    },
    {
       id: 3,
       title: "Career Advisor",
       description: "Very UseFull tool that helps you to select you career",
       video: "/projects/Career-advisor.mp4",
       tags: ["React","HTML/CSS","JavaScript","Python"],
       githubUrl: "#"
    },
    {
       id: 4,
       title: "Tic Tac Toe",
       description: "A Good TimePass Game!",
       video: "/projects/Tic-Tac-Toe.mp4",
       tags: ["Java"],
       githubUrl: "#"
    },
]

export const ProjectsSection =()=>{
    return <section id="project" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span></h2>
            
            <p className="text-muted-foreground text-lg mb-12 text-center max-w-2xl mx-auto">
                Explore my latest work showcasing innovative solutions and creative development across various technologies and platforms.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project,key)=>(
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover transition-all duration-300 hover:shadow-lg">
                        {/* Video Container */}
                        <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                            <video 
                                id={`video-${key}`}
                                src={project.video} 
                                alt={project.title} 
                                className="w-full h-auto max-h-64 object-contain transition-transform duration-500 group-hover:scale-105"
                                autoPlay
                                muted
                                loop
                                playsInline
                                onClick={(e) => {
                                    if (e.target.requestFullscreen) {
                                        e.target.requestFullscreen();
                                    }
                                }}
                                style={{ cursor: 'pointer' }}
                            />
                            {/* Full Screen Hint */}
                            <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Click to fullscreen
                            </div>
                        </div>
                        
                        {/* Project Info */}
                        <div className="p-4">
                            <h3 className="font-semibold text-lg mb-2 text-foreground">{project.title}</h3>
                            <p className="text-muted-foreground text-sm">{project.description}</p>
                            
                            {/* Optional: Add technologies used */}
                            {project.technologies && (
                                <div className="flex flex-wrap gap-1 mt-3">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/MayankConsole">
                    Check My Github
                </a>
            </div>

        </div>
    </section>
}