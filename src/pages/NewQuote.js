import { useHistory } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";

const NewQuote = () => {
  const history = useHistory();
  useHttp();

  const addQuoteHandler = (quoteData) => {
    history.push("/quotes");
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
