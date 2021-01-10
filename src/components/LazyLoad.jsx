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
      <img
        src={img}
        alt={alt}
        style={{
          opacity: loading? 0.5 : 1,
          transition: "opacity 0.15s linear"
        }}
        />
    </div>
  )
}

export default LazyLoad;
