import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    maxWidth: "100",
    height: 92.5,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  button: {
    marginTop: 5,
    marginLeft: 60,
}
}));

function Card1() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
        <CardMedia
        className={classes.cover}
        image="images.jpeg"
        title="Impala"
        />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="body" variant="body">
            Exclutive
          </Typography>
          <Button size="small" variant="contained" color="Secondary" className={classes.button}>
            Rp.30.000/
          </Button>
        </CardContent>
      </div>
    </Card>
  );
}
export default Card1;