/* eslint-disable @typescript-eslint/ban-types */

export function ToggleButton() {     
    
    return (
      <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarExternalLinks"
            aria-controls="navbarExternalLinks"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          <i className="fa fa-bars"></i>
          </button>
    )
  }
  