//Creating the contactForm Component

function ContactForm(props){
    return (
        <form onSubmit={props.submit} className={props.formclass} id={props.formid}>
            <label for={props.nameinputid} className={props.namelabelClass}>Name</label>
            <input type="text" name="nameinput" id={props.nameinputid} className={props.nameinputclass} />
            <label for={props.emailinputid} className={props.emaillabelclass}>Email</label>
            <input type="email" name="emailinput" id={props.emailinputid} className={props.emailinputclass} />
            <label for={props.subjectinputid} className={props.subjectlabelclass}>Subject</label>
            <input type="text" name="subjectinput" id={props.subjectinputid} className={props.subjectinputclass} />
            <label for={props.messageinputid} className={props.messagelabelclass}>Message</label>
            <input type="text" name="messageinput" id={props.messageinputid} className={props.messageinputclass} />
            <input type="submit" className={props.submitbtnclass} id={props.submitbtnid}/>
        </form>
    )
}

export default ContactForm
