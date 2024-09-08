import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../types';

interface Props {
  articles: Article[];
}

const ArticleList: React.FC<Props> = ({ articles }) => (
  <section className="article-list">
    {articles.map(article => (
      <article key={article.article_id}>
        <Link to={`/article/${article.article_id}`}>
          <img src={article.article_image_path} alt={article.article_title} />
          <div className="content">
            <h3>{article.article_title}</h3>
            <p>{article.category_label}</p>
          </div>
        </Link>
      </article>
    ))}
  </section>
);

export default ArticleList;
