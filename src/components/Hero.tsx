import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-neutral-100 shadow-xl">
      <div className="flex w-full max-w-7xl flex-col items-center p-12">
        <div className="flex flex-col-reverse gap-8 sm:grid sm:grid-cols-2">
          <div className="flex flex-col justify-center gap-4">
            <h1 className="text-5xl font-bold">
              Unlock Your Networking Potential
            </h1>
            <p className="text-lg leading-relaxed text-gray-600">
              Create custom lock screens for networking events that showcase
              your professional details.
            </p>
            <ul className="list-disc pl-5">
              <li className="text-lg leading-relaxed text-gray-600">
                100% Free
              </li>
              <li className="text-lg leading-relaxed text-gray-600">
                Professional Looking
              </li>
              <li className="text-lg leading-relaxed text-gray-600">Instant</li>
              <li className="text-lg leading-relaxed text-gray-600">
                Easy to make
              </li>
            </ul>
            <Link href="#start">
              <Button>
                Get Started
                <ArrowDown className="ml-3 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <Image
            src={"/example2.png"}
            alt="Example Wallpaper 2"
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
