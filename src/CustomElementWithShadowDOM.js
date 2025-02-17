import React, { useEffect } from 'react';

function CustomElementWithShadowDOM() {
  useEffect(() => {
    const customElement = document.createElement('div');
    const shadowRoot = customElement.attachShadow({ mode: 'open' });

    shadowRoot.innerHTML = `
      <style>
        div {
          background-color: lightpeach;
          padding: 10px;
          color:black;
          position:relative;
          top:-290px;
          left:200px;
          width:fit-content;
        }
      </style>
      <div>This is inside the Shadow DOM  - Custom element with its own styling on shadow dom</div>
    `;

    document.getElementById('root').appendChild(customElement);

    return () => {
      document.getElementById('root').removeChild(customElement);
    };
  }, []);

  return <div id="root"></div>;
}

export default CustomElementWithShadowDOM;
