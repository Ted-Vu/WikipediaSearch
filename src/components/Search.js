import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { render } from "@testing-library/react";

const Search = () => {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);

  console.log(result);
  // useEffect hooks with three types
  useEffect(() => {
    if (term !== "") {
      (async () => {
        // how to make API request in Axios
        //
        const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
          params: {
            action: "query",
            list: "search",
            origin: "*",
            format: "json",
            srsearch: term,
          },
        });

        setResult(data.query.search);
      })();
    }
  }, [term]);

  const renderResults = result.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
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
