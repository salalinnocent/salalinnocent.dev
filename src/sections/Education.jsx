import uppsala from "../assets-webp/uppsala.webp";
import forman from "../assets-webp/forman.webp"


//Education Section
const Education = () => {
    return (
        <section id="education" className="max-container bg-black mt-[120px]">
            <div className="flex flex-col justify-center items-center h-full w-full space-y-10">
                <h1 className="text-white font-tertiary text-2xl sm:text-xl md:text-3xl lg:text-5xl border-b-6 border-red-700">Education</h1>

                <div className="flex flex-col gap-7">
                    {/* Bachelor's */}
                    <div className="flex flex-row gap-3 sm:px-2">
                        <div className="pt-1">
                            <img src={forman} alt="Forman Christian College Logo" className="hidden sm:block h-19 w-20 bg-white rounded-2xl object-contain" />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-white text-md md:text-md sm:text-2xl">Bachelor's <span className="text-sm text-gray-400">2013 - 2019</span></h1>
                            <h1 className="text-gray-400 text-sm md:text-md lg:text-md">Forman Christian College, Lahore</h1>
                            <p className="text-white text-md md:text-xl font-tertiary">Bachelor of Arts in Mass Communication</p>
                        </div>
                    </div>

                    {/* Master's */}
                    <div className="flex flex-row gap-3 sm:px-2">
                        <div className="pt-1">
                            <img src={uppsala} alt="Uppsala University, Sweden logo" className="hidden sm:block bg-white h-19 w-20 rounded-2xl object-contain" />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-white text-md sm:text-2xl">Master's <span className="text-gray-400 text-sm">2020 - 2024</span></h1>
                            <h1 className="text-gray-400 md:text-md lg:text-md">Uppsala University, Sweden</h1>
                            <p className="text-white text-md md:text-xl font-tertiary">Master's of Social Science in Digital Media & Society</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};


export default Education