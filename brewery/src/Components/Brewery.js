import React from 'react'
import styled from 'styled-components'

const Brewery = (props) => {

    const Wrapper = styled.div `
        margin: 2%;
        min-width: 300px;
        min-height: 280px;
        max-height: 35vh;
        background-image: url('https://images.unsplash.com/photo-1574713600544-ca13b5d573d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80');
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        mix-blend-mode: luminosity;
        box-shadow: 3px 6px 3px 1px #000000ad;
        :hover{
            mix-blend-mode: normal;
            border-radius: 0;
        }
        h2{
            color: white;
            align-text: center;
            font-family: 'Permanent Marker', cursive;
            font-size: 2.5vw;
        }
        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
          }
        ul li{
            color: white;
            text-decoration: none;
            list-style-type: none;
            font-size: 2vw;
            text-align: center;
            margin: 0 auto;
        }
        a{
            text-decoration: none;
        }
    
    `
    const Card = styled.div `
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 20vw;
    
    `
    
    return (
        <Wrapper>
            <a href={props.list.website_url}>
            <Card>
                <h2>
                    {props.list.name}
                </h2>
                <ul>
                    <li>{props.list.state}</li>
                    <li>{props.list.country}</li>
                    {/* <li><a href={props.list.website_url}>Website</a></li> */}
                </ul>
            </Card>
            </a>
        </Wrapper>
    )
}

export default Brewery