import React from 'react'
import { Switch, Route } from  'react-router-dom'
import { Dashboard, Repository } from '../pages'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Dashboard} exact/>
    <Route path="/repository/:repository+" component={Repository}/>
  </Switch>
)

export default Routes;


