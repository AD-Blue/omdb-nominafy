import { Flex, Input, Button, Heading, Text } from '@chakra-ui/react';
import './App.css';
import MovieCard from './Components/MovieCard';
import React, { useState, useEffect } from 'react';
import Nav from './Components/Nav';
import Banner from './Components/Banner';
import { useSelector } from 'react-redux';
import MovieList from './Components/MovieList';

function App() {
    const [content, setContent] = useState(null)
    const [search, setSearch] = useState("");

    let nominees = useSelector((state) => state.nominate.nominees);

    let url = "https://www.omdbapi.com/?apikey=16ee612e&";

    let banner = null

    /* useEffect(() => {
        if (nominees.length === 5) {
            banner = <Banner />
        }
        else {
            banner = null;
        }
    }, [nominees]) */

    const handleSearch = (event) => {
        setSearch(event.target.value.toLowerCase());
    }

    const handleSubmit = () => {
        if(search.substring(0, 2) === 'tt') {
            url = 'https://www.omdbapi.com/?apikey=16ee612e&i=' + search
            setContent(<MovieCard url={url} />)
        }
        else {
            url = 'https://www.omdbapi.com/?apikey=16ee612e&s=' + search.replaceAll(' ', '+')
            setContent(
                <MovieList url={url} />
            )
        }

        
    }

    return (
        <Flex direction='column'>
            <Nav />
            {nominees.length === 5 && (
                <Banner />
            )}

            <Heading as='h1' textAlign='center' mt='3%' fontSize='68px' color='#fbd38d'>The <br />Shoppies</Heading>
            <Text textAlign='center' mt='40px'>Nominate Your Favorite Movies</Text>

            <Input placeholder="Search by full movie title or IMDb ID" w='80%' ml='auto' mr='auto' mt='5%' p='1%' onChange={handleSearch} />
            <Button onClick={handleSubmit} mt='3%' mr='auto' ml='auto' colorScheme='orange' variant='outline'>Search</Button>

            {content}
        </Flex>
    );
}

export default App;
