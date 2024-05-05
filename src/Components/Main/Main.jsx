import React from "react";
import "./Main.css";
import moment from "moment";
import { Link } from "react-router-dom";
const Main = ({ apiData }) => {
  const calculate = (value) => {
    if (value >= 1000000) {
      return Math.floor(value / 1000000) + "M";
    } else if (value >= 1000) {
      return Math.floor(value / 1000) + "K";
    } else {
      return value;
    }
  };
  return (
    <main>
      {apiData.map((data) => {
        return (
            <Link to={`/Video/${data.snippet.categoryId}/${data.id}/${data.snippet.channelId}`} className="videos" key={data.id}>
            <img src={data.snippet.thumbnails.standard?.url} alt="" />
            <div className="video-des">
              <strong>{data.snippet.title}</strong>
              <div className="views">
                <small>{calculate(data.statistics?.viewCount)} views</small>
                <small>{moment(data.snippet?.publishedAt).fromNow()}</small>
              </div>
            </div>
          </Link>
        );
      })}
    </main>
  );
};

export default Main;
