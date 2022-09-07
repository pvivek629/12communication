// 2
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const Album = () => {
  const { id } = useParams();

  const [userAlbum, setUserAlbum] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}/albums`).then(
      (posRes) => {
        const { data } = posRes;
        setUserAlbum(data);
        console.log(data);
      },
      (errRes) => {
        throw new Error(`Error : ${errRes}`);
      }
    );
  }, [id]);

  return (
    <>
      <div className="container">
        <div className="row">
          {userAlbum.map((album, index) => {
            return (
              <div className="col-lg-4 col-md-6 col-12" key={index}>
                <div className="card m-4 p-3">
                  <div className="position-absolute top-0 start-3 text-black-50">
                    {index + 1}
                  </div>
                  <div className="text-center bg-secondary rounded-pill text-white m-2">
                    Album Id : {album.id}
                  </div>
                  <img
                    src="http://cdn.onlinewebfonts.com/svg/img_297460.png"
                    className="card-img-top "
                    alt="..."
                    style={{
                      display: "block",
                      margin: "auto ",
                      width: "50%",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{album.title}</h5>
                    <Link
                      to={`/user/album/${album.id}`}
                      className="btn btn-warning"
                    >
                      See Photos
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Album;
