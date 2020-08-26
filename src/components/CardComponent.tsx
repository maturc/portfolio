import React from 'react';
import { Paper, Typography, Button } from '@material-ui/core';
import { ICard } from '../interfaces';

function CardComponent( {imgUrl, imgAlt, title, body, websiteButton, sourceButton, moreButton, linkToWebsite, linkToSource}: ICard ) {
  return (
    <Paper elevation={1} className="card">
      <img src={imgUrl} alt={imgAlt} className="card__img" />
      <div className="card__description">
        <Typography variant="h5" component="h3">
          {title}
        </Typography>
        <Typography variant="body1">
          {body}
        </Typography>
        <div className="card__buttons">
          { linkToWebsite &&
            <Button
              onClick={() => window.open(linkToWebsite, "_blank")}
              className="button"
              color="primary" variant="contained"
              disableRipple={true}
            >
              {websiteButton}
            </Button>
          }
          <Button
            onClick={() => window.open(linkToSource, "_blank")}
            className="button"
            color="primary"
            variant="contained"
            disableRipple={true}
          >
            {linkToWebsite ? sourceButton : moreButton}
          </Button>
        </div>
      </div>
    </Paper>
  );
}

export default CardComponent;