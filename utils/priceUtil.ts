type ReturnFormattedPrice = (price: number, currencyCode: string) => string;

export const getFormattedPrice: ReturnFormattedPrice = (
  price: number,
  currencyCode: string
) => {
  const priceString = new Intl.NumberFormat("GB-en", {
    style: "currency",
    currency: currencyCode,
  }).format(price / 100);
  return priceString;
};
