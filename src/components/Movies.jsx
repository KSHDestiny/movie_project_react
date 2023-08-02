import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const Movies = () => {
  return (
    <div className="container mx-auto mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        <Link to={"/movies/details/13"}>
          <div className="max-w-sm">
            <Card
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>Noteworthy technology acquisitions 2021</p>
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <p>
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </p>
            </Card>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Movies;
