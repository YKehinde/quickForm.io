import './Modal.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const Modal = ({formData, handleClose}) => {
    console.log(formData);
  return ( 
    <div id="new-lead-success" className="modal fade in show">
        <div className="modal-dialog modal-confirm">
            <div className="modal-content">
                <div className="modal-header text-white text-center">
                    <div className="icon-container py-3">
                        <FontAwesomeIcon icon={solid('circle-check')} />
                    </div>
                    <button type="button" className="close text-md text-white"  onClick={handleClose}><FontAwesomeIcon icon={solid('xmark')} /></button>
                </div>
                <div className="modal-body text-center">
                    <h4>Great!</h4>
                    <p>We've submitted your lead, you will hear from one of our Professionals soon.</p>
                    <h4>Your info</h4>
                    {
                        Object.keys(formData).map((key, index) => {
                            return formData[key] && <p key={index}>{key}: {formData[key]}</p>
                        })
                    }
                    <button className="btn btn-primary" onClick={handleClose}>
                        <span>Submit another request</span>
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
   );
}
 
export default Modal;