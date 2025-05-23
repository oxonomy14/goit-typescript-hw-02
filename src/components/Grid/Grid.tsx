import css from "./Grid.module.css";
import { FC, ReactNode } from "react";

interface GridProps {
  children: ReactNode;
}

const Grid: FC<GridProps> = ({ children }) => {
  return <ul className={css.list}>{children}</ul>;
};

export default Grid;
