import { Typography } from "@mui/material";
import React from "react";
import { BgImgStylesType } from "../../types";

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

const Destinations = () => {
  return (
    <div className="my-10">
      <Typography variant="h5" sx={{ fontWeight: 600 }}>
        Top Destinations
      </Typography>
      <p style={{ fontSize: "12px", marginTop: "10px" }}>
        Tick one more destination off of your bucket list with one of our most
        popular vaccations in 2024
      </p>
      <div className="border-b border-slate-300 mt-2 mb-8" />
      {/* Destinations List */}
      <div className="flex gap-2 overflow-auto">
        {[1, 2, 3, 4].map(() => (
          <div
            style={bgImgStyles}
            className="w-full flex justify-center items-center "
          >
            <p className="font-bold text-lg ">Destination</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
