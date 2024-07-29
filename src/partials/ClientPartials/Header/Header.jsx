import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <div className="bg-light-green">
      <div>
        <Link to={"/"}>
          <img className="w-[94px]" src="./logo.png"></img>
        </Link>
      </div>
      <div className="">
        <Link to={"/"}>
          <Button variant="outline">Button</Button>

          <div>Trang chủ</div>
        </Link>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
}

export default Header;
