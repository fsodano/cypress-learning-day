const url = new URL(window.location);
const sku = url.searchParams.get('sku');
const $quantity = document.getElementById('quantity');
let Product = { price: 0 };

document.getElementById('product-sku').textContent = sku;

axios.get(`https://eve.theiconic.com.au/catalog/products/${sku}`).then((response) => {
  const product = response.data;
  Product = product;
  const { price } = product;
  const priceDisplay = formatPrice(price);
  document.getElementById('product-name').innerHTML = product.name;
  document.getElementById('product-price').innerHTML = priceDisplay;
  document.getElementById('product-image').setAttribute('src', product._embedded.images.shift().url);
  updatePrice();
});

$quantity.addEventListener('change', updatePrice);

function updatePrice () {
  const total = Number($quantity.value);
  document.getElementById('product-total').innerHTML = formatPrice(Number(Product.price) * total);

}

function formatPrice (price) {
  return `$${price}`;
}
