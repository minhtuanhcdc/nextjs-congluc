//SSR: Static Site Generation

import {HiArrowNarrowRight,HiOutlineUser } from "react-icons/hi"
export default function ssg(){
    return (
        <div className="px-10 py-2">
            <h1>2. SSG(Server Site Generation) page</h1>
            <p className="mt-4 font-bold text-2xl">Static Generation</p>
            <p className="ml-4">The HTML is generated at <span className="font-bold text-xl">Build-time</span></p>
            
            <div className="flex space-x-4 w-1/2">
               
                <div className="w-1/3 flex flex-col h-48  items-center justify-center space-y-2 bg-gray-200">
                    <div>
                        <p>Next.js</p>
                        <p className="font-bold flex items-center">next build <span className="ml-4"><HiArrowNarrowRight size={44}/></span></p>
                        <p>Build the app for production</p>
                        <p className="mt-2">(Build san HTML cho moi khi user request)</p>
                    </div>
                </div>
                <div className="w-1/3 flex flex-col h-48 justity-center items-center">
                    <div className="flex flex-col space-y-2 m-auto">
                        <div className="rounded-full bg-yellow-700 w-10 h-10 m-auto"></div>
                        <div className="bg-gray-700 rounded-md w-32 h-4 m-auto"></div>
                        <div className="bg-gray-700 rounded-md w-44 h-2 m-auto"></div>
                        <div className="bg-gray-700 rounded-md w-44 h-2 m-auto"></div>
                        <div className="bg-gray-700 rounded-md w-44 h-2 m-auto"></div>
                    </div>
                  
                </div>
                <div className="w-1/3 flex flex-col h-48  items-center space-y-2">
                    <div className="bg-gray-200 m-auto">  
                        <div className="font-bold flex items-center">
                            <p><HiArrowNarrowRight size={44}/></p>
                            <span className="ml-4"><HiOutlineUser size={44}/></span>
                        </div>
                        <div className="font-bold flex items-center">
                            <p><HiArrowNarrowRight size={44}/></p>
                            <span className="ml-4"><HiOutlineUser size={44}/></span>
                        </div>
                        <div className="font-bold flex items-center">
                            <p><HiArrowNarrowRight size={44}/></p>
                            <span className="ml-4"><HiOutlineUser size={44}/></span>
                        </div>
                        <p>Resed for each request</p>
                    </div>
                </div>
            </div>
        </div>
    )
}