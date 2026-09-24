
const artworks = [
    {
        image: "images/long-necked-man.jpg",
        title: "Long-necked Man",
        artist: "Jagath Weerasinhae",
        details: "1989 · Woodblock print"
    },
    {
        image: "images/things-shadow-raging-sea.jpg",
        title: "Things, Shadow and Raging Sea",
        artist: "Prasanna Ranabahu",
        details: "2019 · Photo print · 66.5 × 42.1 cm"
    },
    {
        image: "images/broken-hand-iii.jpg",
        title: "Broken Hand III – The Peales Bomb Went Off",
        artist: "Pradeep Chandrasiri",
        details: "1999 · Photo print"
    },
    {
        image: "images/perforated-body.png",
        title: "Perforated Body",
        artist: "Bandu Manamperi",
        details: "2008 · Sheet Size 4R"
    },
    {
        image: "images/story-of-hammer-and-nails.jpeg",
        title: "The Story of Hammer and Nails",
        artist: "Anusha Gajaweera",
        details: "2018 · Mixed media on acid-free paper · 50 × 36 cm"
    },
    {
        image: "images/what-remains.jpg",
        title: "What Remains",
        artist: "Buddhika Nakandala",
        details: "2026 · Monotype · 31 × 45 cm · Acid-free paper"
    }
];

let currentArtwork = 0;
let slideshowTimer;

function showArtwork(index) {

    const image = document.querySelector(".artwork-image");
    const title = document.querySelector(".artwork-information h3");
    const artist = document.querySelector(".artwork-artist");
    const details = document.querySelector(".artwork-details");
    const number = document.querySelector(".artwork-number");

    if (!image || !title || !artist || !details) {
        return;
    }

    const artwork = artworks[index];

    image.classList.add("fade-out");

    setTimeout(function () {

        image.src = artwork.image;
        image.alt = artwork.title;

        title.textContent = artwork.title;
        artist.textContent = artwork.artist;
        details.textContent = artwork.details;

        if (number) {
            number.textContent =
                String(index + 1).padStart(2, "0") +
                " / " +
                String(artworks.length).padStart(2, "0");
        }

        image.classList.remove("fade-out");

    }, 350);
}


function nextArtwork() {

    currentArtwork =
        (currentArtwork + 1) % artworks.length;

    showArtwork(currentArtwork);
}


function previousArtwork() {

    currentArtwork =
        (currentArtwork - 1 + artworks.length) %
        artworks.length;

    showArtwork(currentArtwork);
}


function startSlideshow() {

    clearInterval(slideshowTimer);

    slideshowTimer = setInterval(function () {
        nextArtwork();
    }, 5000);
}


document.addEventListener("DOMContentLoaded", function () {

    showArtwork(0);

    const nextButton =
        document.querySelector(".slider-next");

    const previousButton =
        document.querySelector(".slider-prev");

    if (nextButton) {

        nextButton.addEventListener("click", function () {

            nextArtwork();
            startSlideshow();

        });

    }

    if (previousButton) {

        previousButton.addEventListener("click", function () {

            previousArtwork();
            startSlideshow();

        });

    }

    startSlideshow();

});
