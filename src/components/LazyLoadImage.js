import React, { useRef, useState, useEffect } from "react";

const LazyLoadImage = ({ src, alt, placeholder }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "100px", // Load image 100px before it enters the viewport
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <img
      ref={imageRef}
      src={isLoaded ? src : placeholder}
      alt={alt}
      style={{ width: "100px", height: "150px" }}
    />
  );
};

export default LazyLoadImage;
