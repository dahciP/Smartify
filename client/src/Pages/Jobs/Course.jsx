/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 550,
    height: 350,
    maxHeight: 400,
    textDecoration: 'none',
  },
  media: {
    height: 180,
    width: '100%',
    backgroundPosition: 'center',
    // width: 250,
  },
});

export default function Job({ job }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={job.job_img}
          title={job.job_name}
        />

        <CardContent>
          <h2>{job.job_name}</h2>
          <Typography variant="body2" color="textSecondary" component="p">
            University
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
