const PostCard = (props:{title:string; desc:string}) => {
  return (
    <div className='postCard'>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
    </div>
  )
}

export default PostCard
