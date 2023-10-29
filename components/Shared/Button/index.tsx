import { BsBoxArrowUpRight } from "react-icons/bs";
import { Button } from "./styles";

interface ButtonLinkProps {
  customClass: string;
  href: string;
  target: string;
  children: string;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  customClass,
  href,
  target,
  children,
}) => {
  return (
    <Button className={customClass} href={href} target={target}>
      {children}
      <BsBoxArrowUpRight />
    </Button>
  );
};
