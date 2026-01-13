import {Link} from 'react-router-dom';

const MailboxList = (props) => {
    return (
        <main>
            <h1>Mailboxes</h1>
            <div className="mailbox-list">
                {props.mailboxes.length === 0 ? (
                    <p>No available mailboxes.</p>
                ) : (
                  props.mailboxes.map((mailbox) => (
                  <Link key={mailbox._id} to={`/mailboxes/${mailbox._id}`}>
                    <div className="mail-box">
                        <h2>Box {mailbox._id}</h2>
                        <p>{mailbox.boxOwner}</p>
                    </div>
                 </Link>     
                ))
                )}
            </div>
        </main>
    );
};

export default MailboxList;