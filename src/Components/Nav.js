import React from 'react';
import { Flex, Text, Button, useColorMode } from '@chakra-ui/react';
import NominationList from './NominationList';

export default function Nav() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex w='100%' h='50px' bg='brand.200' align='center' justify='space-between' pl='3%' pr='3%' position='fixed' zIndex='3'>
            <Flex align='center'>
                <Text mr='20px' color='brand.400'>NOMINAFY</Text>
                <NominationList />
            </Flex>

            <Button colorScheme='orange' variant='outline' onClick={toggleColorMode} size='s' p='8px'>{colorMode === 'dark' ? 'Light Mode' : 'Dark Mode'}</Button>
        </Flex>
    )
}
