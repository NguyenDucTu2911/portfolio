import React, { useState } from 'react'
import { SearchFramework } from '../components';
import { SearchSearchBarProps } from '../types';
import iconSearch from "../assets/magnifying-glass.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Searchbar({ setSearchFramework, setSearchLanguage }: SearchSearchBarProps) {
    const [framework, setFramework] = useState("");
    const [language, setLanguage] = useState("");

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (framework === "" && language === "") {
            return toast.success("please fill in the search bar");
        }
        setSearchFramework(framework)
        setSearchLanguage(language)

    }

    return (
        <>
            <form onSubmit={handleSearch} className='searchbar'>
                <div className="searchbar_item">
                    <SearchFramework
                        selected={framework}
                        setSelected={setFramework}
                    />
                </div>
                <div className="searchbar_item">
                    <input type='text'
                        className='searchbar__input'
                        name='Language'
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        placeholder='Language'
                    />
                </div>
                <button type='submit' className={`-ml-7 z-10 h-[3rem]`}>
                    <img src={iconSearch}
                        alt="magnifying glass"
                        height={70}
                        width={70}
                        className='object-contain'
                    />
                </button>
            </form>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>

    )
}

export default Searchbar