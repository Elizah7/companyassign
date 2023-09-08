import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import ChildCard from './childcard'

const Card = ({pairCreatedAt,baseToken,pairAddress,dexId}) => {
    const {address,name,symbol} = {...baseToken}
  return (
    <Box width="100%" display="flex" flexDirection={["column","column","row","row","row"]} justifyContent={["center","center","space-between","space-between","space-between"]} alignItems="center">
    <Box className='card' width={["100%","100%","32%","24%","24%"]}>
        <Text className="card-head">Base Info</Text>
      <Box><Text className='card-text1'>Pair Created At</Text><Text>  {pairCreatedAt}</Text></Box> 
     <Box><Text>Symbol</Text> <Text className='card-text2'>  {symbol}</Text></Box> 
     <Box><Text>Dex Id </Text> <Text className='card-text3'>{dexId}</Text></Box> 
      <Box><Text>Pair Address</Text> <Text className='card-text4'> {pairAddress}</Text></Box>
    </Box >
    <Box className='card' width={["100%","100%","32%","24%","24%"]}>
    <Text className="card-head">Base Info</Text>
      <Box><Text className='card-text1'>Pair Created At</Text><Text>  {pairCreatedAt}</Text></Box> 
     <Box><Text>Symbol</Text> <Text className='card-text2'>  {symbol}</Text></Box> 
     <Box><Text>Dex Id </Text> <Text className='card-text3'>{dexId}</Text></Box> 
      <Box><Text>Pair Address</Text> <Text className='card-text4'> {pairAddress}</Text></Box>
    </Box >
    <Box className='card' width={["100%","100%","32%","24%","24%"]}>
    <Text className="card-head">Base Info</Text>
      <Box><Text className='card-text1'>Pair Created At</Text><Text>  {pairCreatedAt}</Text></Box> 
     <Box><Text>Symbol</Text> <Text className='card-text2'>  {symbol}</Text></Box> 
     <Box><Text>Dex Id </Text> <Text className='card-text3'>{dexId}</Text></Box> 
      <Box><Text>Pair Address</Text> <Text className='card-text4'> {pairAddress}</Text></Box>
    </Box >
    <Box className='card' width={["100%","100%","32%","24%","24%"]}>
    <Text className="card-head">Base Info</Text>
      <Box><Text className='card-text1'>Pair Created At</Text><Text>  {pairCreatedAt}</Text></Box> 
     <Box><Text>Symbol</Text> <Text className='card-text2'>  {symbol}</Text></Box> 
     <Box><Text>Dex Id </Text> <Text className='card-text3'>{dexId}</Text></Box> 
      <Box><Text>Pair Address</Text> <Text className='card-text4'> {pairAddress}</Text></Box>
    </Box >
    </Box>
  )
}

export default Card
