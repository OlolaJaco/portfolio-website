import aboutImage from '../assets/Olola Profile 2.jpg'
import { About_Content } from '../constants'
import { motion } from "motion/react";

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">About
                <span className="text-neutral-500">  Me</span>
            </h1>

            <div className="flex flex-wrap">
                <motion.div
                    className="w-full lg:w-1/2 lg:p-8"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}>
                    <div className="flex items-center justify-center">
                        <img src={aboutImage} alt="About Image" className='rounded-2xl' />
                    </div>

                </motion.div>


                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className='my-2 max-w-xl py-6'>{About_Content}</p>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default About