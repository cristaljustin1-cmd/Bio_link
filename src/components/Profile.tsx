import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import type { Profile as ProfileData } from "../config/profile";
import { item } from "./motion";

type Props = Pick<ProfileData, "fullName" | "title" | "location" | "bio" | "image" | "imageAlt">;

export default function Profile({ fullName, title, location, bio, image, imageAlt }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      <motion.div variants={item} className="rounded-full border border-stone bg-ivory p-1.5 shadow-card">
        <img
          src={image}
          alt={imageAlt}
          width={128}
          height={128}
          className="h-28 w-28 rounded-full object-cover sm:h-32 sm:w-32"
        />
      </motion.div>

      <motion.h1 variants={item} className="mt-6 font-display text-4xl leading-tight text-forest sm:text-5xl">
        {fullName}
      </motion.h1>

      <motion.p variants={item} className="mt-2 text-base font-semibold text-charcoal">
        {title}
      </motion.p>

      {location && (
        <motion.p variants={item} className="mt-1.5 flex items-center gap-1.5 text-sm text-sage">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="text-charcoal/70">{location}</span>
        </motion.p>
      )}

      <motion.p variants={item} className="mt-5 max-w-md text-[15px] leading-relaxed text-charcoal/80">
        {bio}
      </motion.p>
    </header>
  );
}
