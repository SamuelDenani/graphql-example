import { ReactNode } from "react";
import { Header } from "../../components";

type Props = {
  children: ReactNode;
};

export const GlobalLayout = ({ children }: Props) => (
  <>
    <Header />

    {children}
  </>
);
