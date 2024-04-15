import { Github, Mail, Linkedin, Phone } from "lucide-react";
import { Header } from "./_components/header";

const socials = [
  {
    icon: <Mail size={20} />,
    href: "mailto:ranganaimukanhairi1@gmail.com",
    label: "Email",
    handle: "ranganaimukanhairi1@gmail.com",
  },
  {
    icon: <Phone size={20} />,
    href: "tel:+263774964536",
    label: "Phone",
    handle: "+263 77 496 4536",
  },
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/ranga-mukanhairi-5b6b8321b/",
    label: "LinkedIn",
    handle: "Ranga Mukanhairi",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/ranga-mcmil",
    label: "Github",
    handle: "ranga-mcmil",
  },
];

export default async function AboutPage() {

  return (
    <Header />
  );
}
