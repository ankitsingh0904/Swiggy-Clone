import { createContext } from "react";
const UserContext=createContext({
    loggedInUser:"Default User",
    location:"Default Location"
})
export default UserContext;