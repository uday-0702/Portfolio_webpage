import Link from "next/link";

export default function ContactInfo() {
    return (
      <div id="contact" className="max-w-2xl mx-auto shadow-md rounded-2xl p-6 bg-white border border-gray-200">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
        <div className="space-y-4 text-center">
          <p className="text-lg font-medium">Feel free to reach out to me through the following methods:</p>
          <div className="flex flex-col items-center space-y-3">
            <p className="text-gray-700">
              <strong>Email:</strong> udaymathur0702@gmail.com
            </p>
            <p className="text-gray-700">
              <strong>Phone:</strong> +91 9636266457
            </p>
            <p className="text-gray-700">
              <strong>LinkedIn:</strong> <Link target="_blank" href="https://www.linkedin.com/in/uday-mathur0702/" className="text-blue-600 hover:underline">linkedin.com/in/uday-mathur0702/</Link>
            </p>
            <p className="text-gray-700">
              <strong>GitHub:</strong> <Link target="_blank" href="https://github.com/uday-0702" className="text-blue-600 hover:underline">github.com/uday-0702</Link>
            </p>
            <p className="text-gray-700">
              <strong>Location:</strong> Varanasi, Uttar Pradesh, India
            </p>
          </div>
        </div>
      </div>
    );
  }
  