import React from 'react';
import { connect } from 'react-redux';

const App = ({ articles }) =>
  <div>
    <br/><br/><br/>APP1
    {articles.map((article, i) =>
      <a key={article.id} href={article.url}>{i+1}. {article.title}<br/></a>
    )}
    </div>
// connecting view layer to state layer with react-redux

const mapStateToProps = state => ({
  articles: state.articleReducer.articles,
});

export default connect(mapStateToProps)(App);
