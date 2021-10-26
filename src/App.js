import React from 'react';
import { connect } from 'react-redux';
import Grid from './components/moviesGrid/Grid';


const App = ({ data }) => (
  <Grid data={data} />
);

const mapStateToProps = state => ({
  data: state.movies
});

export default connect(mapStateToProps)(App);
