/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Navbar from "./navbar";

const navigation = [
  { name: "Prices", href: "/prices" },
  { name: "OI", href: "#" },
  { name: "Volume", href: "#" },
];

export default function Prices() {
  return (
    <div>
      <Navbar></Navbar>
    </div>
  );
}
