import Link from "next/link";
import { useRouter } from "next/router";


export default function post(){
    

    const router = useRouter();
    function handleReturn(){
        router.push('/learn');
    }
    return (
        <h1 className="px-10">About page 
            <span className="ml-4 bg-slate-600">
               <button className="bg-blue-600 text-white px-4 py-2 cursor-pointer rounded-lg" onClick={handleReturn}>Home return</button>
            </span>
        </h1>
    )
}