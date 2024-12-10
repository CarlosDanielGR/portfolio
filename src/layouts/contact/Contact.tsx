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
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField
          id="outlined-textarea"
          placeholder="Placeholder"
          label="Multiline Placeholder"
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
