import React, {useState, useEffect} from 'react';
import './LazyLoad.css';

const LazyLoad = ({src, placeholder, alt}) => {
  const [loading, setLoading] = useState(true);
  const [img, setImg] = useState(placeholder);
  return(
    <div className="">

    </div>
  )
}

export default LazyLoad;
