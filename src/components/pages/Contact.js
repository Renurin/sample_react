import React, {useState} from "react"

const Contact= () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })


    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationsErrors = validate(FormData)
        setErrors(validationsErrors);
        if(Object.keys(validationsErrors).length === 0){
            setIsSubmitting(true);
            console.log("Submit form here");
            setSubmitted(true)
        }
        // setIsSubmitting(true)
        console.log(formData); // API or server process the form
        
    }

    const validate=(values) => {
        let errors = {};
        if (!values.name.trim()) {
            errors.name = 'Name is required'
        }
        if (!values.email.trim()) {
            errors.email = 'Email is required'
        }
        return errors;


    }
    
    if (submitted) {
        return(
            <div>
                Thanks !
            </div>
        )
    }

    return( 
    <div>
        <h1>Contact</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                type="text"
                id= "name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                />
                {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div>
                <label htmlFor="email">Email Address</label>
                <input
                type="text"
                id= "email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                />
                {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div>
                <label htmlFor="message">Message</label>
                <textarea
                id= "message"
                value={formData.message}
                onChange={handleChange}
                className="form-control"
                rows="10"
                ></textarea>
                {errors.message && <span className="error">{errors.message}</span>}
            </div>
            <br />
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                Submit
            </button>
        </form>
    </div>
    )
}

export default Contact;