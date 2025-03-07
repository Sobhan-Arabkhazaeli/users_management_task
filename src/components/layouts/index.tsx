import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "../partials";

const MainLayout = () => {
	return (
		<>
			<Header />
			<Sidebar />
			<Outlet />
		</>
	);
};

export default MainLayout
