import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import User from "../components/users/UserCard";
import { Grid, Typography } from "@mui/material";
import UsersPagination from "../components/users/Pagination";
import { UserType } from "../types";
import Header from "../components/users/Header";
import CustomSkeleton from "../components/users/Skeleton";

const TOTAL_USERS = 6;
const Users = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<UserType[]>([]);
  const [page, setPage] = useState(1);
  const defaultGender = localStorage.getItem("gender") || "";
  const [gender, setGender] = useState(defaultGender);
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const getUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/?page=${page}&results=${TOTAL_USERS}&gender=${gender}`
      );
      setUsers(res?.data?.results);
    } catch (error) {
      console.log("error :>> ", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, [page, gender]);

  return (
    <div className="mt-4">
      <div className="w-full my-4">
        <Header
          setGender={setGender}
          gender={gender}
          users={users}
          setFilteredUsers={setFilteredUsers}
          setKeyword={setKeyword}
          keyword={keyword}
        />
      </div>
      {!loading ? (
        <>
          {(keyword.length > 0 ? filteredUsers : users)?.length > 0 ? (
            <>
              <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >
                {(keyword.length > 0 ? filteredUsers : users)?.map(
                  (user: UserType) => (
                    <Fragment key={user?.login?.uuid}>
                      <User user={user} />
                    </Fragment>
                  )
                )}
              </Grid>
              <div className="flex justify-center">
                <UsersPagination page={page} setPage={setPage} />
              </div>
            </>
          ) : (
            <Typography variant="body2" color="text.secondary">
              No Record Found!
            </Typography>
          )}
        </>
      ) : (
        <CustomSkeleton />
      )}
    </div>
  );
};

export default Users;
