import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

export default function Header({ label }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center' }}>
          {label}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
