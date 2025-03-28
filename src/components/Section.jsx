import { motion } from "framer-motion";
import "./Components.css";

export default function Section(props) {
    const { children, mobileTop } = props;

    return (
        <motion.section 
            className={`section ${mobileTop ? 'mobile-top' : 'center'}`}
            initial={{
                opacity: 0,
                y: 50,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1,
                    delay: 0.6,
                }
            }}
        >
            {children}
        </motion.section>
    );
};