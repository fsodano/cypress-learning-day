axios.get('https://eve.theiconic.com.au/catalog/products/Nike').then((response) => {
  const $CATALOG = document.getElementById('catalog');
  const products = response.data._embedded.product;

  products.forEach((product) => {
    const $product = document.createElement('div');
    $product.classList.add('col-3');

    const $link = document.createElement('a');
    $link.setAttribute('href', `product.html?sku=${product.sku}`);
    $link.textContent = product.sku;

    const $img = document.createElement('img');
    const firstImageUrl = product._embedded.images.shift().url;
    $img.setAttribute('src', firstImageUrl);

    $link.appendChild(document.createElement('br'));
    $link.appendChild($img);
    $product.appendChild($link);

    $CATALOG.appendChild($product);
  });

  document.getElementById('loading').style.display = 'none';
});
