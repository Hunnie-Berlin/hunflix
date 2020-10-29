import React from "react";
import { moviesApi, tvApi } from "../../api";
import SearchPresenter from "./SearchPresenter";

class SearchContainer extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    error: null,
    loading: false,
  };

  handleSubmit = () => {
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm(searchTerm);
    }
  };

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    this.setState({ loading: true });
    try {
      const {
        data: { results: movieResults },
      } = await moviesApi.search(searchTerm);
      const {
        data: { results: tvResults },
      } = await tvApi.search(searchTerm);
      console.log(movieResults, tvResults);
      this.setState({
        movieResults,
        tvResults,
      });
    } catch {
      this.setState({
        error: "Can't find results.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    const { movieResults, tvResults, searchTerm, error, loading } = this.state;
    console.log(this.state);
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default SearchContainer;
