import React, { useState } from 'react';
import { Flex, Text, Button } from '@chakra-ui/react';
import { useAxiosGet } from '../Utility/HttpRequest';

export default function MovieCard({ props }) {

    let movie = useAxiosGet(props.url);

    let content = null;

    const handleNominate = () => {
        props.nominees.push(movie);
        console.log(props.nominees)
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
