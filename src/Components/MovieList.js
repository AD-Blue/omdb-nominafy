import React from 'react';
import { Flex, Text, Spinner } from '@chakra-ui/react';
import { UnorderedList } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { useAxiosGet } from '../Utility/HttpRequest';
import MovieListing from './MovieListing';

export default function MovieList({ url }) {
    const movies = useAxiosGet(url)
    console.log(url)
    console.log(movies)

    let content = null

    if(movies.data.Response === 'True' && movies.loading === false) {
        content = 
        <UnorderedList>
            {movies.data.Search.slice().map((movie) => (
                <MovieListing movie={movie} />
            ))}
        </UnorderedList>
    }
    else if(movies.data.Response === 'False') {
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
