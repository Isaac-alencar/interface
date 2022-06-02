import { useTranslation } from "react-i18next";
import { useCallback, useEffect, useState } from "react";
import useGivingValues from "hooks/apiHooks/useGivingValues";
import { useLanguage } from "hooks/useLanguage";
import Dropdown from "components/atomics/Dropdown";
import Divider from "components/atomics/Divider";
import theme from "styles/theme";
import { Currencies } from "types/enums/Currencies";
import { coinByLanguage } from "lib/coinByLanguage";
import * as S from "../styles";
import FeesSection from "./FeesSection";

const { lightGray } = theme.colors;

function CardSection(): JSX.Element {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);
  const { t } = useTranslation("translation", {
    keyPrefix: "promoters.supportFundPage.cardSection",
  });
  const { currentLang } = useLanguage();
  const [currentCoin, setCurrentCoin] = useState<Currencies>(
    coinByLanguage(currentLang),
  );
  const { givingValues, refetch: refetchGivingValues } =
    useGivingValues(currentCoin);

  const givingValue = useCallback(() => {
    if (givingValues) return givingValues[selectedButtonIndex].value;

    return 0;
  }, [selectedButtonIndex]);

  function givingTotal() {
    if (!givingValues) return "";

    return givingValues[selectedButtonIndex].valueText;
  }

  useEffect(() => {
    refetchGivingValues();
  }, [currentCoin]);

  return (
    <S.CardSectionContainer>
      <Dropdown
        name="currency"
        label={t("currency")}
        values={[Currencies.USD, Currencies.BRL]}
        defaultValue={currentCoin}
        onOptionChanged={(value) => setCurrentCoin(value)}
      />
      <S.Subtitle>{t("subtitleCard")}</S.Subtitle>

      <S.ValuesContainer>
        {givingValues?.map((item, index) => (
          <S.CardValueButton
            text={item.valueText}
            onClick={() => {
              setSelectedButtonIndex(index);
            }}
            outline={index !== selectedButtonIndex}
            key={item.value}
          />
        ))}
      </S.ValuesContainer>

      <Divider color={lightGray} />
      <S.Subtitle>{t("detailsSubtitle")}</S.Subtitle>
      <S.GivingValue>{givingTotal()}</S.GivingValue>
      <FeesSection currency={currentCoin} givingValue={givingValue()} />

      <S.ButtonContainer>
        <S.FinishButton text={t("buttonTextCard")} onClick={() => {}} />
      </S.ButtonContainer>
    </S.CardSectionContainer>
  );
}

export default CardSection;
