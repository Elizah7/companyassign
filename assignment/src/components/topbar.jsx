import { Box, Input } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import React, { useState } from 'react'

const Topbar = ({ handleChange }) => {
    const [state, setState] = useState("")
    const handleTokenChange = (e) => {
        setState(e.target.value)
        handleChange(e.target.value)
        .then(res=>setState(""))
        .catch(err=>alert(err))
      
    }
    return (
        <Box display="flex" className='top-bar' >
            <Box className='search-bar'>
                <Input type="text" placeholder='Search' value={state} onChange={(e) => handleTokenChange(e)}/>
                <Icon className='search-bar-icon' icon="ep:search" />
            </Box>
            <Box className='top-bar-secondbox'>
                Content
            </Box>
        </Box>
    )
}

export default Topbar
