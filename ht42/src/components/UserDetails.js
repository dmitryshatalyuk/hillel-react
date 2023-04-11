import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Photos } from "./Photos";
import { Album } from "./Album";

export function UserDetails() {
  const [user, setUser] = useState({});
  const [albums, setAlbums] = useState({});
  const [photos, setPhotos] = useState({});

  const [albumsVisibility, setAlbumsVisible] = useState(false);
  const [photosVisibility, setPhotosVisible] = useState(false);

  const { id } = useParams();

  function setAlbumsVisibility() {
    setAlbumsVisible(!albumsVisibility);
  }

  function setPhotosVisibility() {
    setPhotosVisible(!photosVisibility);
  }

  const fetchDetails = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  };

  const fetchAlbums = () => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
      .then((res) => res.json())
      .then((data) => setAlbums(data));
  };

  const fetchPhotos = () => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  };

  useEffect(() => {
    fetchDetails();
    fetchAlbums();
    fetchPhotos();
  }, []);

  if (user) {
    return (
      <div className="userData">
        <h2 className="user_name">{user.name}</h2>
        <p className="user_nickname">U: {user.username}</p>
        <div className="userContacts">
          <a href={`mailto:${user.email}`} className="userContact">
            Write
          </a>
          <a href={`tel:${user.phone}`} className="userContact">
            Call
          </a>
          <a
            href={`https://${user.website}`}
            target="_blank"
            className="userContact"
          >
            Website
          </a>
        </div>
        <button className="btn" onClick={setAlbumsVisibility}>
          Show albums
        </button>
        <button className="btn" onClick={setPhotosVisibility}>
          Show photos
        </button>
        {photosVisibility && (
          <div className="additional_data">
            {Array.from(photos).map((item) => {
              return <Photos key={item.id} {...item} />;
            })}
          </div>
        )}
        {albumsVisibility && (
          <div className="additional_data">
            {Array.from(albums).map((item, index) => {
              return <Album key={index} {...item} />;
            })}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="userData">
        <h2>Loading...</h2>
      </div>
    );
  }
}
