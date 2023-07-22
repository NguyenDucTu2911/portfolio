import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useAppSelector } from '../store/Hooks';
import { RootState } from '../store/store';

function About() {
    const { User, loading, error } = useAppSelector((state: RootState) => state.User);


    const [ref, inView] = useInView({
        threshold: 0.5,
    });

    return (
        <div className="section" id="about" ref={ref}>
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center
                lg:gap-x-20 lg:gap-y-0">
                    <motion.div
                        variants={fadeIn({ direction: 'right', delay: 0.3 })}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1 bg-about bg-contain bg-no-repeat h-[640px]
                        mix-blend-lighten bg-top">
                    </motion.div>
                    {User.length > 0 && User.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={fadeIn({ direction: 'right', delay: 0.5 })}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.3 }}
                            className="flex-1">
                            <h2 className='h2 text-accent'>About me.</h2>
                            <h3 className='h3 mb-4'>
                                {item.AboutDescription}
                            </h3>
                            {/* <p className='mb-6'>asdhasd</p> */}
                            {/* stats */}
                            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
                                <div>
                                    <div className="text-[40px] font-tertiary text-gradient mb-2">
                                        {inView ? <CountUp start={0} end={item.YearsOld} duration={3} /> : null}

                                        <div className="font-primary text-sm tracking-[2px]">
                                            Years <br /> Old
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="text-[40px] font-tertiary text-gradient mb-2">
                                        {inView ? <CountUp start={0} end={item.yearsOfExperience} duration={3} /> : null}

                                        <div className="font-primary text-sm tracking-[2px]">
                                            years of<br /> experience
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div
                                className="flex gap-x-8 items-center">
                                <button className="btn btn-lg">Contact me</button>
                                <a href="" className="text-gradient btn-link">My Portfolio</a>
                            </div>

                        </motion.div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default About