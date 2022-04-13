import React, { Component } from 'react'
import SongCard from './SongCard'
import axios from "axios";


class Main extends Component {
    state = {
        arraySongs: [],
    }

    componentDidMount() {
        axios.get("https://flynn.boolean.careers/exercises/api/array/music")
            .then(response => {
                this.setState({ arraySongs: response.data.response })
            })
    }

    render() {
        return (
            <main>
                <div className="container-sm">
                    <div
                        v-if="arraySong.length > 0"
                        className="row gy-4 justify-content-around pt-5"
                    >
                        {this.state.arraySongs.map((song, index) => (
                            <SongCard key={index}
                                song={song}
                                className="song_card" />
                        ))}
                    </div>

                </div>
            </main>
        )
    }
}

export default Main

// immagine={song.poster}
//                                 nomeImmagine={song.title}
//                                 titolo={song.title}
//                                 autore={song.author}
//                                 anno={song.year}