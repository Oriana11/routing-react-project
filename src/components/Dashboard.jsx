import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();
    
    const handleLogout = () => {
        console.log("User logged out");
        navigate("/");
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Welcome to the Dashboard
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
                This is the dashboard page of our application.
            </p>
            <button
                onClick={handleLogout}
                className="text-lg max-w-2xl bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 mt-8"
            >
                Logout
            </button>
        </div>
    );
}

export default Dashboard;
