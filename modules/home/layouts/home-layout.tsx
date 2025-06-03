import { HomeNavbar } from "../ui/components/home-navbar";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div>
      <HomeNavbar />
      <main>{children}</main>
    </div>
  );
};
