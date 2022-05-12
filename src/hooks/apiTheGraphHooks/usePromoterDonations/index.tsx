import promoterDonationsApi from "services/apiTheGraph/promoterDonationsApi";
import { useApi } from "hooks/useApi";

function usePromoterDonations(user: string, maxQuantity: number) {
  const {
    data: promoterDonations,
    refetch: refetchPromoterDonations,
    isLoading,
  } = useApi<any>({
    key: "promoterDonations",
    fetchMethod: () =>
      promoterDonationsApi.fetchPromoterDonations(user, maxQuantity),
    options: {
      enabled: !!user,
    },
  });

  return {
    promoterDonations: promoterDonations?.promoterDonations || [],
    refetchPromoterDonations,
    loading: isLoading,
  };
}

export default usePromoterDonations;
