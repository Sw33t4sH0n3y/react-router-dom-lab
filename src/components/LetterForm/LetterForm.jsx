import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const LetterForm = (props) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        mailboxId: '',
        recipient: '',
        message: ''
    })

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addLetter(formData);
        navigate(`/mailboxes/${formData.mailboxId}`);
    };

    return (
        <main>
            <h1>New Letter</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="mailboxId">Selet Mailbox:</label>
                <select
                id="mailboxId"
                name="mailboxId"
                value={formData.mailboxId}
                onChange={handleChange}
                required
                >
                    <option value=""> Choose Mailbox  </option>
                    {props.mailboxes.map((mailbox) => (
                        <option key={mailbox._id} value={mailbox._id}>
                            Box {mailbox._id} - {mailbox.boxOwner}
                        </option>
                    ))}
                </select>

                <label htmlFor="recipient">Recipient:</label>
                <input
                    type="text"
                    id="recipient"
                    name="recipient"
                    value={formData.recipient}
                    onChange={handleChange}
                    required
                    />

                <label htmlFor="message">Message:</label>
                <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                />

                 <button type="submit">Send Letter</button>   
            </form>
        </main>
    );
};

export default LetterForm