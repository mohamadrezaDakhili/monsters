import { axiosInstance } from "../";

export const createUsers = (data) => {
  return axiosInstance.post("/users", data);
};
