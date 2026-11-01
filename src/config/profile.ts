import profilePhoto from "../assets/profilepic.jpg";

/**
 * EDIT THIS FILE to update your page.
 * - Replace src/assets/profile-photo.svg with your own photo (e.g. profile-photo.jpg)
 *   and update the import above.
 * - Leave a social URL as "" to hide its icon.
 * - Add, remove, or reorder entries in `links`.
 */

export type LinkIcon =
  | "briefcase"
  | "user"
  | "folder"
  | "file"
  | "mail"
  | "link"
  | "globe"
  | "calendar"
  | "phone";

export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  /** Plain email address, e.g. "you@example.com" (mailto: is added automatically) */
  email?: string;
}

export interface LinkItem {
  title: string;
  description?: string;
  url: string;
  icon?: LinkIcon;
}

export interface Profile {
  fullName: string;
  title: string;
  location?: string;
  bio: string;
  image: string;
  imageAlt: string;
  socials: SocialLinks;
  links: LinkItem[];
  footerName?: string;
}

export const profile: Profile = {
  fullName: "Jordan Cristal",
  title: "Job Title",
  location: "Location",
  bio: "Biography or personal statement goes here. This is a brief description of yourself, your background, and your interests.",
  image: profilePhoto,
  imageAlt: "Portrait of Jordan Cristal",
  socials: {
    facebook: "https://www.facebook.com/Eldrige12",
    instagram: "https://instagram.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    email: "cristal.justin1@gmail.com",
  },
  links: [
    {
      title: "Personal Portfolio",
      description: "Selected work and case studies",
      url: "https://example.com/portfolio",
      icon: "briefcase",
    },
    {
      title: "Professional Profile",
      description: "Experience, skills, and recommendations",
      url: "https://linkedin.com/in/yourusername",
      icon: "user",
    },
    {
      title: "Featured Projects",
      description: "Recent residential and mixed-use developments",
      url: "https://example.com/projects",
      icon: "folder",
    },
    {
      title: "Resume / Curriculum Vitae",
      description: "Download my latest CV",
      url: "https://example.com/resume.pdf",
      icon: "file",
    },
    {
      title: "Contact Information",
      description: "Get in touch for inquiries",
      url: "mailto:cristal.justin1@gmail.com",
      icon: "mail",
    },
    {
      title: "Other Important Links",
      description: "Articles, talks, and resources",
      url: "https://example.com/resources",
      icon: "link",
    },
  ],
  footerName: "Jordan Cristal",
};
