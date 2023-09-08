import React, { useEffect } from 'react'
import Topbar from '../components/topbar'
import { Box } from '@chakra-ui/react'
import Heading from '../components/heading'
import { fetchPairData } from '../redux/action'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../components/card'

const Page = () => {

    const dispatch = useDispatch()
    const data = useSelector(store => store.dataReducer2.tokenData)

    const handleChange = (data) => {
        return dispatch(fetchPairData(data))
    }
    return (
        <Box width={["100%", "100%", "100%", "100%", "80%"]} className='mainpage'>
            <Topbar handleChange={handleChange} />
            <Box width="100%" >
                <Heading text="Pair Search Result" />
                <Box className='main-container'>
                    {data && data.pairs && data.pairs.map(ele => <Card {...ele} />)}
                </Box>
            </Box>
        </Box>
    )
}

export default Page
