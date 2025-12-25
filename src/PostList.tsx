import { useEffect, useState } from "react";
import PostCard from "./postCards/PostCard";

const PostList = () => {
  interface Post {
  id: number;
  title: string;
  body: string;
}
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const json = await res.json();
      setData(json);
    }

    getData();
  }, []);
  return (
    <div className="postList">
      {data.map((post) => (
        <PostCard key={post.id} title={post.title.toLocaleUpperCase()} body={post.body} />
      ))}
    </div>
  );
};

export default PostList;
