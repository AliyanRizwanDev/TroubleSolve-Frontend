"use client"
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [1, 100], [1.2, 1.5]);

  return (

    <div className="overflow-hidden container mx-auto">

    <motion.div
      className="container mx-auto bg-[url('/Images/Image4.jpeg')] w-full h-[70vh] bg-no-repeat bg-cover bg-fixed  -z-100"
      style={{ scale }}
      ></motion.div>
      </div>
  );
}
