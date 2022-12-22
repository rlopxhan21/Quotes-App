import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "R Lopxhan",
    text: "Learning react is fun",
  },
  {
    id: "q2",
    author: "Albert Einstein",
    text: "Genius is 1% inspiration and 99% perspiration",
  },
];

const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();

  console.log(match);

  const quotes = DUMMY_QUOTES.find((quote) => quote.id === params.quoteID);
  if (!quotes) {
    return <NoQuotesFound />;
  }

  return (
    <section>
      <h1>Detail Quotes Page</h1>
      <HighlightedQuote text={quotes.text} author={quotes.author} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comment
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </section>
  );
};

export default QuoteDetail;
