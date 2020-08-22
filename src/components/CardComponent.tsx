import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { ICard } from '../interfaces';

function CardComponent( {imgUrl, imgAlt, title, body}:ICard ) {
  return (
    <Paper elevation={1} className="card">
      <img src={imgUrl} alt={imgAlt} className="card__img" />
      <div className="card__description">
        <Typography variant="h5">
          {title}
        </Typography>
        <Typography variant="body1">
          {body}
        </Typography>
      </div>
    </Paper>
  );
}

export default CardComponent;