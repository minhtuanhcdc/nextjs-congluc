import Layout from '../../../layout/layout'
function UserList({ users }) {
  return (
    <Layout>
    <div className="px-10">
      <h1 className="text-center text-2xl text-blue-700">User List</h1>
      <ul>
        {users.map((user) => (
            <li key={user.id}>{user.id} - {user.name}</li>
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
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()
  console.log('hehehehehe')

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      users,
    },
  }
}

export default UserList