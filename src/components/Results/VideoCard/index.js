import React, { forwardRef } from 'react';
import TextTruncate from 'react-text-truncate';
import { ThumbUpSharp } from '@material-ui/icons';
import './VideoCard.css';

const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({ movie }, ref) => {
   return (
      <div ref={ref} className="videoCard">
         <img 
            src={`${base_url}${movie.backdrop_path || movie.poster_path}`} 
            alt={movie.title || "Movie Poster"}
         />
         <TextTruncate 
            line={1}
            element="p"
            truncateText="..."
            text={movie.overview}
         />
         <h2>{movie.title || movie.original_name}</h2>
         <p className="videoCard__stats">
            <span>{movie.media_type && `${movie.media_type} `}&middot;</span>
            <span>{movie.release_date || movie.first_air_date}</span> 
            <span>&middot;</span> 
            <span><ThumbUpSharp /></span>
            <span>{movie.vote_count}</span>
         </p>
      </div>
   );
});

export default VideoCard;