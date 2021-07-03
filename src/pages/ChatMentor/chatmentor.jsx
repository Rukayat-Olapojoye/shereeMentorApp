import DefaultLayout from '../../layouts/default-layout';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


//import styles
import './chatmentor.css';


const SubmitMessage = ({ chatform }) => {
    //let value = e.target.value;
    if (chatform) {
        return toast.success("Your question has been received, expect a reply shortly.");
    }

    toast.error("Field cannot be empty");
}

function ChatMentor() {

    const { register, handleSubmit } = useForm();
    return (
        <DefaultLayout>
            <div className="chat-form">
                <div className="small-blue-div">
                    Ask questions and chat with mentors
                </div>
                <form onSubmit={handleSubmit(SubmitMessage)}>
                    <textarea
                        name="chatform"
                        id="chat"
                        cols="30"
                        rows="5"
                        placeholder="Ask a question..."
                        {...register('chatform')}
                    />
                    <button type="submit" className="submit-chat">
                        Submit
                    </button>
                </form>

            </div>
        </DefaultLayout>
    );
}

export default ChatMentor;