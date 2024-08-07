import { useQuery } from "@tanstack/react-query";
import useAxiosSource from "./useAxiousSorce";

export default function useLogedUser() {
  const { axiosSource } = useAxiosSource();

  const userLogedIn = localStorage.getItem("UserLogedIn");
  const useremail = userLogedIn ? userLogedIn : null;

  const { data: logedUser = [], refetch } = useQuery({
    queryKey: ["logedUser"],
    queryFn: async () => {
      if (!useremail) {
        throw new Error("User email is not available");
      }
      const res = await axiosSource.get(`/useremail/${useremail}`);
      return res.data;
    },
    enabled: !!useremail,
  });

  return { logedUser, refetch };
}
