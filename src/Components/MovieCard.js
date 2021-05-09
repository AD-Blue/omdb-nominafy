import React from 'react';
import { Flex, Text, Button, Spinner } from '@chakra-ui/react';
import { useAxiosGet } from '../Utility/HttpRequest';
import { useSelector, useDispatch } from 'react-redux';
import { nominate, denominate } from '../Redux/nominateSlice';

export default function MovieCard({ url }) {
    const nominees = useSelector((state) => state.nominate.nominees)
    const dispatch = useDispatch();

    let movie = useAxiosGet(url);

    let content = null;
    let button = null;

    const handleNominate = () => {
        dispatch(nominate(movie))
        console.log(nominees)
    }

    const handleDenominate = () => {
        dispatch(denominate(movie))
        console.log('Denominate attempted')
    }

    console.log(movie)

    if (nominees.includes(movie)) {
        button =
        <Button colorScheme="pink" variant="outline" onClick={handleDenominate}>
            Remove From Your Nominations
        </Button>
    }
    else if (!nominees.includes(movie) && nominees.length < 5) {
        button =
        <Button colorScheme="teal" variant="outline" onClick={handleNominate}>
            Nominate
        </Button>
    }
    else {
        button =
        <Button isDisabled={true} colorScheme="teal" variant="outline" onClick={handleNominate}>
            Your nomination list is full! (5/5)
        </Button>
    }

    if(movie.data.Response === 'True' && movie.loading === false) {
        content = 
        <Flex border='solid' borderWidth='1px' mt='10%' ml='auto' mr='auto' w='85%' p='3%' direction='column'>
            <Text fontSize='32px'>{movie.data.Title}</Text>
            <Text mt='1%' mb='1%'>{movie.data.Year}</Text>
            <Text fontSize='21px' mb='3%'>{movie.data.Plot}</Text>

            {button}
        </Flex>
    }
    else if(movie.data.Response === 'False') {
        content = 
        <Flex mt='10%' ml='auto' mr='auto' w='80%'>
            <Text>Sorry, could not find any matches. Try using the IMDb ID or double-checking your spacing/spelling</Text>
        </Flex>
    }
    else {
        content = 
        <Flex mt='10%' ml='auto' mr='auto' w='80%' justify='center' align='center'>
            <Spinner />
        </Flex>
    }

    return (
        <>
            {content}
        </>
    )
}
