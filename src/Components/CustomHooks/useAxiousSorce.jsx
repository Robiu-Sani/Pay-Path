import axios from "axios";
const axiosInstance = axios.create({
  // baseURL: "https://pa-ypathserver.vercel.app/",
  // baseURL: "https://payment-method-server.vercel.app/",
  baseURL: "https://payment-method-server1.vercel.app/",
  // baseURL: "http://localhost:5000/",
});

export default function useAxiosSource() {
  return { axiosSource: axiosInstance };
}
