import React, {Component} from 'react';
import {Modal, Button, Container, Row, Col} from 'react-bootstrap';
import './ArtpieceList.js'
import './ArtpieceList.css'

class ArtpieceModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inLarge: false
        }
    }  
    
    showInLarge = () => {
        this.setState({inLarge: !this.state.inLarge});
    }

    render() {
        if (this.props.show) {
            let width;
            if (!this.state.inLarge) width = 400;
            else width = 750;

            return (
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                    <Modal.Title class="modal-title">{this.props.title} ({this.props.artist}, {this.props.year})</Modal.Title>
                    </Modal.Header>
                    <Modal.Body class="all" style={{'maxHeight':'55vh','overflowY':'scroll'}}>
                        <Container>
                            <Row>
                                <Col>
                                    <img class="large-image" src={require('./image/' + this.props.image)} width={width} onClick={this.showInLarge}/>
                                    <p class="small-text">[Click on image to zoom!]</p>
                                </Col>

                                <Col>
                                    <p class="text">{this.props.description.split("\n").map((item,key)=> {
                                        return <span key={key}>{item}<br/></span>
                                    })}
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.onHide}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            );
        }
        return null;
    }
}

export default ArtpieceModal;