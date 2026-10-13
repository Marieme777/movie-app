// Liste des films
const movies = [
    {
        title: "Inception",
        genre: "Sci-Fi",
        rating: 8.8,
        year: 2010,
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&q=80",
        description: "Un voleur qui infiltre les rêves des autres se voit offrir une chance de faire effacer son casier judiciaire."
    },
    {
        title: "The Dark Knight",
        genre: "Action",
        rating: 9.0,
        year: 2008,
        image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&q=80",
        description: "Batman affronte le Joker, un criminel psychopathe qui plonge Gotham dans le chaos."
    },
    {
        title: "Interstellar",
        genre: "Sci-Fi",
        rating: 8.7,
        year: 2014,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&q=80",
        description: "Une équipe d'explorateurs voyage à travers un trou de ver dans l'espace pour sauver l'humanité."
    },
    {
        title: "Gladiator",
        genre: "Action",
        rating: 8.5,
        year: 2000,
        image: "https://images.unsplash.com/photo-1568832359672-e36cf5d74f54?w=500&q=80",
        description: "Un ancien général romain cherche à se venger du empereur corrompu qui a assassiné sa famille."
    },
    {
        title: "Oppenheimer",
        genre: "Drame",
        rating: 8.9,
        year: 2023,
        image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&q=80",
        description: "L'histoire du physicien J. Robert Oppenheimer et de son rôle dans la création de la bombe atomique."
    },
    {
        title: "Avatar",
        genre: "Aventure",
        rating: 7.9,
        year: 2009,
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&q=80",
        description: "Un marin paraplégique envoyé sur la lune Pandora dans le cadre d'une mission unique devient déchiré."
    }
];

const movieGrid = document.getElementById("movieGrid");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");

// Affiche la liste des films
function displayMovies(movieList) {
    movieGrid.innerHTML = "";
    if (movieList.length === 0) {
        movieGrid.innerHTML = `<div class="col-12 text-center text-secondary py-5"><h3>Aucun film trouvé 🎬</h3></div>`;
        return;
    }

    movieList.forEach(movie => {
        const cardHTML = `
            <div class="col">
                <div class="card movie-card h-100 text-light position-relative">
                    <span class="badge-rating"><i class="fa-solid fa-star me-1"></i>${movie.rating}</span>
                    <img src="${movie.image}" class="card-img-top" alt="${movie.title}">
                    <div class="card-body d-flex flex-column">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <h5 class="card-title m-0 fw-bold">${movie.title}</h5>
                            <span class="badge bg-danger">${movie.genre}</span>
                        </div>
                        <p class="card-text text-secondary small flex-grow-1">${movie.description}</p>
                        <div class="pt-2 border-top border-secondary d-flex justify-content-between align-items-center">
                            <small class="text-secondary">Sortie : ${movie.year}</small>
                            <button class="btn btn-sm btn-outline-light"><i class="fa-solid fa-circle-info me-1"></i>Détails</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        movieGrid.innerHTML += cardHTML;
    });
}

// Filtre par recherche
searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm) || 
        movie.description.toLowerCase().includes(searchTerm)
    );
    displayMovies(filteredMovies);
});

// Filtre par genre
filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const genre = btn.getAttribute("data-genre");
        if (genre === "all") {
            displayMovies(movies);
        } else {
            const filtered = movies.filter(m => m.genre === genre);
            displayMovies(filtered);
        }
    });
});

// Chargement initial
displayMovies(movies);