import Link from "next/link";
import { FaFacebookF, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { IconType } from "react-icons";

interface SocialIconProps {
  href: string;
  label: string;
  Icon: IconType;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, label, Icon }) => (
  <Link
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="w-5 h-5 text-color-primary hover:scale-105 transition-transform">
      <Icon />
    </div>
  </Link>
);

export default function Footer() {
  return (
    <footer className="bg-black w-full mt-12 py-8 border-t border-color-border">
      <div className="max-w-7xl mx-auto px-6 text-color-text flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Description */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-color-primary font-bold text-2xl">Kheowzoo</h2>
          <p className="mt-2 text-sm">
            Discover the wonders of wildlife and nature. Your adventure awaits!
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-4 text-sm mb-4 md:mb-0">
          {["Home", "About Us", "Gallery", "Events", "Contact"].map((link) => (
            <Link
              key={link}
              href={`/${link.replace(/\s+/g, "").toLowerCase()}`}
              className="hover:text-color-primary"
            >
              {link}
            </Link>
          ))}
        </nav>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <SocialIcon
            href="https://www.facebook.com/"
            label="Facebook"
            Icon={FaFacebookF}
          />
          <SocialIcon
            href="https://www.x.com/kheowzooFROMSOL"
            label="X (Twitter)"
            Icon={FaTwitter}
          />
          <SocialIcon
            href="https://t.me/kheowzooCHINA"
            label="Telegram"
            Icon={FaTelegramPlane}
          />
        </div>
      </div>
    </footer>
  );
}
