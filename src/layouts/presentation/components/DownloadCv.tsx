import { Button } from "@mui/material";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import "./../styles/DownloadCv.css";

function DownloadCv() {
  return (
    <div className="downloadCv">
      <Button variant="contained" href="./CV_CDGR.pdf" download="CV_CDGR">
        <DownloadForOfflineIcon /> CV
      </Button>
    </div>
  );
}
export default DownloadCv;
