//Creating the contactForm Component

function contactForm(props){
    return (
        <form onSubmit={props.submit} className={props.formClass} id={props.formId}>
            <label for={props.nameInputId} className={props.nameLabelClass}>Name</label>
            <input type="text" name="nameInput" id={props.nameInputId} className={props.nameInputClass} />
            <label for={props.emailInputId} className={props.emailLabelClass}>Email</label>
            <input type="email" name="emailInput" id={props.emailInputId} className={props.emailInputClass} />
            <label for={props.subjectInputId} className={props.subjectLabelClass}>Subject</label>
            <input type="text" name="subjectInput" id={props.subjectInputId} className={props.subjectInputClass} />
            <label for={props.messageInputId} className={props.messageLabelClass}>Message</label>
            <input type="text" name="messageInput" id={props.messageInputId} className={props.messageInputClass} />
        </form>
    )
}
