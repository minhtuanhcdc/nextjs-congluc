import Link from 'next/link'
import Layout from '../../../layout/layout'
function PostList({ posts }) {
  return (
    <Layout>

    <div className="px-10">
      <h1 className="text-center text-2xl text-blue-700">Post List</h1>
     
      <ul>
        {posts.map((post) => (
            <li key={post.id} className="border border-gray-800 py-1 cursor-pointer">
              <Link href={`posts/${post.id}`} passHref>{post.id} - {post.title} </Link>
            </li>
           
          ))} 
      </ul>
    </div>
    </Layout>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
 

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts:data,
    },
  }
}

export default PostList