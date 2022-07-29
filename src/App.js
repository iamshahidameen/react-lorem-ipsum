import React, { useState } from 'react';
import data from './data';
function App() {
  const [limit, setLimit] = useState(1);
  const [paragraphs, setParagraphs] = useState([]);
  console.log(data);
  function generateText(e) {
    e.preventDefault();
    console.log(data);
    for (let p = 1; p <= limit; p++) {
      setParagraphs([...paragraphs, ...data]);
    }
  }

  return (
    <>
      <section className="section-center">
        <h3>tired of boring lorem ipsum?</h3>
        <form className="lorem-form">
          <label htmlFor="amount">paragraphs:</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
          />
          <button className="btn" onClick={(e) => generateText(e)}>
            generate
          </button>
        </form>
        {paragraphs.map((paragraph) => {
          return (
            <article className="lorem-text">
              <p>{paragraph}</p>
            </article>
          );
        })}
      </section>
    </>
  );
}

export default App;
