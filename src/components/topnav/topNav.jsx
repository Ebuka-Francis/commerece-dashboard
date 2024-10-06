import './topNav.css';
import MenuIcon from '@mui/icons-material/Menu';

export default function TopNav({title}) {
    return <div className='topnav-container'>
   <h4> {title}</h4>
  <div className="menu">
    <MenuIcon />
  </div>
    </div>
}