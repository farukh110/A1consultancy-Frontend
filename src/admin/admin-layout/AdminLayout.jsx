import { Outlet } from "react-router-dom";
import './admin-layout.scss';

const AdminLayout = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default AdminLayout;