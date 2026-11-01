import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import type { SocialLinks as SocialLinksData } from "../config/profile";
import { item } from "./motion";

interface Entry {
  key: keyof SocialLinksData;
  label: string;
  Icon: LucideIcon;
}

const ENTRIES: Entry[] = [
  { key: "facebook", label: "Facebook", Icon: Facebook },
  { key: "instagram", label: "Instagram", Icon: Instagram },
  { key: "linkedin", label: "LinkedIn", Icon: Linkedin },
  { key: "email", label: "Email", Icon: Mail },
];

export default function SocialLinks({ socials }: { socials: SocialLinksData }) {
  const visible = ENTRIES.filter(({ key }) => Boolean(socials[key]?.trim()));
  if (visible.length === 0) return null;

  return (
    <motion.nav variants={item} aria-label="Social media" className="mt-7">
      <ul className="flex flex-wrap items-center justify-center gap-3">
        {visible.map(({ key, label, Icon }) => {
          const value = socials[key]!.trim();
          const isEmail = key === "email";
          const href = isEmail ? `mailto:${value}` : value;
          return (
            <li key={key}>
              <a
                href={href}
                aria-label={isEmail ? `Email ${value}` : `${label} profile (opens in a new tab)`}
                title={label}
                {...(isEmail ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-stone text-forest transition duration-200 hover:-translate-y-0.5 hover:border-forest hover:bg-forest hover:text-ivory"
              >
                <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
              </a>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
}
