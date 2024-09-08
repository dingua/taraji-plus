import React from 'react';
import { NextMatch as NextMatchType } from '../types';

interface Props {
  match: NextMatchType;
}

const NextMatch: React.FC<Props> = ({ match }) => (
  <section className="next-match">
    <h3>{match.competition_championship}</h3>
    <div className="match-info">
      <img src={match.first_group_logo} alt={match.first_group_name} />
      <span>{match.first_group_name}</span>
      <span>vs</span>
      <span>{match.second_group_name}</span>
      <img src={match.second_group_logo} alt={match.second_group_name} />
    </div>
    <p>{match.competition_date} {match.competition_time}</p>
  </section>
);

export default NextMatch;
