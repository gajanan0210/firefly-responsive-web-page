function openModal(productName) {
    document.getElementById('productModal').style.display = "block";
    document.getElementById('productName').innerText = productName;
    
}

function closeModal() {
    document.getElementById('productModal').style.display = "none";
}

function changeImage(element) {
    // Update the large image source
    document.getElementById('largeImage').src = element.src;

    // Remove active class from all thumbnails
    const thumbnails = document.querySelectorAll('.thumbnails img');
    thumbnails.forEach(img => {
        img.classList.remove('active');
    });

    // Add active class to the clicked thumbnail
    element.classList.add('active');
}

// Example to handle click events on thumbnails
document.querySelectorAll('.thumbnails img').forEach(img => {
    img.addEventListener('click', () => {
        document.getElementById('largeImage').src = img.src;
    });
});
