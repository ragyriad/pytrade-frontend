import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchAccounts = async () => {
  const { data } = await axios.get("/api/accounts");
  return data.accounts;
};

export const useAccountsQuery = () =>
  useQuery({ queryKey: ["accounts"], queryFn: fetchAccounts });
