import { connect } from 'react-redux';
import { NewsTemplate } from './NewsTemplate';
import { setNews } from '../../Store';

const mapStateToProps = state => ({
  news: state.news,
});

const mapDispatchToProps = dispatch => ({
  setNews: payload => dispatch(setNews(payload)),
});

export const News = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewsTemplate);
