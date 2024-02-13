import { Avatar, Typography } from "@mui/material";
import { BgImgStylesType } from "../../types";

const bgImgStyles: BgImgStylesType = {
  transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  borderRadius: "4px",
  boxShadow:
    "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
  position: "relative",
  backgroundColor: "rgb(66, 66, 66)",
  color: "rgb(255, 255, 255)",
  marginBottom: "32px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
  height: "330px",
};

const BlogsHeroSection = () => {
  return (
    <div>
      <Typography variant="h5" sx={{ fontWeight: 600 }}>
        Top Stories
      </Typography>
      <div className="border-b border-slate-300 my-2" />
      <div>
        <div style={bgImgStyles}>
          <div className="absolute top-[10%] sm:top-[20%] md:top-[34%] lg-[45%] px-5 w-full md:w-3/4">
            <div className="bg-blue-400 px-2 py-1 rounded-md w-24">
              Technology
            </div>
            <p className="text-2xl md:text-3xl font-semibold mt-2 mb-3">
              The Impact Of Technology On The Workplace: How Technology Is
              Changing
            </p>
            <div className="flex gap-3 items-center">
              <Avatar sx={{ width: 40, height: 40 }}>DM</Avatar>
              <p>Danish Majeed</p>
              <p>Aug 05, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsHeroSection;
