import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const registerAdminStaff = async (adminData) => {
  try {
    const response = await API.post("/register-admin-data", adminData);
    return response.data;
  } catch (error) {
    console.error("ERROR :: adding or registering admin: ", error);
    throw error;
  }
};

export const loginAdminUser = async (loginData) => {
  try {
    const response = await API.post("/login-admin-user", loginData);
    return response.data;
  } catch (error) {
    console.error("ERROR :: login admin: ", error);
    throw error;
  }
};

export const getAdminUsers = async () => {
  try {
    const response = await API.get("/get-admin-users");
    return response.data;
  } catch (error) {
    console.error("ERROR :: getting Admin users: ", error);
    throw error;
  }
};

export const autheticateAdminUserById = async (id) => {
  try {
    const response = await API.put(`/authenticate-user/${id}`);
    return response.data;
  } catch (error) {
    console.error("ERROR :: getting admin by ID: ", error);
    throw error;
  }
};
