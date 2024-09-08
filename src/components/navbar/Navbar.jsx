import './navbar.scss'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <a href="#">Home</a>
        <a href="#">Orders</a>
        <a href="#">Integrations</a>
        <span>
          <a href="#">Tracking Page</a>
          <KeyboardArrowDownOutlinedIcon />
        </span>
        <a href="#">Partner with Us</a>
      </div>
      <div className="right">
        <span className="search">
          <SearchOutlinedIcon/>
          <input type="text" placeholder='Search' />
        </span>
        <span>
          <PermIdentityIcon />
          <a href="#">Account</a>
        </span>
        <span>
          <SettingsOutlinedIcon />
          <a href="#">Settings</a>
        </span>
      </div>
    </div>
  )
}

export default Navbar
