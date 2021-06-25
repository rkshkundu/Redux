import React from 'react';
import { connect } from 'react-redux';

const applyFilter = searchVal => article =>
  article.title.toLowerCase().includes(searchVal.toLowerCase());

const App = ({ articles, searchVal, onSearch, addArticle }) =>
  <div>
    <input
      value={searchVal}
      onChange={event => onSearch(event.target.value)}
      type="text"
    />
    <br/>
    <br/>
    <div>
    {articles.filter(applyFilter(searchVal)).map((article, i) =>
      <a key={article.id} href={article.url}>{i+1}. {article.title}<br/></a>
    )}
    </div>

    <p>Take the journey to learn Redux in <a href={'https://roadtoreact.com/'}>Taming the State in React</a></p>
    <button type="button" onClick={addArticle}>Add new Article</button>
  </div>

// connecting view layer to state layer with react-redux

const mapStateToProps = state => ({
  articles: state.articleReducer.articles,
  searchVal: state.searchReducer.searchTerm,
});

const mapDispatchToProps = dispatch => ({
  onSearch: searchVal => dispatch({ type: 'SEARCH_SET', searchVal }),
  addArticle: () => dispatch({type: 'ART_ADD'})
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
