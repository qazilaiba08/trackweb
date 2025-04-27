import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-blue-100 to-blue-200 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#37bdcc] mb-6">
        Welcome to TaskIT
      </h1>
      <p className="text-lg md:text-xl text-center text-gray-700">
        Your task management solution.
      </p>
      <p className="text-lg md:text-xl text-center text-gray-700 mt-2">
        Manage your tasks efficiently and effectively.
      </p>
      <p className="text-lg md:text-xl text-center text-gray-700 mt-2">
        Join us and start organizing your tasks today!
      </p>
<br/>

      <div className="flex flex-col flex-1/2 items-center mt-6">
        <button className="bg-[#43b7db] 4text-white py-2 px-4 md:px-6 rounded-xl font-semibold hover:bg-blue-600 transition">
          Get Started
        </button>
        <button className="bg-[#43b7db] text-white py-2 px-4 md:px-6 rounded-xl font-semibold hover:bg-blue-600 transition mt-4">
          Learn More
        </button>
       < div className="flex items-end justify-end mt-6 px-4">
       
       <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjMKShIwJ6acOPdXZGr0jwV7J0Gh7ZOGOVWw&s"
          alt="TaskIT Logo"
          className="w-24 h-24 md:w-32 md:h  rounded-2xl shadow-lg"
        />
       </div>
       
      </div>
      </div>
    
  );
};

export default Home;
