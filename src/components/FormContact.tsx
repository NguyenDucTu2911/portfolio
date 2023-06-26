
function FormContact() {
    return (
        <>
            <form action="" className="flex-1 border rounded-2xl flex flex-col gap-y-6 
        pb-24 p-6 items-start">

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
            </form>
        </>
    )
}

export default FormContact