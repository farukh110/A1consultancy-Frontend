import { redirect } from "react-router-dom";

export const isLogin = () => {

    let token = sessionStorage.getItem('token');

    if (!token) {

        return redirect('/admin/login');

    } else {

        return null;
    }
}