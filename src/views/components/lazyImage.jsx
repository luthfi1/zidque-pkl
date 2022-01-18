import { LazyLoadImage } from 'react-lazy-load-image-component';
 
const LazyImage = ({ src,height,width,className }) => (
  <div >
    <LazyLoadImage
      className={className}
      alt="laxmi taylor"
      height={height}
      src={src} 
      width={width} />
  </div>
);
 
export default LazyImage