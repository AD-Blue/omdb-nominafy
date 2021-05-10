import React from 'react';
import { Flex, Text, Button, Spinner, Image } from '@chakra-ui/react';
import { useAxiosGet } from '../Utility/HttpRequest';
import { useSelector, useDispatch } from 'react-redux';
import { nominate, denominate } from '../Redux/nominateSlice';

export default function MovieCard({ url }) {
    const nominees = useSelector((state) => state.nominate.nominees)
    const dispatch = useDispatch();

    let movie = useAxiosGet(url);

    let newMovie = {
        Title: movie.data.Title,
        Year: movie.data.Year,
        Poster: movie.data.Poster,
        imdbID: movie.data.imdbID
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

    console.log(newMovie)

    if (nominees.filter(nominee => nominee.imdbID === newMovie.imdbID).length > 0) {
        button =
        <Button w='70%' colorScheme="pink" variant="outline" onClick={handleDenominate}>
            Remove From Your Nominations
        </Button>
    }
    else if (nominees.filter(nominee => nominee.imdbID === newMovie.imdbID).length === 0 && nominees.length < 5) {
        button =
        <Button w='70%' colorScheme="orange" variant="outline" onClick={handleNominate}>
            Nominate
        </Button>
    }
    else {
        button =
        <Button w='70%' isDisabled={true} colorScheme="orange" variant="outline" onClick={handleNominate}>
            Your nomination list is full! (5/5)
        </Button>
    }

    if(movie.data.Response === 'True' && movie.loading === false) {
        content = 
        <Flex border='solid' borderRadius='5px' borderWidth='1px' mt='5%' ml='auto' mr='auto' w={['85%', '85%', '40%']} p='3%' direction='column' align='center' mb='5%'>
            <Text fontSize='32px'>{movie.data.Title}</Text>
            <Text mt='1%' mb='1%'>{movie.data.Year}</Text>
            <Image src={movie.data.Poster} h={300} w={200} mb='2%' />
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
