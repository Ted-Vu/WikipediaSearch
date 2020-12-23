import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerID = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timerID);
    };
  }, [text]);

  // remember the way of making APIs request inside useEffect()
  useEffect(() => {
    (async () => {
      // Actual data needs destructing
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );

      setResult(data.data.translations[0].translatedText);
    })();
  }, [language, debouncedText]);

  const [result, setResult] = useState("");

  return <div className="ui header">{result}</div>;
};

export default Convert;
