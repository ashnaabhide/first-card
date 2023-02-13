import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class FirstCard extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
  .wrapper {
  width: 400px;
  border: 2px solid black;
  display: inline-flex;
}

.image {
  width: 400px;
}

.header {
  text-align: center;
  font-weight: bold;
  font-size: 2rem; /* scales relatively */
  
  
}

.header h3:hover {
  font-style: italic; 
  font-size: 1.1em;
}

.header h3, 
.header h4{
  transition: .3s ease-in-out all;
  margin: 16px;
  font-style: normal;
  
}
.buttons button:focus, 
.buttons button:hover {
  background-color: rgba(200, 0, 50, .5);
}
/*
.buttons button:active {
  background-color: rgba(200, 0, 200, .5); - shades in the part of the project you're not actively working on
}
*/
 
.buttons {
  display: block;
  
}
button {
  padding: 12px;
  font-size: 32px;
}



details{
  margin-left: 24px;
  padding: 10px;
}
.details summary {
  font-size: 20px;
  font-weight: bold;
  
}

@media only screen and (max-width: 1200px){
  .wrapper{
    background-color: pink;
  }
}
@media only screen and (max-width: 600px){
   .wrapper{
    background-color: purple;
  }
  
}
@media only screen and (max-width: 425px){
   .wrapper{
    font-size: 1em;
  }
  details {
    display: none;
  }
  .wrapper{
    font-size: 1.1em; /*this will take priority*/
  }
}
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
    <div class="buttons">
    <button class="duplicate">duplicate</button>
    <button data-delete-btn>delete</button>
    <button data-toggle-btn>toggle</button>
    <button class="modify">modify title</button>
  </div>
  <div class="wrapper">
    <div class="container">
    <img class="image" src="https://static.boredpanda.com/blog/wp-content/uploads/2020/05/700-1.jpg" />
    <div class="header">
      <h3>BORZOI</h3>
        <h4>woof</h4>
      <details class="details">
        <summary>Details</summary>
        <div>
          <ul>
          <li>The magnificent borzoi! </li>
          <li>Look how  disproportionate its nose is. Marvelous. </li>
          </ul>
        </div>
    </details>
    </div>
  </div>
  </div>
    `;
  }
}

customElements.define('first-card', FirstCard);