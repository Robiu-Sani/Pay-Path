import useUsers from "../../CustomHooks/useUsers";

export default function AllUsers() {
  const { users, refetch } = useUsers();
  console.log(users);
  return <div>aii users</div>;
}
