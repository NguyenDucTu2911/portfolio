import React from 'react';
import { Oval } from 'react-loader-spinner';

function Spinner() {
    return (
        <div className="fixed inset-0 overflow-y-auto">
            <div className='flex min-h-full items-center
                        justify-center p-4 text-center'>
                <Oval
                    height={80}
                    width={80}
                    color="#b809c3"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="#ae05c640"
                    strokeWidth={2}
                    strokeWidthSecondary={2}

                />
            </div>
        </div>

    )
}

export default Spinner