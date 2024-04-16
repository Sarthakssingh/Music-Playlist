import {RiDeleteBin2Line} from 'react-icons/ri'
import './index.css'

const SongList = props => {
  const {songs, onDeleteSong} = props
  const {id, imageUrl, name, genre, duration} = songs

  const deleteBtn = () => {
    onDeleteSong(id)
  }

  return (
    <li className="song-container">
      <div className="upper-song-content">
        <img src={imageUrl} alt="track" className="song-image" />
        <div className="genre-name">
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="bottom-song-content">
        <p className="duration">{duration}</p>
        <button
          className="button"
          type="button"
          label="delete"
          onClick={deleteBtn}
          data-testid="delete"
        >
          <RiDeleteBin2Line className="delete-icon" />
        </button>
      </div>
    </li>
  )
}

export default SongList
