function Header() {
    return (
        <header className='py-8'>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <p className="font-bold text-center font-secondary leading-[1] text-gradient text-[30px] lg:text-[40px]">CHU TU <br /> TECH</p>
                    {/* <a href="#">
                        <img src={Logo} alt="logo" />
                    </a> */}
                    <button className="btn btn-sm">Work with me</button>
                </div>
            </div>
        </header>
    )
}

export default Header