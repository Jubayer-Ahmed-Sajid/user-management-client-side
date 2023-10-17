import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
    const loadedUsers = useLoaderData()
    console.log(loadedUsers)

    return (
        <div>
            <table className="table bg-black text-white">
            <thead>
                 <tr className="text-white grid grid-cols-5 text-center">
                     <th>Name</th>
                     <th>Email</th>
                     <th>Gender</th>
                     <th>Status</th>
                     <th>Action</th>
                 </tr>
             </thead>
            </table>
           
            {
                loadedUsers.map(user => <User key={user._id} user={user}></User> )
            }
        </div>
    );
};

export default Users;