// Combo Offers Scroll (Auto-loop)
let carousel = document.querySelector('.offer-carousel');
let scrollSpeed = 1;

function autoScrollCarousel() {
  if (carousel) {
    carousel.scrollLeft += scrollSpeed;
    if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
      carousel.scrollLeft = 0; // Reset scroll
    }
  }
}
setInterval(autoScrollCarousel, 30); // Adjust speed as needed

// Show brand circles one by one (if not using CSS delay)
window.addEventListener('load', () => {
  const brands = document.querySelectorAll('.brand-circle');
  brands.forEach((circle, index) => {
    setTimeout(() => {
      circle.style.opacity = '1';
      circle.style.transform = 'scale(1)';
    }, index * 200);
  });
});

const products = [
  { name: "Fresh Milk", price: "₹50 / L", img: "milk.jpg" },
  { name: "Curd", price: "₹30 / 500g", img: "curd.jpg" }
];

const container = document.querySelector('.item-listing');
products.forEach(p => {
  for(let i = 0; i < 16; i++) { // repeat 16 times
    container.innerHTML += `
      <div class="item-card">
        <img src="${p.img}" alt="${p.name}" />
        <h3>${p.name}</h3>
        <p>${p.price}</p>
      </div>`;
  }
});
 const input = document.getElementById("locationInput");
  const autocomplete = new google.maps.places.Autocomplete(input, {
    types: ["(cities)"], // or use 'geocode' for areas
    componentRestrictions: { country: "in" }
  });

  autocomplete.addListener("place_changed", () => {
    const place = autocomplete.getPlace();
    const selectedLocation = place.formatted_address;
    console.log("Selected:", selectedLocation);
    // You can now filter items or fetch area-specific products here
  });
