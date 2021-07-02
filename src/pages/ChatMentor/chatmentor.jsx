import DefaultLayout from '../../layouts/default-layout';

//import styles
import './chatmentor.css';

const handleSubmit = (e) => {
    let value = e.target.value;
    if (!value === "") {
        alert("Your question has been received, expect a reply shortly.");
    }
    alert("Field cannot be empty");
}

function ChatMentor() {
    return (
        <DefaultLayout>
        <div className="chat-form">
            <div className="small-blue-div">
                Ask questions and chat with mentors
            </div>
            <textarea 
                name="chatform"
                id="chat" 
                cols="30" 
                rows="5" 
                placeholder="Ask a question...">
            </textarea>
            <button type="submit" className="submit-chat" onClick={handleSubmit}>
                Submit</button>
        </div>
        </DefaultLayout>
    );
}

export default ChatMentor;