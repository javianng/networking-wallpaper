import Link from "next/link";
import { Undo2 } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex justify-center bg-neutral-800 py-4">
      <div className="flex w-full max-w-7xl px-12">
        <Link
          href="/"
          className="flex gap-2 text-lg text-white hover:underline"
        >
          <Undo2 />
          <p>Back</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
