import React, { memo } from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";
import AuthService from "./service/auth_service.js";
import ImageUploader from "./service/image_uploader";
import ImageFileInput from "./components/imageFileInput/imageFileInput";
import CardRepository from "./service/card_repository";

const authService = new AuthService();
const imageUploader = new ImageUploader();
const cardRepository = new CardRepository();
const FileInput = memo(props => (
  <ImageFileInput {...props} imageUploader={imageUploader}/>
));

ReactDOM.render(
  <React.StrictMode>
    <App 
    authService={authService} 
    FileInput={FileInput}
    cardRepository={cardRepository}
     />
  </React.StrictMode>,
  document.getElementById("root")
);
