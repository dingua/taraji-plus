import React from 'react';
import { Article } from '../types';
import { Link } from 'react-router-dom';
import '../App.css';

interface Props {
  article: Article;
}

const FeaturedArticle: React.FC<Props> = ({ article }) => (
  <section className="featured-article">
    <Link to={`/article/${article.article_id}`} className="link-unstyled">
      <div className="featured-image">
        <img src={article.article_image_path} alt={article.article_title} />
      </div>
      <div className="featured-content">
        <h2>{article.article_title}</h2>
        <p>{article.category_label}</p>
      </div>
    </Link>
  </section>
);

export default FeaturedArticle;
