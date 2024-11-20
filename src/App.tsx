import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const cardsPerPage = 10;

  const fetchCards = async (query, page) => {
    setLoading(true);
    try {
      const url = query
        ? `https://api.pokemontcg.io/v2/cards?q=name:${query}&page=${page}&pageSize=${cardsPerPage}`
        : `https://api.pokemontcg.io/v2/cards?page=${page}&pageSize=${cardsPerPage}`;

      const response = await fetch(url, {
        headers: {
          'X-Api-Key': 'c3b65ac2-1d35-495f-8c12-d650f5198453',
        },
      });
      const data = await response.json();
      setCards(data.data);
      setTotalPages(Math.ceil(data.totalCount / cardsPerPage));
    } catch (error) {
      console.error('Error fetching cards:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCards(searchQuery, currentPage);
  }, [currentPage]);

  const search = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchCards(searchQuery, 1);
  };

  const openModal = (card) => {
    setSelectedCard(card);
  };
  
  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className="App">
      <h1>Pokémon TCG</h1>
      <form onSubmit={search}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for Pokémon cards"
        />
        <button id="search" type="submit">Search</button>
      </form>
      <div className="cards-container">
        {loading ? (
          <div className="loading">
            <img src="./public/bfaa157c2e3308471d51aa4feaf99293_w200.gif" alt="Loading" />
          </div>
        ) : (
          cards.length === 0 ? (
            <div className="no-results">No results found</div>
          ) : (
            cards.map((card) => (
              <div key={card.id} className="card" onClick={() => openModal(card)}>
                <div className="card-inner">
                  <div className="card-front">
                    <img src={card.images.large} alt={card.name} />
                  </div>
                  <div className="card-back">
                    <div className="card-back-content">
                      <h2>{card.name}</h2>
                      <p>Attacks:</p>
                      <ul>
                        {card.attacks && card.attacks.map((attack, index) => (
                          <li key={index}>{attack.name}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )
        )}
      </div>
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      {selectedCard && (
        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{selectedCard.name}</h2>
            <p>Attacks:</p>
            <ul>
              {selectedCard.attacks && selectedCard.attacks.map((attack, index) => (
                <li key={index}>{attack.name}</li>
              ))}
            </ul>
            <p>Cost:</p>
            <ul>
              {selectedCard.attacks && selectedCard.attacks.map((attack, index) => (
                <li key={index}>{attack.convertedEnergyCost}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
