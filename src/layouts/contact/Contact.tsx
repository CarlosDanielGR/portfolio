import { useState } from "react";
import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Axios from "axios";
import "./Contact.css";

function Contact() {
  const [data, setData] = useState({ email: "", subject: "", text: "" });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = () => {
    if (!data.email || !data.subject || !data.text) {
      setError(true);
      return;
    }

    setLoading(true);

    Axios.post("https://mailing-1-32zs.onrender.com/send-email", data)
      .then(() => {
        setData({ email: "", subject: "", text: "" });
        setLoading(false);
      })
      .catch(() => {
        setData({ email: "", subject: "", text: "" });
        setLoading(false);
      });
  };

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

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
          name="email"
          value={data.email}
          error={error && !data.email}
          onChange={handleChange}
        />
        <TextField
          id="filled-basic"
          label="Subject"
          variant="filled"
          name="subject"
          value={data.subject}
          error={error && !data.subject}
          onChange={handleChange}
        />
        <TextField
          id="outlined-textarea"
          label="Message"
          variant="filled"
          rows={4}
          name="text"
          multiline
          value={data.text}
          error={error && !data.text}
          onChange={handleChange}
        />
        <Button
          className="contact-btn"
          variant="contained"
          disabled={loading}
          onClick={sendEmail}
        >
          <SendIcon /> {loading ? "Sending..." : "Send"}
        </Button>
      </form>
    </>
  );
}
export default Contact;
