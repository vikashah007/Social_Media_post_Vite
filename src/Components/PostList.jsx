import { useContext } from "react";
import WelcomeMessage from "./WelcomeMessage";
import Post from "./Post";

import { PostList as PostListData } from "../Post/PostListStore";
function PostList() {
  const { postList, addInitialPosts } = useContext(PostListData);
  const onGetPostsClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data)=>{addInitialPosts(data.posts)});
  };
  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage onGetPostsClick={onGetPostsClick} />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}
export default PostList;
