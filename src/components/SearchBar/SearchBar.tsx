import css from "./SearchBar.module.css";
import toast from "react-hot-toast";
import { FC, FormEvent } from "react";

interface SearchBarProps {
  onSearch: (dataQuery: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const formData = new FormData(form);
    const dataQuery = formData.get("query")?.toString().trim();

    if (!dataQuery) {
      toast.error("Put something key words for search");

      return;
    }
    onSearch(dataQuery);
    form.reset();
  };

  return (
    <header>
      <h1>Search images and photos using PhotoStock Unsplesh</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Put some keywords for looking for images"
          name="query"
          className={css.input}
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
