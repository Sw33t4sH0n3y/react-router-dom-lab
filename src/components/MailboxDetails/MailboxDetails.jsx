import { useParams } from 'react-router';

const MailboxDetails = (props) => {
    const { mailboxId} = useParams();
    console.log('mailboxId:', mailboxId);

    console.log(props)

    const selectedBox = props.mailboxes.find(
      (mailbox) =>  (mailbox._id === Number(mailboxId)
    ));
    console.log('Mailbox:', selectedBox)

    const selectedLetters = props.letters.filter(
      (letter) => letter.mailboxId === Number(mailboxId)
    );

    if(!selectedBox) {
        return <main><h2>Invalid Mailbox</h2></main>
    }
return (
    <>
    <h2>Mailbox</h2>
    <dl>
        <dt>_id:</dt>
        <dd>{mailboxId}</dd>
        <dt>boxSize:</dt>
        <dd>{selectedBox.size}</dd>
        <dt>boxOwner:</dt>
        <dd>{selectedBox.Owner}</dd>
    </dl>
    <h2>Letters</h2>
    {selectedLetters.length === 0 ? (
        <p>No Letters in this mailbox.</p>
    ) : (
        <ul>
            {selectedLetters.map((letter, index) => (
        <li key={index}>
            <p>To:{letter.recipient}</p>
            <p>Message:{letter.message}</p>
        </li>
    ))}
    </ul>
)}
    </>
);
};

export default MailboxDetails;