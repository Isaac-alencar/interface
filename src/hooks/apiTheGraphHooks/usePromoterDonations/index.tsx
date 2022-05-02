import promoterDonationsApi from "services/apiTheGraph/promoterDonationsApi";
import { useApi } from "hooks/useApi";

function usePromoterDonations(user: string | null, maxQuantity: number) {
  const fetchMethod = user
    ? () => promoterDonationsApi.fetchPromoterDonations(user, maxQuantity)
    : undefined;

  const {
    data: promoterDonations,
    refetch,
    isLoading,
  } = useApi<any>({
    key: "promoterDonations",
    fetchMethod,
    options: {
      enabled: !!user,
    },
  });

  console.log(promoterDonations);
  /* async function getPromoterDonations(user: string, maxQuantity: number) {
    const { data: promoterDonations } =
      await promoterDonationsApi.fetchPromoterDonations(user, maxQuantity);
    return promoterDonations;
  } */
  return {
    promoterDonations: promoterDonations?.promoterDonations,
    getPromoterDonations: refetch,
    isLoading,
  };
}

export default usePromoterDonations;
