const Navbar = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container h-20 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[var(--primary)]">
          CarWashTrolley.co
        </h2>

        <nav>
          <ul className="flex gap-8 font-medium">
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;