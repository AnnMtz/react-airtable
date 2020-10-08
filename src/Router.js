import React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Projects from './components/Projects'
import Team from './components/Team'
import Blog from './components/Blog'
import Footer from './components/Footer'
import Contact from './components/Contact'


class Router extends Component {

  render() {
    return (
      <BrowserRouter>
        {/* <Navbar /> */}
          {/* Configuracion de las rutas */}
            <Switch>
              <Route exact path="/" component={Home} />
              {/* <Route exact path="/home" component={Home} /> */}
              <Route exact path="/projects" component={Projects} />
              {/* <Route exact path="/blogs" component={Blogs} /> */}
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/team" component={Team} />
              <Route exact path="/contact" component={Contact} />

            </Switch>
        <Footer />
      </BrowserRouter>
    )
  }
}

export default Router;