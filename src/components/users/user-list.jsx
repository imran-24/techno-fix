import { useCallback, useEffect, useState } from "react";
import { getUsers } from "../../../actions/get-users"
import UserItem from "./user-item";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../button";

const UserList = () => {
    const [data, setData] = useState([]); // Initial state is null
    const [filterData, setFilterData] = useState([]); // Initial state is null
    
    const navigate = useNavigate();
    let [searchParams] = useSearchParams();
    const search = searchParams.get("search");
    const sortParams = searchParams.get('sort');

    const searchUser = useCallback(() => {
        const names = search.split(" ");
        const filterData = data.users?.filter(user => {
              const firstNameLower = user.firstName.toLowerCase();
              const lastNameLower = user.lastName.toLowerCase();
              
              return names.some(name =>
                firstNameLower.includes(name.trim().toLowerCase()) ||
                lastNameLower.includes(name.trim().toLowerCase())
              );
            })
        setFilterData(filterData)

    }, [data, search]);

    useEffect(()=>{
        if(!search){
            setFilterData([])
        }
    },[search])

    const sortByName = (data)=>{
        data?.sort((a, b) => {
            // Convert names to lowercase for case-insensitive sorting
            const nameA = a.firstName.toLowerCase();
            const nameB = b.firstName.toLowerCase();
          
            // Compare the names
            if (nameA < nameB) return -1; // nameA comes before nameB
            if (nameA > nameB) return 1; // nameA comes after nameB
            return 0; // names are equal
          });
    }

    const sortByCompanyName = (data)=>{
        data?.sort((a, b) => {
            // Convert names to lowercase for case-insensitive sorting
            const nameA = a.company.name.toLowerCase();
            const nameB = b.company.name.toLowerCase();
          
            // Compare the names
            if (nameA < nameB) return -1; // nameA comes before nameB
            if (nameA > nameB) return 1; // nameA comes after nameB
            return 0; // names are equal
          });
    }

    const sortByEmail = (data)=>{
        data?.sort((a, b) => {
            // Convert names to lowercase for case-insensitive sorting
            const nameA = a.email.toLowerCase();
            const nameB = b.email.toLowerCase();
          
            // Compare the names
            if (nameA < nameB) return -1; // nameA comes before nameB
            if (nameA > nameB) return 1; // nameA comes after nameB
            return 0; // names are equal
          });
    }


    useEffect(()=>{
        console.log("hi")
        if(sortParams === 'name'){
            console.log("name")
            sortByName(data.users)
        }
        else if(sortParams === "company"){
            console.log("company")
            sortByCompanyName(data.users)
        }
        else if(sortParams === "email"){
            console.log("email")
            sortByEmail(data.users)
        }

    },[sortParams, data])
    
    useEffect(() => {
        console.log("fetch data")
        const fetchData = async () => {
          setData(await getUsers())
          setFilterData([])
        };
        fetchData(); 
    }, []);

    useEffect(() => {
        if (search) {
           searchUser(data);
        }
    }, [data, search, searchUser]);


    if(data.length === 0){
        return(
            <div className="flex flex-col space-y-1 items-center justify-center h-screen">
                <img src="/bread.png" className="animate-pulse h-20 w-20 " alt="" />
                <p className="text-sm text-center text-neutral-500">Loading...</p>
            </div>
        )
    }

    return (
        <>
        <div className="pt-20 px-6 pb-6  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {
            !search && filterData.length === 0 &&
                data?.users?.map(item => (
                <UserItem
                key={item.id}
                data={item}
                />
            ))
        }
        {
            search && filterData.length !==0 
            && filterData?.map(item => (
                <UserItem
                key={item.id}
                data={item}
                />
            ))
        }
        </div>
        {search && filterData.length=== 0 && 
            <div className="mt-20 space-y-2 flex flex-col items-center justify-center">
                <Button 
                onClick={()=> navigate('/')}
                secondary>
                    Clear search
                </Button>
                <p className="text-neutral-500">No match found</p>
            </div>
        }
        </>
   
    )
}

export default UserList