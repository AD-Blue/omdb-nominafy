import React from 'react';
import { Flex, Text, Button, Spinner, Tooltip, Image } from '@chakra-ui/react';
import { useAxiosGet } from '../Utility/HttpRequest';
import { useSelector, useDispatch } from 'react-redux';
import { nominate, denominate } from '../Redux/nominateSlice';

export default function MovieListing({ movie }) {
    const nominees = useSelector((state) => state.nominate.nominees)
    const dispatch = useDispatch();

    let newMovie = {
        Title: movie.Title,
        Year: movie.Year,
        Poster: movie.Poster,
        imdbID: movie.imdbID
    }

    let content = null;
    let button = null;

    const handleNominate = () => {
        dispatch(nominate(newMovie))
        console.log(nominees)
    }

    const handleDenominate = () => {
        dispatch(denominate(newMovie))
        console.log('Denominate attempted')
    }

    if (nominees.filter(nominee => nominee.imdbID === newMovie.imdbID).length > 0) {
        button =
        <Button w='95%' colorScheme="pink" variant="outline" onClick={handleDenominate}>
            Remove From Nominations
        </Button>
    }
    else if (nominees.filter(nominee => nominee.imdbID === newMovie.imdbID).length === 0 && nominees.length < 5) {
        button =
        <Button w='95%' colorScheme="orange" variant="outline" onClick={handleNominate}>
            Nominate
        </Button>
    }
    else {
        button =
        <Button w='95%' isDisabled={true} colorScheme="orange" variant="outline" onClick={handleNominate}>
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
        <Flex border='solid' borderRadius='5px' borderWidth='1px' mt='5%' ml='auto' mr='auto' w={['85%', '85%', '40%']} p='3%' direction='column' align='center'>
            <Text fontSize='32px'>{movie.Title}</Text>
            <Text mt='1%' mb='1%'>{movie.Year}</Text>
            <Image src={movie.Poster} h={300} w={200} mb='2%' />
            {button}
        </Flex>
    )
}
