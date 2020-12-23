import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);

  console.log(result);
  // useEffect hooks with three types
  useEffect(() => {
    // register a timeout wait for 5 secs before making API request
    const timeoutID = setTimeout(() => {
      if (term !== "") {
        (async () => {
          // making API request in an Async and Await style
          const { data } = await axios.get(
            "https://en.wikipedia.org/w/api.php",
            {
              params: {
                action: "query",
                list: "search",
                origin: "*",
                format: "json",
                srsearch: term,
              },
            }
          );
          setResult(data.query.search);
        })();
      }
    }, 500);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [term]);

  const renderResults = result.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org.?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="header">{result.title}</div>
        <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter search term</label>
          <input
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderResults}</div>
    </div>
  );
};

export default Search;
