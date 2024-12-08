import { useNavigate } from "react-router-dom";
import HolidayCalendar from "./Calendar";

const Home = () => {
  let nav = useNavigate();
  return (
    <div className="flex flex-wrap h-screen">
      {/* Left Section */}
      <div className="w-full sm:w-8/12 flex items-center bg-gray-100 p-10">
        <div className="mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold text-center sm:text-left">
            Manage Your <span className="text-green-700">Books</span>{" "}
            Efficiently
          </h1>
          <div className="w-20 h-2 bg-green-700 my-4"></div>
          <p className="text-xl mb-10 text-center sm:text-left">
            Simplify your book collection with our intuitive management system.
            Track, organize, and access your library anywhere, anytime. Stay on
            top of your reading goals and never lose track of your favorite
            books.
          </p>
          <div className="flex justify-center sm:justify-start gap-4">
            <button
              className="bg-green-500 text-white text-2xl font-medium px-6 py-3 rounded shadow hover:bg-green-700 transition-all"
              onClick={() => nav("/login")}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full sm:w-4/12 h-48 sm:h-full">
        <img
          src="https://plus.unsplash.com/premium_photo-1681412205159-a40ee8b7e32e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Bookshelf"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Home;
