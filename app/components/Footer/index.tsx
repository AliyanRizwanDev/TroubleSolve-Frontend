"use client";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-headerBackground">
      <footer className="text-white p-8 ">
        <div className="grid grid-cols-1 md:grid-cols-3 container mx-auto gap-8 justify-items-center ">
          <div className="text-center md:text-left ">
            <h1 className="font-bold text-2xl">
              Trouble<span className="text-blue-500">Solve</span>
            </h1>
            <p className="text-gray-400 mt-2 text-sm">
              Your one-stop solution for all repair services. Fast, reliable,
              and trustworthy.
            </p>
            <div className="flex gap-4 justify-center md:justify-start mt-4">
              <a
                href="#"
                className="text-white hover:text-blue-500 transition-all"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-2xl" />
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-500 transition-all"
                aria-label="Twitter"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="#"
                className="text-white hover:text-pink-500 transition-all"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-700 transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-2xl" />
              </a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h2 className="font-semibold text-lg mb-2">Quick Links</h2>
            <ul className="flex flex-col gap-2">
              <li className="hover:text-red-500 cursor-pointer transition-all">
                Solutions
              </li>
              <li className="hover:text-red-500 cursor-pointer transition-all">
                Vision
              </li>
              <li className="hover:text-red-500 cursor-pointer transition-all">
                Program
              </li>
              <li className="hover:text-red-500 cursor-pointer transition-all">
                Blog
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h2 className="font-semibold text-lg mb-2">Contact Us</h2>
            <p className="text-sm text-gray-400">
              Email: support@troublesolve.com
            </p>
            <p className="text-sm text-gray-400">Phone: +123 456 7890</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
          © 2024 TroubleSolve. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
