import { useContext, useRef } from "react";
import { PostList } from "../Post/PostListStore";
function CreatePost() {
  const {addPost}= useContext(PostList)
  const userIdElement=useRef()
  const postTitleElement=useRef()
  const postBodyElement=useRef()
  const reactionsElement=useRef()
  const tagsElement=useRef()
  const handleSubmit=(event)=>{
    event.preventDefault();
    const userId=userIdElement.current.value
    const postTitle=postTitleElement.current.value
    const postBody=postBodyElement.current.value
    const reactions=reactionsElement.current.value
    const tags=tagsElement.current.value.split(" ");
    addPost(userId,postTitle,postBody,reactions,tags)
    userIdElement.current.value="";
    postTitleElement.current.value="";
    postBodyElement.current.value="";
    reactionsElement.current.value="";
    tagsElement.current.value="";
  }

  return (
    <>
      <form className="createPost" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            USER ID
          </label>
          <input
            type="text"
            ref={userIdElement}
            className="form-control"
            id="userId"
            placeholder="Enter your user id"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
          ref={postTitleElement}
            type="text"
            className="form-control"
            id="title"
            placeholder="How are you feeling Today.."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
          ref={postBodyElement}
            rows={4}
            type="text"
            className="form-control"
            id="body"
            placeholder="Tell us more about it"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Number of Reactions
          </label>
          <input
          ref={reactionsElement}
            type="text"
            className="form-control"
            id="reactions"
            placeholder="How many peaple reacted to this post"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your HashTags Here
          </label>
          <input
          ref={tagsElement}
            type="text"
            className="form-control"
            id="tags"
            placeholder="Enter your tags Here using space"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
}
export default CreatePost;
