import React from 'react'
import styled from 'styled-components'

const Brewery = (props) => {
    return (
        <div className='brewWrapper'>
            <a href={props.list.website_url}>
            <div className='brewItems'>
                <i class="fas fa-beer"></i>
                <h2>
                    {props.list.name}
                </h2>
                <ul>
                    <li>{props.list.state}</li>
                    <li>{props.list.country}</li>
                    {/* <li><a href={props.list.website_url}>Website</a></li> */}
                </ul>
            </div>
            </a>
        </div>
    )
}

export default Brewery