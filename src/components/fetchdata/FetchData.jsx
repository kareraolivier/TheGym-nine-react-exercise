import { useState, useEffect } from "react";
import FetchCard from "./FetchCard";
const FetchData = () => {
  const [user, setUser] = useState([]);
  const fetchUserData = async () => {
    const response = await fetch(
      "https://random-data-api.com/api/users/random_user?size=10"
    );
    const data = await response.json();
    setUser(data);
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  console.log("karera", user);
  return (
    <div id="exnine">
      <div className="py-20  bg-yellow-500">
        <div>
          <h1 className="text-center py-6 text-white text-2xl font-bold">
            Fetching API
          </h1>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-5">
          <FetchCard items={user} />
        </div>
      </div>
    </div>
  );
};

export default FetchData;
