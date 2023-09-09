import { User } from "firebase/auth";

export interface IAuthData {
  currentUser: User | null;
  loading: boolean;
  setLoading: () => void;
}

export interface IProps {
  children: React.ReactNode;
}
