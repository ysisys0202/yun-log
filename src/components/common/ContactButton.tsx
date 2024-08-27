import { ButtonHTMLAttributes } from "react";
import IconAt from "public/icons/at.svg";
import { colorVars } from "@/constants/cssVariables";
import IconButton from "@/components/common/IconButton";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const ContactButton = (props: Props) => {
  const label = "이메일 보기";
  const icon = <IconAt width={24} height={24} fill={colorVars.primary} />;

  return (
    <a href="mailto:ysisys0202@gmail.com">
      <IconButton
        element="div"
        name={label}
        icon={icon}
        aria-label={label}
        {...props}
      />
    </a>
  );
};

export default ContactButton;
