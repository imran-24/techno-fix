import { useEffect, useState } from "react";
import Navbar from "../components/navbar"
import UserList from "../components/users/user-list"
import { getUsers } from "../../actions/get-users";

const Users = () => {
  const [data, setData] = useState([]); // Initial state is null

    useEffect(() => {
      const fetchData = async () => {
        setData(await getUsers())
      };
      fetchData(); 
    }, []);


  if(data.length === 0){
    return(
        <div className="flex flex-col space-y-1 items-center justify-center h-screen">
            <img src="/bread.png" className="animate-pulse h-20 w-20 " alt="" />
            <p className="text-sm text-center text-neutral-500">Loading...</p>
        </div>
    )
}


  return (
    <div className="h-screen">
        <Navbar />
        <UserList  data={data} setData={setData}/>
    </div>
  )
}

export default Users