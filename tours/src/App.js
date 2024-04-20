import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tour from "./Tour";
import Tours from "./Tours";
import loading from "./Loading";
const toursUrl = "https://www.course-api.com/react-tours-project";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(toursUrl);
      const tours = await res.json();
      setIsLoading(false);
      setTours(tours);
    } catch (error) {
      setIsLoading(false);

      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  function removeTour(id) {
    setTours((tours) => tours.filter((tour) => tour.id !== id));
  }
  return (
    <>
      {isLoading && (
        <main>
          <Loading />
        </main>
      )}

      {tours.length > 0 ? (
        <main>
          <Tours tours={tours} removeTour={removeTour} />
        </main>
      ) : (
        <main>
          <div className="title">
            <h2>no tours left</h2>
            <button className="btn" onClick={() => fetchTours()}>
              refresh
            </button>
          </div>
        </main>
      )}
    </>
  );
}

export default App;
