import React from 'react'
import { Button } from '@material-ui/core'

export default function ({ label }) {
  return (
    <Button variant="contained" color="primary" size="large" style={{marginTop: 10}}>
      {label}
    </Button>
  )
}
