import { ReactNode } from "react";

export interface IAuthProps {
  title: string;
  children: ReactNode;
}

export interface IBasicLayoutProps {
  children: React.ReactNode;
  title: string;
}
