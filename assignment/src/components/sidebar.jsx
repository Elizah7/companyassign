import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <Box width="20%" height="100vh" backgroundColor="#292929" display={["none", "none", "none", "block"]} className='sidebar' borderRadius="0px 32px 32px 0px">
            <Box className='sidebar-box'>
                <Icon icon="icon-park-outline:hexagonal" />
                <Text className="text">
                    NFTify
                </Text>
            </Box>
            <Link to="/">
                <Box className='rectangle1 sidebar-box'  >
                    <Icon icon="icon-park-outline:hexagonal" />
                    <Text className='rectangle1-text1'>
                        Token Address
                    </Text>
                </Box>
            </Link>
            <Link to="/page">
                <Box className='sidebar-box' width="100%" >
                    <Icon icon="fluent:pair-24-filled" />
                    <Text className="rectangle1-text2">
                        Pair Address
                    </Text>
                </Box>
            </Link>
        </Box>
    )
}

export default Sidebar
