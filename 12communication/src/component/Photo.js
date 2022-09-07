// 3
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Photo = () => {
  const { id } = useParams();
  const [userPhoto, setUserPhoto] = useState([]);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`).then(
      (posRes) => {
        const { data } = posRes;
        // console.log(data);
        setUserPhoto(data);
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
          {userPhoto.map((photo, index) => {
            return (
              <div className="col-lg-4 col-md-6 col-12" key={index}>
                <div className="card m-4 p-3">
                  <div className="position-absolute top-0 start-3 text-black-50">
                    {index + 1}
                  </div>
                  <div className="text-center bg-secondary rounded-pill text-light m-2">
                    Photo Id : {photo.id}
                  </div>
                  <img
                    src={photo.url}
                    className="card-img-top "
                    alt="..."
                    style={{ backgroundSize: "cover", height: "300px" }}
                  />
                  <div className="card-body">
                    <h5 className="text-center card-title">{photo.title}</h5>
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

export default Photo;
