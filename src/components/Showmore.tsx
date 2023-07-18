import React from 'react'
import { ShowMoreProps } from '../types'

function Showmore({ pageNumber, isNext, isHidden, setLimit }: ShowMoreProps) {

    const handlimit = () => {
        const newLimit = (pageNumber + 1) * 6;
        setLimit(newLimit)
    }


    return (
        <div className={isHidden ? "hidden" : 'flex justify-center p-4'}>
            {!isNext && (
                <button
                    className="btn btn-sm sd"
                    onClick={handlimit}
                >show more</button>)}
        </div>
    )
}

export default Showmore