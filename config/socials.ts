import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@saimaheswar",
    icon: Icons.gitHub,
    link: "https://github.com/saimaheswar",
  },
  {
    name: "LinkedIn",
    username: "Sai Maheswar Venkata",
    icon: Icons.linkedin,
    link: "https://linkedin.com/in/venkata-sai-b-79679v661",
  },
  {
    name: "Email",
    username: "saimaheswar.b",
    icon: Icons.gmail,
    link: "mailto:saimaheswar.b@mycvcareer.com",
  },
];
