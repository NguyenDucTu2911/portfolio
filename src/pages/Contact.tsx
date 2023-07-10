import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useEffect } from "react";
import { FormContact } from "../components";


function Contact() {
  
  return (
    <section className="py-16 lg:section" id='contact'>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn({ direction: 'right', delay: 0.3 })}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center">
            <div >
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">Get in touch</h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">Let's Work <br /> together!</h2>
            </div>
          </motion.div>

          {/* form */}
          <FormContact />
        </div>
      </div >
    </section >
  )
}

export default Contact