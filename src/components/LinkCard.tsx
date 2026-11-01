import {
  ArrowUpRight,
  Briefcase,
  CalendarDays,
  FileText,
  FolderOpen,
  Globe,
  Link as LinkIcon,
  Mail,
  Phone,
  User,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import type { LinkItem } from "../config/profile";
import { item } from "./motion";

const ICONS: Record<NonNullable<LinkItem["icon"]>, LucideIcon> = {
  briefcase: Briefcase,
  user: User,
  folder: FolderOpen,
  file: FileText,
  mail: Mail,
  link: LinkIcon,
  globe: Globe,
  calendar: CalendarDays,
  phone: Phone,
};

export default function LinkCard({ title, description, url, icon = "link" }: LinkItem) {
  const Icon = ICONS[icon] ?? LinkIcon;
  const isExternal = /^https?:\/\//i.test(url);

  return (
    <motion.li variants={item}>
      <a
        href={url}
        aria-label={description ? `${title}: ${description}` : title}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="group flex w-full items-center gap-4 rounded-xl border border-stone bg-ivory px-4 py-4 shadow-card transition duration-200 hover:-translate-y-0.5 hover:border-forest/40 hover:bg-stone/30 hover:shadow-lift sm:px-5"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-forest text-ivory">
          <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
        </span>

        <span className="min-w-0 flex-1 text-left">
          <span className="block truncate font-semibold text-forest">{title}</span>
          {description && <span className="mt-0.5 block truncate text-sm text-charcoal/70">{description}</span>}
        </span>

        <ArrowUpRight
          className="h-5 w-5 shrink-0 text-sage transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-forest"
          aria-hidden="true"
        />
      </a>
    </motion.li>
  );
}
