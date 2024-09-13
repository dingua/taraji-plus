import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../types';
import './ArticleList.css';

interface Props {
  articles: Article[];
  lastArticleRef: (node: HTMLDivElement | null) => void;
}

const ArticleList: React.FC<Props> = ({ articles, lastArticleRef }) => (
  <section className="article-list">
    {articles.map((article, index) => (
      <article 
        key={article.article_id} 
        ref={index === articles.length - 1 ? lastArticleRef : null}
      >
        <Link to={`/article/${article.article_id}`}>
          <div className="article-image">
            <img src={article.article_image_path} alt={article.article_title} />
          </div>
          <div className="article-content">
            <h3>{article.article_title}</h3>
            <p>{article.category_label}</p>
          </div>
        </Link>
      </article>
    ))}
  </section>
);

export default ArticleList;
