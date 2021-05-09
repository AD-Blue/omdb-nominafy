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
  } from "@chakra-ui/react"

export default function NominationList({ nominees }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const handleClear = () => {
        nominees.splice(0, nominees.length);
        onClose();
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
