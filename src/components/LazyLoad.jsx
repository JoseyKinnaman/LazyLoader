import React, {useState, useEffect} from 'react';
import './LazyLoad.css';

const LazyLoad = ({src, placeholder, alt}) => {
  const [loading, setLoading] = useState(true);
  const [img, setImg] = useState(placeholder);

  useEffect(() => {
    const lazyImage = new Image();
    lazyImage.src = src;
    lazyImage.onload = () => {
      setLoading(false);
      setImg(src);
    }
  }, [src])
  return(
    <div className="">
      <img src={src} alt={alt}/>
    </div>
  )
}

export default LazyLoad;
