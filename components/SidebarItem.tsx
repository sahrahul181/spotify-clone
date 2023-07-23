import { IconType } from "react-icons";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
  label: string;
  href: string;
  icon: IconType;
  active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  active,
  icon: Icon,
  href,
}) => {
  return (
    <Link
      href={href}
      className={twMerge(
        "flex flex-row items-center h-auto w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1",
        active && "text-white"
      )}
    >
      <Icon size={26} />
      <p className="truncate w-100">{label}</p>
    </Link>
  );
};

export default SidebarItem;
