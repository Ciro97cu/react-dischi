import React, { Component } from 'react'
import SongCard from './SongCard'
import LoaderSong from './LoaderSong'
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
        const control = this.state.arraySongs;
        console.log(control)
        return (
            <main>
                <div className="container-sm">

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