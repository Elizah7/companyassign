import { Box, Input } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import React, { useEffect } from 'react'
import Topbar from '../components/topbar'
import Heading from '../components/heading'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTokenData } from '../redux/action'
import Card from '../components/card'

const Home = () => {
    const dispatch = useDispatch()
    const data = useSelector(store => store.dataReducer.tokenData)
    const sortedData = data && data.pairs && data.pairs.length > 0 && data.pairs.sort((a, b) => (+a.priceUsd) - (+b.priceUsd))
    const limitedData = sortedData && sortedData.slice(0, 10)
    console.log(limitedData && limitedData)
    const handleChange = (data) => {
        return dispatch(fetchTokenData(data))
    }
   
    
    return (
        <Box width={["100%","100%","100%","100%","80%"]}className='mainpage'>
            <Topbar handleChange={handleChange} />
            <Box width="100%">
           
                    <Heading text="Token Search Result" />
            
                <Box className='main-container'>
                    {limitedData && limitedData.map(ele => <Card {...ele} />)}
                </Box>
            </Box>
        </Box>
    )
}

export default Home
