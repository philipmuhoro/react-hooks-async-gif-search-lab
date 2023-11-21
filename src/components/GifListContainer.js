import React, { Component } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

class GifListContainer extends Component {
  state = {
    gifs: [],
  };

  fetchGifs = (query) => {
    const apiKey = 'ipQScQNv791g6GuCvVJarIsH0IHD37IX';
    const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ gifs: data.data.slice(0, 3) });
      })
      .catch((error) => console.error('Error fetching gifs: ', error));
  };

  render() {
    return (
      <div>
        <GifSearch onSubmit={this.fetchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
