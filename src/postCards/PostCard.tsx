import type { PostProps } from "../types/types"

const PostCard = (props:PostProps) => {
  return (
    <div className='postCard'>
        <h2>{props.title}</h2>
        <p>{props.body}</p>
    </div>
  )
}

export default PostCard
