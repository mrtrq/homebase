const StyledAboutText = () => {
    return (
      <div className="max-w-3xl mx-auto space-y-6 text-lg">
        <p className="leading-relaxed">
          In every challenge lies an{' '}
          <span className="font-semibold bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent">
            opportunity to innovate
          </span>
          , and I embrace the space where{' '}
          <span className="font-semibold">
            technical expertise intersects with understanding people
          </span>
          .
        </p>
        
        <p className="leading-relaxed">
          As someone passionate about{' '}
          <span className="italic">empowering initiatives</span> and{' '}
          <span className="italic">driving organizational growth</span>, I combine:
          <div className="flex flex-wrap gap-4 my-4 justify-center">
            <span className="bg-blue-50 px-4 py-2 rounded-full text-blue-600 font-medium">
              resilience
            </span>
            <span className="bg-red-50 px-4 py-2 rounded-full text-red-500 font-medium">
              adaptability
            </span>
            <span className="bg-gradient-to-r from-blue-50 to-red-50 px-4 py-2 rounded-full text-gray-700 font-medium">
              self-awareness
            </span>
          </div>
          to turn ideas into impact.
        </p>
  
        <p className="leading-relaxed">
          My{' '}
          <span className="font-semibold text-blue-600">domain expertise</span>{' '}
          equips me with the tools to address complexity, while my{' '}
          <span className="font-semibold text-red-500">intrapersonal skills</span>{' '}
          ensure solutions are thoughtful, human-centric, and impactful.
        </p>
  
        <p className="leading-relaxed font-medium text-xl text-center">
          Together, these strengths fuel my mission to{' '}
          <span className="bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent">
            create meaningful change that lasts
          </span>
          .
        </p>
      </div>
    );
  };
  
  export default StyledAboutText;
  