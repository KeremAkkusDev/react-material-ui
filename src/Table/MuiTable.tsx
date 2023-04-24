import {
  Table,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TableHead,
} from "@mui/material";

export const MuiTable = () => {
  type RandomData = {
    postalZip: any;
    name: any;
    phone: any;
    email: any;
    address: any;
    [key: string]: any;
  };

  const data: RandomData[] = [
    {
      postalZip: "8259",
      name: "Chase Bass",
      phone: "(844) 283-5284",
      email: "proin.eget@protonmail.edu",
      address: "265-2984 Ligula Road",
    },
    {
      postalZip: "83318",
      name: "Charde Vincent",
      phone: "1-671-157-4888",
      email: "non.bibendum.sed@aol.ca",
      address: "319-8749 Nunc St.",
    },
    {
      postalZip: "30878",
      name: "Murphy Poole",
      phone: "1-824-741-8313",
      email: "aliquet@hotmail.ca",
      address: "P.O. Box 723, 8720 Sed St.",
    },
    {
      postalZip: "41719",
      name: "Shellie Perkins",
      phone: "(721) 991-7141",
      email: "lacinia@hotmail.edu",
      address: "P.O. Box 396, 8319 Ad St.",
    },
    {
      postalZip: "37795",
      name: "Harlan Mullins",
      phone: "(245) 435-7387",
      email: "aliquam.eros@google.edu",
      address: "3955 Ipsum Av.",
    },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {Object.keys(data[0]).map((key) => (
              <TableCell key={key}>{key.toLocaleUpperCase()}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.postalZip}>
              {Object.keys(data[0]).map((key) => (
                <TableCell key={key}>{row[key]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
