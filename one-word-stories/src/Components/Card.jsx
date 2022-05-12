

import './ComponentCSS/card.css';
function Card(props){

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <button className="popup-modal-button">Add to Story</button> 
            </div>
        </div>
    );
}
export default Card;