import React, {useState, useEffect} from "react";
import articleContent from './article-content';
import ArticlesList from "../components/articlesList";
import CommentsList from "./commentsList";
import VotesSection from "../components/votesSection";
import NotFoundPage from "./notFoundPage";
import AddCommentForm from "../components/addCommentForm";

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find(article => article.name === name)
  // useState([DEFAULT VALUE])
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      setArticleInfo(body);
    }
    fetchData();
  }, [name]);

  if (!article) return <NotFoundPage/>;

  const otherArticles = articleContent.filter(article => article.name !== name)
  return (
    <>
      <h1>{article.title}</h1>
      <VotesSection
        articleName={name}
        votes={articleInfo.votes}
        setArticleInfo={setArticleInfo}
      />
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <p>{article.content}</p>
      <CommentsList comments={articleInfo.comments} />
      <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
      <h2>Other Articles</h2>
      <ArticlesList articles={otherArticles} />
    </>
  );
};

export default ArticlePage;
