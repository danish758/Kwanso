import React from "react";
import { BgImgStylesType } from "../../types";
import { Avatar } from "@mui/material";

const bgImgStyles: BgImgStylesType = {
  transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  borderRadius: "4px",
  boxShadow:
    "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
  position: "relative",
  backgroundColor: "rgb(66, 66, 66)",
  color: "rgb(255, 255, 255)",
  marginBottom: "0",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
  height: "200px",
};
const TrendingCard = () => {
  return (
    <div>
      <div className="w-full border-2 border-gray-200 rounded p-3 flex gap-5 justify-center items-center">
        <div style={bgImgStyles} className="w-full"></div>
        <div>
          <div className="bg-blue-200 text-blue-700 px-2 py-1 rounded-md w-24">
            Technology
          </div>
          <p className="text-sm  md:text-xl font-bold mt-2 mb-3">
            The Impact Of Technology On The Workplace: How Technology Is
            Changing
          </p>
          <div className="flex gap-3 items-center">
            <Avatar
              src="https://source.unsplash.com/random?wallpapers"
              sx={{ width: 40, height: 40 }}
            />
            <p style={{ fontSize: "12px" }}>Danish Majeed</p>
            <p style={{ fontSize: "12px" }}>Aug 05, 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
