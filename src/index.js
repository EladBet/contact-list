import React, { Component } from 'react';
import { render } from 'react-dom';
import Contact from './contact/contact.component';
import Nav from './navbar/navbar.component'
import './style.scss';
import { getContacts } from './contacts.service.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      loaded: false,
      error: '',
    };
  }

  componentDidMount() {
    getContacts()
      .then(response => response.json())
      .then(contacts => {
        this.count++;
        this.setState({
          loaded: true,
          contacts: contacts
        });
      })
      .catch(error => { this.setState({ loaded: true, error }); })
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
                <Contact key={index} {...contact} />
              ) : 'No Available Contacts Found :-('}
            </div>
          )}
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
