import React, {Component} from 'react';
import ArtpieceModal from "./ArtpieceModal";
import './ArtpieceList.css';
import './ArtpieceModal.js';


class ArtpieceList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show:false,
            image:"default",
            title:"default",
            artist:"default",
            year:"default",
            description:"default",
            favoriteChanged: false
        }
    }

    handleFavorite = item => {
        this.setState({favoriteChanged:!this.state.favoriteChanged});
        item.favorite = !item.favorite;
        if (item.favorite) item.favoriteImg = "like.png";
        else item.favoriteImg = "heart.png";
    }

    showModal = item => {
        this.setState(
            { 
                show:true,
                image:item.image,
                title:item.title,
                artist:item.artist,
                year:item.year,
                description:item.description,
                favorite:item.favorite
            }
        );
    }

    hideModal = () => {
        this.setState({show:false});
    }


    renderList() {
        const items = this.props.items.map( item => {
            if (this.props.favorite === "All" || (this.props.favorite === "Favorite" && item.favorite)) {
                return (
                    <div>
                        <img class="shown-image" src={require('./image/' + item.image)} onClick={() => this.showModal(item)}/>
                        <div class = "title-text">{item.title}</div>
                        <div class = "info-text">{item.artist}, {item.year}</div>
                        <div class = "icon"><img src={require('./image/' + item.favoriteImg)} width={20} onClick={() => this.handleFavorite(item)}/></div>
                        
                        <ArtpieceModal 
                            show={this.state.show}
                            onHide={this.hideModal}
                            image={this.state.image}
                            title={this.state.title}
                            artist={this.state.artist}
                            year={this.state.year}
                            description={this.state.description}
                            favorite={this.state.favorite}
                        />
                    </div>
                )
            }
        });
        
        return items;
    }

    render() {
        return (
        <div id="artpiece">
                {this.renderList()}     
        </div>
        );
    }
}

export default ArtpieceList;