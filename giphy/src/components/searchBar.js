import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';
import axios from 'axios';
import Display from './displayContainer.js';

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            option1: '',
            option2: '',
            keyword: '',
            url: '',
            gifs: "gifs",
            data: {}
        }
    }
    searchGifs = async (e) => {
        e.preventDefault();
        await this.setState({ gifs: "gifs", option1: 'gifs', option2: '' });
        if (this.state.keyword.length > 0) {
            this.fetchData();
        }
    }
    searchStickers = async (e) => {
        e.preventDefault();
        await this.setState({ gifs: "stickers", option1: '', option2: 'stickers', })
        if (this.state.keyword.length > 0) {
            this.fetchData();
        }
    }
    handleInput = e => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }

    fetchData = async (e) => {
        try {
            let APIKEY = "NByeny2ItNCWUfNnnyz9cIrI2vz65Bfd";
            let url = `https://api.giphy.com/v1/${this.state.gifs}/search?api_key=${APIKEY}&q=`;
            let qry = url.concat(this.state.keyword)
            let data = await axios.get(qry);
            this.setState({ data: data.data.data })
        } catch (err) {
            console.log(err)
        }

    }
    render() {
        return (
            <div>
                <SearchBox>
                    <Input onKeyDown={this.fetchData} onChange={this.handleInput} value={this.state.keyword} name='keyword' placeholder='search' />
                    <FontAwesomeIcon onClick={this.fetchData} className='SearchIcon' icon={faSearch} />
                </SearchBox>
                <OptionBox>
                    <Button className={` ${this.state.option1}`} onClick={this.searchGifs} >GIFs</Button>
                    <Button className={` ${this.state.option2}`} onClick={this.searchStickers} >Stickers</Button>
                </OptionBox>
                <Display data={this.state.data} />
            </div >
        );

    }

}


const SearchBox = styled.div`
    margin: 10px;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    .SearchIcon{
        padding: 0.5rem;
        margin: 0.5rem;
        cursor: pointer;
    }

`
const Input = styled.input`
    width: 70%;
    padding: 0.5rem;
    margin: 0.5rem;
    border-radius: 5px;
`

const OptionBox = styled.div`
    padding: 0.5rem;
    margin: 0.5rem;
    margin: 10px;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    .gifs, .stickers {
        background: olive; 
    }
`

const Button = styled.button`
    cursor: pointer;
    background: black;
    color: white;
    width: 6rem;
    height: 2rem;
    /* &:hover{
        background: olive;
    } */
`
export default SearchPage;