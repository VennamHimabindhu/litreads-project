<!DOCTYPE html>
<html lang="en">
<head>
<script>
// Example array of products
let products = [
    { title: "The World as Will and Representation", author: "Arthur Schopenhauer", price: 20, category: "philosophy" },
    { title: "Atlas Shrugged", author: "Ayn Rand", price: 25, category: "fiction" },
    { title: "Ulysses", author: "James Joyce", price: 30, category: "fiction" },
    // Add more products as needed
];

// Function to display products on the page
function displayProducts(productArray) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    productArray.forEach(product => {
        productList.innerHTML += `
            <div class="product-item">
                <h3>${product.title}</h3>
                <p>Author: ${product.author}</p>
                <p>Price: $${product.price}</p>
                <p>Category: ${product.category}</p>
            </div>
        `;
    });
}

// Initial display of products
displayProducts(products);

// Function to sort products
function sortProducts() {
    const sortOption = document.getElementById('sortOptions').value;

    if (sortOption === 'title') {
        products.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === 'author') {
        products.sort((a, b) => a.author.localeCompare(b.author));
    } else if (sortOption === 'price') {
        products.sort((a, b) => a.price - b.price);
    }

    displayProducts(products);
}

// Function to filter products by category
function filterProducts() {
    const filterOption = document.getElementById('filterCategory').value;
    let filteredProducts = products;

    if (filterOption !== 'all') {
        filteredProducts = products.filter(product => product.category === filterOption);
    }

    displayProducts(filteredProducts);
}
</script>
</head>
</html>