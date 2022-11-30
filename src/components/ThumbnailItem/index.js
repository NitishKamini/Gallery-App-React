// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, changeImage, isActive} = props
  const {
    imageUrl,
    imageAltText,
    thumbnailUrl,
    thumbnailAltText,
  } = thumbnailDetails
  const newClass = isActive ? 'active-image' : ''
  const updateImage = () => {
    changeImage(imageUrl, imageAltText)
  }

  return (
    <li>
      <button type="button" className="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail-image ${newClass}`}
          onClick={updateImage}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
