import React from 'react';

const MasonryLayout = ({ images }: { images: Array<string> }) => {
  return (
    <div className="masonry-grid">
      {images.map((src, index) => (
        <div key={index} className="masonry-item overflow-hidden">
          <img src={src} alt={`Masonry Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default MasonryLayout;
