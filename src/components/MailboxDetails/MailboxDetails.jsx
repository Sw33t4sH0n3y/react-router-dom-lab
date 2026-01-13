import { useParams } from 'react-router';

const MailboxDetails = (props) => {
    const { mailboxId} = useParams();
    console.log('mailboxId:', mailboxId);

    console.log(props)

    const selectedBox = props.mailboxes.find(
      (mailbox) =>  (mailbox._id === Number(mailboxId)
    ));
    console.log('Mailbox:', selectedBox)


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
    </>
);
};

export default MailboxDetails;