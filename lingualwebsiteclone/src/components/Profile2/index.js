import React from "react";
import Banner from "../Banner/";
import ReviewContainer from "../ReviewContainer/";
import BannerData from "../Data/profile-2.json";
import JourneyData from "../Data/journey-2.json";
const Profile2 = () => {
  return (
    <div>
      <Banner BannerData={BannerData} />
      <ReviewContainer BannerData={BannerData} JourneyData={JourneyData}/>
    </div>
  );
};

export default Profile2;
