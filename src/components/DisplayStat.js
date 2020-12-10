import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const DisplayStat = ({title, img, data, units}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          height="140"
          image={img}
          title={title}
        />
        <CardContent>
        <Box display='flex' justifyContent='center'>
          <Typography gutterBottom variant="h6">
            {title}
          </Typography>
          </Box>
          <Box display='flex' justifyContent='center'>
          <Typography gutterBottom variant="h4">
            {data} {units}
          </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default DisplayStat;