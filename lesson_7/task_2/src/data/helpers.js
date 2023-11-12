export function getFindProduct(arr, productId) {
  return arr.find((product) => product.id === productId);
}
export function getNewArr(currencyList, currentRate, productList) {
  const findCurrencyRate = currencyList.find(
    (element) => element.rate == currentRate
  );
  return productList.map((product) => ({
    ...product,
    price: (product.price * findCurrencyRate.rate).toFixed(2),
    currencyTitle: findCurrencyRate.currencyTitle,
  }));
}
