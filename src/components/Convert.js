import React, { useState, useEffect } from "react";
import axios from "axios";

const GOOGLE_API = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";
const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const translate = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: GOOGLE_API,
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };

    translate();
  }, [debouncedText, language]);
  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;