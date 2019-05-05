import React, { Component } from 'react';
import TopPicks from './TopPicks';
import FrontProducts from "../MyProduct/FrontProducts";

class TopPicksContainer extends Component {
  render() {
    return (
      <section className="top-picks">
        <div className="content">
          <h2>Top picks</h2>


          </div>
        <FrontProducts/>
      </section>

    );
  }
}

export default TopPicksContainer;
