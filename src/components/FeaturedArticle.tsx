import React from 'react';
import { Article } from '../types';

interface Props {
  article: Article;
}

const FeaturedArticle: React.FC<Props> = ({ article }) => (
  <section className="featured-article">
    <img src={article.article_image_path} alt={article.article_title} />
    <h2>{article.article_title}</h2>
    <p>{article.category_label}</p>
  </section>
);

export default FeaturedArticle;
