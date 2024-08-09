import axios from "axios";
const axiosInstance = axios.create({
  baseURL:
    "https://paypathserver-5abmejb1m-robius-sanis-projects-8215d3e6.vercel.app/",
});

export default function useAxiosSource() {
  return { axiosSource: axiosInstance };
}
