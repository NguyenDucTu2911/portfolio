import React, { Fragment, useEffect, useState } from 'react'
import { SearchFrameworkProps } from '../types';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { fetchFrameworkThunk } from '../store/framework/FrameworkThuck';
import { CheckIcon } from '@heroicons/react/20/solid';
import { Combobox, Transition } from '@headlessui/react';
import { RootState } from '../store/store';

function SearchFramework({ selected, setSelected }: SearchFrameworkProps) {
    const dispatch = useDispatch();
    const [query, setQuery] = useState("");

    useEffect(() => {
        dispatch(fetchFrameworkThunk() as unknown as AnyAction)
            .then(() => {
                console.log("Gửi thành công");
            })
            .catch(() => {
                console.log("Lỗi");
            });
    }, []);

    const { Framework } = useSelector((state: RootState) => state.Framework);

    const filteredFramework =
        query === ""
            ? Framework
            : Framework.filter((Framework) =>
                Framework.value
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            );


    return (
        <div className='flex-1 max-sm:w-full flex justify-start items-center'>
            <Combobox value={selected} onChange={setSelected}>
                <div className="relative w-full pb-6">
                    <Combobox.Input
                        className="w-full h-[48px] pl-5 p-4 rounded-l-md max-sm:rounded-l-md bg-fuchsia-500 outline-none cursor-pointer text-white font-medium"
                        placeholder='Framework'
                        onChange={(event) => setQuery(event.target.value)}
                        displayValue={(item: string) => item}
                    />
                    <div className="absolute z-50 w-full bg-gray-200">
                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0">

                            <Combobox.Options>
                                {filteredFramework.length === 0 && query !== ""
                                    ? (
                                        <Combobox.Option
                                            value={query}
                                            className="cursor-default select-none py-2 pl-4 pr-4 "
                                        >
                                            Nothing found.
                                        </Combobox.Option>
                                    ) : (
                                        filteredFramework.map((person) => (
                                            <Combobox.Option
                                                key={person.id}
                                                value={person.value}
                                                className={({ active }) => `
                                            relative cursor-default select-none py-2 pl-4 pr-4
                                            ${active ? ' bg-gray-400 text-white' : 'text-gray-900'}
                                        ` }
                                            >
                                                {({ selected, active }) => (
                                                    <>
                                                        <span
                                                            className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                }`}
                                                        >
                                                            {person.value}
                                                        </span>
                                                        {selected ? (
                                                            <span
                                                                className={`absolute inset-y-0 right-3 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                                                                    }`}
                                                            >
                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                            </span>
                                                        ) : null}
                                                    </>
                                                )}
                                            </Combobox.Option>
                                        ))
                                    )

                                }
                            </Combobox.Options>
                        </Transition>
                    </div>


                </div>
            </Combobox>
        </div>
    )
}

export default SearchFramework;