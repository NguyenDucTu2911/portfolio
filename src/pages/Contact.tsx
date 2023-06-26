import { motion } from "framer-motion";
import { fadeIn } from "../variants";
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
          <motion.form
            variants={fadeIn({ direction: 'left', delay: 0.3 })}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            action=""
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start">
            <input className="bg-trans bg-transparent border-b py-3 outline-none w-full
            placeholder:text-white  focus:border-accent translate-all"
              type="text"
              placeholder="Your name" />
            <input className="bg-trans bg-transparent border-b py-3 outline-none w-full
            placeholder:text-white  focus:border-accent translate-all"
              type="email"
              placeholder="Your emaiL" />
            <textarea className="bg-trans bg-transparent border-b py-3 outline-none w-full
            placeholder:text-white  focus:border-accent translate-all resize-none mb-12"
              placeholder="Your message"></textarea>
            <button type="submit" className="btn btn-lg">Send message</button>
          </motion.form>
        </div>
      </div >
    </section >
  )
}

export default Contact