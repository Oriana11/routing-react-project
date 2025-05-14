import { useLocation } from "react-router-dom";

const CurrentLocation = () => {
    const location = useLocation();
    const formattedPath = location.pathname === "/" ? "Home" : location.pathname.slice(1).split("/").map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(" > ");

    return (
        <div className="bg-white rounded-lg shadow-sm p-3 mb-6">
            <h3 className="text-gray-600 text-sm font-medium flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Current Location: <span className="ml-2 text-custom-blue font-semibold">{formattedPath}</span>
            </h3>
        </div>
    );
};


export default CurrentLocation;