import { useState, useEffect } from "react";
import reactLogo from "../assets/react.svg";
import "./App.css";

import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageModal from "./ImageModal/ImageModal";
import Loader from "./Loader/Loader";
import { fetchImages } from "../api/unsplash-api";
import { Image } from "../types";

const App = () => {
  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  //  Обробка запиту
  useEffect(() => {
    if (!query) return;
    const abortController = new AbortController();
    const getPhotos = async () => {
      try {
        setLoading(true);
        setIsError(false); // Скидаємо помилку перед новим запитом
        const data = await fetchImages(query, page, abortController.signal);

        setImages((prev) => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (error) {
        setIsError(true); // показуємо, що є помилка
      } finally {
        setLoading(false);
      }
    };
    getPhotos();
    return () => {
      abortController.abort();
    };
  }, [query, page]);

  //  Функція запуску пошуку
  const handleSearch = (newQuery: string): void => {
    if (newQuery === query) return; // не перезапускаємо, якщо такий самий
    setQuery(newQuery);
    setImages([]);
    setPage(1); // новий пошук = перша сторінка
  };

  function openModal(image: Image): void {
    setIsOpen(true);
    setSelectedImage(image);
  }

  function closeModal(): void {
    setIsOpen(false);
    setSelectedImage(null);
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {isError ? (
        <ErrorMessage />
      ) : (
        <ImageGallery images={images} onImageClick={openModal} />
      )}
      {loading && <Loader />}
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        selectedImage={selectedImage}
      />

      {page < totalPages && !loading && (
        <LoadMoreBtn page={page} loading={loading} setPage={setPage} />
      )}
    </>
  );
};

export default App;
