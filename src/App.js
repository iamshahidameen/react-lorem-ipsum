import React, { useState } from 'react';
import data from './data';
function App() {
  const [limit, setLimit] = useState(1);
  const [paragraphs, setParagraphs] = useState([]);
  // console.log(data);
  let paragraphRange = [];
  function generateText(e) {
    e.preventDefault();

    if (limit <= 0 || limit < 0) {
      setLimit(1);
      setParagraphs([data[0]]);
      console.log('limit is too low');
    }
    if (limit > data.length) {
      setLimit(data.length);

      console.log('max length of the array');
    }

    for (let p = 0; p <= limit - 1; p++) {
      paragraphRange.push(data[p]);
      setParagraphs(paragraphRange);
    }
  }
  console.log(paragraphs);
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
        {paragraphs.map((paragraph, index) => {
          return (
            <article className="lorem-text" key={index}>
              <p>{paragraph}</p>
            </article>
          );
        })}
      </section>
    </>
  );
}

export default App;
