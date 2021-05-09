import React from 'react';
import { Flex, Text, Button, useColorMode } from '@chakra-ui/react';
import NominationList from './NominationList';

export default function Nav({nominees}) {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex w='100%' h='50px' bg='#c24d2c' align='center' justify='space-between' pl='3%' pr='3%'>
            <Flex align='center'>
                <Text mr='3%'>Nominafy</Text>
                <NominationList nominees={nominees} />
            </Flex>

            <Button colorScheme='teal' variant='outline' onClick={toggleColorMode} size='s' p='8px'>{colorMode === 'dark' ? 'Light Mode' : 'Dark Mode'}</Button>
        </Flex>
    )
}
