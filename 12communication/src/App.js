import React, { useEffect, useState } from "react";
import { Footer } from "./component/Footer";
import NavBar from "./component/NavBar";
import User from "./component/User";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./component/About";
import Album from "./component/Album";
import Photo from "./component/Photo";
import axios from "axios";

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(
      (posRes) => {
        const { data } = posRes;
        setUserData(data);
        // console.log(data);
      },
      (errRes) => {
        throw new Error(`Error:${errRes}`);
      }
    );
  }, []);

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<User userData={userData} />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:id" element={<Album />} />
          <Route path="/user/album/:id" element={<Photo />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
