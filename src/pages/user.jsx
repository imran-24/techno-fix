import { useLocation } from "react-router-dom"

import Navbar from "../components/navbar";
import UserDetails from "../components/users/user-details";

export const User = () => {
    const {state} = useLocation();
    const user = state?.data;

    if(!user) return;

    return (
        <div className="h-screen">
            <Navbar />
            <div className="h-full w-full flex items-center justify-center">
                <UserDetails
                data={user}
                single
                />
            </div>
        </div>
  )
}
