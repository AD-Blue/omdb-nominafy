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
    Text
} from "@chakra-ui/react";
import { useSelector, useDispatch } from 'react-redux';
import { clear } from '../Redux/nominateSlice';

export default function NominationList() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const nominees = useSelector((state) => state.nominate.nominees);
    const dispatch = useDispatch();

    const handleClear = () => {
        dispatch(clear());
    }

    return (
        <>
            <Button size='xs' ref={btnRef} colorScheme="teal" onClick={onOpen} variant='outline' p='8px'>{nominees.length}</Button>
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
                        <Text>{nominee.data.Title}</Text>
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
