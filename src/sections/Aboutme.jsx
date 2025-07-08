const Aboutme = () => {
    return (
        <section id="about-me" className="max-container bg-black mt-[80px] px-4">
            <div className="flex flex-col justify-center items-center w-full">
                <h1 className="text-white font-tertiary text-xl sm:text-2xl md:text-3xl lg:text-4xl  border-b-4 border-red-700 mb-6">
                    About Me
                </h1>
                <p className="text-gray-300 font-tertiary text-base sm:text-lg md:text-xl lg:text-2xl text-center max-w-3xl p-4 leading-relaxed">
                    Hi, I am Salal Innocent, a self-taught programmer with a passion for web development and a strong focus on JavaScript, React.js, and Node.js—with some magic of TailwindCSS. While I enjoy working across the full stack, I am especially drawn to the frontend, where design meets logic. I specialize in building dynamic and responsive web solutions, with hands-on experience in both frontend and backend development. My technical expertise spans frameworks like React.js, Node.js, and databases such as MongoDB and Firebase. I’m also a terminal-first developer, proficient with tools like Git, Alacritty, and Neovim—where I navigate swiftly using Vim motions. Always learning and applying new concepts, my goal is to create impactful digital experiences. When I’m not coding, I’m playing DOTA2 with my friends.
                    <br />
                    <span className="text-red-500 font-bold text-xl sm:text-2xl">I use Neovim BTW...</span>
                </p>
            </div>
        </section>
    );
};

export default Aboutme;
