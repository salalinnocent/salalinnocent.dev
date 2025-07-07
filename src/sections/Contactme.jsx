import { useState } from 'react';
import githubLogo from '../assets/github.svg';
import AlertBox from '@/components/AlertBox';
const Contactme = () => {
    const [alertMessage, setAlertMessage] = useState(null)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setAlertMessage("Message Sent Successfully")

        try {
            const res = await fetch("http://localhost:5000/contact-me", {
                method: "Post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            const data = await res.json();
            <AlertBox message={data.message} onClose={() => setAlertMessage(null)} />
        } catch (error) {
            console.log(error, "Error");
        }
    }
    return (
        <>
            <section id="contact-me" className="max-container bg-black mt-[50px] sm:mt-[120]">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-white font-tertiary text-2xl sm:text-xl md:text-3xl lg:text-5xl border-b-6 border-red-700">Contact me</h1>
                    <p className='text-gray-400 text-center pl-4 pr-4 text-md sm:text-sm md:text-xl lg:text-2xl leading-none mt-5'>Have a question or want to work together? <br /> Leave your details and I'll get back to you as soon as possible.</p>
                    {/*Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col mt-10 h-auto w-[400px] sm:w-[620px]">
                        <AlertBox message={alertMessage} onClose={() => setAlertMessage(null)} />
                        <div className="flex flex-col p-4">
                            {/* NAME */}
                            <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="placeholder-gray-400 shadow appearance-none border border-gray-700 pl-5 pr-5 h-[54px] text-white text-xl sm:text-2xl font-primary">
                            </input>
                        </div>
                        <div className="flex flex-col p-4">
                            {/* EMAIL */}
                            <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="placeholder-gray-400 shadow appearance-none border border-gray-700 pl-5 pr-5 h-[54px] text-white text-xl sm:text-2xl font-primary">
                            </input>
                        </div>
                        <div className="flex flex-col p-4">
                            {/* MESSAGE*/}
                            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" className="placeholder-gray-400 h-[220px] focus:border-white sm:text-2xl overflow-y-auto p-4 resize-none outline-none leading-none shadow appearance-none border border-gray-700 pl-5 pr-5 text-white text-xl font-primary"
                            />
                        </div>
                        {/* Submit Button */}
                        <div className="flex justify-center items-center mt-4">
                            <button
                                type="submit"
                                className="border-b-3 border-red-700 text-white font-primary text-sm sm:text-base md:text-xl"
                            >
                                Submit
                            </button>
                        </div>

                        {/* GitHub Icon */}
                        <div className="flex flex-col items-center justify-center p-3">
                            <a href="https://github.com/salalinnocent" target="_blank">
                                <div className="flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center bg-gradient-to-br from-[var(--color-express)] to-gray-600 border-2 border-red-700 overflow-hidden rounded-full">
                                    <img src={githubLogo} className="h-full w-full object-cover" />
                                </div>
                            </a>
                            <p className="text-gray-400 pt-2 text-xs sm:text-sm">Salal Innocent ©2025</p>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}


export default Contactme