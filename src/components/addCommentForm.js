import React, {useState} from "react";

const AddCommentForm = ({ articleName, setArticleInfo }) => {
  const [username, setUsername] = useState("");
  const [commentText, setCommentText] = useState("");

  const addComment = async () => {
    const result = await fetch(`/api/articles/${articleName}/add-comment`, {
      method: "POST",
      body: JSON.stringify({
        username,
        text: commentText,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const body = await result.json();
    setArticleInfo(body);
    setUsername('');
    setCommentText('');
  };
  return (
    <>
      <form id="add-comment-form">
        <label htmlFor="comment-name">
          Name:
          <input
            id="comment-name"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label htmlFor="comment-text">
          Comment:
          <textarea
            name="comment-text"
            id="comment-text"
            cols="50"
            rows="4"
            value={commentText}
            onChange={(event) => setCommentText(event.target.value)}
          ></textarea>
        </label>
        <button
          onClick={(e) => {
            e.preventDefault();
            return addComment(e);
          }}>
          Add Comment
        </button>
      </form>
    </>
  );
};

export default AddCommentForm;