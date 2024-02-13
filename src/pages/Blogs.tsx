import React from "react";
import BlogsHeroSection from "../components/blogs/BlogsHeroSection";
import Articles from "../components/blogs/Articles";
import Trending from "../components/blogs/Trending";
import Destinations from "../components/blogs/Destinations";

const Blogs = () => {
  return (
    <div>
      <div className="px-2 md:px-20">
        <BlogsHeroSection />
        <Articles />
        <Trending />
        <Destinations />
      </div>
    </div>
  );
};

export default Blogs;
