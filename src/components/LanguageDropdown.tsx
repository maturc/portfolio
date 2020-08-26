import React, { useState } from 'react';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button, Menu, MenuItem } from '@material-ui/core';
import english from '../languages/english.json';
import hrvatski from '../languages/hrvatski.json';
import deutsch from '../languages/deutsch.json';

function LanguageDropdown( {language, setLanguage}: any ) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (lang: any) => {
    setAnchorEl(null);
    if(lang)
      setLanguage(lang);
  };
  return (
    <div className="language__dropdown">
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} disableRipple={true} >
        <LanguageIcon/><span className="language__dropdown-lang">{language}</span><span className="language__dropdown-expand"><ExpandMoreIcon/></span>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={()=>handleClose(undefined)}
        style={{top: "10px"}}
      >
        <MenuItem disableRipple={true} onClick={()=>handleClose(hrvatski)}>Hrvatski</MenuItem>
        <MenuItem disableRipple={true} onClick={()=>handleClose(english)}>English</MenuItem>
        <MenuItem disableRipple={true} onClick={()=>handleClose(deutsch)}>Deutsch</MenuItem>
      </Menu>
    </div>
  );
}

export default LanguageDropdown;