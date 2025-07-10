import { useState } from 'react';
import githubLogo from '../assets/github.svg';
import AlertBox from '@/components/AlertBox';
import linkedinLogo from '../assets/linkedin.svg'
import discordLogo from '../assets/discord.svg'

//ContactMe.jsx
const Contactme = () => {
  const [alertMessage, setAlertMessage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/contact-me`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setAlertMessage("Message Sent Successfully!!")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setAlertMessage("Opps, Try Again Please!!")
      }
      <AlertBox message={data.message} onClose={() => setAlertMessage(null)} />;
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <section id="contact-me" className="max-container bg-black mt-[40px] sm:mt-[80px] md:mt-[100px] lg:mt-[120px]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white font-tertiary text-xl sm:text-2xl md:text-3xl lg:text-4xl border-b-4 border-red-700 mb-4">
          Contact Me
        </h1>
        <p className="text-white text-center text-sm sm:text-base md:text-lg lg:text-xl max-w-xl leading-relaxed">
          Have a question or want to work together? <br /> Leave your details and I’ll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col mt-8 w-full max-w-xl">
          <AlertBox message={alertMessage} onClose={() => setAlertMessage(null)} />
          <div className="p-3">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full placeholder-gray-400 border border-gray-700 p-3 text-white text-sm sm:text-base bg-transparent"
            />
          </div>
          <div className="p-3">
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full placeholder-gray-400 border border-gray-700 p-3 text-white text-sm sm:text-base bg-transparent"
            />
          </div>
          <div className="p-3">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full h-40 placeholder-gray-400 border border-gray-700 p-3 text-white text-sm sm:text-base bg-transparent resize-none"
            />
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="border-b-2 border-red-700 text-white font-primary text-sm sm:text-base"
            >
              Submit
            </button>
          </div>

          <div className="flex flex-col items-center justify-center pt-3">
            <div className="flex gap-3">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/salal-innocent/" target="_blank">
                <div className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center bg-white  sm:bg-gradient-to-br sm:from-blue-500 sm:to-blue-700 border-2 border-blue-900 rounded-full overflow-hidden">
                  <img src={linkedinLogo} alt="LinkedIn" className="h-7 w-7 object-contain" />
                </div>
              </a>
              {/* GitHub */}
              <a href="https://github.com/salalinnocent" target="_blank" >
                <div className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center bg-white sm:bg-gradient-to-br sm:from-gray-200 sm:to-gray-500 border-2 border-red-700 rounded-full overflow-hidden">
                  <img src={githubLogo} alt="GitHub" className="h-6 w-6 object-contain" />
                </div>
              </a>


              {/* Discord */}
              <a href="https://discord.com/users/565877564024029195" target="_blank">
                <div className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center bg-white sm:bg-gradient-to-br sm:from-indigo-500 sm:to-purple-700 border-2 border-indigo-800 rounded-full overflow-hidden">
                  <img src={discordLogo} alt="Discord" className="h-6 w-6 object-contain" />
                </div>
              </a>
            </div>

            <p className="text-gray-400 pb-3 pt-2 text-xs sm:text-sm">Salal Innocent ©2025</p>
          </div>

        </form>
      </div>
    </section>
  );
};

export default Contactme;
