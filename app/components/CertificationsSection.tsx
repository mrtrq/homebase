import React from 'react';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationUrl?: string;
  image: string;
  color: string;
  skills?: string[];
}

interface CertificationItemProps {
  cert: Certificate;
}

const CertificationItem: React.FC<CertificationItemProps> = ({ cert }) => (
  <li className="py-4 border-b border-gray-100 last:border-b-0">
    <div className="space-y-2">
      <div className="flex justify-between items-start">
        <h3 className="font-semibold text-gray-800">{cert.title}</h3>
        <span className="text-sm text-gray-500">{cert.date}</span>
      </div>
      <p className="text-gray-600 text-sm">{cert.issuer}</p>
      {cert.credentialId && (
        <p className="text-gray-500 text-sm">Credential ID: {cert.credentialId}</p>
      )}
      {cert.verificationUrl && (
        <a
          href={cert.verificationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 text-sm inline-block"
        >
          Verify Certificate →
        </a>
      )}
      {cert.skills && cert.skills.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {cert.skills.map((skill, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  </li>
);

interface CertificationsSectionProps {
  certifications?: Certificate[];
}

const CertificationsSection: React.FC<CertificationsSectionProps> = ({ certifications = [] }) => {
  const defaultCertifications: Certificate[] = [
    {
      title: "Associate Data Scientist",
      issuer: "Datacamp",
      date: "2024",
      credentialId: "DSA0012369439354",
      verificationUrl: "https://www.datacamp.com/certificate/DSA0012369439354",
      image: "/certificates/datacamp associate data scientist.webp",
      color: "bg-blue-50",
      skills: ["Cloud Computing", "Azure Services"]
    },
    {
      title: "Data Driven Decision Making",
      issuer: "PwC",
      date: "2024",
      credentialId: "DQSB3AH4L6U6",
      verificationUrl: "https://www.coursera.org/account/accomplishments/certificate/DQSB3AH4L6U6",
      image: "/certificates/Enterprise_Data_Science_in_Practice_Badge20240622-7-rho53b.webp",
      color: "bg-blue-50",
      skills: ["Cloud Computing", "Azure Services"]
    },
    {
      title: "Enterprise Data Science in Practice",
      issuer: "IBM",
      date: "2024",
      credentialId: "ea5d2ab7-6003-420a-83b1-d46734471e28",
      verificationUrl: "https://www.credly.com/badges/ea5d2ab7-6003-420a-83b1-d46734471e28/public_url",
      image: "/certificates/Data Driven Decision Making.webp",
      color: "bg-blue-50",
      skills: ["Cloud Computing", "AWS Services"]
    }
  ];

  const displayCertifications = certifications.length > 0 ? certifications : defaultCertifications;

  return (
    <section id="certifications" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Certificates</h2>
        <ul className="divide-y divide-gray-100 bg-white rounded-lg">
          {displayCertifications.map((cert, index) => (
            <CertificationItem key={index} cert={cert} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CertificationsSection;