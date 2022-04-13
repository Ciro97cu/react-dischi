import React, { Component } from 'react'
import SongCard from './SongCard'
import LoaderSong from './LoaderSong'
import SearchGenre from './SearchGenre'
import axios from "axios";

class Main extends Component {
    state = {
        arraySongs: [],
        arrayGenre: [],
    }

    componentDidMount() {
        axios.get("https://flynn.boolean.careers/exercises/api/array/music")
            .then(response => {
                this.setState({ arraySongs: response.data.response })

                this.state.arraySongs.filter(item => {
                    if (!this.state.arrayGenre.includes(item.genre)) {
                        this.state.arrayGenre.push(item.genre);
                    }
                });
            })
    }

    render() {
        const control = this.state.arraySongs;
        return (
            <main>
                <div className="container-sm">

                    <div className="row justify-content-center">
                        <div className="col-auto">
                            <p className="d-inline-block pe-2 text-white">Selezione per Genere</p>
                            <SearchGenre genere={this.state.arrayGenre} />
                        </div>
                    </div>

                    {
                        control.length > 0 ? (
                            <div
                                className="row gy-4 justify-content-around pt-5"
                            >
                                {this.state.arraySongs.map((song, index) => (
                                    <SongCard key={index}
                                        song={song}
                                        className="song_card" />
                                ))}
                            </div>
                        ) : (
                            <div className="row justify-content-center">
                                <LoaderSong />
                            </div>
                        )
                    }
                </div>
            </main>
        )
    }
}

export default Main