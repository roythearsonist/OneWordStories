import "./ComponentCSS/modal.css";
import React, { useState } from 'react';
function Modal(props) {
        const [isOpen, setOpen] = useState(0);
        const [text, setText] = useState(props.text);
        console.log(props.text)
 
       
        const  openModal = () => {
        setOpen(true);
    }
    const closeModal = () => {
     setOpen(false);
    }
    
    
    if(isOpen){
        return(
 <div>
            <button onClick={openModal}>Add to Story</button>
             <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={closeModal}>x</span>
                    <h2>Add to Story</h2>
                    <textarea rows="4" cols="50" onChange={(e) => setText( [e.target.value])}>{text.join(" ")}</textarea>
                    <button onClick={() => props.addToStory(text)}>Add</button>
                    

        </div>
        </div>
        </div>
        )
    }else{
return(
    <div>
        <button onClick={openModal}>Add to Story</button>
    </div>
)
        }
   
         
        }
  
export default Modal;
