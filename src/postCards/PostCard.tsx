const PostCard = (props:{title:string; body:string}) => {
  return (
    <div className='postCard'>
        <h2>{props.title}</h2>
        <p>{props.body}</p>
    </div>
  )
}

export default PostCard
