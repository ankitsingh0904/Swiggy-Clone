import { useRouteError } from "react-router";
const Error=()=>{
    const err=useRouteError();
    return <div className="error">
     <h3>Oops!!!</h3>
     <h2>{err.status}:{err.statusText}</h2>
    </div>
}
export default Error;