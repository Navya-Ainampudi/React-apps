import React, {useRef, useImperativeHandle, forwardRef} from 'react';

const Button = (props, ref) => {
  const btn = useRef();

  useImperativeHandle(ref, () => ({
    blur: () => {
      console.log('Custom Blur property is called');
    },
  }));

  return (
    <button className='btn btn-secondary' ref={btn} {...props}>
      Click Here
    </button>
  );
};

export default forwardRef(Button);
