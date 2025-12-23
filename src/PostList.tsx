import PostCard from './postCards/PostCard'

const PostList = async () => {
  return (
    <div className='postList'>
    <PostCard title="First Post" desc="This is the description of the first post." />
    </div>
  )
}

export default PostList
