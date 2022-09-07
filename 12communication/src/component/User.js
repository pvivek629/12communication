// 1
import React from "react";
import { Link } from "react-router-dom";

const User = (props) => {
  const { userData } = props;

  return (
    <>
      <div className="container">
        <div className="row">
          {userData.map((user, index) => {
            return (
              <div className="col-lg-4 col-md-6 col-12" key={index}>
                <div className="card m-4 p-3">
                  <div className="position-absolute top-0 start-3 text-black-50">
                    {user.id}
                  </div>
                                 <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text">👤{user.username}</p>
                    <p className="card-text">📞{user.phone}</p>
                    <p className="card-text">📧 {user.email}</p>
                    <p className="card-text">🌐{user.website}</p>
                    <Link
                      to={`/user/${user.id}`}
                      className="btn btn-warning m-1"
                    >
                      Explore Album
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

export default User;
