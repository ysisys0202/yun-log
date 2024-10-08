import { media } from "@/constants/breakPoints";
import {
  contentSideSpacingMb,
  contentSideSpacingPc,
  gnbHeightMb,
  gnbHeightPc,
} from "@/constants/size";
import { css } from "@emotion/react";
import { event } from "@/libs/gTag";
import ColorModeButton from "@/components/common/ColorModeButton";
import ContactButton from "@/components/common/ContactButton";
const UtilButtonBox = () => {
  const handleColorModeButtonClick = () => {
    event({
      action: "click",
      category: "util-button-box",
      label: "util-button-box_color-mode-button",
    });
  };
  const handleContactButtonClick = () => {
    event({
      action: "click",
      category: "util-button-box",
      label: "util-button-box_contact-button",
    });
  };
  return (
    <div css={S.self}>
      <ColorModeButton
        onClick={handleColorModeButtonClick}
        data-test-id="color-theme-button"
      />
      <ContactButton onClick={handleContactButtonClick} />
    </div>
  );
};

const S = {
  self: css`
    display: flex;
    align-items: center;
    gap: 12px;
    position: fixed;
    top: 0;
    right: ${contentSideSpacingMb}px;
    z-index: 100;
    height: ${gnbHeightMb}px;
    @media ${media.md} {
      right: ${contentSideSpacingPc};
      height: ${gnbHeightPc}px;
    }
  `,
};
export default UtilButtonBox;
