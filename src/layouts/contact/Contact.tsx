import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "./Contact.css";

function Contact() {
  return (
    <>
      <h6 id="contact" className="subtitle">
        Contact me
      </h6>
      <form className="contact">
        <TextField
          id="filled-basic"
          className="contact__control"
          label="Email"
          variant="filled"
        />
        <TextField id="filled-basic" label="Subject" variant="filled" />
        <TextField
          id="outlined-textarea"
          label="Message"
          variant="filled"
          rows={4}
          multiline
        />
        <Button className="contact-btn" variant="contained">
          <SendIcon /> Send
        </Button>
      </form>
    </>
  );
}
export default Contact;
