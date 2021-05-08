import React from 'react';
import { Flex, Text, Button } from '@chakra-ui/react';
import { useAxiosGet } from '../Utility/HttpRequest';

export default function MovieCard({ url }) {

    let movie = useAxiosGet(url);

    console.log(movie.data.Title)

    return (
        <Flex border='solid' borderWidth='1px' mt='10%' ml='auto' mr='auto' w='95%' p='1%' direction='column'>
            <Text>{movie.data.Title}</Text>
            <Text>{movie.data.Year}</Text>
            <Text>{url}</Text>
            <Button colorScheme="teal" variant="outline">Nominate</Button>
        </Flex>
    )
}
