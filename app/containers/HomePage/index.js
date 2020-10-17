/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import Typography from '@material-ui/core/Typography';
import { Grid, Button } from '@material-ui/core';

export function HomePage() {
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });

  return (
    <div>
      <Grid
        container
        spacing={2}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography variant="h4" component="h2" gutterBottom align="center" color="textPrimary">
           Bienvenido Entrador Pokémon
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary">
            ¿estás preparado para buscar la información necesaria?
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" href="pokemons">
            Ver Pokémons
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(HomePage);
