import { useQuery } from "@tanstack/react-query";
import useAxiosSource from "./useAxiousSorce";

export default function useCetRequest() {
  const { axiosSource } = useAxiosSource();
  const { data: cashin_request = [], refetch } = useQuery({
    queryKey: ["cashin_request"],
    queryFn: async () => {
      const res = await axiosSource.get("/cashIn");
      return res.data;
    },
  });
  return { cashin_request, refetch };
}
