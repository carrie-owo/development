import React, {Component} from "react";
import { DropdownButton, Dropdown, Button} from "react-bootstrap";
import ArtpieceList from "./ArtpieceList";
import './FilteredList.css';

class FilteredList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: "All",
            artist: "All",
            sort: "None",
            showFavorite : "All"
        }

        this.sortByTitle = this.sortByTitle.bind(this);
        this.sortByYear = this.sortByYear.bind(this);
    }

    onSelectFilterType = event => {
        this.setState({type: event});
    }

    matchesFilterType = item => {
        return (item.type === this.state.type || this.state.type === "All");
    }

    onSelectFilterArtist = event => {
        this.setState({artist: event});
    }

    matchesFilterArtist = item => {
        return (item.artist === this.state.artist || this.state.artist === "All");
    }

    filterTypeAndArtistAndFavorite = item => {
        return this.matchesFilterType(item) && this.matchesFilterArtist(item) && this.isFavorite(item);
    }

    onSelectSortType = event => {
        this.setState({sort: event});
    }

    sortByTitle = items => {
        return items.sort((a,b) => a.title.localeCompare(b.title));
    }

    sortByYear = items => {
        return items.sort((a,b) => (parseInt(a.year) - parseInt(b.year)));
    }

    sortByTitleOrYear = items => {
        if (this.state.sort === "Title") return this.sortByTitle(items);
        else if (this.state.sort === "Year") return this.sortByYear(items);
        else return items;
    }

    onSelectFavorite = event => {
        this.setState({showFavorite: event});
    }

    isFavorite = item => {
        return (item.favorite || this.state.showFavorite === "All");
    }

    render() {
        return (
            <div className="filter-artpiece">
                <div className="row">
                    <h6>Type</h6>
                    <DropdownButton title={this.state.type} id="dropdown-basic-button-type" onChange={this.onSelectFilterType}>
                        <Dropdown.Item eventKey="All" onSelect={this.onSelectFilterType}>
                            All
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="Drawing" onSelect={this.onSelectFilterType}>
                            Drawing
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="Painting" onSelect={this.onSelectFilterType}>
                            Painting
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="Sculpture" onSelect={this.onSelectFilterType}>
                            Sculpture
                        </Dropdown.Item>
                    </DropdownButton>
                </div>
                
                <div className="row">
                    <h6>Artist</h6>
                    <DropdownButton title={this.state.artist} id="dropdown-basic-button-artist" onChange={this.onSelectFilterArtist}>
                        <Dropdown.Item eventKey="All" onSelect={this.onSelectFilterArtist}>
                            All
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="Michelangelo Buonarroti" onSelect={this.onSelectFilterArtist}>
                            Michelangelo Buonarroti
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="Leonardo da Vinci" onSelect={this.onSelectFilterArtist}>
                            Leonardo da Vinci
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="Raffaello Santi" onSelect={this.onSelectFilterArtist}>
                            Raffaello Santi
                        </Dropdown.Item>
                    </DropdownButton>
                </div>

                <div className="row">
                    <h6>Sort By</h6>
                    <DropdownButton title={this.state.sort} id="dropdown-basic-button-sort" onChange={this.onSelectSortType}>
                        <Dropdown.Item eventKey="None" onSelect={this.onSelectSortType}>
                            None
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="Title" onSelect={this.onSelectSortType}>
                            Title
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="Year" onSelect={this.onSelectSortType}>
                            Year
                        </Dropdown.Item>
                    </DropdownButton>
                </div>

                <div className="row">
                    <h6>Favorite</h6>
                    <DropdownButton title={this.state.showFavorite} id="dropdown-basic-button-sort" onChange={this.onSelectFavorite}>
                        <Dropdown.Item eventKey="All" onSelect={this.onSelectFavorite}>
                            All
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="Favorite" onSelect={this.onSelectFavorite}>
                            Favorite
                        </Dropdown.Item>
                    </DropdownButton>
                </div>
            
                <ArtpieceList 
                    items={this.sortByTitleOrYear(this.props.items.filter(this.filterTypeAndArtistAndFavorite))}
                    favorite={this.state.showFavorite}
                />
            </div>
        )
    }
}

export default FilteredList;