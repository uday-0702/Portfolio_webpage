interface Experience {
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
  skills: string[];
}

const experiences: Experience[] = [
  {
    company: "Silicofeller Quantum",
    position: "Quantum Superconducting Chip Developer Intern",
    period: "December 2024",
    responsibilities: [
      "Designed a 25-qubit quantum chip using Qiskit Metal and KQCircuits",
      "Designed Customize Qubit and Waveguide Coupler",
      "Conducted comprehensive simulations in Ansys Electronics Desktop",
      "Compiled simulation results into a detailed technical report"
    ],
    skills: ["Qiskit Metal", "KQCircuits", "Ansys HFSS", "Q3D Extractor", "Python"]
  },
  {
    company: "University Research Project",
    position: "Researcher",
    period: "2023 - Present",
    responsibilities: [
      "Simulated and analyzed a four-qubit superconducting chip using Ansys HFSS",
      "Performed Energy Participation Ratio (EPR) analysis with pyEPR module",
      "Reproduced devices from the 'Energy Participation Quantization of Josephson Circuits' paper",
      "Developed a hybrid quantum device demonstrating Plasmon-Magnon coupling",
      "Investigated Plasmon-induced transparency (PIT) in hybrid superconducting resonators"
    ],
    skills: ["HFSS", "Q3D Extractor", "pyEPR", "Qiskit Metal", "Python"]
  }
  // ,
  // {
  //   company: "Independent Research",
  //   position: "Quantum Technology Enthusiast",
  //   period: "2022 - Present",
  //   responsibilities: [
  //     "Exploring scalable quantum solutions for defense and space applications",
  //     "Conducting literature reviews on superconducting qubits and ion-trap systems",
  //     "Collaborating with experts in quantum hardware development",
  //     "Developing expertise in transmon qubit calibration techniques",
  //     "Engaging in open-source contributions to quantum computing frameworks"
  //   ],
  //   skills: ["Quantum Computing", "Superconducting Qubits", "Transmon Calibration", "Python", "Qiskit"]
  // }
];


const ExperienceTimeline = () => {
  return (
    <div className="space-y-12">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="relative pl-8 border-l-2 border-navy animate-fadeIn"
        >
          <div className="absolute w-4 h-4 bg-navy rounded-full -left-[9px] top-0" />
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-navy">{exp.company}</h3>
                <p className="text-gray-600">{exp.position}</p>
              </div>
              <span className="text-sm text-gray-500">{exp.period}</span>
            </div>
            <ul className="list-disc list-inside mb-4 text-gray-600 space-y-2">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;