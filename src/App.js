import './index.css'
import Navbar from './components/Navbar'
import Home from './screens/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './screens/Create'
import BlogDetails from './components/BlogDetails'
import NotFound from './screens/NotFound'


const App = () => {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route component={Home} path="/" exact/>
            <Route component={Create} path="/create"/>
            <Route component={BlogDetails} path="/blogs/:id"/>
            <Route component={NotFound} path="*"/> 
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App;
