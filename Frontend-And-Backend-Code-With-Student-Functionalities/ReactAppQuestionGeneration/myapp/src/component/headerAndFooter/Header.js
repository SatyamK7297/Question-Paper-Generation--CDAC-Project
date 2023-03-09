import React from 'react';
import {  NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import styled from 'styled-components';

function Header() {
    return (
        <MainHeader>
            <NavLink to="/">
                <img src="../../images/p-satyam.png" alt="logo" className='logo'  />
            </NavLink>
            <Navbar/>

            
        </MainHeader>

    )
};
const MainHeader = styled.header`
padding:0 4.8rem;
height: 6rem;
background-color:#1a1833;
display:flec;
justify-content:space-between;
align-item:center;

 .logo{
    height:100%;
    background-color:#ffffff;
    max-width:25rem;
   
    filter: contrast(1);
 }
`;
export default Header;