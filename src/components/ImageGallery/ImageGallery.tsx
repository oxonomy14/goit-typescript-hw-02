import css from "./ImageGallery.module.css";
import Grid from "../Grid/Grid";
import GridItem from "../GridItem/GridItem";
import ImageCard from "../ImageCard/ImageCard";
import { Image } from "../../types";
import { FC } from "react";

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <section>
      <Grid>
        {images.map((item) => (
          <GridItem key={item.id}>
            <ImageCard item={item} onClick={() => onImageClick(item)} />
          </GridItem>
        ))}
      </Grid>
    </section>
  );
};

export default ImageGallery;
