import {
  Text,
  Image,
  Box,
  IconButton,
  Container,
  VStack,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Fragment } from "react";

const SeriePortrait = ({ serie }) => {
  return (
    <div className = 'container'>
      <VStack>
        <Container className="imageContainer" height="300" width="200">
          <Image
            src={
              serie.image == null
                ? "../public/favicon.ico"
                : serie.image.original
            }
            height="full"
            width="full"
          ></Image>
          <IconButton
            className="favoriteIcon"
            colorScheme="transparent"
            aria-label="Favorites"
            color="yellow"
            icon={<StarIcon />}
          />
        </Container>
        <Text>{serie.name}</Text>
      </VStack>
      <style jsx>{`
          .container{
              color: white;
          }
        .imageContainer {
          position: relative;
        }
        .favoriteIcon {
          position: absolute;
          top: 10;
          left:20;
        }
      `}</style>
    </div>
  );
};

export default SeriePortrait;
