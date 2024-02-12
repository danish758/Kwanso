import { Grid, Skeleton } from "@mui/material";

const CustomSkeleton = () => {
  return (
    <>
      {" "}
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            className="flex justify-center p-1 md:p-2 cursor-pointer"
            key={item}
          >
            <div className="w-[345px] h-80">
              <Skeleton variant="rectangular" width="100%" height={"40%"} />
              <Skeleton width="60%" />
              <Skeleton />
              <Skeleton width="40%" />
            </div>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CustomSkeleton;
