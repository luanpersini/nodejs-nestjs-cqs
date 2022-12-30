import React from 'react'
import { Link } from 'react-router-dom'
import navigationPath from '../../../common/paths/navigationPath'

//import path from '../../../common/path/path'
import { CenterLinks } from './center-links'
import { NavContainer } from './navbar.style'
import { ToggleButton } from './toggle-button'

export const NavBar: React.FC = () => {
  return (
    <NavContainer>
      <div className="navbar navbar-expand-lg navbar-light bg-light py-1">
        <div className="container-fluid d-flex justify-content-between">
          {/*<!-- Toggle button -->*/}
          <ToggleButton />

          {/*<!-- Navbar brand -->*/}
          <Link className="navbar-brand m-0 ms-auto" to={navigationPath.home}>
            Lu Bank
          </Link>

          <div className="collapse me-lg-5 navbar-collapse">
            <CenterLinks />
          </div>
        </div>
      </div>

      {/*<!-- Visible on small screens -->*/}
      <div className="collapse me-lg-4 navbar-collapse navbar-light bg-light d-lg-none" id="navbarExternalLinks">
        <CenterLinks />
      </div>
    </NavContainer>
  )
}
