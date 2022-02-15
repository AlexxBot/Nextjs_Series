import { Box, CircularProgress, Heading, Input, VStack, Wrap } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import PersonPortrait from "../../components/people/person_portrait"

const People = () => {
    const [name, setName] = useState('')
    const [people, setPeople] = useState([])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(`https://api.tvmaze.com/search/people?q=${name}`).then(res => res.json()).then((data) => {
            setPeople(data.map((people) => people.person))
            setLoading(false)
        })
    }, [name])

    const setNameInput = (e) => {
        setName(e.target.value);
    }



    return (
        <VStack>
            <Heading >People</Heading>
            <Input type="text" value={name} onChange={e => setNameInput(e)} />

            {
                isLoading ? <CircularProgress isIndeterminate color='green.300' /> : people.length == 0 ? <Heading>No people data</Heading> :
                    <Wrap>
                        {people.map((person) => <PersonPortrait person={person} />)}
                    </Wrap>

            }

        </VStack>
    )
}

export default People