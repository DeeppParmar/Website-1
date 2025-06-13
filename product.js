// Dummy product data
const products = [
    {
        id: 1,
        name: "Elegant Sofa Set",
        price: 45000,
        category: "living",
        description: "A luxurious 3-seater sofa set crafted with premium fabric upholstery and solid wood frame. Perfect for modern living rooms with its contemporary design and exceptional comfort.",
        images: [
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=600&h=400&fit=crop"
        ],
        features: ["Premium fabric upholstery", "Solid wood frame", "High-density foam cushions", "Easy maintenance", "5-year warranty"],
        rating: 4.5,
        inStock: true
    },
    {
        id: 2,
        name: "Modern Dining Table",
        price: 32000,
        category: "dining",
        description: "Sleek 6-seater dining table made from solid oak wood with a glossy finish. Features a contemporary design that complements any dining room decor.",
        images: [
            "https://images.unsplash.com/photo-1549497538-303791108f95?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop"
        ],
        features: ["Solid oak wood construction", "Seats 6 people comfortably", "Glossy finish", "Scratch resistant", "2-year warranty"],
        rating: 4.7,
        inStock: true
    },
    {
        id: 3,
        name: "Queen Size Bed",
        price: 28000,
        category: "bedroom",
        description: "Elegant queen size bed with upholstered headboard and sturdy construction. Designed for ultimate comfort and style in your bedroom.",
        images: [
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=400&fit=crop"
        ],
        features: ["Queen size (60\" x 80\")", "Upholstered headboard", "Solid wood frame", "Storage drawers", "3-year warranty"],
        rating: 4.3,
        inStock: true
    },
    {
        id: 4,
        name: "Executive Office Chair",
        price: 15000,
        category: "office",
        description: "Ergonomic executive office chair with leather upholstery and adjustable height. Perfect for long working hours with maximum comfort and support.",
        images: [
            "https://images.unsplash.com/photo-1541558869434-2840d308329a?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1549497538-303791108f95?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop"
        ],
        features: ["Genuine leather upholstery", "Ergonomic design", "Height adjustable", "360° swivel", "1-year warranty"],
        rating: 4.6,
        inStock: true
    },
    {
        id: 5,
        name: "Coffee Table Set",
        price: 18000,
        category: "living",
        description: "Modern coffee table set with glass top and wooden legs. Includes two nesting tables that can be used separately or together.",
        images: [
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop"
        ],
        features: ["Tempered glass top", "Solid wood legs", "Nesting design", "Easy to clean", "2-year warranty"],
        rating: 4.4,
        inStock: true
    },
    {
        id: 6,
        name: "Wardrobe Cabinet",
        price: 55000,
        category: "bedroom",
        description: "Spacious 4-door wardrobe with multiple compartments and drawers. Features mirror doors and ample storage space for all your clothing needs.",
        images: [
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=400&fit=crop"
        ],
        features: ["4-door design", "Mirror panels", "Multiple compartments", "Soft-close hinges", "5-year warranty"],
        rating: 4.8,
        inStock: true
    },
    {
        id: 7,
        name: "Bookshelf Unit",
        price: 22000,
        category: "office",
        description: "5-tier bookshelf unit with open shelving design. Perfect for displaying books, decorative items, and storage solutions.",
        images: [
            "https://images.unsplash.com/photo-1541558869434-2840d308329a?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1549497538-303791108f95?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop"
        ],
        features: ["5-tier design", "Open shelving", "Solid wood construction", "Adjustable shelves", "3-year warranty"],
        rating: 4.2,
        inStock: true
    },
    {
        id: 8,
        name: "Dining Chair Set",
        price: 24000,
        category: "dining",
        description: "Set of 6 dining chairs with cushioned seats and elegant design. Perfectly complements any dining table with its timeless style.",
        images: [
            "https://images.unsplash.com/photo-1549497538-303791108f95?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=600&h=400&fit=crop"
        ],
        features: ["Set of 6 chairs", "Cushioned seats", "Solid wood frame", "Elegant design", "2-year warranty"],
        rating: 4.5,
        inStock: true
    }
];

// Application state
let cart = [];
let wishlist = [];
let currentProduct = null;
let filteredProducts = [...products];

// DOM elements
const productsGrid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const searchContainer = document.getElementById('searchContainer');
const cartSidebar = document.getElementById('cartSidebar');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const cartFooter = document.getElementById('cartFooter');
const profileModal = document.getElementById('profileModal');
const productModal = document.getElementById('productModal');
const noResults = document.getElementById('noResults');
const wishlistCount = document.getElementById('wishlistCount');
const productDetailSection = document.getElementById('productDetailSection');
const productsSection = document.getElementById('productsSection');
const categoryFilter = document.getElementById('categoryFilter');
const priceFilter = document.getElementById('priceFilter');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    setupEventListeners();
    updateCartUI();
    updateWishlistCount();
});

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    document.getElementById('searchToggle').addEventListener('click', toggleSearch);
    document.getElementById('searchClose').addEventListener('click', toggleSearch);
    searchInput.addEventListener('input', handleSearch);
    
    // Cart functionality
    document.getElementById('cartToggle').addEventListener('click', toggleCart);
    document.getElementById('cartClose').addEventListener('click', toggleCart);
    document.getElementById('cartOverlay').addEventListener('click', toggleCart);
    
    // Profile modal
    document.getElementById('profileToggle').addEventListener('click', toggleProfile);
    document.getElementById('profileClose').addEventListener('click', toggleProfile);
    document.getElementById('profileOverlay').addEventListener('click', toggleProfile);
    
    // Product modal
    document.getElementById('productModalClose').addEventListener('click', closeProductModal);
    document.getElementById('productOverlay').addEventListener('click', closeProductModal);
    
    // Filter functionality
    categoryFilter.addEventListener('change', applyFilters);
    priceFilter.addEventListener('change', applyFilters);
    
    // Keyboard events
    document.addEventListener('keydown', handleKeyboard);
}

// Search functionality
function toggleSearch() {
    searchContainer.classList.toggle('active');
    if (searchContainer.classList.contains('active')) {
        searchInput.focus();
    } else {
        searchInput.value = '';
        filteredProducts = [...products];
        renderProducts();
    }
}

function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();
    if (query === '') {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query)
        );
    }
    renderProducts();
}

// Filter functionality
function applyFilters() {
    let filtered = [...products];
    
    // Category filter
    const selectedCategory = categoryFilter.value;
    if (selectedCategory) {
        filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    // Price filter
    const selectedPrice = priceFilter.value;
    if (selectedPrice) {
        if (selectedPrice === '100000+') {
            filtered = filtered.filter(product => product.price >= 100000);
        } else {
            const [min, max] = selectedPrice.split('-').map(Number);
            filtered = filtered.filter(product => product.price >= min && product.price <= max);
        }
    }
    
    // Apply search if active
    const searchQuery = searchInput.value.toLowerCase().trim();
    if (searchQuery) {
        filtered = filtered.filter(product =>
            product.name.toLowerCase().includes(searchQuery) ||
            product.description.toLowerCase().includes(searchQuery) ||
            product.category.toLowerCase().includes(searchQuery)
        );
    }
    
    filteredProducts = filtered;
    renderProducts();
}

// Render products
function renderProducts() {
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-product-id="${product.id}">
            <div class="card-image">
                <img src="${product.images[0]}" alt="${product.name}">
                <button class="wishlist-btn ${wishlist.includes(product.id) ? 'active' : ''}" 
                        onclick="toggleWishlist(${product.id})">
                    <i class="fa fa-heart"></i>
                </button>
            </div>
            <div class="card-content">
                <h3 class="card-title">${product.name}</h3>
                <p class="card-description">${product.description.substring(0, 100)}...</p>
                <div class="card-price">₹${product.price.toLocaleString()}</div>
                <div class="product-rating">
                    ${generateStars(product.rating)}
                    <span class="rating-text">(${product.rating})</span>
                </div>
                <div class="card-actions">
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">
                        <i class="fa fa-shopping-cart"></i>
                        Add to Cart
                    </button>
                    <button class="btn btn-secondary" onclick="viewProduct(${product.id})">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Generate star rating
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fa fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fa fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="fa fa-star-o"></i>';
    }
    
    return stars;
}

// View product details
function viewProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    currentProduct = product;
    
    // Show product detail section
    productsSection.style.display = 'none';
    productDetailSection.style.display = 'block';
    
    // Update product details
    document.getElementById('productTitle').textContent = product.name;
    document.getElementById('productPrice').textContent = `₹${product.price.toLocaleString()}`;
    document.getElementById('productDescription').textContent = product.description;
    document.getElementById('mainProductImage').src = product.images[0];
    document.getElementById('productRating').innerHTML = `
        ${generateStars(product.rating)}
        <span class="rating-text">(${product.rating} stars)</span>
    `;
    
    // Update features
    const featuresList = document.getElementById('featuresList');
    featuresList.innerHTML = product.features.map(feature => `<li>${feature}</li>`).join('');
    
    // Update thumbnails
    const thumbnailContainer = document.getElementById('thumbnailContainer');
    thumbnailContainer.innerHTML = product.images.map((image, index) => `
        <img src="${image}" alt="Product Image ${index + 1}" 
             class="thumbnail ${index === 0 ? 'active' : ''}"
             onclick="changeMainImage('${image}', this)">
    `).join('');
    
    // Update wishlist button
    const wishlistBtn = document.getElementById('productWishlistBtn');
    wishlistBtn.classList.toggle('active', wishlist.includes(product.id));
    
    // Setup product action buttons
    document.getElementById('addToCartBtn').onclick = () => addToCart(product.id);
    document.getElementById('buyNowBtn').onclick = () => buyNow(product.id);
    document.getElementById('productWishlistBtn').onclick = () => toggleWishlist(product.id);
    
    // Load recommended products
    loadRecommendedProducts(product);
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Change main product image
function changeMainImage(imageSrc, thumbnail) {
    document.getElementById('mainProductImage').src = imageSrc;
    
    // Update active thumbnail
    document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
    thumbnail.classList.add('active');
}

// Load recommended products
function loadRecommendedProducts(currentProduct) {
    const recommended = products
        .filter(p => p.id !== currentProduct.id && p.category === currentProduct.category)
        .slice(0, 4);
    
    const recommendedGrid = document.getElementById('recommendedGrid');
    recommendedGrid.innerHTML = recommended.map(product => `
        <div class="product-card" onclick="viewProduct(${product.id})">
            <div class="card-image">
                <img src="${product.images[0]}" alt="${product.name}">
            </div>
            <div class="card-content">
                <h4 class="card-title">${product.name}</h4>
                <div class="card-price">₹${product.price.toLocaleString()}</div>
                <div class="product-rating">
                    ${generateStars(product.rating)}
                </div>
            </div>
        </div>
    `).join('');
}

// Back to products list
function backToProducts() {
    productDetailSection.style.display = 'none';
    productsSection.style.display = 'block';
    currentProduct = null;
}

// Cart functionality
function toggleCart() {
    cartSidebar.classList.toggle('active');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartUI();
    showNotification(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateCartUI() {
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fa fa-shopping-cart"></i>
                <p>Your cart is empty</p>
            </div>
        `;
        cartFooter.style.display = 'none';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.images[0]}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">₹${item.price.toLocaleString()}</div>
                    <div class="cart-item-quantity">Qty: ${item.quantity}</div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                    <i class="fa fa-trash"></i>
                </button>
            </div>
        `).join('');
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = total.toLocaleString();
        cartFooter.style.display = 'block';
    }
}

// Wishlist functionality
function toggleWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    if (wishlist.includes(productId)) {
        wishlist = wishlist.filter(id => id !== productId);
        showNotification(`${product.name} removed from wishlist`);
    } else {
        wishlist.push(productId);
        showNotification(`${product.name} added to wishlist!`);
    }
    
    updateWishlistCount();
    renderProducts(); // Re-render to update wishlist button states
    
    // Update wishlist button in product detail view if active
    if (currentProduct && currentProduct.id === productId) {
        const wishlistBtn = document.getElementById('productWishlistBtn');
        if (wishlistBtn) {
            wishlistBtn.classList.toggle('active', wishlist.includes(productId));
        }
    }
}

function updateWishlistCount() {
    const wishlistCountElement = document.getElementById('wishlistCount');
    if (wishlistCountElement) {
        wishlistCountElement.textContent = wishlist.length;
    }
}

// Buy Now functionality
function buyNow(productId) {
    addToCart(productId);
    showNotification('Redirecting to checkout...', 'success');
    setTimeout(() => {
        // Simulate redirect to checkout
        console.log('Redirecting to checkout page...');
    }, 1000);
}

// Profile modal functionality
function toggleProfile() {
    profileModal.classList.toggle('active');
}

// Product modal functionality
function closeProductModal() {
    productModal.classList.remove('active');
}

// Notification system
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fa fa-times"></i>
            </button>
        </div>
    `;
    
    // Add styles if not already added
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: white;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                z-index: 3000;
                min-width: 300px;
                animation: slideIn 0.3s ease;
            }
            .notification.success { border-left: 4px solid #4CAF50; }
            .notification.info { border-left: 4px solid #2196F3; }
            .notification.warning { border-left: 4px solid #FF9800; }
            .notification.error { border-left: 4px solid #F44336; }
            .notification-content {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 16px;
            }
            .notification-message { font-weight: 500; }
            .notification-close {
                background: none;
                border: none;
                cursor: pointer;
                color: #666;
                padding: 4px;
            }
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 3000);
}

// Keyboard event handling
function handleKeyboard(e) {
    if (e.key === 'Escape') {
        // Close any open modals or sidebars
        if (cartSidebar.classList.contains('active')) {
            toggleCart();
        }
        if (profileModal.classList.contains('active')) {
            toggleProfile();
        }
        if (productModal.classList.contains('active')) {
            closeProductModal();
        }
        if (searchContainer.classList.contains('active')) {
            toggleSearch();
        }
    }
}

// Utility function to get product by ID
function getProductById(id) {
    return products.find(product => product.id === id);
}

// Add quantity controls to cart items
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
        }
    }
}

// Enhanced cart item rendering with quantity controls
function renderCartItems() {
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fa fa-shopping-cart"></i>
                <p>Your cart is empty</p>
            </div>
        `;
        cartFooter.style.display = 'none';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.images[0]}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">₹${item.price.toLocaleString()}</div>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                    <i class="fa fa-trash"></i>
                </button>
            </div>
        `).join('');
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = total.toLocaleString();
        cartFooter.style.display = 'block';
    }
}

// Initialize with sample data or load from localStorage if available
function initializeApp() {
    // You could load saved cart/wishlist from localStorage here
    // For now, we'll start fresh
    renderProducts();
    updateCartUI();
    updateWishlistCount();
}

// Call initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}
