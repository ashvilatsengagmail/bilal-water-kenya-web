const ProjectsSection = () => {
  const projects = [
    {
      image: "/lovable-uploads/6f2fdfc6-ea20-4fdb-ba7d-393b799d26d9.png",
      location: "Nakuru County",
      description: "Commercial borehole drilling project"
    },
    {
      image: "/lovable-uploads/4a3ce73f-4fac-46e6-bf3c-0604c2711d08.png",
      location: "Machakos County", 
      description: "Community water project"
    },
    {
      image: "/lovable-uploads/f7fd5684-04a0-4b66-a8e9-2aa0f0f7e2ef.png",
      location: "Kajiado County",
      description: "Solar-powered water system"
    },
    {
      image: "/lovable-uploads/016a9021-21f0-409b-b1e8-726a2a227c89.png",
      location: "Laikipia County",
      description: "Rural community borehole"
    },
    {
      image: "/lovable-uploads/7ee5fd12-a2a3-48b0-9e8b-5f0dfd6d77e7.png",
      location: "Meru County",
      description: "School water project"
    },
    {
      image: "/lovable-uploads/7b80effe-90b6-429b-97dd-0dbc7c340791.png",
      location: "Kiambu County",
      description: "Agricultural water supply"
    }
  ];

  return (
    <section className="py-16 bg-warm-sand">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Past Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our successful water drilling projects across Kenya
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={`${import.meta.env.BASE_URL}${project.image.startsWith('/') ? project.image.slice(1) : project.image}`}
                  alt={`Project in ${project.location}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-lg font-semibold mb-1">{project.location}</h3>
                <p className="text-sm text-gray-200">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;