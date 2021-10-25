import React from "react";
// Accessing props
const ContactList = (props) => {
    console.log('props');
    const renderContactList = props.contacts.map((contact) => {
        return (
            <div className="item">
                <div className="header">{contact.name}</div>
                <div>{contact.email}</div>
                <div>
                <i className="trash alternate outline icon"></i>
                </div>
            </div>
        );
    });
    return <div className="ui celled list">{renderContactList}</div>
    
};
export default ContactList;