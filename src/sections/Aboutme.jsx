

//
const Aboutme = () => {
    return (
        <>
            <section id="about-me" className="max-container bg-black mt-[120px]">
                <div className="flex flex-col justify-center items-center h-full w-full">
                    <h1 className="text-white font-tertiary text-2xl sm:text-xl md:text-3xl lg:text-5xl border-b-6 border-red-700">About me</h1>
                    <p className="text-gray-300 font-tertiary sm:text-xl md:text-3xl lg-text-2xl border-1 border-gray-800 mt-4
                    text-center p-5 w-[350px] sm:w-[530px] lg:w-[850px]">Hi, I am Salal Innocent, Self-taught programmer with a passion for web development and a strong focus on
                        JavaScript, React.js, and Node.js. I specialize in building dynamic and efficient web
                        solutions, having hands-on experience in both frontend and backend development. My
                        technical expertise spans frameworks like React.js, Node.js, and databases such as
                        MongoDB and Firebase. I am proficient in tools like Alacritty, and Git, ensuring a
                        smooth development workflow. Always learning and applying new concepts, my goal is to
                        create impactful digital experiences, when I am not coding I play DOTA2 with my friends &<br /> <span className="text-red-500 font-bold text-2xl">I use Neovim BTW...</span></p>
                </div>
            </section>
        </>
    )
}

export default Aboutme