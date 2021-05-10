import React from 'react';
import { Flex, Text, Button, Spinner, Tooltip, Image } from '@chakra-ui/react';
import { useAxiosGet } from '../Utility/HttpRequest';
import { useSelector, useDispatch } from 'react-redux';
import { nominate, denominate } from '../Redux/nominateSlice';

export default function MovieListing({ movie }) {
    const nominees = useSelector((state) => state.nominate.nominees)
    const dispatch = useDispatch();

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
        <Button w='40%' colorScheme="pink" variant="outline" onClick={handleDenominate}>
            Remove From Your Nominations
        </Button>
    }
    else if (!nominees.includes(movie) && nominees.length < 5) {
        button =
        <Button w='40%' colorScheme="teal" variant="outline" onClick={handleNominate}>
            Nominate
        </Button>
    }
    else {
        button =
        <Button w='40%' isDisabled={true} colorScheme="teal" variant="outline" onClick={handleNominate}>
            Your nomination list is full! (5/5)
        </Button>
    }

    /* if(movie.data.Response === 'True' && movie.loading === false) {
        content = 
        
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
    } */

    return (
        <Flex border='solid' borderRadius='5px' borderWidth='1px' mt='10%' ml='auto' mr='auto' w={['85%', '85%', '40%']} p='3%' direction='column' align='center'>
            <Text fontSize='32px'>{movie.Title}</Text>
            <Text mt='1%' mb='1%'>{movie.Year}</Text>
            <Image src={movie.Poster} h={300} w={200} mb='2%' />
            {button}
        </Flex>
    )
}
