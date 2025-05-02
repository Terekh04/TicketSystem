import React from "react";
import HeaderInfo from "../components/HeaderInfo";
import Line from "../components/Line";
import GetStarted from "../components/GetStarted";

const MainPage = () =>{
    return(
        <>
        <div className='siteWrapper'>
          <HeaderInfo/>
          <Line/>
          <GetStarted/>
        </div>
      </>
    );
}

export default MainPage