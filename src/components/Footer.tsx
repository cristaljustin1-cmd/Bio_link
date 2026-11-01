import { motion } from "framer-motion";
import { item } from "./motion";

export default function Footer({ name }: { name: string }) {
  return (
    <motion.footer variants={item} className="mt-12 text-center text-xs text-charcoal/60">
      © {new Date().getFullYear()} {name}. All rights reserved.
    </motion.footer>
  );
}
