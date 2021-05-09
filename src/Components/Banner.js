import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

export default function Banner() {
    return (
        <Flex w='100%' h='50px' bg='brand.200' align='center' justify='center' pl='3%' pr='3%'>
                <Text mr='20px' color='#81e6d9'>You've finished nominating your 5 favorites!</Text>
        </Flex>
    )
}
