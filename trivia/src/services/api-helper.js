import axios from "axios";

const api = axios.create({
  baseURL: "https://adam-eats.herokuapp.com/answer10/leaderboard/",
});

export const getLeaderboard = async () => {
  const resp = await api.get();
  return resp.data[0];
};

export const updateLeaderboard = async (leaderboard) => {
  const resp = await api.put('/', leaderboard);
  return resp.data;
};
