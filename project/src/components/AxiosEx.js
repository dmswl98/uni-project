import axios from "axios";
const AxiosEx = () => {
  const response = async () => {
    const response = await axios.get(
      "https://react-http-d6f7c-default-rtdb.firebaseio.com/movies.json"
    );

    console.log(response.data);
    const dataSet = response.data;

    const loadedMovies = [];

    for (const key in dataSet) {
      loadedMovies.push({
        id: key,
        title: dataSet[key].title,
        openingText: dataSet[key].openingText,
        releaseDate: dataSet[key].releaseDate,
      });
    }

    console.log(loadedMovies);
  };
  response();

  const request = async () => {
    const response = await axios.post(
      "https://react-http-d6f7c-default-rtdb.firebaseio.com/movies.json",
      {
        title: "first",
        openingText: "fisrt movie",
        releaseDate: "2020",
      },
      {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      }
    );

    console.log(response.data);
  };
  request();

  return <div>ax</div>;
};

export default AxiosEx;
