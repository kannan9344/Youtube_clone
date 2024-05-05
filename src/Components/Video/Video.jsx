import React, { useEffect, useState } from "react";
import "./Video.css";
import {  useParams,Link } from "react-router-dom";
import moment from "moment";
const Video = () => {
  const [related, setRelated] = useState([]);
  const [channel, setChannel] = useState([]);
  const [data, setData] = useState([]);
  const calculate = (value) => {
    if (value >= 1000000) {
      return Math.floor(value / 1000000) + "M";
    } else if (value >= 1000) {
      return Math.floor(value / 1000) + "K";
    } else {
      return value;
    }
  };
  const Api_key = "AIzaSyCPhCTEj65F3A7rACyImKkYSbcDbfBFqDw";
  const { category_id, id ,channel_id} = useParams();
  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category_id}&key=${Api_key}`
    )
      .then((res) => res.json())
      .then((data) => setRelated(data.items));
  }, [category_id]);

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channel_id}&key=${Api_key}`
    )
      .then((res) => res.json())
      .then((data) => setChannel(data.items));
  }, [channel_id]);
  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&regionCode=US&key=${Api_key}`
    )
      .then((res) => res.json())
      .then((data) => setData(data.items));
  }, [id]);

  return (
    <div className="video-container">
      <div className="video-col">
        <div className="video">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${id ? id : "0dVrbXF1uRE"}`}
           style={{border:"none"}}
          ></iframe>
        </div>
        <div className="video-description">
          <h3>{data[0]?.snippet.title}</h3>
          <div className="flex-container">
            <div className="sub-sec">
              <div className="channel">
                <div className="channel-img">
                  <img
                    src={channel[0]?.snippet?.thumbnails?.default?.url}
                    alt=""
                  />
                </div>
                <div className="subscribers">
                  <strong>{data[0]?.snippet?.channelTitle}</strong>
                  <small>
                    {calculate(channel[0]?.statistics?.subscriberCount)}{" "}
                    Subscribers
                  </small>
                </div>
                <div className="sub-btn">Subscribe</div>
              </div>
            </div>
            <div className="likes-sec">
              <div className="like-btn">
                <i className="fa-solid fa-thumbs-up"></i>
                <small>{calculate(data[0]?.statistics?.likeCount)}</small>
              </div>
              <div className="dislike-btn">
                <i className="fa-solid fa-thumbs-down"></i>
              </div>
              <i className="fa-solid fa-share"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="video-col">
        {related.map((videodata) => {
          return (
            <Link to={`/Video/${videodata.snippet.categoryId}/${videodata.id}/${videodata.snippet.channelId}`} className="video-content" key={videodata.id}>
              <div className="image">
                <img src={videodata.snippet.thumbnails.standard.url} alt="" />
              </div>
              <div className="text-content">
                <div className="video-title">{videodata.snippet.title}</div>
                <div className="channel-name">
                  {videodata.snippet.channelTitle}
                  {videodata.statistics.viewCount > 1000000 ? (
                    <i className="fa-solid fa-check"></i>
                  ) : (
                    ""
                  )}
                </div>
                <div className="views">
                  <small>
                    {calculate(videodata.statistics.viewCount)} views
                  </small>
                  <small>
                    {moment(videodata.snippet.publishedAt).fromNow()}
                  </small>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Video;
