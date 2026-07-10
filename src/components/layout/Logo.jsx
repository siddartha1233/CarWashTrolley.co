import { Link } from "react-router-dom";
import { siteConfig } from "../../data/siteConfig";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-80"
    >
      {/* Temporary Logo */}
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--primary)] text-xl font-bold text-white">
        CW
      </div>

      <div>
        <h1 className="text-xl font-bold leading-none text-[var(--primary)]">
          {siteConfig.company.name}
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          FRP Trolley Manufacturer
        </p>
      </div>
    </Link>
  );
};

export default Logo;