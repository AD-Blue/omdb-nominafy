import { Flex, Text, Input, Button } from '@chakra-ui/react';
import './App.css';
import MovieCard from './Components/MovieCard';
import React, { useState } from 'react'


function App() {
    const [content, setContent] = useState(null)

    let search = "";

    let url = "http://www.omdbapi.com/?apikey=16ee612e&"

    const handleSearch = (event) => {
        search = event.target.value;

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

    return (
        <Flex direction='column'>
            <Flex w='100%' h='50px' bg='#037ef3' align='center'>
                <Text>Nominafy</Text>
            </Flex>

            <Input placeholder="Search by movie title or IMDb ID" w='80%' ml='auto' mr='auto' mt='5%' p='1%' onChange={handleSearch} />
            <Button onClick={handleSubmit} mt='3%' mr='auto' ml='auto' colorScheme='teal' variant='outline' >Search</Button>

            {content}
        </Flex>
    );
}

export default App;
