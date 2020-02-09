import React from 'react';
import styled from 'styled-components';
import Nav from '../Components/Nav';

const Header = () => {

    const Wrapper = styled.div`
        background-image: url('https://images.pexels.com/photos/3626602/pexels-photo-3626602.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        width: 99vw;
        margin: 0 auto;
        height: 75vh;
        display: flex;
        justify-content: center;
        align-item: center;
    `;

    const Title = styled.div`
    width: 100%;
    color: black;
    mix-blend-mode: screen;
    background-color: rgb(212, 212, 212);
    font-size: 18vw;
    line-height: 20vh;
    margin: 0 auto;
    font-family: 'Permanent Marker', cursive;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    `

    return(
        <Wrapper>
            <Title>
                Explore Breweries
                <Nav/>
            </Title>
        </Wrapper>
    )
}

export default Header