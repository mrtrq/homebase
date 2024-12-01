const ExperienceSection = () => {
    const experiences = [
        {
            title: "President - BEM Fasilkom UI",
            period: "2023 - Present",
            color: "blue",
            responsibilities: [
              "Established #MeaningfulTransformation as the collective north star, encouraging and guiding all members toward a shared vision.",
              "Simplified internal bureaucracy through internal process optimization in order to increase organizational agility",
              "Fostered relations and conducted student exchange activities with UGM, UPH, and Universiti Malaya to broaden perspectives and enrich student organization experience",
              "Launched programs for more than 160+ beneficiaries, offering a hands-on experience to organizational life and self-development process through relevant activities",
            ]
          },
          {
            title: "NovoClub",
            subtitle: "Head of Jabodetabek Region",
            color: "blue",
            responsibilities: [
              "Managed and organized 21,000+ NovoClub members to drive social and environmental initiatives through regional projects",
              "Designed and implemented programs that empowered students to develop critical skills and make meaningful contributions to their communities",
              "Cultivated a culture of growth, collaboration, and purpose for all members"
            ]
          }
      
    ];
    return(
        <section id="experience" className="min-h-screen p-8 md:p-16 bg-gradient-to-br from-blue-50 to-red-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Leadership Experience</h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`border-l-4 border-${exp.color}-200 pl-4 hover:border-${exp.color}-400 transition-colors bg-white p-6 rounded-lg shadow-sm`}
              >
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                {exp.subtitle && <p className="text-gray-600">{exp.subtitle}</p>}
                {exp.period && <p className="text-gray-600 mb-2">{exp.period}</p>}
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>  
    );
};

export default ExperienceSection;