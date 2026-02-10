import { useState } from "react";
import { motion } from "framer-motion";

const Page4 = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    setSent(true);
    setTimeout(() => setSent(false), 3000); // 3 sec baad message gayab
  };

  return (
    <div id="contact" className="bg-[#ffffff] flex items-center justify-center">
      <div className="w-[95%] mb-8 bg-[#0f172a] rounded-3xl shadow-xl p-10 mx-auto flex flex-col md:flex-row gap-10">
        {/* Left Side - Text */}
        <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-snug font-[port2]">
            Your Next <span className="text-[#2563eb]">Project</span> Deserves
            The
            <span className="text-[#2563eb]"> Best Execution 🚀</span>
          </h2>

          <p className="text-[#91a0b5] mt-4 font-[port2] text-lg">
            Let’s turn your ideas into reality together.
          </p>
          <p className="text-[#91a0b5] font-[port2] text-lg mt-2">
            Whether it’s a sleek frontend, a powerful backend, or a complete
            full-stack solution — I can help you bring it to life.
          </p>
          <p className="text-[#2563eb] font-[port2] text-lg mt-2">
            Let’s create something meaningful together.
          </p>

          <p className="text-white font-medium mt-6 font-[port3]">
            Prefer Direct Connect ?
          </p>

          {/* Direct Connect Buttons */}
          <div className="flex gap-4 mt-4 justify-center md:justify-start">
            <a
              href="mailto:dakshgoswami2@gmail.com?subject=Hiring%20Inquiry%20-%20Portfolio&body=Hello%20Daksh,%0D%0A%0D%0AI%20would%20like%20to%20connect%20with%20you."
              className="px-5 py-2 bg-[#2563eb] text-white rounded-lg hover:bg-[#1d4ed8] transition font-[port2]"
            >
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/daksh-goswami-"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-[#1e293b] text-white rounded-lg hover:bg-[#334155] transition font-[port2]"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/DakshGoswami5"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-[#1e293b] text-white rounded-lg hover:bg-[#334155] transition font-[port2]"
            >
              GitHub
            </a>
          </div>

          {/* Normal Contact Info */}
          <div className="mt-6 text-gray-300 font-[port1] text-base md:text-lg">
            <p>
              Email:{" "}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=dakshgoswami2@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2563eb] hover:underline"
              >
                dakshgoswami2@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+919953173892"
                className="text-[#2563eb] hover:underline"
              >
                +91 9953173892
              </a>{" "}
              <span className="text-gray-400">(+919953173892)</span>
            </p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="md:w-1/2">
          <form
            action="https://formsubmit.co/dakshgoswami2@gmail.com"
            method="POST"
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="font-[port3] px-4 py-3 rounded-lg bg-[#1e293b] border border-[#334155] text-white placeholder-gray-400 focus:outline-none focus:border-[#2563eb]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="font-[port3] px-4 py-3 rounded-lg bg-[#1e293b] border border-[#334155] text-white placeholder-gray-400 focus:outline-none focus:border-[#2563eb]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="font-[port3] px-4 py-3 rounded-lg bg-[#1e293b] border border-[#334155] text-white placeholder-gray-400 focus:outline-none focus:border-[#2563eb]"
            ></textarea>

            <button
              type="submit"
              className="relative font-[port2] px-6 py-3 bg-[#2563eb] text-white rounded-lg hover:bg-[#1d4ed8] transition"
            >
              Send Message
            </button>

            {/* Success Animation */}
            {sent && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-green-400 font-[port2] mt-3"
              >
                ✅ Message Sent Successfully!
              </motion.p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page4;
