import '../../Styles/Properties/ContactUs.css';

export const ContactUs = () => {
    return (
        <div className="contact-us-container">
            <div className="overlay"></div>
            <div className="form-container">
                <p className="heading">CONTACT US</p>

                <form action="">
                    <div>
                        <label>Name</label>
                        <input type="text" required/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" required/>
                    </div>
                    <div>
                        <label>Phone</label>
                        <input type="tel" required/>
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea name="" id=""></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};
