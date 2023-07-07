import { Fragment, ReactNode } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import close from "../assets/close.svg";
import { useForm, Resolver } from "react-hook-form";
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { useAppDispatch, useAppSelector } from "../store/Hooks";
import { AddNewContact } from "../store/slices/ContactSlice";
import { RootState } from "../store/store";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactProps } from '../types';

const resolver: Resolver<ContactProps> = async (values) => {
    return {
        values: values.Name ? values : {},
        errors: !values.Name
            ? {
                Name: {
                    type: "required",
                    message: "Name is required.",
                },
            }
            : !values.Email ? {
                Email: {
                    type: "required",
                    message: "Email is required.",
                },
            } : !values.Message ? {
                Message: {
                    type: "required",
                    message: "Message is required.",
                },
            } : {},
    }
}

interface isContactProps {
    isOpen: boolean,
    children: ReactNode;
    closeModal: () => void,
}

function Modal({ isOpen, closeModal, children }: isContactProps) {

    const dispatch = useAppDispatch();
    const { error, loading } = useAppSelector((state: RootState) => state.contact)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactProps>({ resolver })
    const onSubmit = async (data: ContactProps) => {
        try {
            if (data && data.Email && data.Email && data.Message) {
                dispatch(AddNewContact(data as ContactProps))
                if (error != null) {
                    toast.error(error)
                } else {
                    toast.success("Submission of information successful");
                    reset();
                    closeModal();
                }
            } else {
                console.log(error)
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className={"relative"} onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-out duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <div className="fixed inset-0 bg-black
                        bg-opacity-25">

                        </div>
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center
                        justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter='ease-out duration-300'
                                enterFrom='opacity-0 scale-95'
                                enterTo='opacity-100 scale-100'
                                leave='ease-out duration-200'
                                leaveFrom='opacity-100 scale-100'
                                leaveTo='opacity-0 scale-95'
                            >
                                <Dialog.Panel className="relative w-full
                                max-w-lg max-h-[90vh] overflow-y-auto
                                transform rounded-2xl backgroudModal  p-6
                                text-left shadow-xsl translate-all flex flex-col">
                                    <motion.button
                                        variants={fadeIn({ direction: 'left', delay: 0.3 })}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: false, amount: 0.3 }}
                                        className='absolute top-2 right-2 z-10
                                        w-fit p-2 bg-primary-blue-100 rounded-full bg-white hover:bg-red-500'
                                        type='button'
                                        onClick={closeModal}
                                    >
                                        <img src={close} alt='close' width={20} height={20} />
                                    </motion.button>
                                    {/* <div>{children}</div> */}
                                    <motion.form
                                        onSubmit={handleSubmit(onSubmit)}
                                        variants={fadeIn({ direction: 'left', delay: 0.3 })}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: false, amount: 0.3 }}
                                        className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start">
                                        {/* input name */}
                                        <input className=" bg-trans bg-transparent border-b py-3 outline-none w-full
            placeholder:text-white  focus:border-accent translate-all"
                                            type="text"
                                            id="Name"
                                            {...register("Name")}
                                            placeholder="Your name" />
                                        {/* error name */}
                                        {errors?.Name && <p className="absolute right-11 text-red-600">{errors.Name.message}</p>}

                                        {/* input email */}
                                        <input className=" bg-trans bg-transparent border-b py-3 outline-none w-full
            placeholder:text-white  focus:border-accent translate-all"
                                            type="Email"
                                            id="Email"
                                            {...register("Email")}
                                            placeholder="Your emaiL" />
                                        {/* error email */}
                                        {errors?.Email && <p className="absolute top-[125px] right-11 text-red-600">{errors.Email.message}</p>}

                                        <textarea className="bg-trans bg-transparent border-b py-3 outline-none w-full
            placeholder:text-white  focus:border-accent translate-all resize-none mb-12"
                                            placeholder="Your message"
                                            id="Message"
                                            {...register("Message")}
                                        ></textarea>
                                        {/* error Message */}
                                        {errors?.Message && <p className="absolute top-[195px] right-11 text-red-600">{errors.Message.message}</p>}

                                        {loading
                                            ? <button disabled type="submit" className="btn btn-lg focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
                                                <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                                </svg>
                                                Loading...
                                            </button>
                                            : <button type="submit" className="btn btn-lg">Send message</button>

                                        }

                                    </motion.form>

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
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition >
        </>
    )
}

export default Modal