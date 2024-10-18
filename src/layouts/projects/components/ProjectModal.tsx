import { Box, Button, Modal, Tooltip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Project } from "../project.data";
import { Redirect } from "..";
import "../styles/ProjectModal.css";

interface Props {
  data: Project;
  open: boolean;
  handleClose: any;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#000",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};

function ProjectModal({ data, open, handleClose }: Props) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="">
          <div className="project-modal-head">
            <span className="project-modal-date">{data.date}</span>
            <Button variant="text" onClick={handleClose}>
              <CloseIcon />
            </Button>
          </div>
          <span className="project-modal-title">{data.title}</span>
          <div
            className="project-modal-content"
            dangerouslySetInnerHTML={{ __html: data.content }}
          ></div>
          <div className="project-modal-tools">
            {data.technologies.map((tool, index) => (
              <Tooltip key={index} title={tool.name} placement="top">
                <div className="project-modal-tool">
                  <img src={tool.src} alt={tool.alt} />
                </div>
              </Tooltip>
            ))}
          </div>
          {data.repositoryLink ? (
            <div className="project-modal-redirect">
              <Redirect link={data.repositoryLink} />
            </div>
          ) : (
            <></>
          )}
        </div>
      </Box>
    </Modal>
  );
}
export default ProjectModal;
