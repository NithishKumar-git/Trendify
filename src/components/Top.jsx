import React, { useEffect, useState } from 'react';
import './Top.css';

function Top() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    visible && (
     <div className='top' onClick={handleTop}>
      <div className='top-1'>
        <i className="bi bi-arrow-up"></i>
      </div>
    </div>
    )
  );
}

export default Top;
