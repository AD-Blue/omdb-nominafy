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
            300: '#c24d2c', //navbar color
            400: '#d9dad7' //text color, might add later
        }
    }
})

export default theme;