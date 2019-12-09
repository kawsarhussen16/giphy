import React from 'react'
import styled from 'styled-components';

export default function Display({ item }) {
    let url = item.images.downsized.url;
    return (
        <PerBox>
            <img src={url} alt={item.title} />
        </PerBox>
    )
}


const PerBox = styled.div`
    margin: auto;
    width: 33%;
    height: auto;
    max-height: 400px;
    img{
        width: 100%;
        height: 100%;
    }

`