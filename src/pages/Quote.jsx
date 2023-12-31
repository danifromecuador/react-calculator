import React, { useState, useEffect } from 'react';
import '../style/Quote.css';

export default function Quote() {
  const [quote, setQuote] = useState('loading quote');
  const [loading, setLoading] = useState('loading');
  const [error, setError] = useState('');
  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
        headers: { 'X-Api-Key': 'nezpEokeOVTwP1C5NwtGEQ==h62LjJXfJNexoQfy' },
        method: 'GET',
      });
      const data = await response.json();
      setQuote(data[0].quote);
    } catch (error) {
      setError('An error occurred while fetching');
    }
  };

  useEffect(() => {
    fetchQuote();
  }, [loading, setLoading]);

  return (
    <div className="quote-container">
      {quote}
      {error}
    </div>
  );
}
