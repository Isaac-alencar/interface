import { useTranslation } from "react-i18next";
import Carousel from "components/moleculars/sliders/Carousel";
import CardDoubleTextDividerButton from "components/moleculars/cards/CardDoubleTextDividerButton";
import useBreakpoint from "hooks/useBreakpoint";
import Button from "components/atomics/Button";
import { formatFromWei } from "lib/web3Helpers/etherFormatters";
import { formatDate } from "lib/web3Helpers/timeStampFormatters";
import { logEvent } from "services/analytics";
import useNavigation from "hooks/useNavigation";
import usePromoterDonations from "hooks/apiTheGraphHooks/usePromoterDonations";
import { useWalletContext } from "contexts/walletContext";
import { useEffect } from "react";
import RightArrowBlack from "./assets/right-arrow-black.svg";
import { ReactComponent as BlueRightArrow } from "./assets/right-arrow-blue.svg";
import * as S from "./styles";
import "keen-slider/keen-slider.min.css";

function GivingsSection(): JSX.Element {
  const { navigateTo } = useNavigation();
  const { t } = useTranslation("translation", {
    keyPrefix: "promoters.fundPage.givingsSection",
  });
  const { wallet, connectWallet } = useWalletContext();
  const { isMobile } = useBreakpoint();
  const coin = "USDC";
  const { promoterDonations, getPromoterDonations, isLoading } =
    usePromoterDonations(wallet || "", isMobile ? 2 : 3);
  const handleShowGivingsButtonClick = () => {
    logEvent("fundShowGivingsListBtn_click", {
      from: "yourGivingsCarousel",
    });
    if (wallet) {
      navigateTo("/promoters/show-givings");
      return;
    }
    connectWallet();
  };

  const handleSupportButtonClick = () => {
    if (wallet) {
      logEvent("fundSupportBtn_click", {
        from: "giveNow",
      });
      navigateTo("/promoters/support-fund");
      return;
    }

    connectWallet();
  };

  function concatLinkHash(hash: string) {
    return `https://mumbai.polygonscan.com/tx/${hash}`;
  }

  function shouldRenderCarousel() {
    return promoterDonations?.length !== 0 && wallet;
  }

  useEffect(() => {
    getPromoterDonations();
  }, [wallet]);

  function renderCardsCarousel() {
    return promoterDonations?.map((item: any) => (
      <div className="keen-slider__slide" key={item.id}>
        <CardDoubleTextDividerButton
          key={item.id}
          firstText={formatDate(item.timestamp).toString()}
          mainText={formatFromWei(item.amountDonated)}
          rightComplementText={coin}
          buttonText={t("linkTransactionText")}
          rightComponentButton={RightArrowBlack}
          link={concatLinkHash(item.id)}
        />
      </div>
    ));
  }
  return (
    <S.Container>
      <S.SectionTitle>{t("subtitleGivings")}</S.SectionTitle>
      {shouldRenderCarousel() ? (
        !isLoading && (
          <Carousel sliderPerView={isMobile ? 1.8 : 4} spacing={-10}>
            {renderCardsCarousel() as any}
            {false && (
              <div className="keen-slider__slide">
                <S.LastCardCarousel
                  onClick={() => {
                    handleShowGivingsButtonClick();
                  }}
                >
                  <BlueRightArrow />
                  <S.TextLastCard>{t("textLastCard")}</S.TextLastCard>
                </S.LastCardCarousel>
              </div>
            )}
          </Carousel>
        )
      ) : (
        <S.CardBlank>
          <S.GivingText>{t("firstGivingText")}</S.GivingText>
          <Button
            text={t("firstGivingButtonText")}
            onClick={handleSupportButtonClick}
          />
        </S.CardBlank>
      )}
    </S.Container>
  );
}
export default GivingsSection;
