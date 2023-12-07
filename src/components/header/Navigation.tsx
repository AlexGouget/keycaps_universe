import {RiDiscordLine} from "react-icons/ri";
import {FaGithub} from "react-icons/fa";
import {FiCheck, FiMinus, FiPlus} from "react-icons/fi";
import {RxDividerVertical} from "react-icons/rx";
import {Suspense} from "react";
import dynamic from "next/dynamic";


//dynamic import for SearchInput
const SearchInput = dynamic(() => import("@/components/header/SearchInput"), {ssr: false})

export default function Navigation() {
    return (
            <nav className="grad-dark-to-transparent fixed w-full z-20">
                <div className="w-full grid grid-cols-3 mx-auto p-6 px-20">
                   {/*LOGO*/}
                    <div>
                   {/*SEARCH BAR*/}
                   </div>

                    <div className='w-full place-self-center'>
                        <Suspense fallback={'loading'}>
                            <SearchInput />
                        </Suspense>

                    </div>
                {/*NAVIGATION*/}
                    <div className="text-secondary flex flex-row items-center gap-2 place-self-end">
                            <button className="transition transform hover:rotate-90 relative hover:text-accent ">
                                <FiPlus size={50} />
                            </button>
                            <RxDividerVertical size={30} />
                            <button className="hover:text-accent">
                                <RiDiscordLine size={30}  />
                            </button>
                            <button className="hover:text-accent">
                                <FaGithub size={25} />
                            </button>
                        </div>
                </div>
            </nav>

         )
}