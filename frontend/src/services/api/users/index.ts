import { AxiosResponse } from "axios";
import api from "..";
import { User } from "../../../interfaces/user";

export const getUsers = async (): Promise<AxiosResponse<User[]>> => {
  return await api.get("/users");
};
