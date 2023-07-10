import { Header, Breadcrumb, Searchbar } from "../components";
import Image2 from "../assets/portfolio-img2.png";
import { useState } from "react";

function Projects() {
    const [SearchFramework, setSearchFramework] = useState("");

    return (
        <main className="bg-site bg-no-repeat bg-cover overflow-hidden">
            <Header />
            <div className="py-2 lg:py-5 lg:h-screen flex">
                <div className="container mx-auto">
                    {/* Breadcrumb  */}
                    <Breadcrumb />
                    <Searchbar setSearchFramework={setSearchFramework} />
                    <div className="flex flex-col lg:grid grid-cols-3 lg:flex-row gap-10">
                        <div
                            className="flex-1 flex flex-col gap12 mb-10 lg:mb-0 ">
                            {/* text */}
                            <div className="group relative overflow-hidden border-2
                         border-white/50 rounded-xl">
                                {/* overray */}
                                <div className="group-hover:bg-black/70 w-full h-full absolute
                            z-40 translate-all duration-300 "></div>
                                {/* img */}
                                <img className="group-hover:scale-125 translate-all duration-500" src={Image2} alt="Image1" />
                                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                                    <span className="text-gradient">UI/UX Design</span>
                                </div>
                                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                                    <span className="text-3xl text-gradient">Project Title</span>
                                </div>
                            </div>
                        </div>

                        <div
                            className="flex-1 flex flex-col gap12 mb-10 lg:mb-0 ">
                            {/* text */}
                            <div className="group relative overflow-hidden border-2
                         border-white/50 rounded-xl">
                                {/* overray */}
                                <div className="group-hover:bg-black/70 w-full h-full absolute
                            z-40 translate-all duration-300 "></div>
                                {/* img */}
                                <img className="group-hover:scale-125 translate-all duration-500" src={Image2} alt="Image1" />
                                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                                    <span className="text-gradient">UI/UX Design</span>
                                </div>
                                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                                    <span className="text-3xl text-gradient">Project Title</span>
                                </div>
                            </div>
                        </div>

                        <div
                            className="flex-1 flex flex-col gap12 mb-10 lg:mb-0 ">
                            {/* text */}
                            <div className="group relative overflow-hidden border-2
                         border-white/50 rounded-xl">
                                {/* overray */}
                                <div className="group-hover:bg-black/70 w-full h-full absolute
                            z-40 translate-all duration-300 "></div>
                                {/* img */}
                                <img className="group-hover:scale-125 translate-all duration-500" src={Image2} alt="Image1" />
                                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                                    <span className="text-gradient">UI/UX Design</span>
                                </div>
                                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                                    <span className="text-3xl text-gradient">Project Title</span>
                                </div>
                            </div>
                        </div>

                        <div
                            className="flex-1 flex flex-col gap12 mb-10 lg:mb-0 ">
                            {/* text */}
                            <div className="group relative overflow-hidden border-2
                         border-white/50 rounded-xl">
                                {/* overray */}
                                <div className="group-hover:bg-black/70 w-full h-full absolute
                            z-40 translate-all duration-300 "></div>
                                {/* img */}
                                <img className="group-hover:scale-125 translate-all duration-500" src={Image2} alt="Image1" />
                                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                                    <span className="text-gradient">UI/UX Design</span>
                                </div>
                                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                                    <span className="text-3xl text-gradient">Project Title</span>
                                </div>
                            </div>
                        </div>

                        <div
                            className="flex-1 flex flex-col gap12 mb-10 lg:mb-0 ">
                            {/* text */}
                            <div className="group relative overflow-hidden border-2
                         border-white/50 rounded-xl">
                                {/* overray */}
                                <div className="group-hover:bg-black/70 w-full h-full absolute
                            z-40 translate-all duration-300 "></div>
                                {/* img */}
                                <img className="group-hover:scale-125 translate-all duration-500" src={Image2} alt="Image1" />
                                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                                    <span className="text-gradient">UI/UX Design</span>
                                </div>
                                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                                    <span className="text-3xl text-gradient">Project Title</span>
                                </div>
                            </div>
                        </div>

                        <div
                            className="flex-1 flex flex-col gap12 mb-10 lg:mb-0">
                            {/* text */}
                            <div className="group relative overflow-hidden border-2
                         border-white/50 rounded-xl">
                                {/* overray */}
                                <div className="group-hover:bg-black/70 w-full h-full absolute
                            z-40 translate-all duration-300 "></div>
                                {/* img */}
                                <img className="group-hover:scale-125 translate-all duration-500" src={Image2} alt="Image1" />
                                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                                    <span className="text-gradient">UI/UX Design</span>
                                </div>
                                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                                    <span className="text-3xl text-gradient">Project Title</span>
                                </div>
                            </div>
                        </div>

                        <div
                            className="flex-1 flex flex-col gap12 mb-10 lg:mb-0">
                            {/* text */}
                            <div className="group relative overflow-hidden border-2
                         border-white/50 rounded-xl">
                                {/* overray */}
                                <div className="group-hover:bg-black/70 w-full h-full absolute
                            z-40 translate-all duration-300 "></div>
                                {/* img */}
                                <img className="group-hover:scale-125 translate-all duration-500" src={Image2} alt="Image1" />
                                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                                    <span className="text-gradient">UI/UX Design</span>
                                </div>
                                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                                    <span className="text-3xl text-gradient">Project Title</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center p-4">
                        <button className="btn btn-sm sd">show more</button>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Projects