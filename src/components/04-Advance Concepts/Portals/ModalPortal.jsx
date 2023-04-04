import React from 'react';
import ReactDom from 'react-dom';

const ModalPortal = () => {
  const portalElement = document.getElementById('overlays');
  return (
    <>
      {ReactDom.createPortal(
        <div className="container">
          <h2 className="text-left mt-4">Portals</h2>
          <p className="text-left text-secondary mb-4">
            <strong>Portals</strong> provide a way to render children into a DOM node
            that exists outside the DOM hierarchy of the parent component. <br />
            It needs two arguments, first argument (child) is any renderable React
            child, such as an element, string, or fragment. The second argument
            (container) is a DOM element. In simple words{' '}
            <strong>what to render</strong> and <strong>where to render</strong>.{' '}
            <br />
            This portal info section is placed inside one portal and pointing to the
            id named 'overlays' for rendering. (You can find that id in index.js).
          </p>
        </div>,
        portalElement
      )}
    </>
  );
};

export default ModalPortal;
