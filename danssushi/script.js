//array object
var products = [
  {
    name: 'Salmon Nigiri',
    pieces: 2,
    description: 'Hand-pressed sushi with salmon',
    price: 5.0,
    category: 'Nigirizushi',
    imageUrl: '/images/nigiri_salmon.jpg'
  },
  {
    name: 'Shrimp Nigiri',
    pieces: 2,
    description: 'Hand-pressed sushi with shrimp',
    price: 5.0,
    category: 'Nigirizushi',
    imageUrl: '/images/nigiri_shrimp.jpg'
  },
  {
    name: 'Tuna Nigiri',
    pieces: 2,
    description: 'Hand-pressed sushi with tuna',
    price: 5.0,
    category: 'Nigirizushi',
    imageUrl: '/images/nigiri_tuna.jpg'
  },
  {
    name: 'Unagi Nigiri',
    pieces: 2,
    description: 'Hand-pressed sushi with eel',
    price: 5.0,
    category: 'Nigirizushi',
    imageUrl: '/images/nigiri_unagi.jpg'
  },
  {
    name: 'Uni Nigiri',
    pieces: 2,
    description: 'Hand-pressed sushi with sea urchin',
    price: 5.0,
    category: 'Nigirizushi',
    imageUrl: '/images/nigiri_uni.jpg'
  },
  {
    name: 'Ikura Gunkanmaki',
    pieces: 2,
    description: 'Hand-pressed sushi with salmon roe',
    price: 5.0,
    category: 'Gunkanmaki',
    imageUrl: '/images/nigiri_ikura.jpg'
  },
  {
    name: 'Negitoro Gunkanmaki',
    pieces: 2,
    description: 'Hand-pressed sushi with fatty tuna',
    price: 5.0,
    category: 'Gunkanmaki',
    imageUrl: '/images/nigiri_negitoro.jpg'
  },
  {
    name: 'Avocado Rolls',
    pieces: 6,
    description: 'Rolled sushi with avocado',
    price: 7.0,
    category: 'Makizushi',
    imageUrl: '/images/maki_avocado.jpg'
  },
  {
    name: 'California Rolls',
    pieces: 6,
    description: 'Rolled sushi with avocado, crab, cucumber, and tobiko roe',
    price: 9.0,
    category: 'Makizushi',
    imageUrl: '/images/maki_california.jpg'
  },
  {
    name: 'Cucumber Rolls',
    pieces: 6,
    description: 'Rolled sushi with cucumber',
    price: 7.0,
    category: 'Makizushi',
    imageUrl: '/images/maki_cucumber.jpg'
  },
  {
    name: 'Dragon Rolls',
    pieces: 6,
    description:
      'Rolled sushi with shrimp tempura, avocado, cucumber, spicy mayonnaise, unagi sauce, and tobiko roe',
    price: 9.0,
    category: 'Makizushi',
    imageUrl: '/images/maki_dragon.jpg'
  },
  {
    name: 'Dynamite Rolls',
    pieces: 6,
    description:
      'Rolled sushi with yellowtail, prawn tempura, carrots, avocado, cucumber, spicy mayonnaise, and capelin roe',
    price: 9.0,
    category: 'Makizushi',
    imageUrl: '/images/maki_dynamite.jpg'
  },
  {
    name: 'Philadelphia Rolls',
    pieces: 6,
    description: 'Rolled sushi with smoked salmon, cream cheese, and avocado',
    price: 9.0,
    category: 'Makizushi',
    imageUrl: '/images/maki_philadelphia.jpg'
  },
  {
    name: 'Salmon Rolls',
    pieces: 6,
    description: 'Rolled sushi with salmon',
    price: 8.0,
    category: 'Makizushi',
    imageUrl: '/images/maki_salmon.jpg'
  },
  {
    name: 'Spicy Tuna Rolls',
    pieces: 6,
    description: 'Rolled sushi with tuna, and spicy mayonnaise',
    price: 8.0,
    category: 'Makizushi',
    imageUrl: '/images/maki_spicytuna.jpg'
  },
  {
    name: 'Milk',
    pieces: 1,
    description: 'Golden milk',
    price: 9999.0,
    category: 'Drinks',
    imageUrl: '/images/drinks_milk.jpg'
  },
  {
    name: 'Cake',
    pieces: 1,
    description: 'Golden cake',
    price: 9999.0,
    category: 'Desserts',
    imageUrl: '/images/desserts_cake.jpg'
  }
];

function filterProduct(sushi) {
  //clear table
  var x = document.getElementById('productsTable').rows.length;
  if (x > 1) {
    while (x > 1) {
      document.getElementById('productsTable').deleteRow(1);
    }
  }

  var tbl = document.getElementById('productsTable');
  //create rows
  for (var i = 0; i < products.length; i++) {
    if (sushi === 'All') {
      var row = tbl.insertRow();
      var cellImage = row.insertCell();
      var cellName = row.insertCell();
      var cellPieces = row.insertCell();
      var cellDescription = row.insertCell();
      var cellPrice = row.insertCell();
      var cellCategory = row.insertCell();
      var cellQuantity = row.insertCell();
      var cellAddToCart = row.insertCell();

      //product image
      cellImage.innerHTML =
        '<img src=' +
        '"' +
        products[i].imageUrl +
        '"' +
        'alt=' +
        '"' +
        products[i].name +
        '"' +
        'width="100" />';

      //product name, pieces, description
      cellName.innerHTML = '<p><b>' + products[i].name + '</b></p>';
      cellPieces.innerHTML = '<p>' + products[i].pieces + '</p>';
      cellDescription.innerHTML = '<p>' + products[i].description + '</p>';

      //product price
      function prodCurrency() {
        return new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'CAD' }).format(
          products[i].price
        );
      }
      cellPrice.innerHTML = '<p>' + prodCurrency() + '</p>';

      //product category
      cellCategory.innerHTML = '<p style="color:orange">' + products[i].category + '</p>';

      //cellQuantity.innerHTML = ;
      //cellAddToCart.innerHTML = ;
    } else {
      for (var i = 0; i < products.length; i++) {
        if (products[i].category === sushi) {
          var row = tbl.insertRow();
          var cellImage = row.insertCell();
          var cellName = row.insertCell();
          var cellPieces = row.insertCell();
          var cellDescription = row.insertCell();
          var cellPrice = row.insertCell();
          var cellCategory = row.insertCell();
          var cellQuantity = row.insertCell();
          var cellAddToCart = row.insertCell();

          //product image
          cellImage.innerHTML =
            '<img src=' +
            '"' +
            products[i].imageUrl +
            '"' +
            'alt=' +
            '"' +
            products[i].name +
            '"' +
            'width="100" />';

          //product name, pieces, description
          cellName.innerHTML = '<p><b>' + products[i].name + '</b></p>';
          cellPieces.innerHTML = '<p>' + products[i].pieces + '</p>';
          cellDescription.innerHTML = '<p>' + products[i].description + '</p>';

          //price
          function prodCurrency() {
            return new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'CAD' }).format(
              products[i].price
            );
          }
          cellPrice.innerHTML = '<p>' + prodCurrency() + '</p>';

          //product category
          cellCategory.innerHTML = '<p style="color:orange">' + products[i].category + '</p>';

          //cellQuantity.innerHTML = ;
          //cellAddToCart.innerHTML = ;
        }
      }
    }
  }

  function myFunction() {
    var x = document.getElementById('productsTable').rows.length;
    document.getElementById('demo').innerHTML =
      x - 1 + ' results for <b style="color:orange">' + sushi + '</b><b style="color:red">.</b>';
  }
  myFunction();
}

//return to top of page
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//contact us - order problem
function orderProblem() {
  var y = document.createElement('input');
  y.setAttribute('type', 'text');
  y.setAttribute('value', 'Invoice number');
  var x = document.getElementById('orderNo').appendChild(y);
  orderNo.innerHTML =
    '<div id="invoice"><label for="orderNo">Order # </label><input type="text" name="orderNo" pattern=".*[0-9]" required/></div>';
}

//contact us - remove order problem
function removeOrderNo() {
  var x = document.getElementById('invoice');
  x.remove();
}
