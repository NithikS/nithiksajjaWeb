import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Card = ({iconHTML,title="",disc="",link,btnText, target_="_blank"}) => {
  return (
    <div className="col-md-4 mb-4">
        <div className="card custom-card text-center p-3">
            {iconHTML}
            <h3 className="mt-3">{title}</h3>
            <p>{disc}</p>
            <Link to={link} target={target_} className="btn btn-website">{btnText}</Link>
        </div>
    </div>
  )
}

Card.propTypes = {
  iconHTML: PropTypes.node.isRequired,
  title: PropTypes.string,
  disc: PropTypes.string,
  link: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  target_: PropTypes.string
}

export default Card