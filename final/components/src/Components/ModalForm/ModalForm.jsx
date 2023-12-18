import React, { useState } from 'react';
import './modalForm.css'

const ModalForm = ({ closeModal }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [email2, setEmail2] = useState('');
  const [tier, setTier] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isNotEmpty = (value) => value.trim() !== '';

  const areEmailsEqual = (email1, email2) => email1 === email2;

  const validateForm = () => {
    let isValid = true;

    if (!isNotEmpty(fullName)) {
      isValid = false;
    }

    if (!isNotEmpty(email)) {
      isValid = false;
    }

    if (!isNotEmpty(email2) || !areEmailsEqual(email, email2)) {
      isValid = false;
    }

    if (!isNotEmpty(tier)) {
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    // Handle form submission 
    setIsSubmitted(true);

   
    setFullName('');
    setEmail('');
    setEmail2('');
    setTier('');
  };

  const handleInputValidation = (inputElement, errorId) => {
    const value = inputElement.value;
    if (isNotEmpty(value)) {
      inputElement.classList.remove('error');
      document.getElementById(errorId).style.visibility = 'hidden';
    } else {
      inputElement.classList.add('error');
      document.getElementById(errorId).style.visibility = 'visible';
    }
  };

  const handleBlur = (e) => {
    handleInputValidation(e.target, `${e.target.id}-error`);
  };

  return (
    <div className="modal" onClick={(e) => e.target.classList.contains('modal') && closeModal()} onKeyDown={(e) => e.key === 'Escape' && closeModal()} tabIndex="0">
      <div className="modal-content">
        <button onClick={closeModal}>Close Modal</button>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="name">Full Name<span className="required-asterisk">*</span>:</label>
            <input type="text" id="name" value={fullName} onChange={(e) => setFullName(e.target.value)} onBlur={handleBlur} className={`name ${!isNotEmpty(fullName) ? 'error' : ''}`} />
            <div id="name-error" className={`error ${!isNotEmpty(fullName) ? 'shown' : ''}`}>Required field</div>
          </div>

          <div className="form-row">
            <label htmlFor="email">Email<span className="required-asterisk">*</span>:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={handleBlur} className={`email ${!isNotEmpty(email) ? 'error' : ''}`} />
            <div id="email-error" className={`error ${!isNotEmpty(email) ? 'shown' : ''}`}>Required field</div>
          </div>

          <div className="form-row">
            <label htmlFor="email2">Confirm Email<span className="required-asterisk">*</span>:</label>
            <input type="email" id="email2" value={email2} onChange={(e) => setEmail2(e.target.value)} onBlur={handleBlur} className={`email2 ${!isNotEmpty(email2) || !areEmailsEqual(email, email2) ? 'error' : ''}`} />
            <div id="confirm-email-error2" className={`error ${!isNotEmpty(email2) || !areEmailsEqual(email, email2) ? 'shown' : ''}`}>Emails must match</div>
          </div>

          <div className="form-row">
            <label htmlFor="tier">Tier<span className="required-asterisk">*</span>:</label>
            <select id="tier" value={tier} onChange={(e) => setTier(e.target.value)} onBlur={handleBlur} className={`tier ${!isNotEmpty(tier) ? 'error' : ''}`}>
              <option value="">Select Tier</option>
              <option value="basic">Basic</option>
              <option value="premium">Premium</option>
              <option value="gold">Gold</option>
            </select>
            <div id="tier-error" className={`error ${!isNotEmpty(tier) ? 'shown' : ''}`}>Required field</div>
          </div>

          <button type="submit">Submit</button>
        </form>
        {isSubmitted && (
          <div className="success-message">
            <p>Form submitted successfully..!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalForm;
