import React from 'react';
import Brewery from './Brewery';

import styled from 'styled-components';

const BrewList = (props) => {

    const ListWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    height: auto;
    width: 99vw;
    margin: 0 auto;
  `;


return (
    <ListWrapper>
        {props.breweries.map(list => (
            list.state === props.states ?  
            <Brewery key={list.id} list={list} /> :
            props.search === '' ? <Brewery key={list.id} list={list} /> : null
            
        ))}
    </ListWrapper>
)


}

export default BrewList