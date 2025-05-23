export interface Image {
  id: string;
  color: string;
  alt_description: string;
  width: number;
  height: number;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  links: {
    portfolio: string | null;
  };
  user: {
    name: string;
    total_photos: number;
  };
}
