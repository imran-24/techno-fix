

export const getUsers = async()=>{
    const res = await fetch("https://dummyjson.com/users");
    return res.json();
}