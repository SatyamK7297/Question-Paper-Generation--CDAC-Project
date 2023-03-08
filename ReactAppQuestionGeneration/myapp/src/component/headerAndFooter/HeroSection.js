import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../styles/Button";

const HeroSection = () => {
    return (
        <Wrapper>
            <div className="container grid grid-two-column">
                <div className="section-hero-data">
                    <p className="hero-top-data">This Is Me</p>
                    <h1 className="hero-heading">Pariksha</h1>
                    <p className="hero-para">The Pariksha Portal is an online platform designed to help educational institutions manage and distribute question papers.
                        The system uses React.js for the frontend, Spring Boot for the backend, and MySQL for the database.
                        The system streamlines the process of creating
                        and distributing question papers, making it easier for educational institutions to manage their examination processes
                    </p>
                    <div><Button className="btn signup-btn">
                        <NavLink to="/signup">Sign up</NavLink>
                    </Button> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button className="btn signin-btn">
                        <NavLink to="/signin">Sign in</NavLink>
                    </Button>
                    </div>
                    
                </div>

                <div className="section-hero-image">
                    <picture>
                        <img src="../../images/mainpage.svg" className="hero-img" />
                    </picture>
                </div>
            </div>

        </Wrapper>
    )
};
const Wrapper = styled.section`
padding: 9rem 0;
.section-hero-data { 
    display: flex;
    flex-direction: column;
     justify-content: center;
}
.btn {
    max-width: 16rem;
}
    .hero-top-data { text-transform: uppercase;
    font-weight: 500; font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
    }
   .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
}
.hero-para{
    margin-top:1.5rem;
    margin-bottom:3.4rem;
    max-width:60rem;
}
.section-hero-image{
    display:flex;
    justify-content:center;
    align-item:center;
}
picture{
    text-align:center;
}
.her0-img{
    max-width: 80%;
}
`;
export default HeroSection;