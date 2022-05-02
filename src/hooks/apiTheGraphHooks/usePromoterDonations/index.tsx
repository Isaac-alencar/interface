import promoterDonationsApi from "services/apiTheGraph/promoterDonationsApi";
import { useApi } from "hooks/useApi";
import { useCallback } from "react";

function usePromoterDonations(user: string, maxQuantity: number) {
  const fetchMethod = useCallback(
    async () => promoterDonationsApi.fetchPromoterDonations(user, maxQuantity),
    [user],
  );
  const {
    data: promoterDonations,
    refetch,
    isLoading,
  } = useApi<any>({
    key: "promoterDonations",
    fetchMethod,
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
