import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    width: '100%'
  },
}));

const ProposalCard = (props) => {
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        {props.text || 'Title'}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {props.price || '1.000.000'}$
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {props.user_login || 'test_user'}
      </Typography>
      <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="145"
          image={props.img || `https://picsum.photos/900/145/?${props.id}`}
          title="Contemplative Reptile"
        />
    </Paper>
  )
}

export default ProposalCard
