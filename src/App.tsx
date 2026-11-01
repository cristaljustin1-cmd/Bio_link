import { MotionConfig, motion } from "framer-motion";
import { profile } from "./config/profile";
import Profile from "./components/Profile";
import SocialLinks from "./components/SocialLinks";
import LinkList from "./components/LinkList";
import Footer from "./components/Footer";
import { container } from "./components/motion";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen px-5 py-14 sm:py-20">
        <motion.div variants={container} initial="hidden" animate="show" className="mx-auto w-full max-w-lg">
          <Profile
            fullName={profile.fullName}
            title={profile.title}
            location={profile.location}
            bio={profile.bio}
            image={profile.image}
            imageAlt={profile.imageAlt}
          />
          <SocialLinks socials={profile.socials} />
          <LinkList links={profile.links} />
          <Footer name={profile.footerName ?? profile.fullName} />
        </motion.div>
      </main>
    </MotionConfig>
  );
}
