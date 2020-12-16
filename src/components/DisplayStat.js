import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
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
          <Box display='flex' justifyContent='center' fontSize={24} fontWeight="bold">
            {title}
          </Box>
          <Box display='flex' justifyContent='center' fontSize={28} fontWeight="medium" marginTop="20px">
            {data} {units}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default DisplayStat;