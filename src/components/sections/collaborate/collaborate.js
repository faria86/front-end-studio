import React from 'react';
import './collaborate.scss';

const collaborate = () => {
  return (
      <div className='collab-wrapper'>
        <div className='center-content'>
            <div className="title-description">
                <h2>COLLABORATE</h2>
                <h3>WITH US</h3>
                <article>
                    <p>Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiumod tempo incididunt ut labore et dolore magna aliqua.</p><br></br>
                    <p className='second-p'>Ut enim ad minim venlam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in coluptate velit esse cillum dolore.</p>
                </article>
            </div>

            <div className='form-wrapper'>
                <form className='form'>
                    <div className='form-left'>
                        <label>NAME</label>
                        <input type='text' className='form-field' placeholder='Name'></input>

                        <label>PHONE</label>
                        <input type='text' className='form-field' placeholder='Phone'></input>

                        <label>EXPERIENCE</label>
                        <select id="experience" className='select-field' name="experience">
                            <option value="some-value">Select</option>
                        </select>
                    </div>
                    <div className='form-right'>
                        <label>SURNAME</label>
                        <input type='text' className='form-field' placeholder='Surname'></input>

                        <label>EMAIL ADDRESS</label>
                        <input type='email' className='form-field' placeholder='Email'></input>

                        <label>WHERE DID YOU HEAR ABOUT US?</label>
                        <select id="social" className='select-field' name="social">
                            <option value="some-value">Select</option>
                        </select>
                        <button className='button-send'>SEND</button>
                    </div>
                
                </form>

            </div>
        </div>
      </div>
  );
}

export default collaborate;