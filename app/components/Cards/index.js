/**
 *
 * Cards
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from '@material-ui/core';
import Bottom from './Bottom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 210,
  },
});

function Cards(props) {
  const classes = useStyles();

  const handleClick = pokemon => () => props.onClick(pokemon);

  return (
    <Grid container spacing={2}>
      {props.cards.map(card => (
        <Grid item xs={5} key={card.name}>
          <Card className={classes.root}>
            <CardActionArea onClick={handleClick(card.name)}>
              <CardMedia
                className={classes.media}
                image={card.img}
                title={card.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {card.name.toUpperCase()}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {card.id}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
      <Grid item xs={12} align="center">
        <Bottom
          top={props.count}
          limit={props.limit}
          onChangePage={props.onChangePage}
        />
      </Grid>
    </Grid>
  );
}

Cards.propTypes = {
  cards: PropTypes.array.isRequired,
  limit: PropTypes.number,
  count: PropTypes.number,
  onChangePage: PropTypes.func,
  onClick: PropTypes.func,
};

export default Cards;
