import { Header, Breadcrumb, Searchbar, Spinner } from "../components";
import Image2 from "../assets/portfolio-img2.png";
import { useEffect, useState } from "react";
import { fetchProjectThunk } from "../store/project/ProjectThuck";
import { useAppDispatch, useAppSelector } from "../store/Hooks";
import { RootState } from "../store/store";
import Showmore from "./Showmore";
import { useNavigate } from "react-router-dom";
import { Action, AnyAction } from "redux";
import { connect } from "react-redux";
import { ThunkDispatch } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';


function Projects() {
    const { Project, loading } = useAppSelector((state: RootState) => state.Project);
    const navigate = useNavigate();

    //search states
    const [SearchFramework, setSearchFramework] = useState("");
    const [SearchLanguage, setSearchLanguage] = useState("");

    //pagination states
    const [limit, setLimit] = useState(6);

    const dispatch = useAppDispatch();

    useEffect(() => {
        ferchProject();
        return () => {
            ferchProject()
        }
    }, [SearchLanguage, SearchFramework, limit]);

    const ferchProject = async () => {
        dispatch(await fetchProjectThunk({
            framework: SearchFramework,
            language: SearchLanguage,
            limit: limit || 6,
        }));
    }


    return (
        <>
            <main className="bg-site bg-no-repeat bg-cover overflow-hidden">
                <Header />
                <div className="py-2 lg:py-5 lg:h-screen flex">
                    <div className="container mx-auto">
                        {/* Breadcrumb  */}
                        <Breadcrumb />
                        <Searchbar
                            setSearchFramework={setSearchFramework}
                            setSearchLanguage={setSearchLanguage} />
                        {loading ? <Spinner /> : (
                            <>
                                {Project.length > 0 ? (
                                    <div
                                        className="flex flex-col lg:grid grid-cols-3 lg:flex-row gap-10">
                                        {Project.map((item) => {
                                            return (
                                                <>
                                                    <div
                                                        key={item.id}
                                                        onClick={() => navigate(`/Project/${item.id}`)}
                                                        className="flex-1 flex flex-col gap12 mb-10 lg:mb-0 ">
                                                        {/* text */}
                                                        <div className="group relative overflow-hidden border-2
                                                    border-white/50 rounded-xl">
                                                            {/* overray */}
                                                            <div className="group-hover:bg-black/70 w-full h-full absolute
                                                    z-40 translate-all duration-300 "></div>
                                                            {/* img */}
                                                            <img className="group-hover:scale-125 translate-all duration-500" src={item.image} alt="Image1" />
                                                            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                                                                <span className="text-gradient">{item.framework}</span>
                                                            </div>

                                                            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                                                                <span className="text-xl text-gradient">{item.nameProject}</span>
                                                            </div>

                                                            <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50">
                                                                <span className="text-xl text-gradient">{item.language}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })}
                                    </div>
                                ) : (
                                    <div className="relative w-full text-7xl leading-[200px] text-center h-[200px] font-semibold">Not found</div>
                                )}
                                < Showmore
                                    setLimit={setLimit}
                                    pageNumber={limit / 6}
                                    isNext={limit > Project.length}
                                    isHidden={Project.length < 0}
                                />
                            </>
                        )}

                    </div>
                </div>
            </main>
        </>


    )
}


export default Projects;