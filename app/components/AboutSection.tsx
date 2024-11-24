import { motion } from 'framer-motion'
import Image from 'next/image'

const AboutSection = () => {
  return(
  <section id="about" className="min-h-screen p-8 md:p-16 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl pb-5 font-bold text-gray-800">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Container */}
          <div className="flex justify-center md:justify-start pb-10">
            <div className="relative w-48 h-48 lg:w-80 lg:h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-red-100 rounded-lg transform rotate-6 transition-transform group-hover:rotate-12"></div>
              <Image
                src="/self_photo.png"
                alt="Tarreq Maulana"
                width={384}
                height={384}
                className="relative rounded-lg shadow-lg object-cover transform transition-transform hover:-translate-y-2"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 text-lg text-gray-700">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-500">
                Domain Expertise + Intrapersonal Skills
              </h3>
              
              <div className="space-y-4">
                <div className="space-y-4 leading-relaxed">
                  <p>
                    In every challenge lies an opportunity to innovate, and I embrace the space where{' '}
                    <span className="font-medium">
                      technical expertise
                    </span>{' '}
                    intersects with{' '}
                    <span className="font-bold text-black-500">
                      understanding people
                    </span>
                    .
                  </p>

                  <p>
                    As someone passionate about{' '}
                    <span className="italic">empowering initiatives</span> and{' '}
                    <span className="italic">driving organizational growth</span>, 
                    I combine:
                  </p>

                  <div className="flex flex-wrap gap-2 my-2">
                  <span className="bg-gradient-to-r from-blue-50 to-red-50 px-3 py-1 rounded-full text-gray-700 text-sm font-medium">
                      resilience
                    </span>
                    <span className="bg-gradient-to-r from-blue-50 to-red-50 px-3 py-1 rounded-full text-gray-700 text-sm font-medium">
                      adaptability
                    </span>
                    <span className="bg-gradient-to-r from-blue-50 to-red-50 px-3 py-1 rounded-full text-gray-700 text-sm font-medium">
                      self-awareness
                    </span>
                  </div>

                  <p>
                    My{' '}
                    <span className="font-medium text-cyan-600">domain expertise</span>{' '}
                    equips me with the tools to address complexity, while my{' '}
                    <span className="font-medium text-cyan-500">intrapersonal skills</span>{' '}
                    ensure solutions are thoughtful, human-centric, and impactful.
                  </p>

                  <p className="font-medium">
                    Together, these strengths fuel my mission to create{' '}
                    <span className="bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent">
                      meaningful change that lasts
                    </span>
                    .
                  </p>
                </div>

                {/* Quick Facts */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-600">Education</h4>
                    <p className="text-sm font-bold">Bachelor of Computer Science</p>
                    <p className="text-sm">University of Indonesia</p>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-600">Current Role</h4>
                    <p className="text-sm font-bold">Chairman</p>
                    <p className="text-sm">BEM Fasilkom UI 2024</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;