import './App.css';
import Input from './Input';
import { useState } from 'react';
import Modal from './Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

function App() {
  const [service, updateService] = useState('');
  const [location, updateLocation] = useState('');
  const [name, updateName] = useState('');
  const [email, updateEmail] = useState('');
  const [telephone, updateTelephone] = useState('');
  const [info, updateInfo] = useState('');
  const [formData, setFormData] = useState({});

  const [modalIsOpen, setIsOpen] = useState(false);
  
  function closeModal() {
    const inputs = document.querySelectorAll('input');
    Array.from(inputs).forEach(
      input => (input.value = "")
    );

    updateService('');
    updateLocation('');
    updateName('');
    updateEmail('');
    updateTelephone('');
    updateInfo('');
    setIsOpen(false);
  }

  const handleSubmit = (evt) => {
    /* Prevent default submit behaviour */
    evt.preventDefault();

    if (
      service.length === 0 &&
      location.length === 0 &&
      name.length === 0 &&
      email.length === 0 
    ) {
      alert('Please fill out all required fields');
      return;
    }

    const data = {
    "name": name,
    "email": email,
    "phone": telephone,
    "service": service,
    "location": location,
    "more_info": info,
    "location_id": 1,
    "service_id": 1
    }

    
    setFormData(data);
    if(formData !== undefined) {
      setIsOpen(true);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <FontAwesomeIcon className='icon' icon={solid('dragon')} />
        </div>
      </header>
      <main className="container">
        <h1>Find the perfect Professional for you</h1>
        <h2 className="text-light-grey">Get free quotes within minutes</h2>
        <form className="js-submit-lead" onSubmit={handleSubmit}>
            {/* Service */}
              <Input
              label="What service area you looking for?"
              forInput="inputService"
              type="search"
              name="service_id_text"
              placeholder="Enter a service (Personal Trainers etc.)"
              classList="js-autocomplete-services"
              id="inputService"
              descriptionId="serviceDescription"
              smallText="We'll find the right Professionals for you"
              handleChangeValue={e => updateService(e.target.value)} />
              {/* Area */}
              <Input
              label="Where are you looking?"
              forInput="inputLocation"
              type="search"
              name="location_id_text"
              placeholder="Enter a location (London etc.)"
              classList="js-autocomplete-location"
              id="inputLocation"
              handleChangeValue={e => updateLocation(e.target.value)} />
              {/* Name */}
              <Input
              label="Your Name"
              forInput="inputName"
              type="text"
              name="name"
              placeholder="Enter name"
              id="inputName"
              handleChangeValue={e => updateName(e.target.value)} />
              {/* Email */}
              <Input
              label="Email Address"
              forInput="inputEmail"
              type="email"
              name="email"
              placeholder="Enter email"
              id="inputEmail"
              descriptionId="emailDescription"
              smallText="We'll let you know when we've got Professionals for you"
              handleChangeValue={e => updateEmail(e.target.value)} />
              {/* Telephone */}
              <Input
              label="Telephone"
              forInput="inputTelephone"
              type="tel"
              name="phone"
              placeholder="Enter telephone"
              id="inputTelephone"
              descriptionId="telephoneDescription"
              smallText="So we can verify your information"
              handleChangeValue={e => updateTelephone(e.target.value)} />
              {/* textArea */}
              <div className="form-group">
                  <label htmlFor="inputExtraInformation">Any Extra Information?</label>
                  <textarea className="form-control" id="inputExtraInformation" name="extra" rows="3" onChange={e => updateInfo(e.target.value)}></textarea>
                  <small id="extraInfoDescription" className="form-text text-muted">
                      Include as much information as you can, so we can find the best Professionals
                  </small>
              </div>
              {/* submit */}
              <button type="submit" className="btn btn-primary">Find Professionals</button>
          </form>
      { modalIsOpen && formData ?
        <Modal
        formData={formData}
        handleClose={closeModal} /> :
        null
      }
      </main>
    </div>
  );
}

export default App;
