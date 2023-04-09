//SSR: Server Site Rendering
import { HiArrowSmRight } from "react-icons/hi";

export default function ssr(){
    return (
        <section className=" text-center">
            <h1 className="w-full text-center mt-10">SSR(Server Site Redering:Render sang file HTML phia Serve) page</h1>
            
            <div className="mt-4 w-1/2 m-auto text-left bg-fuchsia-400">
                <p>- Build sẳn file HTML từ phía Server</p>
                <p>- Sau đó load thêm Javascript</p>
                <p>- Tiếp theo gán EventListen gọi là Hydration</p>
            </div>
            <div className="flex justify-center mt-10 space-x-3">
                <h2 className="pr-5 text-red-600">Pre-Redering</h2>
                <div className="w-44 h-32 border border-gray-800 flex justify-center">
                  1111(đã load HTML sẳn nhưng chưa gắn Event)
                </div>
                <div className=" flex flex-col justify-center items-center"> 
                    <p className="font-bold">Javascript loads</p>
                   <p className="w-32"><HiArrowSmRight size={40} fill="black" className="w-full"/></p>
                </div>
                <div className="w-44 h-32 border border-gray-800 flex justify-center">
                    111
                </div>


            </div>
            <div className="flex justify-center mt-10 space-x-3">
                <h2 className="pr-5 text-red-600">No Pre-Redering</h2>
                <div className="w-44 h-32 border border-gray-800 flex justify-center">
                 Null
                </div>
                <div className=" flex flex-col justify-center items-center"> 
                    <p className="font-bold">Javascript loads</p>
                   <p className="w-32"><HiArrowSmRight size={40} fill="black" className="w-full"/></p>
                </div>
                <div className="w-44 h-32 border border-gray-800 flex justify-center">
                    111
                </div>


            </div>

        </section>
    )
}