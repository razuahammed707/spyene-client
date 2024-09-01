import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import NavbarItems from "./navbar-items";

const Navbar = async () => {
  return (
    <div className="flex max-w-[928px] mx-auto flex-wrap  justify-between items-center py-4 w-full border-b border-white min-h-[60px]">
      <Link href="/">
        <Image src="/SPYENE.png" alt="SPYENE" width={82} height={28} />
      </Link>

     <NavbarItems/>

      <Link href="/contact">
        <Button className="bg-[#1045AD] h-[40px] text-sm font-medium">
          Contact us
        </Button>
      </Link>
    </div>
  );
};

export default Navbar;
