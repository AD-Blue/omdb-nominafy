import { extendTheme } from '@chakra-ui/react';

const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
  }
  
const theme = extendTheme({ 
    config,
    colors: {
        brand: {
            100: '#1a2639', //reference bg color, might not use
            200: '#3e4a61',
            300: '#fbd38d', //dark mode orange
            400: '#d9dad7', //text color, might add later
            500: '#c05621', //light mode orange
        }
    }
})

export default theme;