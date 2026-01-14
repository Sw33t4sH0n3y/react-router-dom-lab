import {useState} from 'react';

const MailboxForm = (props) => {
    const [formData, setFormData] = useState({
        boxSize: 'Small',
        boxOwner: '',
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value});
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        props.addBox(formData);
        setFormData({ boxSize: 'Small', boxOwner: ''});
    };

    return (
        <main>
            <h1>New Mailbox</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxOwner">Box Owner:</label>
                <input
                    type="text"
                    id="boxOwner"
                    name="boxOwner"
                    value={formData.boxOwner}
                    onChange={handleChange}
                    required />

                    <label htmlFor="boxSize">Box Size:</label>
                    <select
                      id="boxSize"
                      name="boxSize"
                      value={formData.boxSize}
                      onChange={handleChange}
                      >
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                      </select>

                      <button type="submit">Create Mailbox</button>
            </form>
        </main>
    );
};

export default MailboxForm;