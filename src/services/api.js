import axios from "axios";

const BASE_URL = "https://api-sandbox.confirmsign.com/v4.0";
const API_CFS_KEY = process.env.REACT_APP_API_CFS_KEY;
const API_CFS_TOKEN = process.env.REACT_APP_API_CFS_TOKEN;

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getThreadByToken = async () => {
  try {
    const url = `/threads/token/${API_CFS_KEY}/${API_CFS_TOKEN}`;
    const response = await apiClient.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postAcceptThread = async (agreementData) => {
  try {
    const url = `/threads/token/${API_CFS_KEY}/${API_CFS_TOKEN}/agreement/true`;
    const response = await apiClient.post(url, agreementData);
    return response.data;
  } catch (error) {
    console.error("Error accepting thread:", error);
    throw error;
  }
};
