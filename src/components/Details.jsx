import { Card } from "flowbite-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="">
        {/* <Link to={"/"}>
          <span style={{ fontSize: "1.5rem" }}>Back</span>
        </Link> */}
        <span style={{ fontSize: "1.5rem" }} onClick={() => navigate("/")}>
          Back
        </span>
      </div>
      <div className="container mx-auto">
        <Card
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>Noteworthy technology acquisitions 2021</p>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p>
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Details;
