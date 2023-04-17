import {
  Stack,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Box,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useState } from "react";
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Image 1",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Image 2",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Image 3",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Image 4",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Image 5",
  },
];

export const MuiImageList = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  return (
    <Stack spacing={4}>
      <ImageList
        sx={{ width: 500, height: 450 }}
        variant="masonry"
        cols={3}
        gap={8}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`star ${item.title}`}
                >
                  {favorites.includes(item.title) ? (
                    <StarIcon
                      color="warning"
                      onClick={() =>
                        setFavorites(favorites.filter((f) => f !== item.title))
                      }
                    />
                  ) : (
                    <StarBorderIcon
                      onClick={() => setFavorites([...favorites, item.title])}
                    />
                  )}
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <ImageList
        sx={{ width: 500, height: 450 }}
        variant="quilted"
        cols={3}
        gap={8}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`star ${item.title}`}
                >
                  {favorites.includes(item.title) ? (
                    <StarIcon
                      color="warning"
                      onClick={() =>
                        setFavorites(favorites.filter((f) => f !== item.title))
                      }
                    />
                  ) : (
                    <StarBorderIcon
                      onClick={() => setFavorites([...favorites, item.title])}
                    />
                  )}
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Box sx={{ width: 500, height: 450 }} overflow='scroll'>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                position="top"
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`star ${item.title}`}
                  >
                    {favorites.includes(item.title) ? (
                      <StarIcon
                        color="warning"
                        onClick={() =>
                          setFavorites(
                            favorites.filter((f) => f !== item.title)
                          )
                        }
                      />
                    ) : (
                      <StarBorderIcon
                        onClick={() => setFavorites([...favorites, item.title])}
                      />
                    )}
                  </IconButton>
                }
                actionPosition="left"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Stack>
  );
};
