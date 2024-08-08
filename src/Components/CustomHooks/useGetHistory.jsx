import { useQuery } from "@tanstack/react-query";
import useAxiosSource from "./useAxiousSorce";

export default function useGetHistory() {
  const { axiosSource } = useAxiosSource();
  const { data: history = [], refetch } = useQuery({
    queryKey: ["history"],
    queryFn: async () => {
      const res = await axiosSource.get("/history");
      return res.data;
    },
  });
  return { history, refetch };
}
