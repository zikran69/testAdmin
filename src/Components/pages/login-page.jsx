import { Link, useNavigate } from "react-router-dom";
import auth from "../../utils/auth";

export default function LoginPage(){
    const navigate = useNavigate();
    const admin = {
        username : 'admin',
        password : 'admin',
        token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const {username, password} = Object.fromEntries(formData);
        if(admin.username == username && admin.password == password){
            const {token} = admin;
            auth.storeAuthCredential(token);
            return navigate('/dashboard');
        }else{
            alert('Username or Password is wrong ...'); 
            return navigate('/');
        }
    }
    
    return(
        <div className="flex items-center justify-center h-screen bg-login bg-cover">
            <div className="backdrop-blur-sm bg-white/20 p-6 rounded-xl shadow-xl w-[400px] sm:mx-3">
                <h1 className="text-3xl font-semibold mb-4 text-center font-roboto">
                    Log In
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Username</label>
                        <input type="text" id="userName" name="username" placeholder="admin" className="mt-1 px-4 py-2 w-full border rounded-md focus:ring focus:ring-indigo-300"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="passWord" name="password" className="mt-1 px-4 py-2 w-full border rounded-md focus:ring focus:ring-indigo-300"/>
                    </div>
                    <div className="flex justify-between items-center my-4 p-2">
                        <div className="flex items-center">
                            <input type="checkbox" id="remember" />
                            <label className="ml-2">Remember Me</label>
                        </div>
                        <a href="#" className="text-primary-blue font-semibold hover:underline">Forgot Password?</a>
                    </div>
                    <button type="submit" className="w-full bg-secondary-blue text-white py-2 rounded-md hover:bg-hover-blue">
                    Log In
                    </button>
                    <div className="my-4 text-center">
                        <span>Not an admin?
                            <a href="src/pages/login/register.html"className="text-secondary-blue font-semibold hover:text-hover-blue hover:underline">Sign Up</a>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}