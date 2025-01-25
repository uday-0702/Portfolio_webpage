import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

export default function ContactInfo() {
  return (
    <div
      id="contact"
      className="max-w-2xl mx-auto  rounded-2xl p-8 bg-white text-center"
    >
      <h2 className="text-4xl font-bold mb-8 text-gray-900">Contact Me</h2>
      <p className="text-lg text-gray-600 mb-6">
        Feel free to reach out through the following channels:
      </p>
      <div className="flex flex-col items-center space-y-6">
        <div className="flex space-x-6">
          <a
            href="mailto:udaymathur0702@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-600 transition-colors"
          >
            <Mail className="w-12 h-12 text-black -600" />
          </a>
          <a
            href="https://www.linkedin.com/in/uday-mathur0702/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-600 transition-colors"
          >
            <Linkedin className="w-12 h-12 text-black " />
          </a>
          <a
            href="https://github.com/uday-0702"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-600 transition-colors"
          >
            <Github className="w-12 h-12 text-black" />
          </a>
        <a
          href="tel:+919636266457"
          className="flex items-center space-x-4 text-gray-800 hover:text-blue-600 transition-colors"
        >
          <Phone className="w-8 h-8 fill-black" />
          {/* <span className="text-xl font-medium">+91 9636266457</span> */}
        </a>
        </div>
        <div className="flex items-center space-x-4 text-gray-800">
          <MapPin className="w-8 h-8 text-black" />
          <span className="text-xl font-medium">Varanasi, Uttar Pradesh, India</span>
        </div>
      </div>
    </div>
  );
}
