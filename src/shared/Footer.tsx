import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="mt-20 text-white p-10"
    >
      <div className="flex items-center text-center justify-center h-[50px]">
        <p className="text-sm">
          ©Copyright 2024 Antisocial_Dev. All rights reserved
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
