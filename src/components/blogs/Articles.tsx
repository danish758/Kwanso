import { Grid } from "@mui/material";
import ArticleCard from "./ArticleCard";
import { useState } from "react";

const Articles = () => {
  const [records, setRecords] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  return (
    <div>
      <Grid container spacing={2}>
        {records.map(() => (
          <Grid item xs={12} md={6} lg={4} xl={3}>
            <ArticleCard />
          </Grid>
        ))}
      </Grid>
      {records.length < 27 && (
        <div className="my-4 flex justify-center">
          <div
            className="border-2 border-gray-600 w-fit px-2 py-1 rounded-xl cursor-pointer"
            onClick={() => {
              setRecords([
                ...records,
                records[records.length - 1] + 1,
                records[records.length - 1] + 2,
                records[records.length - 1] + 3,
              ]);
            }}
          >
            View More Articles
          </div>
        </div>
      )}
    </div>
  );
};

export default Articles;
