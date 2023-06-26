// import { Link } from "react-router-dom";
import { Link } from "react-scroll"
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsBriefcase, BsChatSquare } from "react-icons/bs";

function Nav() {

    return (
        <nav className="fixed bottom-2 lg: bottom-8 w-full overflow-hidden z-50">
            <div className="container mx-auto">
                {/* nav lnner */}
                <div className="w-full bg-black/20 h-[60px] backdrop-blur-2xl
                rounded-full max-w-[400px] mx-auto px-5 flex justify-between
                items-center text-2xl text-white/50" >
                    <Link className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
                        to="home"
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        offset={-200}>
                        <BiHomeAlt />
                    </Link>
                    <Link className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
                        to="about"
                        activeClass="active"
                        smooth={true}
                        spy={true}>
                        <BiUser />
                    </Link>
                    <Link className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
                        to="work"
                        activeClass="active"
                        smooth={true}
                        spy={true}>
                        <BsBriefcase />
                    </Link>
                    <Link className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
                        to="contact"
                        activeClass="active"
                        smooth={true}
                        spy={true}>
                        <BsChatSquare />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav