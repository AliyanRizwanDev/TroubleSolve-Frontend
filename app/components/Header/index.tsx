"use client";
import React, { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { Button } from "@/components/ui/button";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="container mx-auto">
      <div className="text-white py-8 bg-headerBackground flex items-center justify-between">
        <h1 className="font-bold text-3xl ">
          Trouble<span className="text-blue-500">Solve</span>
        </h1>
        <div className="hidden md:flex items-center gap-5">
          <h1 className="hover:text-red-500 cursor-pointer transition-all">
            Solutions
          </h1>
          <h1 className="hover:text-red-500 cursor-pointer transition-all">
            Vision
          </h1>
          <h1 className="hover:text-red-500 cursor-pointer transition-all">
            Program
          </h1>
          <h1 className="hover:text-red-500 cursor-pointer transition-all">
            Blog
          </h1>
          <div className="flex items-center gap-1 text-red-500 hover:text-red-800 cursor-pointer transition-all">
            <RxAvatar className="text-2xl" />
            <h1>Log In</h1>
          </div>
          <Button
            variant="outline"
            className="bg-transparent p-4 text-md font-semibold"
          >
            Get Started
          </Button>
        </div>
        <div className="flex md:hidden">
          <FiMenu className="text-3xl cursor-pointer" onClick={toggleSidebar} />
        </div>
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-headerBackground p-8 transition-all transform ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <IoClose
            className="text-3xl text-white cursor-pointer"
            onClick={toggleSidebar}
          />
          <div className="flex flex-col gap-6 mt-8">
            <h1 className="hover:text-red-500 cursor-pointer transition-all">
              Solutions
            </h1>
            <h1 className="hover:text-red-500 cursor-pointer transition-all">
              Vision
            </h1>
            <h1 className="hover:text-red-500 cursor-pointer transition-all">
              Program
            </h1>
            <h1 className="hover:text-red-500 cursor-pointer transition-all">
              Blog
            </h1>
            <div className="flex items-center gap-2 text-red-500 hover:text-red-800 cursor-pointer transition-all">
              <RxAvatar className="text-2xl" />
              <h1>Log In</h1>
            </div>
            <Button
              variant="outline"
              className="bg-transparent p-4 text-md font-semibold"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
