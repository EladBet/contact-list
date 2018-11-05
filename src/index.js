import React, { Component } from 'react';
import { render } from 'react-dom';
import Contact from './contact/contact.component';
import Nav from './navbar/navbar.component'
import './style.scss';
import { getContacts } from './contacts.service.js';

const maxItemsToRender = 12;

class App extends Component {
  constructor() {
    super();
    this.state = {     
      contacts: [],
      loaded: false,
      error: '',
      showMore: false
    };
    this.allContacts = [];
    this.count = 0;

    this.showMore = this.showMore.bind(this);
  }

  componentDidMount() {
    getContacts()
      .then(response => response.json())
      .then(contacts => {
        this.allContacts = contacts;
        this.count++;
        this.setState({
          loaded: true,
          contacts: this.allContacts.slice(0, maxItemsToRender),
          showMore: contacts.length > maxItemsToRender
        });
      })
      .catch(error => { this.setState({ loaded: true, error }); })
  }

  showMore() {
    this.count++;
    if (maxItemsToRender * this.count >= this.allContacts.length) {
      this.setState({ contacts: this.allContacts.slice(0), showMore: false });
    } else {
      this.setState({ contacts: this.allContacts.slice(0, maxItemsToRender * this.count) });
    }
  }

  render() {
    return (
      <div className="app">
        <Nav />
        <div className="contact-list">
          {!this.state.loaded && <div className="loader">Loading...</div>}
          {this.state.error && <div className="error">Error: {this.state.error.message}</div>}
          {this.state.loaded && !this.state.error && (
            <div className="contacts-container">
              {this.state.contacts.length > 0 ? this.state.contacts.map((contact, index) =>
                <Contact index={index} {...contact} />
              ) : 'No Available Contacts Found :-('}
            </div>
          )}
        </div>
        {this.state.showMore && (
          <div className="more-btn">
            <button
              type="button"
              onClick={this.showMore}
              className="btn btn-secondary btn-lg"
            > Show More
            </button>
          </div>
        )}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
