import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchResults: [{name: 'Name1', artist: 'artist1', album: 'album1', id: 1}, 
      {name: 'Name2', artist: 'artist2', album: 'album2', id: 2},
      {name: 'Name3', artist: 'artist3', album: 'album3', id: 3}],
      PlaylistName: 'My Playlist',
      PlaylistTracks: [{name: 'playlistName1', artist: 'playlistartist1', album: 'playlistalbum1', id: 4}, 
      {name: 'playlistName2', artist: 'playlistartist2', album: 'playlistalbum2', id: 5},
      {name: 'playlistName3', artist: 'playlistartist3', album: 'playlistalbum3', id: 6}]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.PlaylistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    
    tracks.push(track);
    this.setState({PlaylistTracks: tracks});
  }

  removeTrack(track) {
    let tracks = this.state.PlaylistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    this.setState({PlaylistTracks: tracks})
  }

  updatePlaylistName(name) {
    this.setState({PlaylistName: name});
  }

  render() {
    return (
    <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
        <SearchBar component />
        <div className="App-playlist">
        <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} /> 
        <Playlist PlaylistName={this.state.PlaylistName} PlaylistTracks={this.state.PlaylistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName}/>
        </div>
        </div>
    </div>
    )
  }
}


export default App;
