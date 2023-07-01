import UsersList from "../Components/UsersList";
const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "John Cena",
      image:
        "https://www.wwe.com/f/styles/wwe_large/public/all/2019/10/RAW_06202016rf_1606--3d3997f53e6f3e9277cd5a67fbd8f31f.jpg",
      places: 3,
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
