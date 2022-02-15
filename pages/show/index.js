import { Input, VStack, Wrap, Heading, CircularProgress, HStack, IconButton } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { SearchIcon, StarIcon } from "@chakra-ui/icons"
import SerieContainer from '../../components/series/serie_portrait'


const Shows = () => {
    const [name, setName] = useState('')
    const [series, setSeries] = useState([])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(`https://api.tvmaze.com/search/shows?q=${name}`).then(res => res.json()).then((data) => {
            setSeries(data.map((serie) => serie.show))
            setLoading(false)
        })
    }, [name])
    const setNameInput = (e) => {
        setName(e.target.value)
    }
    return (
        <VStack >
            <HStack >
                <Heading >Tv Shows</Heading>
                <IconButton colorScheme='blue'
                    aria-label='Favorites'
                    
                    icon={<StarIcon />} />
            </HStack>

            <Input type='text' onChange={(e) => setNameInput(e)} />
            {
                isLoading ? <CircularProgress isIndeterminate color='green.300' /> : series.length == 0 ? <Heading>No series data</Heading> :
                    <Wrap>
                        {
                            series.map((serie) => <SerieContainer serie={serie} />)
                        }
                    </Wrap>

            }


        </VStack>
    )
}

export default Shows