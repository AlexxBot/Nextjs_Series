import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Shows from './show/index'
import { Box, Flex, IconButton, MenuIcon, Spacer, Text } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import Layout from '../components/layout/article'

export default function Home() {
  return (
    <Layout title={'Alex Ttito Cornejo'}>
      <Box>
        <Flex >
          <Text fontSize='md'>TV Shows</Text>
          <Spacer />
          <IconButton
            colorScheme='blue'
            aria-label='Search database'
            icon={<SearchIcon />}
          />
        </Flex>

        <Shows></Shows>
      </Box>
    </Layout>


  )
}
