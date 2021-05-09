import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure, Button,
    Text, IconButton, Flex, Tooltip
} from "@chakra-ui/react";
import { SmallCloseIcon } from '@chakra-ui/icons';
import { useSelector, useDispatch } from 'react-redux';
import { clear, denominate } from '../Redux/nominateSlice';

export default function NominationList() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    let label = "Check your nominations";

    let open = false;

    const nominees = useSelector((state) => state.nominate.nominees);
    const dispatch = useDispatch();

    const handleClear = () => {
        dispatch(clear());
    }

    const handleDenominate = (movie) => {
        dispatch(denominate(movie))
    }

    return (
        <>
            <Tooltip hasArrow label={label} isOpen={open}>
                <Button size='xs' ref={btnRef} colorScheme="teal" onClick={onOpen} variant='outline' p='8px'>{nominees.length}</Button>
            </Tooltip>
            
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Your Nominations</DrawerHeader>

                <DrawerBody>
                    {nominees.slice().map((nominee) => (
                        <Flex direction='row' justify='space-between' align='center'>
                            <Text>{nominee.data.Title}</Text>
                            <IconButton 
                                size='xs' aria-label="Remove nomination" 
                                icon={<SmallCloseIcon w={4} h={4} />}
                                onClick={() => {
                                    handleDenominate(nominee)
                                }} 
                            />
                        </Flex>
                    ))}
                </DrawerBody>

                <DrawerFooter>
                    <Button colorScheme="blue" onClick={handleClear}>Clear All</Button>
                </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
