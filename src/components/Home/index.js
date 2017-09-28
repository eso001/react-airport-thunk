import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Home from './view';

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: (page) => push(page)
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
