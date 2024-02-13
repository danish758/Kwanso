import { Grid, Typography } from "@mui/material";
import TrendingCard from "./TrendingCard";

const Trending = () => {
  return (
    <div className="mt-8">
      <Typography variant="h5" sx={{ fontWeight: 600 }}>
        Top Stories
      </Typography>
      <div className="border-b border-slate-300 mt-2 mb-8" />
      <Grid container spacing={2}>
        {[1, 2, 3, 4].map(() => (
          <Grid item xs={12} lg={6}>
            <TrendingCard />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Trending;
