import { useRouter } from "next/router";

export interface PostDetailPageProp {}
export default function post(props:PostDetailPageProp){
    const router = useRouter();
    function handleReturnHome(){
        router.push('/learn');
    }
    return(
        <div className="px-10 py-4">
        <h1>Post detail (Router Dinamic)</h1>
        <p>Query: {JSON.stringify(router.query)}</p>
        <button onClick={handleReturnHome} className="px-4 py-2 bg-blue-800 cursor-pointer rounded-md text-white">Home return</button>
        
        </div>
    )
}