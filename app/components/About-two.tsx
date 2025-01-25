export default function About() {
    return (
        <section id="about me" className=" flex flex-col items-start justify-start text-start">
            <div
                className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >

                <h2 className="text-4xl font-bold text-gray-900 mb-6  ">About Me</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    I am deeply passionate about making quantum technologies more scalable
                    and accessible across various industry sectors, with a particular focus
                    on superconducting qubits and hybrid quantum devices. My research interests
                    span multiple interdisciplinary fields, including quantum physics, materials
                    science, and engineering, aimed at advancing the design, simulation, and
                    optimization of next-generation quantum devices.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                    My goal is to combine diverse research areas to enhance the performance
                    and scalability of quantum computers while promoting their practical
                    applicability in the space and defense sectors.
                </p>
            </div>

        </section>
    );
}
