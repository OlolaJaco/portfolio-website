import { Contact as ContactInfo } from "../constants"
import { motion } from "motion/react";
const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-20 mt-36">
            <motion.h2
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-4xl"
            >
                Get in Touch
            </motion.h2>
            <div className="text-center tracking-tighter">
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="my-4"
                >
                    {ContactInfo.address}
                </motion.p>

                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="my-4"
                >
                    {ContactInfo.phone}
                </motion.p>


                <a href="mailto:akinbusolaakinola2@gmail.com" className="border-b">{ContactInfo.email}</a>
            </div>
        </div>
    )
}

export default Contact