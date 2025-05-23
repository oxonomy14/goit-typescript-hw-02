import css from "./ImageCard.module.css";
import { Image } from "../../types";
import { FC } from "react";

interface ImageCardProps {
  item: Image;
  onClick: () => void;
}

const ImageCard: FC<ImageCardProps> = ({ item, onClick }) => {
  return (
    <div
      className={css.imageBox}
      style={{ backgroundColor: item.color }}
      onClick={onClick}
    >
      <img
        className={css.imageCard}
        src={item.urls.small}
        alt={item.alt_description ?? "No description"}
        title={item.alt_description ?? "No description"}
      />
      <div className={css.imageDescription}>
        <p>
          <span>Author: </span>
          <a
            href={item.links.portfolio ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.user.name}
          </a>
        </p>
        <p>
          <span>Total Photos: </span>
          {item.user.total_photos}
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
