/**
 *
 * PokemonsPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import Table from 'components/Table';
import Img from 'components/Img/Loadable';
import { Button } from '@material-ui/core';
import makeSelectPokemonsPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getPokemons } from './actions';

const headers = [
  {
    id: 'id',
    numeric: true,
    label: 'ID',
  },
  {
    id: 'img',
    numeric: false,
    label: 'Imagen',
    format: element => <Img src={element} width="50px" />,
  },
  {
    id: 'name',
    numeric: false,
    label: 'Nombre',
    format: element => (
      <Button variant="outlined" color="secondary" href={`pokemon/${element}/`}>
        {element}
      </Button>
    ),
  },
];

export class PokemonsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showTable: true };
  }

  componentWillMount() {
    this.props.getPokemons(5, 0);
  }

  render() {
    const { rows, count } = this.props.pokemonsPage;

    const handleChangePage = (limit, offset) =>
      this.props.getPokemons(limit, offset);

    return (
      <div>
        {this.state.showTable && (
          <Table
            headers={headers}
            rows={rows}
            count={count}
            onChangePage={handleChangePage}
          />
        )}
      </div>
    );
  }
}

PokemonsPage.propTypes = {
  getPokemons: PropTypes.func,
  pokemonsPage: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  pokemonsPage: makeSelectPokemonsPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    getPokemons: (limit, offset) => dispatch(getPokemons(limit, offset)),
  };
}

const withReducer = injectReducer({ key: 'pokemonsPage', reducer });
const withSaga = injectSaga({ key: 'pokemonsPage', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PokemonsPage);
