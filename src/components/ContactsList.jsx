import ContactItem from "./ContactItem.jsx";
import styles from "./ContactsList.module.css";


function ContactsList({contacts,deleteHandeler}) {


    return (
        <div className={styles.container}>
            <h3>Contact List</h3>
            {contacts.length ? (
                <ul className={styles.contacts}>
                    {contacts.map(contact => (
                        <ContactItem key={contact.id} data={contact} deleteHandeler={deleteHandeler} />
                    ))}
                </ul>
            ) : <p className={styles.message}>No contact yet!</p> }
        </div>
    )
}
export default ContactsList;