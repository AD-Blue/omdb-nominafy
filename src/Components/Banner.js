import React from 'react';
import { Flex, Text, useColorModeValue } from '@chakra-ui/react';

export default function Banner() {
    const color = useColorModeValue("brand.500", "brand.300")
    const textColor = useColorModeValue("brand.400", "brand.200")

    return (
        <Flex w='100%' h='50px' bg={color} align='center' justify='center' pl='3%' pr='3%' position='fixed' top='50px' zIndex='3'>
                <Text mr='20px' color={textColor}>You've finished nominating your 5 favorites!</Text>
        </Flex>
    )
}
