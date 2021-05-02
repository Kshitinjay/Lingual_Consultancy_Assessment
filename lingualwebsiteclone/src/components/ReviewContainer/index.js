import React from "react";
import "./reviewContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faPen,
  faCamera,
  faBriefcase,
  faChartBar,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
const ReviewContainer = ({ BannerData, JourneyData }) => {
  return (
    <div id="reviewContainer">
      <div id="leftSection">
        <div id="aboutProfile">
          <p>{BannerData.bio}</p>
        </div>
        <div id="switchSection">
          <button>Journey</button>
          <button>Review</button>
          <button>Photos</button>
          <button>Trips</button>
          <button>Stats</button>
        </div>
        {/* use map to iterate over post */}
        <div id="postContainer">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={BannerData.images.dp} alt="noImage" />
            <h4>Mahek Jain</h4>
          </div>
          <p>{JourneyData.journey.review.review_at}</p>
          <div id="images">
            {JourneyData.journey.review.images.map((item, id) => {
              return <img src={item} alt="noImage" key={id} />;
            })}
          </div>
          <div style={{marginTop:"20px"}}>
            <p>{JourneyData.journey.review.review}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <FontAwesomeIcon icon={faHeart} size="1x" />
              <p style={{ marginLeft: "13px" }}>{JourneyData.journey.review.reaction.like}</p>
            </div>
          </div>
        </div>
      </div>
      <div id="rightSection">
        <div id="sideBox1">
          <ul>
            <li>
              <FontAwesomeIcon icon={faMapMarker} size="2x" />
              <p>Journey</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faPen} size="2x" />
              <p>Review</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCamera} size="2x" />
              <p>Photos</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faBriefcase} size="2x" />
              <p>Trips</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faChartBar} size="2x" />
              <p>Stats</p>
            </li>
          </ul>
        </div>
        <div id="sideBox2">
          <div className="sideBarHeader">
            <p>Popular reviews by Mahek Jain</p>
          </div>
          <ul>
            <li>
              <FontAwesomeIcon icon={faMapMarker} size="2x" />
              <p>Journey</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faPen} size="2x" />
              <p>Review</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCamera} size="2x" />
              <p>Photos</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faBriefcase} size="2x" />
              <p>Trips</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faChartBar} size="2x" />
              <p>Stats</p>
            </li>
          </ul>
        </div>
        <div id="sideBox3">
          <div className="sideBarHeader">
            <p>Popular reviews by Mahek Jain</p>
          </div>
          <ul>
            <li>
              <FontAwesomeIcon icon={faMapMarker} size="2x" />
              <p>Journey</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faPen} size="2x" />
              <p>Review</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCamera} size="2x" />
              <p>Photos</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faBriefcase} size="2x" />
              <p>Trips</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faChartBar} size="2x" />
              <p>Stats</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReviewContainer;
