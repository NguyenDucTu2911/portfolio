import { motion } from "framer-motion";
import Image1 from "../assets/portfolio-img1.png";
import Image2 from "../assets/portfolio-img2.png";
import Image3 from "../assets/portfolio-img3.png";
import { fadeIn } from "../variants";

function Work() {
    return (
        <section className="section" id='work'>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-x-10">
                    <motion.div
                        variants={fadeIn({ direction: 'right', delay: 0.3 })}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
                        {/* text */}
                        <div className="">
                            <h2 className='h2 leading-tight text-accent'>My Latest <br /> Work.</h2>
                            <p className='max-w-sm mb-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Repellat, hic! Harum quis, cum velit neque esse eos molestias
                                doloremque explicabi!
                            </p>

                            <button className='btn btn-lg'>View all projects</button>
                        </div>
                        {/* image */}
                        <div className="group relative overflow-hidden border-2
                         border-white/50 rounded-xl">
                            {/* overray */}
                            <div className="group-hover:bg-black/70 w-full h-full absolute
                            z-40 translate-all duration-300 "></div>
                            {/* img */}
                            <img className="group-hover:scale-125 translate-all duration-500" src={Image1} alt="Image1" />
                            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                                <span className="text-gradient">UI/UX Design</span>
                            </div>
                            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                                <span className="text-3xl text-gradient">Project Title</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn({ direction: 'left', delay: 0.5 })}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1 flex flex-col gap-y-12">
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

                        <div className="group relative overflow-hidden border-2
                         border-white/50 rounded-xl">
                            {/* overray */}
                            <div className="group-hover:bg-black/70 w-full h-full absolute
                            z-40 translate-all duration-300 "></div>
                            {/* img */}
                            <img className="group-hover:scale-125 translate-all duration-500" src={Image3} alt="Image1" />
                            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                                <span className="text-gradient">UI/UX Design</span>
                            </div>
                            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                                <span className="text-3xl text-gradient">Project Title</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Work