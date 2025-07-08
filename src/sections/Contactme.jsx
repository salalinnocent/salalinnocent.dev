import { useState } from 'react';
import githubLogo from '../assets/github.svg';
import AlertBox from '@/components/AlertBox';

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
        setAlertMessage('Message Sent Successfully');
        try {
            const res = await fetch('http://localhost:5000/contact-me', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            <AlertBox message={data.message} onClose={() => setAlertMessage(null)} />;
        } catch (error) {
            console.log('Error:', error);
        }
    };

    return (
        <section id="contact-me"   className="max-container bg-black mt-[40px] sm:mt-[80px] md:mt-[100px] lg:mt-[120px]">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-white font-tertiary text-xl sm:text-2xl md:text-3xl lg:text-4xl border-b-4 border-red-700 mb-4">
                    Contact Me
                </h1>
                <p className="text-gray-400 text-center text-sm sm:text-base md:text-lg lg:text-xl max-w-xl leading-relaxed">
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

                    <div className="flex flex-col items-center justify-center pt-6">
                        <a href="https://github.com/salalinnocent" target="_blank" rel="noreferrer">
                            <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-600 border-2 border-red-700 rounded-full overflow-hidden">
                                <img alt="github logo" src={githubLogo} className="h-full w-full object-cover" />
                            </div>
                        </a>
                        <p className="text-gray-400 pt-2 text-xs sm:text-sm">Salal Innocent ©2025</p>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contactme;
