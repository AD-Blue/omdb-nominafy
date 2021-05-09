import React from 'react';
import { Flex, Text, Button } from '@chakra-ui/react';
import { useAxiosGet } from '../Utility/HttpRequest';
import { useSelector, useDispatch } from 'react-redux';
import { nominate } from '../Redux/nominateSlice';

export default function MovieCard({ url }) {
    const nominees = useSelector((state) => state.nominate.nominees)
    const dispatch = useDispatch();

    let movie = useAxiosGet(url);

    let content = null;

    const handleNominate = () => {
        dispatch(nominate(movie))
        console.log(nominees)
    }

    console.log(movie)

    if(movie.data.Response === "True") {
        content = 
        <Flex border='solid' borderWidth='1px' mt='10%' ml='auto' mr='auto' w='85%' p='3%' direction='column'>
            <Text fontSize='32px'>{movie.data.Title}</Text>
            <Text mt='1%' mb='1%'>{movie.data.Year}</Text>
            <Text fontSize='21px' mb='3%'>{movie.data.Plot}</Text>

            <Button colorScheme="teal" variant="outline" onClick={handleNominate}>
                Nominate
            </Button>
        </Flex>
    }
    else {
        content = 
        <Flex mt='10%' ml='auto' mr='auto' w='80%'>
            <Text>Sorry, could not find any matches. Try using the IMDb ID or double-checking your spacing/spelling</Text>
        </Flex>
    }

    return (
        <>
            {content}
        </>
    )
}
