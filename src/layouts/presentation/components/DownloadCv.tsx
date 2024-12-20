import { Button } from "@mui/material";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import "./../styles/DownloadCv.css";

function DownloadCv() {
  return (
    <div className="downloadCv">
      <Button
        variant="contained"
        href="./fullstack_carlosguzman.pdf"
        download="fullstack_carlosguzman"
      >
        <DownloadForOfflineIcon /> CV
      </Button>
    </div>
  );
}
export default DownloadCv;
