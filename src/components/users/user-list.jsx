import { useCallback, useEffect, useState } from "react";
import UserItem from "./user-item";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../button";
import PropTypes from 'prop-types';

const UserList = ({data, setData}) => {
    const [filterData, setFilterData] = useState([]); // Initial state is null
    
    const navigate = useNavigate();
    let [searchParams] = useSearchParams();
    const search = searchParams.get("search");

    const sortParams = searchParams.get('sort');

  const sortByName = ()=>{
    console.log("hi")
    const sortedUserList = data.slice().sort((a, b) => {
    const nameA = a.firstName.toLowerCase();
    const nameB = b.firstName.toLowerCase();
  
    if (nameA < nameB) return -1; 
    if (nameA > nameB) return 1; 
    return 0; 
    });
    setData(sortedUserList)

  }

    const sortByCompanyName =()=>{
      
      const sortedUserList = data.slice().sort((a, b) => {
      const nameA = a.company.name.toLowerCase();
      const nameB = b.company.name.toLowerCase();
    
      if (nameA < nameB) return -1; 
      if (nameA > nameB) return 1;
      return 0; 
      });
      setData(sortedUserList);

}

  const sortByEmail = ()=>{

    const sortedUserList = data.slice().sort((a, b) => {
    const nameA = a.email.toLowerCase();
    const nameB = b.email.toLowerCase();
  
    if (nameA < nameB) return -1; 
    if (nameA > nameB) return 1; 
    return 0; 
    });
    setData(sortedUserList);

}

    useEffect(()=>{
        if(sortParams === 'name'){
            sortByName()
        }
        else if(sortParams === "company"){
          sortByCompanyName()
        }
        else if(sortParams === "email"){
          sortByEmail()
        }
    },[sortParams])

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

    useEffect(() => {
        if (search) {
           searchUser(data);
        }
    }, [data, search, searchUser]);


    return (
        <>
        <div className="pt-20 px-6 pb-6  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {
            !search && filterData.length === 0 &&
                data?.map(item => (
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

UserList.propTypes = {
    data: PropTypes.array,
    setData: PropTypes.func
}

export default UserList