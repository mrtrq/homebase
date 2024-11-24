const ExperienceSection = () => {
    const experiences = [
        {
            title: "Chairman - BEM Fasilkom UI",
            period: "2023 - Present",
            color: "blue",
            responsibilities: [
              "Leading a 162-person organization",
              "Developing and executing strategic initiatives",
              "Fostering collaboration between different departments"
            ]
          },
          {
            title: "NovoClub",
            subtitle: "CSR Program Manager",
            color: "blue",
            responsibilities: [
              "Successfully planned and executed community service programs",
              "Coordinated with stakeholders to maximize impact",
              "Managed program budget and resources effectively"
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