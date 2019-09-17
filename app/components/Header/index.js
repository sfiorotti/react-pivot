import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default function Header({ labelHeader }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center' }}>
          {labelHeader}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
