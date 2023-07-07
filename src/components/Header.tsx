import { useState } from "react"
import Modal from "./Modal"
import FormContact from "./FormContact"

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (

        <header className='py-8'>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <p className="font-bold text-center font-secondary leading-[1] text-gradient text-[30px] lg:text-[40px]">CHU TU <br /> TECH</p>
                    {/* <a href="#">
                        <img src={Logo} alt="logo" />
                    </a> */}
                    <button
                        className="btn btn-sm"
                        onClick={() => setIsOpen(true)}

                    >Work with me</button>
                </div>
            </div>
            {/* modal */}
            <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
                <FormContact />
            </Modal>
        </header>
    )
}

export default Header