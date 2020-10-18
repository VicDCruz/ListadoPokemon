import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

function Bottom(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [offset, setOffset] = React.useState(0);

  const handlePrev = () => {
    setOffset(offset - 1);
    if (offset - 1 >= 0)
      props.onChangePage(props.limit, props.limit * (offset - 1));
  };

  const handleNext = () => {
    setOffset(offset + 1);
    if (offset * props.limit < props.top)
      props.onChangePage(props.limit, props.limit * (offset + 1));
  };

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="Atrás"
        icon={<NavigateBeforeIcon />}
        onClick={handlePrev}
      />
      <BottomNavigationAction
        label="Adelante"
        icon={<NavigateNextIcon />}
        onClick={handleNext}
      />
    </BottomNavigation>
  );
}

Bottom.propTypes = {
  limit: PropTypes.number,
  top: PropTypes.number,
  onChangePage: PropTypes.func,
};

export default Bottom;
