import React, { Component } from 'react'
import { NavLink } from "react-router-dom"

export default class Header extends Component {
  render() {
    return (
        <div class="sidebar">
          <ul>
            <li><NavLink to="/" className="navlink"><i class="fas fa-home"></i><span className="head"> News Clone</span></NavLink></li>
            <li><NavLink to="/top" className="navlink"><i class="fas fa-users"></i> Top Stories</NavLink></li>
            <li><NavLink to="/latest" className="navlink"><i class="fas fa-users"></i> Latest Stories</NavLink></li>
            <li><NavLink to="/best" className="navlink"><i class="fas fa-users"></i> Best Stories</NavLink></li>
          </ul>
        </div>
    )
  }
}