import React, { Component } from 'react';

import ReactBootstrapStyle from "../RegisterForm/UserForm";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";


// 3 front products as of now

import frontIMG1 from '../../assets/img/socks/hs1.png';
import frontIMG2 from '../../assets/img/socks/hs2.png';
import frontIMG3 from '../../assets/img/socks/hs3.png';


var frontTitle= ["Flower Bed Sock","Spring Blossom Sock","Baby Daisy Sock"];

var frontText = ["Let your personality flourish with the Flower Bed socks",
    "Add some sun-powered power to your steps with the Spring Blossom socks",
    "They may look curious and sweet, but these Baby Daisy socks are as colorful as you can be"];



var frontPrice=["10€","12€","8€"];

class FrontProducts extends Component {




    render() {



            return (

                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={frontIMG1} />
                        <Card.Body>
                            <Card.Title>{frontTitle[0]}</Card.Title>
                            <Card.Text>
                                {frontText[0]}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">{frontPrice[0]}</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={frontIMG2} />
                        <Card.Body>
                            <Card.Title>{frontTitle[1]}</Card.Title>
                            <Card.Text>
                                {frontText[1]}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">{frontPrice[1]}</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={frontIMG3} />
                        <Card.Body>
                            <Card.Title>{frontTitle[2]}</Card.Title>
                            <Card.Text>
                                {frontText[2]}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">{frontPrice[2]}</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            );
        }


}



export default FrontProducts