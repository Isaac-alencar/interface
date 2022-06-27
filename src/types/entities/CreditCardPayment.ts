export default interface CreditCardPayment {
  country: string;
  state: string;
  city: string;
  taxId: string;
  email: string;
  card: {
    cardNumber: string;
    cardName: string;
    expirationDate: string;
    securityCode: string;
  };
}
