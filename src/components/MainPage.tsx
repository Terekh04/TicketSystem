import React from "react";
import HeaderInfo from "./HeaderInfo";
import Line from "./Line";
import GetStarted from "./GetStarted";

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