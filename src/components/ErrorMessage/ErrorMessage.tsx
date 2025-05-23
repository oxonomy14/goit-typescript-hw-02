import css from "./ErrorMessage.module.css";
import { FC } from "react";

const ErrorMessage: FC = () => {
  return (
    <div>
      <h2>Error!</h2>
      <p>Something happened, please try again later</p>
    </div>
  );
};

export default ErrorMessage;
