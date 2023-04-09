
import Link from 'next/link'
import { useRouter } from 'next/router'
export default function home(){
    const router= useRouter();
    function gotoDetailPage(){
        //router.push('/learn/pages/post/123');
        router.push({
            pathname:'/learn/pages/post/[postId]',
            query:{
                postId:246,
                ref:'social'
            },
        })
    }
    return( 
        <div className="flex flex-col items-center   bg-slate-400  h-[64rem]">
            <h1 className="w-64 bg-blue-400 mt-10 text-center">Home page 
           </h1>
           <button className='my-10 px-4 py-2 bg-blue-600 text-white rounded-sm cursor-pointer' ><Link href="/learn/pages/about" className='p-4'>About Us</Link></button>
                <button className='my-10 px-4 py-2 bg-green-600 text-white rounded-sm cursor-pointer' onClick={gotoDetailPage}>Goto post detail</button>
            
            <p className="px-10">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed hic et neque omnis beatae magnam expedita autem voluptatum cum ratione provident repudiandae commodi, vel, aut dolore odio ullam nesciunt aperiam.</p>
        <div className='h-[64rem]'></div>
        <button className='bg-yellow-600 cursor-pointer px-4 py-2 rounded-lg'>Goto top</button>
        </div>
        
    )
}