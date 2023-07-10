import React, { useState } from 'react'
import { SearchFramework } from '../components';
import { SearchSearchBarProps } from '../types';

function Searchbar({ setSearchFramework }: SearchSearchBarProps) {
    const [framework, setFramework] = useState("");

    return (
        <form className='searchbar'>
            <div className="searchbar_item">
                <SearchFramework 
                    selected={framework}
                    setSelected={setFramework}
                />
            </div>
        </form>
    )
}

export default Searchbar