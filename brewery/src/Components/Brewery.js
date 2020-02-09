import React from 'react'
import styled from 'styled-components'

const Brewery = (props) => {

    const Wrapper = styled.div `
        padding: 2%;
    
    `
    
    return (
        <Wrapper>
            <h2>
                {props.list.name}
            </h2>
            <ul>
                <li>{props.list.state}</li>
                <li>{props.list.country}</li>
                <li><a href={props.list.website_url}>Website</a></li>
            </ul>
        </Wrapper>
    )
}

export default Brewery