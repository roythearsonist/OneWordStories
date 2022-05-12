

import './ComponentCSS/card.css';
function Card(props){

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <button className="popup-modal-button" onClick={displayModal} >Add to Story</button> 
            </div>
        </div>
    );
}

const displayModal = () => {
  const modal = document.querySelector('.modal');
  console.log(modal)
  try{
    if(modal.style.display === 'none'){
  modal.style.display = 'flex';
    }else{
      modal.style.display = 'none';
    }
  }catch(e){
    console.log(e);
  }
}

export default Card;