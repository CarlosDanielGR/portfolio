import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./../styles/ProjectList.css";

function createData(name: string, url: string, date: number, empty: boolean) {
  return { name, url, date, empty };
}

const rows = [
  createData("Landing", "https://inlacom.com/es/", 2021, true),
  createData("Partner", "https://partner.inlacom.com/es/login", 2021, true),
  createData("Inlazepay", "https://inlazepay.com/es/", 2022, false),
  createData("Inlabet", "https://inlabet.com/co/bookmakers", 2023, true),
  createData("Inlajobs", "https://inlajobs.com/", 2023, true),
];

export default function ProjectList() {
  return (
    <TableContainer className="project-list" component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Project name</TableCell>
            <TableCell>Link</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>From scratch?</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>
                <a href={row.url} target="_blank">
                  {row.url}
                </a>
              </TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.empty ? "Yes" : "Not"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
