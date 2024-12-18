import '../../Styles/Properties/ContactUs.css';

export const ContactUs = () => {
    return (
        <div className="contact-us-container">
            <div className="overlay"></div>
            <div className="form-container">
                <p className="heading">CONTACT US</p>
                <h2 className="subheading">Schedule an Appointment</h2>

                <form action="">
                    <div>
                        <label>Name</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" />
                    </div>
                    <div>
                        <label htmlFor="">Message</label>
                        <textarea name="" id=""></textarea>
                    </div>
                    <button type='submit'>REQUEST A CALL BACK</button>
                </form>
            </div>
        </div>
    );
}