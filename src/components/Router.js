import React from 'react'
import { BrowserRouter as Bowser, Route, Switch } from 'react-router-dom'
// import StorePicker from './StorePicker'
import App from './App'
import NotFound from './NotFound'
import Login from './Login'
import CreateInns from './CreateInns'
import Register from './Register'




const Router = () => (
  <Bowser>
      <Switch>
          <Route exact path="/" component={App} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/innings/create" component={CreateInns} />
          <Route path="/innings/:id" component={Register} />
          <Route component={NotFound} />
      </Switch>
  </Bowser>
)



export default Router