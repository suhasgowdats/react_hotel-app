import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header(){
    return(
        <>
        <div className='header'>
         <img className='header-icon' src='https://blog.logomyway.com/wp-content/uploads/2020/03/arbnb-logo.jpg' alt=''/>
         <div className='header-center'>
             <input type="text" placeholder='Search here'/>
             <SearchIcon/>
         </div>
         <div className='header-right'>
             <p>Become a host</p>
             <ExpandMoreIcon/>
             <LanguageIcon/>
             <AccountCircleIcon/>

         </div>
        </div>
        </>
    )
}
export default Header