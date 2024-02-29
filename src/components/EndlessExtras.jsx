import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const EndlessExtras = ({ img, title, text, link }) => {
  return (
    <React.Fragment>
      <div className="space-x-4">
        <article className="flex flex-col text-center justify-center items-center">
          <img src={img} className="rounded-full md:w-28 w-20 mb-5" />
          <div>
            <h2 className="text-2xl font-medium">{title}</h2>
            <div>
              <p className="w-96 my-5">{text}</p>
              <div>
                <Link>
                  <a href="#" className="text-green-800 underline hover:no-underline font-medium">{link}</a>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </React.Fragment>
  );
};

export default EndlessExtras;
