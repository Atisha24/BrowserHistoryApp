import './index.css'

const HistoryListsItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-list-container">
      <div className="history-details">
        <p className="time">{timeAccessed}</p>
        <div className="history-title-container">
          <img src={logoUrl} alt="domain logo" className="logo-image" />
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
      </div>
      <div className="delete-button-container">
        <button type="button" onClick={onDelete} className="delete-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryListsItem
