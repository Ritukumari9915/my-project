import React from 'react'
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import images from '../../public/images.jpeg';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { CartContext } from './CartContext'; 
import { useContext } from 'react';

function Header() {
   const  cart  = useContext(CartContext);
    // console.log('mycart', cart);
    return (
        <>
            <div className="top-header">
                <Container>
                    <div className="header">
                        <div className="logo"><img src={images} alt="" /></div>
                        <div className="nav-menu">
                            <ul>
                                <li>
                                    <a href='#'>Home</a>
                                </li>
                                <li>
                                    <a href='#'>About</a>
                                </li>
                                <li>
                                    <a href='#'>Service</a>
                                </li>
                                <li>
                                    <a href='#'>Contact</a>
                                </li>

                            </ul>
                        </div>
                        <div className="nav-icons">
                            <ul>
                                <li><a href="#"><AccountBoxIcon/> Register</a></li>
                              
                                <li><a href="#"><AddShoppingCartIcon />Cart</a>{cart?.cart?.length}</li>
                             
                                
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>

        </>
    )
}

export default Header
