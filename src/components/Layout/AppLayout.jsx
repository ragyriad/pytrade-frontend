import { Outlet, NavLink } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-100 p-4">
        <nav className="flex flex-col gap-2">
          <NavLink to="/" end className="text-blue-500">Home</NavLink>
          <NavLink to="/data" className="text-blue-500">Data</NavLink>
          <NavLink to="/dividends" className="text-blue-500">Dividends</NavLink>
        </nav>
      </aside>
      <main className="flex-1 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
