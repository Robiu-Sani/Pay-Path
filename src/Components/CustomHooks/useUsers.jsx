import { useQuery } from "@tanstack/react-query";
import useAxiosSource from "./useAxiousSorce";

export default function useUsers() {
  const { axiosSource } = useAxiosSource();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSource.get("/users");
      return res.data;
    },
  });
  return { users, refetch };
}
