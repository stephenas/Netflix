import "./App.css";
import Row from "./Row";
import request from "./request";
import Banner from "./Banner";


function App() {
  return (
    <div className="app">
      
      <Banner />
      <Row
        title="Netflix Original"
        fetchUrl={request.fetchNetflixOriginals}
        firstRow
      />
      {/* firstRow={true} */}
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
