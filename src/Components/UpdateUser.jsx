import { Link, useLoaderData } from "react-router-dom";
const UpdateUser = () => {
    const loadedUser = useLoaderData()
    console.log(loadedUser)

    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const gender = form.gender.value;
        const status = form.status.value;
        const user = { name, email, gender, status }
        console.log(user)
        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method:'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
    })
        .then(res => res.json())
    .then(data => {
        console.log(data)
        alert('User updated successfully')
        form.reset()

    })
       }
return (
    <div>
        <Link to='/'>
            <button>All Users</button>
        </Link>

        <h2 className="text-2xl text-center my-12">New User </h2>

        <form className="w-3/4 mx-auto p-8 rounded-lg" onSubmit={handleUpdate}>
            <label className="label">Name</label>
            <input type="text" name="name" id="" placeholder="Name" className="px-4 py-2 text-xl border-2 w-2/3 rounded-md" />
            <label className="label">Email</label>
            <input type="text" name="email" id="" placeholder="Email" className="px-4 py-2 text-xl border-2 w-2/3 rounded-md" />

            <div className="gap-8 flex items-center mt-8">
                <h2>Gender</h2>
                <label className="label">
                    <span className="label-text">Male</span>
                    <input type="radio" value='Male' name="gender" className="radio ml-4 checked:bg-accent" />
                </label>
                <label className="label">
                    <span className="label-text">Female</span>
                    <input type="radio" name="gender" value='Female' className="radio ml-4 checked:bg-accent" />
                </label>
            </div>
            <div className="gap-8 flex items-center mt-8">
                <h2>Status</h2>
                <label className="label">
                    <span className="label-text">Active</span>
                    <input type="radio" value='Active' name="status" className="radio ml-4 checked:bg-accent" />
                </label>
                <label className="label">
                    <span className="label-text">Inactive</span>
                    <input type="radio" name="status" value='Inactive' className="radio ml-4 checked:bg-accent" />
                </label>
            </div>
            <input type="submit" value="Add New User" className="bg-accent btn w-full mt-4" />
        </form>
    </div>

);
        };

export default UpdateUser;