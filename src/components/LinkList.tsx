import { motion } from "framer-motion";
import type { LinkItem } from "../config/profile";
import LinkCard from "./LinkCard";
import { item } from "./motion";

export default function LinkList({ links }: { links: LinkItem[] }) {
  if (links.length === 0) return null;

  return (
    <>
      <motion.hr variants={item} className="my-9 border-0 border-t border-stone" />
      <nav aria-label="Links">
        <ul className="flex flex-col gap-3">
          {links.map((link) => (
            <LinkCard key={`${link.title}-${link.url}`} {...link} />
          ))}
        </ul>
      </nav>
    </>
  );
}
