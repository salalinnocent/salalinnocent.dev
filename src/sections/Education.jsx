import uppsala from "../assets-webp/uppsala.webp";
import forman from "../assets-webp/forman.webp";

const Education = () => {
    return (
        <section id="education" className="max-container bg-black mt-20 px-4">
            <div className="flex flex-col items-center w-full space-y-8">
                <h1 className="text-white font-tertiary text-xl sm:text-2xl md:text-3xl lg:text-4xl border-b-4 border-red-700 mb-4">
                    Education
                </h1>

                <div className="flex flex-col gap-8 max-w-3xl w-full items-center mt-5">
                    {/* Bachelor's */}
                    <div className="flex flex-row gap-4 items-start max-w-md w-full">
                        <img
                            src={forman}
                            alt="Forman Christian College Logo"
                            className="hidden sm:block h-16 w-16 bg-white rounded-2xl object-contain"
                        />
                        <div className="flex flex-col">
                            <p className="text-white text-sm sm:text-base font-medium">
                                Bachelor's <span className="text-gray-400 text-xs">2013 - 2019</span>
                            </p>
                            <p className="text-gray-400 text-xs sm:text-sm">
                                Forman Christian College, Lahore
                            </p>
                            <p className="text-white text-sm sm:text-base font-tertiary">
                                Bachelor of Arts in Mass Communication
                            </p>
                        </div>
                    </div>

                    {/* Master's */}
                    <div className="flex flex-row gap-4 items-start max-w-md w-full">
                        <img
                            src={uppsala}
                            alt="Uppsala University Logo"
                            className="hidden sm:block h-16 w-16 bg-white rounded-2xl object-contain"
                        />
                        <div className="flex flex-col">
                            <p className="text-white text-sm sm:text-base font-medium">
                                Master's <span className="text-gray-400 text-xs">2020 - 2024</span>
                            </p>
                            <p className="text-gray-400 text-xs sm:text-sm">
                                Uppsala University, Sweden
                            </p>
                            <p className="text-white text-sm sm:text-base font-tertiary">
                                Master of Social Science in Digital Media & Society
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
