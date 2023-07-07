import { useState } from "react";

import Image from "../assets/avatar.svg";
// icons
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
//type animation
import { TypeAnimation } from "react-type-animation";
//motton
import { motion } from "framer-motion";
//vảiants
import { fadeIn } from "../variants";
import { useNavigate } from "react-router-dom";


function Banner() {

    return (
        <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id='home'>
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-8 lg:flex-row">
                    <div className="flex-1  text-center font-secondary lg:text-left lg:items-center lg:grap-x-12">
                        <motion.h1
                            variants={fadeIn({ direction: 'up', delay: 0.3 })}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.7 }}
                            className="text-[55px] font-bold leading-[0.8] lg:text-[100px]">NGUYEN{" "}DUC<span>{" "}TU</span>
                        </motion.h1>

                        <motion.div
                            variants={fadeIn({ direction: 'up', delay: 0.3 })}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.7 }}
                            className="mb-6 text-[30px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]">
                            <span className="text-white mr-4">I am a</span>
                            <TypeAnimation sequence={[
                                "Developer",
                                2000,
                                "Software engineer ",
                                2000,
                            ]}
                                speed={50}
                                className="text-accent"
                                wrapper="span"
                                repeat={Infinity}
                            />
                        </motion.div>

                        <motion.p
                            variants={fadeIn({ direction: 'up', delay: 0.5 })}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.7 }}
                            className="mb-8 max-w-lg mx-auto lg:mx-0">
                            I am a final year student with the passion for software development. With the current academic level, the spirit of learning, accumulated skills, enthusiastic spirit and unstoppable improvement, I confidently declare that I am suitable for this the job vacancy. I am willing to take full advantages of my capabilities to learn and work effectively.
                        </motion.p>

                        <motion.div
                            variants={fadeIn({ direction: 'up', delay: 0.6 })}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.7 }}
                            className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
                            <button
                                className="btn btn-lg"
                            >
                                Contact me
                            </button>
                            <a
                                href=""
                                className="text-gradient btn-link">My Portfolio
                            </a>
                        </motion.div>

                        <motion.div
                            variants={fadeIn({ direction: 'up', delay: 0.7 })}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.7 }}
                            className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0     ">
                            <a className="  hover:text-sky-600 hover:bg-white" href="https://www.linkedin.com/in/nguyenductu/">
                                <FaLinkedin />
                            </a>

                            <a href="https://github.com/NguyenDucTu2911">
                                <FaGithub />
                            </a>

                            <a href="https://www.facebook.com/TuND29/">
                                <FaFacebook />
                            </a>
                        </motion.div>
                    </div>

                    <motion.div
                        variants={fadeIn({ direction: 'down', delay: 0.5 })}
                        initial="hidden"
                        whileInView="show"
                        className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
                        <img src={Image} alt="Image" />
                    </motion.div>
                </div>

            </div>

        </section>
    )
}

export default Banner