import router, { useRouter } from 'next/router'
import Layout from '../../../layout/layout'
export default function Post({ post }) { 
    const router = useRouter()
    function handleReturnPage(){
        router.push('/admin/posts')
    }
    return ( 
        <Layout>
         <p className='px-10'><button onClick={handleReturnPage} className=' rounded-lg bg-blue-800 py-1 text-white px-2 cursor-pointer'>return Posts</button></p>
            <div className='px-10'>
                <h2 className="font-bold"> { post.id } - { post.title } </h2> 
                <p className='pl-2'>{post.body}</p>
            </div>
        </Layout>
    )
}
export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    const paths = data.map(post =>{
        return{
            params:{
                postId:`${post.id}`
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    console.log(context);
   
    const {params} = context
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await res.json()
    console.log('hehehehehe')
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        post:data,
      },
    }
  }
