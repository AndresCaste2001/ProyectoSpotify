import {LitElement, css, html} from 'lit';

export class MyElement extends LitElement {
  static styles = css`
  .p{
      color: #857;
    }
  `;
  render() {
    return html`
      <p class="p">Hola mundito</p>
    `;
  }
}
customElements.define('my-element', MyElement);
