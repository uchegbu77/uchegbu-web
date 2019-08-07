import React, {Component} from 'react'
import {Link, Route,} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Blog from './Blog'





class App extends Component {
  render() {

    return(

      <div className="container-fluid">

            <nav className="task-bar bg-dark py-2">
              <div className="row">
                <div className="float-left col-8">
                    <h5 className="text-light mx-5">Free Worldwide shipping on orders over $100!</h5>
                </div>

                <div className="float-right col-4">
                    <div className="row">
                      <Link href="/Home" className="px-2 "><i className="fa fa-user"></i>my Account</Link>
                      <Link href="/Home" className="px-2 "><i className="fa fa-lock"></i>login/ Register</Link>
                      <Link href="/Home"className="px-2 "><i className="fa fa-shopping-cart"></i>shopping Cart(2)</Link>
                    </div>
                </div>

              </div>
            </nav>


      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">

                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav mr-auto">
                      <Link className="nav-item nav-link text-info active" to="/">Home<span className="sr-only">(current)</span></Link>
                     <Link className="nav-item nav-link text-info" to="/about">About</Link>
                     <Link className="nav-item nav-link text-info" to="/contact">Contact</Link>
                     <Link className="nav-item nav-link text-info" to="/blog">Blog</Link>
                    </div>
                    <form className="form-inline my-2 my-lg-0">
                      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                  </div>
              </nav>



                     <div>
                         <switch>
                         <Route exact path = '/' component={Home} />
                          <Route path = '/about' component={About} />
                          <Route path = '/contact' component={Contact} />
                          <Route path = '/blog' component={Blog} />
                         </switch>
                     </div>

      </div>



    </div>
    )
  }
}




export default App
