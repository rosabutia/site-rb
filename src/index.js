import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Layout from './pages/Layout.js';
import Infra from './pages/Infra.js';
import Photos from './pages/Photos.js';
import PhotosChale1 from './pages/PhotosChale1.js';
import PhotosChale2 from './pages/PhotosChale2.js';
import PhotosChale3 from './pages/PhotosChale3.js';
import Local from './pages/Local.js';
import Contact from './pages/Contact.js';
import NoPage from './pages/NoPage.js';
// import App from './App';
import reportWebVitals from './reportWebVitals';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Photos />} />
          <Route path="photoschale1" element={<PhotosChale1 />} />
          <Route path="photoschale2" element={<PhotosChale2 />} />
          <Route path="photoschale3" element={<PhotosChale3 />} />
          <Route path="infra" element={<Infra />} />
          <Route path="local" element={<Local />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// ReactDOM.render(<CApp />, document.getElementById("root"));


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
