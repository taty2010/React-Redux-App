import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Nav = () => {

    const Wrapper = styled.div`
        margin-top: 5%;
        height: 10vh;
        width: 50vw;
        /* position: unset; */
        align-items: center;
        display: flex;
        justify-content: center;

    `

    return(
        <Wrapper>
            <Link className='router_link' to='/'>Home</Link> 
            <p>/</p>
            {/* <Link className='router_link' to='/about'>About Us</Link> */}
            <Link className='router_link' to='/search'>Search</Link>
        </Wrapper>
    )
}

export default Nav