import useUsers from "../../CustomHooks/useUsers";
import DeshboardBAnner from "../../SheaireComponent/DeshboardBAnner";

export default function AllUsers() {
  const { users, refetch } = useUsers();
  console.log(users);
  return (
    <div className="w-full !scrollNone overflow-y-auto  max-h-[calc(100vh-50px)] p-4">
      <DeshboardBAnner></DeshboardBAnner>
    </div>
  );
}
