// import { Link } from "react-router-dom";
import { BiSolidEditAlt } from 'react-icons/bi';
import {MdDelete} from 'react-icons/md'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const User = ({ user }) => {
    const { name, email, gender, status } = user
    const handleDelete = ()=>{
        fetch(`http://localhost:5000/users/${user._id}`,{
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                   
                   
                    <tbody>
                    
                        <tr className="grid grid-cols-5 text-center">
                            <td >{name}</td>
                            <td >{email}</td>
                            <td >{gender}</td>
                            <td >{status}</td>
                            <td>
                                <div className="flex gap-6 justify-center">
                                    <Link to={`/users/${user._id}`}>
                                    <button className='text-2xl btn'> <BiSolidEditAlt></BiSolidEditAlt></button>
                                    </Link>
                                    <button className='text-2xl btn' onClick={handleDelete}> <MdDelete></MdDelete></button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
User.propTypes = {
    user: PropTypes.object
}

export default User;