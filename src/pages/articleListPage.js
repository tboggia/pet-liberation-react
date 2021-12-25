import React from "react";
import articleContent from "./article-content";
import ArticlesList from "../components/articlesList";

const ArticlesListPage = () => (
  <>
    <h1>Articles</h1>
    <ArticlesList articles={articleContent} />
  </>
);
export default ArticlesListPage;
