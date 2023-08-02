import './index.css'

const AllTracks = props => {
  const {TrackDetails, DeleteTrack} = props
  const {name, genre, duration, imageUrl, id} = TrackDetails

  const deleteTrack = () => {
    DeleteTrack(id)
  }

  return (
    <li>
      <div className="tracks-list-items-container">
        <div className="music-image-details-container">
          <img className="music-image" src={imageUrl} alt={name} />
          <div className="songs-description">
            <p className="song-name">{name}</p>
            <p className="song-genre">{genre}</p>
          </div>
        </div>
        <div className="delete-track-container">
          <p className="song-duration">{duration}</p>
          <button
            className="delete-button"
            data-testid="delete"
            type="button"
            onClick={deleteTrack}
          >
            <img
              className="delete-image"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              alt="track"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default AllTracks
