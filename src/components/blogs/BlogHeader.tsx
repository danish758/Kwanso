import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BlogHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="mb-24">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-3 overflow-auto">
        <div className="flex items-center gap-8">
          <Avatar sx={{ width: 40, height: 40 }}></Avatar>
          <div className="cursor-pointer" onClick={() => navigate("/")}>
            <h3>Blogs</h3>
          </div>
          <div className="cursor-pointer" onClick={() => navigate("/users")}>
            <h3>Users</h3>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div>
            <input
              className="bg-[#e7e0e0] focus:outline-none h-7 rounded-lg px-2"
              placeholder="Search"
            />
          </div>
          <div className="bg-black text-gray-50 rounded px-4 py-1">
            Create Article
          </div>
          <Avatar sx={{ width: 40, height: 40 }}></Avatar>
        </div>
      </div>
      <div className="border-b border-slate-300 " />
    </div>
  );
};

export default BlogHeader;
