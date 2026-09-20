import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="theme-page min-h-screen w-full flex justify-center items-center px-4 py-8">
      <Outlet />
    </div>
  );
};

export default MainLayout;
