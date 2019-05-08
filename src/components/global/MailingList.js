import React from 'react';


function handleClick() {
  var x = document.getElementById("newsEmail").value.toString();

  // Post method to api here for email news letter list


  alert('Email : '+x+ ' has been added to Usocks newsletter')
}



const MailingList = () => (
  <section className="mailing-list">
    <div className="content">
      <div className="mailing-list-content">
        <h2>
          Do you <span className="love">love</span> socks?
        </h2>
        <p>
          Sign up to recieve{' '}
          Usocks
          product news, promotions and updates.
        </p>
        <form className="newsletter-form" method="post"    >
          <input
            className="email"
            required="required"
            placeholder="Email address"
            name="email"
            aria-label="Email"
            id="newsEmail"
            value={this.value}
            type="email"



          />
          <div id='emailButton'>
          <button type="submit" className="submit" onClick={handleClick}>
            Sign up
          </button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default MailingList;
