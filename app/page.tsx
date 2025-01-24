import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import ExperienceTimeline from "./components/ExperienceTimeline";

import Navigation from "./components/Navigation";
import ContactForm from "./components/Contact";

const projects = [
  {
    title: "Whispering-Gallery Resonator-Qubit System",
    description: "This project demonstrates the feasibility of coupling a 2D planar aperture transmon qubit with a 3D whispering gallery mode resonator, establishing a hybrid 2.5D coupling mechanism. We are demonstrating a ”2.5D Whisper-gallery mode resonator qubit system” by using the aperture concept in the conducting boundary of the resonator for greater electromagnetic energy confinement to have better coherence time.",
    image: "https://res.cloudinary.com/dplbo6zbr/image/upload/v1737751317/portfolio_folder/dpakh6jlfidiz0f5bdvn.png",
    technologies: ["Qiskit Metal", "KQCircuits", "Ansys HFSS", "Ansys Q3D Extractor", "pyEPR"],
    demoLink: "https://drive.google.com/file/d/1rrKq_UQ3k16e9pRn3f3YYAqV00bhDQtS/view?usp=drive_link",
    githubLink: "https://github.com/uday-0702/2.5D_Whisper_gallery_resonator_qubit_system.git"
  },
  {
    title: "Four-Qubit Superconducting Chip",
    description: "I designed a 4-qubit superconducting chip using Qiskit Metal and performed analyses including Energy Participation Ratio, Capacitive, and S-parameter assessments. Using Ansys HFSS and Q3D Extractor, I optimized the chip’s performance, analyzing energy distribution, capacitance, and signal behavior for improved quantum computing efficiency.",
    image: "https://res.cloudinary.com/dplbo6zbr/image/upload/v1737750999/portfolio_folder/pmjgvkmlczglpabvhrc7.jpg",
    innerWidth: 50,
    innerHeight: 50,
    technologies: ["Ansys Q3D Extractor", "HFSS Modal", "pyEPR"],
    demoLink: "https://drive.google.com/file/d/1iC7K5EtgDdNGlkGu1793NdaW-7l0qSVK/view?usp=drive_link",
    githubLink: "https://github.com/uday-0702/Four-Qubit-Quantum-Chip-Analysis.git"
  },
  {
    title: "Energy Participation Quantization of Josephson Circuits",
    description: "During my summer break, under the guidance of Dr. Rajeev Singh, I worked on a paper by Zlatko K. Minev, focusing on quantum hardware and devices. The paper introduces the Energy Participation Ratio (EPR) method, which quantizes circuits by analyzing the energy distribution across elements and explores its application in various devices. My work involved generating EPR-related data for three key devices: Configuration A, B, and Flip-Chip (2.5D) device. The primary goal was to fine-tune a quantum device to achieve the desired Hamiltonian, Hfull. ",
    image: "https://res.cloudinary.com/dplbo6zbr/image/upload/v1737750830/portfolio_folder/b9hfe5qe9tuumgf7vzyl.png",
    technologies: ["Ansys HFSS (eigenmode analysis)", "Qiskit Metal", 'S-Parameter ( Modal Driven)'],
    demoLink: "https://drive.google.com/file/d/1zdIXOCNhKUA-u7IWLnf8B8hiPjFY4ReB/view?usp=drive_link",
    githubLink: "https://github.com/uday-0702/Energy-Participation-Quantization-of-Josephson-Circuits.git"
  },
  {
    title: "Exploratory Project",
    description: "  The Superconducting Resonators with Voltage-Controlled Frequency and Nonlinearity project, focuses on developing voltage-tunable superconducting circuits for quantum computing. The Projects explores integrating gated InAs-Al Josephson junctions with coplanar waveguide resonators to enhance quantum computing through dynamic tunability and improved superconducting qubit performance.",
    image: "https://res.cloudinary.com/dplbo6zbr/image/upload/v1737750734/portfolio_folder/sxbrp3tgjvezwsqlz4xf.jpg",
    technologies: ["Ansys HFSS", "Qiskit-Metal  "],
    demoLink: "https://drive.google.com/file/d/1ZOmZW1usuHb_mFAqADNN9JPDfk6shC9u/view?usp=drive_link",

  },

];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />

      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-12">Experience</h2>
          <ExperienceTimeline />
        </div>
      </section>

      <section id="currentWork" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-12">Current Work :</h2>
          <CurrentComp />
        </div>
      </section>

      <section id="futureWork" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-5">
          <h2 className="text-3xl font-bold text-navy">Future Ideas :</h2>
          <InsightsSection />
        </div>
      </section>

    </div>
  );
};

export default Index;

const currentObj = {
  title: "Plasmon-Magnon Coupling in Hybrid Quantum Devices",
  description: "I am currently working on the development of a novel quantum device that demonstrates plasmon-magnon coupling. My primary focus is on reproducing a research paper on Plasmon-Induced Transparency (PIT) by designing a metamaterial composed of a circular ring resonator (CRR) and a split ring resonator (SRR). The CRR is fabricated using the superconducting material Yttrium Barium Copper Oxide (YBCO), which enables enhanced electromagnetic properties and tunability. At present, I am exploring the concept of Magnetic Localized Surface Transmons (MLSTs) and investigating their excitation mechanisms using periodic circular groove structures. This study aims to achieve efficient energy transfer and strong coupling effects, paving the way for potential applications in quantum information processing.",
  // image: "./public/plasmon-magnon.png",
  technologies: ["Ansys HFSS", "Qiskit Metal", "MATLAB", "Comsol Multiphysics"],
  // demoLink: "https://drive.google.com/file/d/1abcXYZ/view?usp=sharing",
  // githubLink:
}

const CurrentComp = () => {
  return (
    <div className="max-w-7xl mx-auto mb-10 p-6 bg-white rounded-lg shadow-md">

      <h2 className="text-2xl font-bold text-gray-800 mb-2">{currentObj.title}</h2>

      <p className="text-gray-600 mb-4">{currentObj.description}</p>

      <div className="flex flex-wrap gap-2">
        {currentObj.technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
const InsightsSection = () => {
  const insights = [
    {
      title: "Material Analogy for Multiqubit Chips",
      description:
        "In certain materials, multiple domains exist, with each having atoms polarized in a specific direction. Similarly, in a multiqubit chip, groups of qubits can be treated as distinct 'domains,' where qubits within each group share the same dipole orientation.",
    },
    {
      title: "Domain Separation Concept",
      description:
        "In materials, domain walls prevent different domains from mixing. Analogously, in a multiqubit chip, an 'Entanglement Aura' can act as a boundary separating different entangled qubit groups, preserving coherence and minimizing interference.",
    },
    {
      title: "Benefits of the Concept",
      description:
        "Establishing correlations between chip properties at cryogenic temperatures and material properties at room temperature can enable chip behavior predictions without extensive cryogenic testing, optimizing the design process.",
    },
    {
      title: "Potential Impact",
      description:
        "This approach can enhance superconducting chip development by reducing reliance on cryogenic experiments and improving qubit scalability and performance in quantum computing applications.",
    },
  ];

  return (
    <>
      <h3 className="text-2xl font-semibold text-navy/80">Multiqubit Chip Mimicking </h3>

      < >
        {insights.map((item, index) => (
          <div
            key={index}
            className="p-6 border-l-2 border-navy bg-gray-50 rounded-lg "
          >
            <h3 className="text-2xl font-semibold text-navy mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </>
      <ContactForm />
    </>
  );
};
