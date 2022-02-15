import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Shows from './show/index'
import { Box, Flex, IconButton, MenuIcon, Spacer, Text, Heading } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'

export default function Home() {
  return (
    <Layout title={'Alex Ttito Cornejo'}>
      <Box>
        <Shows></Shows>
      </Box>
    </Layout>


  )
}
