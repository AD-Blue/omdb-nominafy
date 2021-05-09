import { Flex, Input, Button } from '@chakra-ui/react';
import './App.css';
import MovieCard from './Components/MovieCard';
import React, { useState } from 'react';
import Nav from './Components/Nav';


function App() {
    const [content, setContent] = useState(null)
    const [search, setSearch] = useState("");

    let url = "http://www.omdbapi.com/?apikey=16ee612e&"

    const handleSearch = (event) => {
        setSearch(event.target.value.toLowerCase());
    }

    const handleSubmit = () => {
        if(search.substring(0, 2) === 'tt') {
            url = 'http://www.omdbapi.com/?apikey=16ee612e&i=' + search
        }
        else {
            url = 'http://www.omdbapi.com/?apikey=16ee612e&t=' + search.replaceAll(' ', '+')
        }

        setContent(<MovieCard url={url} />)
    }

    return (
        <Flex direction='column'>
            <Nav />

            <Input placeholder="Search by full movie title or IMDb ID" w='80%' ml='auto' mr='auto' mt='5%' p='1%' onChange={handleSearch} />
            <Button onClick={handleSubmit} mt='3%' mr='auto' ml='auto' colorScheme='teal' variant='outline'>Search</Button>

            {content}
        </Flex>
    );
}

export default App;
