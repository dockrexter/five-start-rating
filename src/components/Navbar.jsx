
const Navbar = () => {
  return (
    <nav className="bg-white py-4 shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="text-2xl font-bold text-green-600">
          <a href="/">Freelancer Reviews</a>
        </div>

        <div className="text-gray-600 hover:text-green-600 cursor-pointer">
          <i className="fas fa-user-circle fa-2x"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
