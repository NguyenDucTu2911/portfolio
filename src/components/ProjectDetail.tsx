import { useNavigate, useParams } from "react-router-dom"
import Header from "./Header"
import { useEffect } from "react";
import { fetchProjectDetailThunk } from "../store/project/ProjectThuck";
import { useAppDispatch, useAppSelector } from "../store/Hooks";
import { RootState } from "../store/store";
import Spinner from "./Spinner";
import Slider from "react-slick";


function ProjectDetail() {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { ProjectDetail, loading, error } = useAppSelector((state: RootState) => state.Project);

    useEffect(() => {
        fetchProjectDetail()
        return () => {
            fetchProjectDetail()
        }
    }, [id])

    const fetchProjectDetail = async () => {
        if (id) {
            dispatch(await fetchProjectDetailThunk(id))
        } else {
            navigate("/Project")
        }
    }

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    return (
        <>
            <main className="bg-site bg-no-repeat bg-cover overflow-hidden">
                <Header />
                <div className="py-2 lg:py-5 lg:h-screen flex">
                    <div className="container mx-auto">
                        <button onClick={() => navigate("/Project")}>onClick</button>
                        {loading
                            ? <Spinner />
                            : <>
                                {ProjectDetail.map((item) => {
                                    const name = `Project details ${item.nameProject}`
                                    const NameProject = name.toUpperCase()
                                    return (
                                        <>
                                            <div className="w-full text-white drop-shadow-md text-center text-xl font-bold lg:text-3xl">{NameProject}</div>
                                            <div className="flex w-full mt-7 gap-2 h-[20rem]">
                                                <div className="w-1/2 px-5">
                                                    {item.images?.map((item) => {
                                                        return (
                                                            <Slider {...settings}>
                                                                {
                                                                    item.images.map((item) => (
                                                                        <div key={item} className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                                                                            <img
                                                                                className='object-contain'
                                                                                src={item}
                                                                                alt={""} />
                                                                        </div>
                                                                    ))
                                                                }
                                                            </Slider>

                                                        )
                                                    })}

                                                </div>
                                                <div className="w-1/2">
                                                    <div className="mx-10 px-5 border-l-2 border-white/50">
                                                        <div className="flex justify-start">
                                                            <label className="from-neutral-400 text-xl">Name Project:</label>
                                                            <div className="font-bold text-2xl ml-2">{item.nameProject}</div>
                                                        </div>
                                                        <div className="flex justify-start">
                                                            <label className="from-neutral-400 text-xl">Framework:</label>
                                                            <div className="font-bold text-2xl ml-2">{item.framework}</div>
                                                        </div>
                                                        <div className="flex justify-start">
                                                            <label className="from-neutral-400 text-xl">Language:</label>
                                                            <div className="font-bold text-2xl ml-2">{item.language}</div>
                                                        </div>
                                                        <div className="flex justify-start">
                                                            <label className="from-neutral-400 text-xl">Source:</label>
                                                            <a href={item.Source} className="font-bold text-2xl ml-2 hover:text-gradient">GitHub</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div >
                                        </>
                                    )
                                })}

                            </>
                        }
                    </div>
                </div>
            </main >
        </>
    )
}

export default ProjectDetail