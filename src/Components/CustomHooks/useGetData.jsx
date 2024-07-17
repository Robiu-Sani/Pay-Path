import { useQuery } from "@tanstack/react-query";
import useAxiosSource from "./useAxiosSource";

export default function useGetData({ pathName }) {
  const { axiosSource } = useAxiosSource();
  const { data = [], refetch } = useQuery({
    queryKey: ["path", pathName],
    queryFn: async () => {
      const res = await axiosSource.get(`/${pathName}`);
      return res.data;
    },
  });
  return { data, refetch };
}

// Calling the hook from another component
// const { data, refetch } = useGetData({ pathName: 'anypathname' });
