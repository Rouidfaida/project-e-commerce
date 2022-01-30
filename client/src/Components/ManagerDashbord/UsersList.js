import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/userAction";
import NavBarManager from "./NavBarManager";
import UserCart from "./UserCart";

const UsersList = () => {
  const { users, loading } = useSelector((state) => state.alluser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div>
      <NavBarManager />
      <div
        style={{
          display: "flex",
          marginLeft: "150px",
          flexWrap: "wrap",
          marginTop: "50px",
        }}
      >
        {loading ? (
          <h1>loading...</h1>
        ) : (
          users.map((el, i) => <UserCart el={el} key={i} />)
        )}
        {/* <h2>{userl.userRole}</h2> */}
      </div>
    </div>
  );
};

export default UsersList;
