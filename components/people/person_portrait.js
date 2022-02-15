import { Text, Image, Box } from "@chakra-ui/react"

const PersonPortrait = ({ person }) => {
    return <Box>
        <Image src={person.image == null ? '../public/favicon.ico' : person.image.original} height="300" width="200" ></Image>
        <Text>{person.name} </Text>
    </Box>
}

export default PersonPortrait