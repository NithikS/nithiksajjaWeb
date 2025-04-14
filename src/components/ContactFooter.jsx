import React from 'react'

const ContactFooter = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "fc743702-2e9e-412e-bbbb-fc41dcd47335");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Message Sent!",
                text: "Thank You for your message",
                icon: "success"
            });
        }
  }
  return (
    <footer className="bg-body-tertiary pt-5 pb-5">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <form onSubmit={onSubmit}>
                        <h3 className="text-center darkGreenText"><b>Contact Me</b></h3>
                        <div className="mb-3">
                            <div className="input-group">
                                <span className="input-group-text">Name</span>
                                <input type="text" aria-label="First Name" className="form-control" placeholder="First Name" name="First_Name" required />
                                <input type="text" aria-label="Last Name" className="form-control" placeholder="Last Name" name="Last_Name" required />
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="input-group">
                                <input type="email" aria-label="Email" className="form-control" placeholder="Email" name="email"/>
                                <span className="input-group-text">OR</span>
                                <input type="phone" aria-label="Phone" className="form-control" placeholder="Phone" name="phone"/>
                            </div>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea className="form-control" aria-label="Message" placeholder="Message" name="message" required id="floatingInput"></textarea>
                            <label form="floatingInput">Questions, Inquiries, or Feedback</label>
                        </div>
                        <div className="d-grid">
                            <button className="btn btn-social iconBlue darkBlueBg" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div id="google_translate_element"></div>
        </div>
    </footer>
  )
}

export default ContactFooter