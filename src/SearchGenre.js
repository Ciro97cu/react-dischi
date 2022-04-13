import React, { Component } from "react";

class SearchGenre extends Component {
    render() {
        return (
            <select
                name="genre"
                id="genre"
            >
                <option value="All">
                    All
                </option>
                {this.props.genere.map((element, index) => (
                    <option value={element} key={index}>
                        {element}
                    </option>
                ))}

            </select >
        )
    }
}

export default SearchGenre