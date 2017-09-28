import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import actions from '../../modules/actions';

import Search from './view';

const mapStateToProps = (state) => {
  return {
    Airports: state.search.Airports,
    Airlines: state.search.Airlines,
    Direction: state.search.Direction
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
      ...actions.searchActions,
      changePage: (page) => push(page)
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
