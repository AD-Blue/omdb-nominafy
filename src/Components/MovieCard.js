import React from 'react';
import { Flex, Text, Button } from '@chakra-ui/react';
import { useAxiosGet } from '../Utility/HttpRequest';

export default function MovieCard({ url }) {

    let movie = useAxiosGet(url);

    let content = null;

    console.log(movie)

    if(movie.data.Response === "True") {
        content = <Flex border='solid' borderWidth='1px' mt='10%' ml='auto' mr='auto' w='95%' p='1%' direction='column'>
        <Text>{movie.data.Title}</Text>
        <Text>{movie.data.Year}</Text>
        <Text>{movie.data.Plot}</Text>
        <Button colorScheme="teal" variant="outline">Nominate</Button>
    </Flex>
    }
    else {
        content = 
        <Flex>
            <Text>Sorry, could not find any matches. Try using the IMDb ID or double-checking your spacing</Text>
        </Flex>
    }

    return (
        <>
            {content}
        </>
    )
}
