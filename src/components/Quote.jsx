import React, { useState, useEffect } from 'react';
import '../style/Quote.css';

export default function Quote() {
  const [quote, setQuote] = useState('loading quote');
  const [loading, setLoading] = useState('loading');
  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
        headers: { 'X-Api-Key': 'nezpEokeOVTwP1C5NwtGEQ==h62LjJXfJNexoQfy' },
      });
      const data = await response.json();
      setQuote(data[0].quote);
    } catch (error) {
      setQuote(error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, [loading, setLoading]);

  return (
    <div className="quote-container">{quote}</div>
  );
}
