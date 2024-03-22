import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

function DialogProperty({ open, item, handleClose }) {
  const [purpose, setPurpose] = React.useState("");

  const handleChange = (event) => {
    setPurpose(event.target.value);
  };

  return (
    <div>
      <Dialog onClose={handleClose} open={open} className="space-y-5">
        <DialogTitle>{item.title}</DialogTitle>
        <img
          src={item.img}
          className="h-40 object-cover rounded-md shadow-md"
        />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-3 p-5">
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            className="menuitem"
          />

          <TextField id="outlined-basic" label="Number" variant="outlined" />
          <div className="space-y-5 w-full">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              sx={{ width: "100%" }}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Purpose</InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={purpose}
                label="Purpose"
                onChange={handleChange}
                sx={{ width: "100%" }}
              >
                <MenuItem value={10}>Buy</MenuItem>
                <MenuItem value={20}>Rent</MenuItem>
                <MenuItem value={30}>Lease</MenuItem>
              </Select>
            </FormControl>
          </div>
          <TextField
            id="outlined-basic"
            label="Address"
            multiline
            variant="outlined"
            rows={4}
          />
          <button className="border px-2 row-span-1 h-5 py-8 my-auto flex items-center justify-center rounded-md bg-slate-900 text-[#F5EA97]">
            Contact to Owner
          </button>

          <TextField
            id="outlined-basic"
            label="Message"
            multiline
            variant="outlined"
            rows={4}
          />
        </div>
      </Dialog>
    </div>
  );
}

export default DialogProperty;
