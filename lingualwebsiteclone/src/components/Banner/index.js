import React from "react";
import "./banner.css";
const Banner = ({ BannerData }) => {
  const style = {
    backgroundImage: `url(${BannerData.images.background})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div id="bannerContainer" style={style}>
      <div id="bannerData">
        <div>
          <img
            src={BannerData.images.dp}
            alt="noImage"
          />
        </div>
        <div id="profileData">
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3>{BannerData.name}</h3>
            <button>Follow</button>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://img.icons8.com/material/20/000000/worldwide-location.png"
              alt="noImage"
            />
            <p>
              {BannerData.location.state} {BannerData.location.country}
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
            quis, minima.
          </p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://img.icons8.com/ios/20/000000/newspaper-.png"
              alt="noImage"
            />
            <p>WishList ({BannerData.highlighters.wishlist})</p>
            <img
              src="https://img.icons8.com/wired/20/000000/small-smile.png"
              alt="noImage"
            />
            <p>Buddy List ({BannerData.highlighters.buddies})</p>
            <img
              src="https://img.icons8.com/fluent-systems-regular/20/000000/user-secured.png"
              alt="noImage"
            />
            <p>Following ({BannerData.highlighters.following})</p>
            <img
              src="https://img.icons8.com/fluent-systems-regular/20/000000/user-secured.png"
              alt="noImage"
            />
            <p>Followers ({BannerData.highlighters.followers})</p>
          </div>
        </div>
        <div id="profileRank">
          <h3>Rank:#{BannerData.rank}</h3>
          <div style={{ display: "flex" }}>
            <img
              src="https://img.icons8.com/fluent-systems-filled/20/000000/without-internet.png"
              alt="noImage"
            />
            <div id="progressBar">
              <div
                id="innerProgressBar"
                style={{
                  width: "20px",
                  height: "10px",
                  backgroundColor: "#28B351",
                }}
              ></div>
            </div>
          </div>
          <div>
            <a href={BannerData.social.facebook} target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.icons8.com/material-sharp/20/000000/facebook-f.png"
              alt="noImage"
            /></a>
            <a href={BannerData.social.twitter} target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.icons8.com/material/20/000000/twitter-squared.png"
              alt="noImage"
            /></a>
            <a href={BannerData.social.share} target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.icons8.com/ios-glyphs/20/000000/share--v1.png"
              alt="noImage"
            />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
