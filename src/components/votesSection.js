import React from "react";

const VotesSection = ({ articleName, votes, setArticleInfo }) => {
  const voteArticle = async (direction) => {
    const result = await fetch(
      `/api/articles/${articleName}/${direction}vote`,
      {
        method: "POST",
      }
    );
    const body = await result.json();
    setArticleInfo(body);
  };
  return (
    <>
      <div id="upvotes-section">
        <button onClick={() => voteArticle('up')}>Upvote</button>
        <button onClick={() => voteArticle('down')}>Downvote</button>
        <p>This post has {votes} votes</p>
      </div>
    </>
  );
};


export default VotesSection;