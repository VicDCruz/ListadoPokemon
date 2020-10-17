/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'containers/Header/Loadable';
import PokemonsPage from 'containers/PokemonsPage/Loadable';
import PokemonPage from 'containers/PokemonPage/Loadable';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 16px 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <div>
      <Header />
      <AppWrapper>
        <Helmet
          titleTemplate="%s - Listado de Pokémons"
          defaultTitle="Listado de Pokémons"
        >
          <meta name="description" content="Una aplicación de Víctor Cruz" />
        </Helmet>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/pokemons" component={PokemonsPage} />
          <Route path="/pokemons/:id" component={PokemonPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </AppWrapper>
    </div>
  );
}
