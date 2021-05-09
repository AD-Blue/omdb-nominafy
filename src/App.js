import { Flex, Input, Button } from '@chakra-ui/react';
import './App.css';
import MovieCard from './Components/MovieCard';
import React, { useState } from 'react';
import Nav from './Components/Nav';
import NominationList from './Components/NominationList';
import { useSelector } from 'react-redux';


function App() {
    const [content, setContent] = useState(null)

    let search = "";

    const nominees = useSelector((state) => state.nominate.nominees);

    let url = "http://www.omdbapi.com/?apikey=16ee612e&"

    const handleSearch = (event) => {
        search = event.target.value.toLowerCase();

        console.log(search.substring(0, 2))
        console.log(`You entered ${search}`)
    }

    const handleSubmit = () => {
        if(search.substring(0, 2) === 'tt') {
            url = 'http://www.omdbapi.com/?apikey=16ee612e&i=' + search
        }
        else {
            url = 'http://www.omdbapi.com/?apikey=16ee612e&t=' + search.replaceAll(' ', '+')
        }

        console.log(`URL to search is ${url}`)

        setContent(<MovieCard url={url} />)
    }

    const test = () => {
        console.log(nominees)
    }

    return (
        <Flex direction='column'>
            <Nav />

            <Input placeholder="Search by full movie title or IMDb ID" w='80%' ml='auto' mr='auto' mt='5%' p='1%' onChange={handleSearch} />
            <Button onClick={handleSubmit} mt='3%' mr='auto' ml='auto' colorScheme='teal' variant='outline'>Search</Button>

            {content}

            <Button onClick={test}>Test</Button>
        </Flex>
    );
}

export default App;
