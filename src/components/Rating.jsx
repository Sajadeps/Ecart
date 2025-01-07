const Rating = ({ rating }) => {
    const maxStars = 5; // Total number of stars
  
    // Generate stars based on rating
    const stars = Array.from({ length: maxStars }, (_, i) => 
      i < Math.floor(rating) 
        ? 'fa-solid fa-star text-yellow-400' 
        : 'fa-regular fa-star text-gray-400'
    );
  
    return (
      <p className="rating">
        
        {stars.map((className, index) => (
          <i key={index} className={className}></i>
         
        ))}
        <span className="ms-2">({rating})</span>
      </p>
    );
  };
  
  export default Rating;
  