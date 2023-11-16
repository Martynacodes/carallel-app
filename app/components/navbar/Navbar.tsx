"use client";

import Container from "../reusable/Container";
import Logo from "./Logo";
import Menu from "./Menu";
import UserMenu from "./UserMenu";
// import Categories from "./Categories";
// import { SafeUser } from "@/app/types";

// interface NavbarProps {
//   currentUser?: SafeUser | null;
// }
const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 md:py-0 lg:py-0 border-b-[1px]">
        <Container>
          <div
            className="
            flex
            flex-row
            items-center
            justify-between
            gap-3
            md:gap-0
            "
          >
            <Logo />
            <Menu />
            <UserMenu />
          </div>
        </Container>
      </div>
      {/* <Categories /> */}
    </div>
  );
};

export default Navbar;
