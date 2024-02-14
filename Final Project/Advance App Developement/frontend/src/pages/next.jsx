import '../assets/css/Booking.css';
function Next() {
    return (  <>
   <div className='booking'>
        <div className='booking_form'>
          <br />
          <div className='booking_form_1'>
            <br />
            <br />
            <form>
              <div className='book-input-box'>
                <input type='text' name='name' placeholder='Event Name' required />
              </div>
              <div className='book-input-box'>
                <input type='email' name='email' placeholder='Email' required />
              </div>
              <div className='book-input-box'>
                <input type='text' name='phoneNumber' placeholder='Phone Number' required />
              </div>
              <div className='book-input-box'>
                <input type='text' name='about' placeholder='Where do you hear about us ?' required />
              </div>
              <div className='book-input-box'>
                <input type='text' name='address' placeholder='Address' required />
              </div>
              <div className='book-input-box'>
                <input type='text' name='description' placeholder='Description' required />
              </div>
              
              <br />
              <br />
              <button type='submit'></button>
            </form>
          </div>

          
        </div>
      </div>
    </>);
}

export default Next ;