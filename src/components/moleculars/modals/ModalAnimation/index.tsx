import theme from "styles/theme";
import LottieAnimation from "components/atomics/LottieAnimation";
import Button, { onClickType } from "components/atomics/Button";
import { defaultCustomStyles } from "../defaultCustomStyles";

import * as S from "./styles";
import React from "react";

export type Props = {
  visible?: boolean;
  title?: string | null;
  titleColor?: string;
  body?: string | null;
  primaryButtonText?: string | null;
  primaryButtonLeftIcon?: string | undefined;
  primaryButtonLink?: string;
  primaryButtonTextColor?: string;
  primaryButtonColor?: string;
  primaryButtonBorderColor?: string;
  primaryButtonCallback?: onClickType;
  secondaryButtonText?: string | null;
  secondaryButtonLeftIcon?: string | undefined;
  secondaryButtonLink?: string;
  secondaryButtonTextColor?: string;
  secondaryButtonColor?: string;
  secondaryButtonBorderColor?: string;
  secondaryButtonCallback?: onClickType;
  contentLabel?: string;
  onClose?: () => void;
  animationData?: Record<any, any>;
};
function ModalAnimation({
  visible = false,
  title = null,
  titleColor,
  body = null,
  primaryButtonText = null,
  primaryButtonLeftIcon = undefined,
  primaryButtonTextColor = "white",
  primaryButtonColor = theme.colors.ribonBlue,
  primaryButtonBorderColor,
  secondaryButtonText = null,
  secondaryButtonLeftIcon = undefined,
  secondaryButtonTextColor = theme.colors.darkGray,
  secondaryButtonBorderColor,
  secondaryButtonColor = "white",
  primaryButtonCallback = () => {},
  secondaryButtonCallback = () => {},
  onClose = () => {},
  contentLabel,
  animationData,
}: Props): JSX.Element {
  return (
    <S.ModalWithIcon
      isOpen={visible}
      onRequestClose={onClose}
      style={defaultCustomStyles}
      contentLabel={contentLabel}
      ariaHideApp={false}
    >
      {animationData && (
        <S.Animation>
          <LottieAnimation
            animationData={animationData}
            width={200}
            height={150}
          />
        </S.Animation>
      )}
      <S.Container>
        <S.Title color={titleColor}>{title}</S.Title>
        <S.Body>{body}</S.Body>
        {primaryButtonText && (
          <Button
            leftIcon={primaryButtonLeftIcon}
            text={primaryButtonText}
            textColor={primaryButtonTextColor}
            backgroundColor={primaryButtonColor}
            borderColor={primaryButtonBorderColor}
            onClick={primaryButtonCallback}
          />
        )}
        {secondaryButtonText && (
          <Button
            leftIcon={secondaryButtonLeftIcon}
            text={secondaryButtonText}
            textColor={secondaryButtonTextColor}
            backgroundColor={secondaryButtonColor}
            onClick={secondaryButtonCallback}
            borderColor={secondaryButtonBorderColor}
          />
        )}
      </S.Container>
    </S.ModalWithIcon>
  );
}

export default ModalAnimation;
