import css from "./LoadMoreBtn.module.css";
import { FC } from "react";

interface LoadMoreBtnProps {
  loading: boolean;
  page: number;
  setPage: (value: number) => void;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ loading, page, setPage }) => {
  return (
    <>
      <button
        className={css.button}
        type="button"
        onClick={() => setPage(page + 1)}
      >
        Load More
      </button>
    </>
  );
};

export default LoadMoreBtn;
