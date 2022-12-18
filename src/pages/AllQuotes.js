import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Max",
    text: "Learning react is fun",
  },
  {
    id: "q2",
    author: "Albert Einstein",
    text: "Genius is 1% inspiration and 99% perspiration",
  },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
