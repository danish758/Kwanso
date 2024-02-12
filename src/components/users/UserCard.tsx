import { Card, CardContent, Grid, Typography } from "@mui/material";
import { UserType } from "../../types";
import { useNavigate } from "react-router-dom";

const UserCard = ({ user }: { user: UserType }) => {
  const navigate = useNavigate();
  const goToUserProfile = (user: UserType) => {
    navigate(`/users/${user?.login?.uuid}`, { state: { user } });
  };
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      className="flex justify-center p-1 md:p-2 cursor-pointer"
    >
      <Card
        sx={{ maxWidth: 345, width: 345 }}
        onClick={() => goToUserProfile(user)}
      >
        <div>
          <img
            src={user?.picture?.large}
            alt="user"
            className="h-48 w-full object-cover object-center"
          />
        </div>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {`${user?.name?.first} ${user?.name?.last}`}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            className="break-all"
          >
            {`${user?.email}`}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            className="break-all"
          >
            {`Cell Phone: ${user?.cell}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user?.gender}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default UserCard;
