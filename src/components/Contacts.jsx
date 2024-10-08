import {useState} from "react";
import ContactsList from "./ContactsList.jsx";
import inputs from "../constants/inputs.js"
import {v4} from "uuid";
import styles from "./Contacts.module.css"


function Contacts() {
    const [contact, setContact] = useState({
        id: "",
        name: "",
        lastName: "",
        email: "",
        phone: "",
    });
    const [contacts, setContacts] = useState([]);
    const [alerts, setAlerts] = useState("");


    const changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setContact((contact) => ({...contact, [name]: value}));
    }
    const addHandler = () => {

        if (!contact.name || !contact.lastName || !contact.phone || !contact.email) {
            setAlerts("Please enter a valid data");
            return;
        }
        setAlerts("")

        // npm uuid
        const newContact = {...contact , id: v4()}
        // -----------


        setContacts((contacts) => ([...contacts, newContact]));
        setContact({
            name: "",
            lastName: "",
            email: "",
            phone: "",
        });

    }


    const deleteHandeler = (id) => {
        const newContacts = contacts.filter((contact) => contact.id !== id);
        setContacts(newContacts);
    }


    return (
        <div className={styles.container}>
            <div className={styles.form}>
                {inputs.map((input,index) => (
                    <input
                        key={index}
                        type={input.name}
                        placeholder={input.placeholder}
                        name={input.name}
                        value={contact[input.name]}
                        onChange={changeHandler}
                    />
                ))}
                <button onClick={addHandler}>Add Contact</button>
            </div>
            <div className={styles.alert}>
                {alerts && <p>{alerts}</p>}
            </div>
            <ContactsList contacts={contacts} deleteHandeler={deleteHandeler} />
        </div>
    )
}
export default Contacts;