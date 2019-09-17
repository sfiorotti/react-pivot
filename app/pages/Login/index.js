import React, { Component, Suspense } from 'react'
import { Container, TextField, Typography } from '@material-ui/core'

const Header = React.lazy(() => import('../../components/Header'));

export default class Login extends Component {
  render() {
    return (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <Header labelHeader="Login" />
        </Suspense>
        <Container maxWidth="sm">
          <Typography component="div" style={{ height: '100vh', margin: '10px' }}>
            <form noValidate autoComplete="off">
              <TextField
                id="outlined-name"
                label="Email"
                margin="normal"
                variant="outlined"
                fullWidth
              />
              <TextField
                id="outlined-name"
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                fullWidth
              />
            </form>
          </Typography>
        </Container>
      </>
    )
  }
}
