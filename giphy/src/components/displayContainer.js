import React from 'react';
import Display from './Display.js';
import styled from 'styled-components';

export default function displayContainer({ data }) {
    return (
        (data.length > 0) ?
            <DContainer>
                {data.map(item => <Display item={item} key={item.id} />)}
            </DContainer> : null
    )
}


const DContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 3%;

`
