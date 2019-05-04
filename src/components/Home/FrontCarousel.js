import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';
import React from "react";
import Carousel from "react-bootstrap/Carousel";

import socks1 from '../../assets/img/socks/socks1.jpg';
import socks2 from '../../assets/img/socks/socks2.jpg';
import socks3 from '../../assets/img/socks/socks3.jpg';

class ControlledCarousel extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            index: 0,
            direction: null,
        };
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction,
        });
    }

    render() {
        const { index, direction } = this.state;

        return (
            <Carousel
                activeIndex={index}
                direction={direction}
                onSelect={this.handleSelect}
            >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={socks1}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={socks2}
                        alt="Third slide"
                    />

                    <Carousel.Caption>



                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={socks3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default () => (<div><ReactBootstrapStyle /><ControlledCarousel /></div>)