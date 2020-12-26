import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import All from './All';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import MainScreen from './MainScreen';
import Messenger from './Messenger';
import Sidebar from './Sidebar';
import { useStateVavlue } from './StateProvider';
import Widgets from './Widgets';

function App() {
  const [{ user }, dispatch] = useStateVavlue();
  return (
        <>
          <Router>
            <Switch>
              <Route path='/' exact component={All}/>
              <Route path='/msg' component={Messenger} />
            </Switch>
          </Router>
        </>
  );
}

export default App;
