export interface Article {
  article_id: number;
  article_title: string;
  article_content: string;
  article_image_path: string;
  category_label: string;
  article_paid: number;
  id_competition_type: number;
  created_at: string;
}

export interface NextMatch {
  competition_id: number;
  first_group_logo: string;
  first_group_name: string;
  first_group_score: number | null;
  second_group_logo: string;
  second_group_name: string;
  second_group_score: number | null;
  competition_date: string;
  competition_time: string;
  competition_championship: string;
}

export interface HomeData {
  totalPages: number;
  articles: Article[];
  nextMatch: NextMatch;
}
