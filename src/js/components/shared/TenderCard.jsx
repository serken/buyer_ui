import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    width: 345,
    minWidth: 257,
    flex: '0 0 20%',
    margin: 10
  },
  cardArea:{
    height: 325
  }
})

const TenderCard = (props) => {
  const {
    id,
    title,
    description,
    img,
    price
  } = props
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.cardArea} component={Link} to={`/tenders/${id}`}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={img || `https://picsum.photos/536/354?${id}`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h5">
            {title || 'Title'}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {price || '1.000.000'}$
          </Typography>
          <Typography gutterBottom variant="h7" component="h7">
            {description || 'Description'}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Make a proposal
        </Button>
      </CardActions>
    </Card>
  );
}

export default TenderCard
