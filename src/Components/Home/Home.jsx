import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Home.css";
import Main from "../Main/Main";
const Home = ({ toggle}) => {
  const [apiData,setApidata]=useState([]);
  const [category,setCategory]=useState(1);
  const Api_key="AIzaSyCPhCTEj65F3A7rACyImKkYSbcDbfBFqDw";
useEffect(()=>{
  async function fetData(){
    let response=await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${Api_key}`);
    let data =await response.json();
    setApidata(data.items);
  }
  fetData();
},[category])
  return (
    <div className="container">
      <Sidebar toggle={toggle} category={category} setCategory={setCategory} />
      <Main apiData={apiData}  />
    </div>
  );
};

export default Home;
