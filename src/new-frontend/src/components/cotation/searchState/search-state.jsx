import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';

// Supondo que você tenha um arquivo JSON chamado data.json no diretório do projeto
const data = require('./data.json');

const SearchState = ({sendState}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
    sendState(searchTerm);
  };

  const handleItemClick = async (item) => {
    await setSearchTerm(item.name);
    setSearchResults([]);
    
  };

  useEffect(() => {
    if (searchTerm) {
      const results = data.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
      sendState(searchTerm);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <div>
      <input className={styles.formulario}
        type="text"
        placeholder="Local"
        value={searchTerm}
        onChange={handleChange}
      />
      {searchTerm && searchResults.length > 0 && (
        <ul className={styles.lista}>
          {searchResults.map((item, index) => (
            <li key={index}>
              <button className={styles.button} onClick={() => handleItemClick(item)}>
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchState;
