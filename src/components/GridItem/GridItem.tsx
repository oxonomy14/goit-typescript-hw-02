import css from "./GridItem.module.css";
import { FC, ReactNode } from "react";

interface GridItemProps {
  children: ReactNode;
}
const GridItem: FC<GridItemProps> = ({ children }) => {
  return <li className={css.item}>{children}</li>;
};

export default GridItem;
