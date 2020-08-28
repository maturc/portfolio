import React from 'react';
import { Paper, Typography, Button } from '@material-ui/core';
import { ICard } from '../interfaces';

function CardComponent( {imgUrl, imgAlt, title, body, websiteButton, sourceButton, moreButton, linkToWebsite, linkToSource}: ICard ) {
  function handleClick( link: string ) {
    (document.activeElement as any).blur();
    window.open(link, "_blank");
  }
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
              onClick={() => handleClick( linkToWebsite )}
              className="button"
              color="primary" variant="contained"
              disableRipple={true}
            >
              {websiteButton}
            </Button>
          }
          <Button
            onClick={() => handleClick( linkToSource )}
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