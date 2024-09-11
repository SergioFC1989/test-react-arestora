import axios from "axios";

const BASE_URL = "https://api-sandbox.confirmsign.com/v4.0";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getThreadByToken = async (cfsKey, cfsToken) => {
  try {
    const url = `/threads/token/${cfsKey}/${cfsToken}`;
    const response = await apiClient.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postAcceptThread = async (cfsKey, cfsToken, agreementData) => {
  try {
    const url = `/threads/token/${cfsKey}/${cfsToken}/agreement/true`;
    const response = await apiClient.post(url, agreementData);
    return response.data;
  } catch (error) {
    console.error("Error accepting thread:", error);
    throw error;
  }
};
