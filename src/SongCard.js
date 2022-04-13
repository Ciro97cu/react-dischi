import React, { Component } from "react";

class SongCard extends Component {
    render() {
        return (
            <div className="text-white song_card text-center p-3">
                <img src={this.props.song.poster} alt={this.props.song.title} className="w-100" />
                <h4 className="my-4">{this.props.song.title}</h4>
                <p>{this.props.song.author}</p>
                <p>{this.props.song.year}</p>
            </div>
        )
    }
}

export default SongCard