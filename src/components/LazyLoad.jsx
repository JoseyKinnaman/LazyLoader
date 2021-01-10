import React, {useState, useEffect} from 'react';
import './LazyLoad.css';

const LazyLoad = ({src, placeholder, alt}) => {
  const [loading, setLoading] = useState(true);
  const [img, setImg] = useState(placeholder);

  useEffect(() => {
      setLoading(false);
      setImg(src);
  }, [src])

  return(
    <div className="wrapper">
      <a href="https://www.pexels.com/@sanaan">
        <img
          src={img}
          alt={alt}
          style={{
            opacity: loading? 0.5 : 1,
            transition: "opacity 5s linear"
          }}
        />
      </a>
    </div>
  )
}

export default LazyLoad;
