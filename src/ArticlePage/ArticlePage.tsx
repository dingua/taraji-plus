import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useArticleData } from '../hooks/useArticleData';
import './ArticlePage.css';

const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { article, linkedArticles, loading, error } = useArticleData(id || '');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!article) return <div>Article not found</div>;

  return (
    <div className="article-page">
      <div className="article-hero" style={{ backgroundImage: `url(${article.article_image_path})` }}>
        <h1>{article.article_title}</h1>
      </div>
      <div className="article-content">
        <p className="article-meta">{article.category_label} | {new Date(article.created_at).toLocaleDateString()}</p>
        <div dangerouslySetInnerHTML={{ __html: article.article_content }} />
      </div>
      {linkedArticles.length > 0 && (
        <div className="linked-articles">
          <h2>Related Articles</h2>
          <ul>
            {linkedArticles.map(linkedArticle => (
              <li key={linkedArticle.article_id}>
                <Link to={`/article/${linkedArticle.article_id}`}>
                  {linkedArticle.article_title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ArticlePage;
