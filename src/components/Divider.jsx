import React from 'react';

const Divider = ({ left }) => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        overflow: 'hidden',
        lineHeight: '0',
        transform: left && 'rotate(180deg)',
      }}
    >
      <svg
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1200 120'
        preserveAspectRatio='none'
        style={{
          position: 'relative',
          display: 'block',
          width: 'calc(100% + 1.3px)',
          height: '80px',
          transform: 'rotateY(180deg)',
        }}
      >
        <path
          d='M1200 120L0 16.48 0 0 1200 0 1200 120z'
          style={{
            fill: '#fafdffed',
          }}
        ></path>
      </svg>
    </div>
  );
};

export default Divider;
