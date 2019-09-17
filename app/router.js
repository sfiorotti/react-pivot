import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Login = React.lazy(() => import('./pages/Login'));
// import { Login } from './pages/Login'

export default function Routes() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" component={Login} />
        </Switch>
      </Suspense>
    </Router>
  )
}