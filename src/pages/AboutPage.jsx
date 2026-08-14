import React from "react";
import Card from "../Components/shared/Card";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="bg-blue-900  flex items-center flex-col w-full h-screen">
      <Card>
        <div>
          <h1 className="font-bold text-4xl mb-5">About this project.</h1>
          <p className="text-nowrap">
            This is a ReactJS app to leave a feedback for any kind of product.
          </p>
          <h2>version: 1.0.0</h2>
          <p className="text-nowrap">
            Ali Samimi
          </p>
          <p>
            <Link to={"/"} className="text-blue-500 text-2xl hover:text-pink-400">BACK TO HOME</Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default AboutPage;
