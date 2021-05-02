import React from "react";
import Banner from "../Banner/";
import ReviewContainer from "../ReviewContainer/";
import BannerData from "../Data/profile-1.json";
import JourneyData from "../Data/journey-1.json";
const Profile1 = () => {
  return (
    <div>
      <Banner BannerData={BannerData} />
      <ReviewContainer BannerData={BannerData} JourneyData={JourneyData}/>
    </div>
  );
};

export default Profile1;
