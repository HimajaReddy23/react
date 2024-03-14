import React from 'react';

function Image() {
  const imageUrls = [
    "https://img.freepik.com/free-photo/green-park-view_1417-1492.jpg",
    "https://reqres.in/img/faces/5-image.jpg",
    "https://reqres.in/img/faces/1-image.jpg",
    // Add more image URLs as needed
  ];

  return (
    <div>
      <h1>Image Gallery</h1>
      <div className="image-gallery">
        {imageUrls.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default Image;

