
"use client";

import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <Link to='/'>
          <img src="https://s.cafebazaar.ir/images/icons/com.uefa.ucl-801aa6dc-f196-48eb-b1a2-971abb3ba3f8_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize" className="mr-3 h-6 sm:h-9" alt="" />
        </Link>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">UEFA Champions League</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Favourite Team</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Link to='/matches'>
          <Navbar.Link href="#" active>
            Matches
          </Navbar.Link>
        </Link>

        <Navbar.Link href="#">News</Navbar.Link>
        <Navbar.Link href="#">Teams</Navbar.Link>
        <Navbar.Link href="#">More</Navbar.Link>
        <Navbar.Link href="#">Stats</Navbar.Link>
        <Navbar.Link href="#">Gaming</Navbar.Link>
        <Navbar.Link href="#">Video</Navbar.Link>
        <Navbar.Link href="#">Groups</Navbar.Link>

      </Navbar.Collapse>
    </Navbar>
  );
}
