import React from 'react';
import { Breadcrumbs, Link } from '@material-ui/core';


function Navbar() {
  return (
    <div className='navbar-items'>
        <nav>
            <Breadcrumbs aria-label='breadcrumbs'>
                <Link underline="hover" color="inherit" href={'/'}>Dashboard</Link>
                <Link underline="hover" color="inherit" href={'/signup'}>Signup</Link>
                <Link underline="hover" color="inherit" href={'/login'}>Login</Link>  
                
            </Breadcrumbs>
               
            
        </nav>
    </div>
  );
}

export default Navbar;