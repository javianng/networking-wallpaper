import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-300 bg-gray-100 py-4 text-center text-sm text-gray-800">
      <div className="container mx-auto flex justify-center space-x-4">
        <Link
          href="https://www.linkedin.com/in/javianngzh/"
          className="hover:underline"
        >
          LinkedIn
        </Link>
        <Link href="https://github.com/javianng" className="hover:underline">
          GitHub
        </Link>
        <Link href="/privacy-policy" className="hover:underline">
          Privacy Policy
        </Link>
        <Link
          href="https://github.com/javianng/networking-wallpaper-generator/issues"
          className="hover:underline"
        >
          Feedback
        </Link>
      </div>
      <div className="mt-2">
        © {currentYear} Javian Ng. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
