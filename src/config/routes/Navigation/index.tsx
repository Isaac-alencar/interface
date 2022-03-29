import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { logEvent } from "services/analytics";
import CausesIconOn from "./assets/causesIconOn.svg";
import CausesIconOff from "./assets/causesIconOff.svg";
import ImpactIconOn from "./assets/impactIconOn.svg";
import ImpactIconOff from "./assets/impactIconOff.svg";
import FundIconOff from "./assets/fundIconOff.svg";
import FundIconOn from "./assets/fundIconOn.svg";
import * as S from "./styles";
import NavigationLink from "./NavigationLink";

export type Props = {
  isImpactPage: boolean;
};
function Navigation(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "donations.menu",
  });
  const location = useLocation();
  const { search } = location;

  function isInPath(path: string) {
    return [path].includes(location.pathname);
  }

  const routes = [
    {
      path: "/",
      iconOn: CausesIconOn,
      iconOff: CausesIconOff,
      title: t("causesPageTitle"),
    },
    {
      path: "/promoters/fund",
      iconOn: FundIconOn,
      iconOff: FundIconOff,
      title: t("fundPageTitle"),
    },
    {
      path: "/impact",
      iconOn: ImpactIconOn,
      iconOff: ImpactIconOff,
      title: t("impactTitle"),
    },
  ];

  const handleEvent = () => {
    logEvent("fundNavBtn_click");
  };

  return (
    <S.Container>
      {routes.map((route) => (
        <NavigationLink
          key={route.path}
          onClick={handleEvent}
          to={{ pathname: route.path, search }}
          icon={isInPath(route.path) ? route.iconOn : route.iconOff}
          title={route.title}
          enabled={isInPath(route.path)}
        />
      ))}
    </S.Container>
  );
}

export default Navigation;
