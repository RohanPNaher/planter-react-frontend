import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav className={`navbar ${styles.navbar} fixed-top navbar-expand-sm`}>
          <div className={`container-fluid ${styles.greenBorder}`}>
            <Link to="/" className='navbar-brand'><img className={`logo ${styles.logo}`} src="https://i.imgur.com/Gb7J4z9.png" alt="p-logo" />
            </Link>
            <button
              className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">...</span>
            </button>
            <div className='collapse navbar-collapse d-flex nav-links-container' id='navbarNavDropdown'>
              <ul className='navbar-nav'>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">AHSJKDHAJSHDKJAHDJKHASJK
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                    <li><Link className="dropdown-item" to="/profiles">Profiles</Link></li>
                    <li><Link className="dropdown-item" to="/gardens">Gardens</Link></li>
                    <li><Link className="dropdown-item" to="/gardens/new">Add a Garden</Link></li>
                    <li><Link className="dropdown-item" to="" onClick={handleLogout}>LOG OUT</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        :
        <nav className={`navbar ${styles.navbar} fixed-top navbar-expand-sm`}>
          <div className={`container-fluid ${styles.greenBorder}`}>
            <Link to="/" className='navbar-brand'><img className={`logo ${styles.logo}`} src="https://i.imgur.com/UgJlwlz.png" alt="p-logo" />
            </Link>
            <button
              className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">...</span>
            </button>
            <div className='collapse navbar-collapse d-flex nav-links-container' id='navbarNavDropdown'>
              <ul className='navbar-nav'>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">AHSJKDHAJSHDKJAHDJKHASJK
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><Link className="dropdown-item" to="/login">Log In</Link></li>
                    <li><Link className="dropdown-item" to="/signup">Sign Up</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      }
    </>
  )
}

export default NavBar
