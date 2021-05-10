export const getFormattedPrice = (price, currencyCode) => {
  return new Intl.NumberFormat('GB-en', {
    style: 'currency',
    currency: currencyCode,
  }).format((price/100));
};