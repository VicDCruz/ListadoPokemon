/**
 *
 * PokemonPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { Grid, Paper, Typography } from '@material-ui/core';
import Img from 'components/Img';
import makeSelectPokemonPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getPokemon } from './actions';
import Drawer from './Drawer';

export class PokemonPage extends React.Component {
  componentWillMount() {
    this.props.getPokemon(
      this.props.match ? this.props.match.params.name : this.props.name,
    );
  }

  render() {
    const pokemon = this.props.match ? this.props.match.params.name : '';

    return (
      <div>
        {!this.props.pokemonPage.loading && this.props.pokemonPage.error && (
          <Typography variant="h2" gutterBottom>
            No encontramos a {pokemon.toUpperCase()}. Al parecer, nadie lo ha
            capturado aún :(
          </Typography>
        )}
        {!this.props.pokemonPage.loading && !this.props.pokemonPage.error && (
          <div>
            <Typography variant="h3" gutterBottom>
              {pokemon.toUpperCase()}
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Img
                  src={this.props.pokemonPage.img}
                  height="250px"
                  alt={pokemon}
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography variant="h4" gutterBottom>
                  Información
                </Typography>
                <Typography variant="h5" gutterBottom>
                  ID: {this.props.pokemonPage.id}
                </Typography>
                <Typography variant="h5" gutterBottom>
                  Peso: {this.props.pokemonPage.weight} kg
                </Typography>
                <Drawer
                  title={`Habilidades - ${
                    this.props.pokemonPage.baseExperience
                  } exp. base`}
                >
                  <Grid
                    container
                    spacing={2}
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    {this.props.pokemonPage.abilities.map(ability => (
                      <Grid item xs key={ability.ability.name}>
                        <Paper elevation={4}>
                          <Typography variant="subtitle2">
                            Nombre: {ability.ability.name}
                          </Typography>
                          <Typography variant="subtitle2">
                            Slot: {ability.slot}
                          </Typography>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                </Drawer>
                <Drawer title="Tipos">
                  <Grid
                    container
                    spacing={2}
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    {this.props.pokemonPage.types.map(type => (
                      <Grid item xs key={type.type.name}>
                        <Paper elevation={4}>
                          <Typography variant="subtitle2">
                            Nombre: {type.type.name}
                          </Typography>
                          <Typography variant="subtitle2">
                            Slot: {type.slot}
                          </Typography>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                </Drawer>
                <Drawer title="Movimientos">
                  <Grid
                    container
                    spacing={2}
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    {this.props.pokemonPage.moves.map(move => (
                      <Grid item xs={12} key={move.move.name}>
                        <Paper elevation={4}>
                          <Typography variant="subtitle2">
                            Nombre: {move.move.name}
                          </Typography>
                          <Typography variant="subtitle2">
                            Aprenido en los niveles:
                          </Typography>
                          <ul>
                            {move.version_group_details.map(version => (
                              <li
                                key={`${version.version_group.name}: 
                          ${version.move_learn_method.name} - 
                          ${version.level_learned_at}`}
                              >
                                {`${version.version_group.name}: 
                              ${version.move_learn_method.name} - 
                              ${version.level_learned_at}`}
                              </li>
                            ))}
                          </ul>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                </Drawer>
              </Grid>
            </Grid>
          </div>
        )}
      </div>
    );
  }
}

PokemonPage.propTypes = {
  getPokemon: PropTypes.func.isRequired,
  match: PropTypes.object,
  pokemonPage: PropTypes.object,
  name: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  pokemonPage: makeSelectPokemonPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    getPokemon: name => dispatch(getPokemon(name)),
  };
}

const withReducer = injectReducer({ key: 'pokemonPage', reducer });
const withSaga = injectSaga({ key: 'pokemonPage', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PokemonPage);
