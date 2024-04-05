import { useMemo, useState } from "react";

//MRT Imports
import {
  MaterialReactTable,
  useMaterialReactTable,
  MRT_GlobalFilterTextField,
  MRT_ToggleFiltersButton,
} from "material-react-table";
import { useNavigate } from "react-router-dom";
//Material UI Imports
import {
  Box,
  Button,
  Dialog,
  ListItemIcon,
  MenuItem,
  Typography,
  lighten,
} from "@mui/material";

//Icons Imports
import { AccountCircle, Edit, Send } from "@mui/icons-material";
import { FaTrash } from "react-icons/fa";

//Mock Data
// import { data } from "./data";

function Table({ data, handleClose, open, setOpen, mutation }) {
  const [id, setId] = useState(null);
  const columns = useMemo(
    () => [
      {
        id: "image", //id is still required when using accessorFn instead of accessorKey
        header: "Name",
        accessorKey: "name",
        size: 250,
        Cell: ({ renderedCellValue, row }) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <img
              id={row.original.images[0].url}
              alt="avatar"
              src={row.original.images[0].url}
              loading="lazy"
              style={{ borderRadius: "50%", height: "50px", width: "50px" }}
            />
            {/* using renderedCellValue instead of cell.getValue() preserves filter match highlighting */}
            <span>{renderedCellValue}</span>
          </Box>
        ),
      },
      {
        id: "description",
        accessorKey: "description", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
        enableClickToCopy: true,
        filterVariant: "autocomplete",
        header: "Description",
        size: 300,
      },

      {
        accessorKey: "price",
        // filterVariant: 'range', //if not using filter modes feature, use this instead of filterFn
        filterFn: "between",
        header: "Price",
        size: 100,
        //custom conditional format and styling
        Cell: ({ cell }) => (
          <Box
            component="span"
            sx={(theme) => ({
              backgroundColor:
                cell.getValue() < 50_000
                  ? theme.palette.error.dark
                  : cell.getValue() >= 50_000 && cell.getValue() < 75_000
                  ? theme.palette.warning.dark
                  : theme.palette.success.dark,
              borderRadius: "0.25rem",
              color: "#fff",
              maxWidth: "9ch",
              p: "0.25rem",
            })}
          >
            {cell.getValue()?.toLocaleString?.("en-US", {
              style: "currency",
              currency: "INR",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </Box>
        ),
      },
      {
        accessorKey: "category", //hey a simple column for once
        header: "Category",
        size: 350,
      },
      {
        accessorKey: "address", //hey a simple column for once
        header: "Address",
        size: 350,
      },
      {
        accessorKey: "citiName", //hey a simple column for once
        header: "City",
        size: 350,
      },
      {
        accessorKey: "size", //hey a simple column for once
        header: "Size",
        size: 350,
        Cell: ({ renderedCellValue }) => <span>{renderedCellValue}sqrt</span>,
      },
      {
        accessorKey: "flore", //hey a simple column for once
        header: "Flore",
        size: 350,
      },
      {
        accessorKey: "type", //hey a simple column for once
        header: "Type",
        size: 350,
      },
      {
        accessorKey: "bathrooms", //hey a simple column for once
        header: "Bathrooms",
        size: 350,
      },
      {
        accessorKey: "bedrooms", //hey a simple column for once
        header: "Bedrooms",
        size: 350,
      },
      {
        accessorKey: "furnished", //hey a simple column for once
        header: "Furnished",
        size: 350,
      },
      {
        accessorKey: "parking", //hey a simple column for once
        header: "Parking",
        size: 350,
      },
      {
        accessorKey: "restaurant", //hey a simple column for once
        header: "Restaurant",
        size: 350,
      },
      {
        accessorKey: "bus", //hey a simple column for once
        header: "Bus",
        size: 350,
      },
      {
        accessorKey: "school", //hey a simple column for once
        header: "School",
        size: 350,
      },
      {
        accessorKey: "username", //hey a simple column for once
        header: "Added By",
        size: 350,
      },

      {
        id: "createdAt",
        accessorKey: "createdAt",
        header: "Added On",
        filterVariant: "date",
        filterFn: "lessThan",
        sortingFn: "datetime",
        Cell: ({ renderedCellValue }) => <span>{renderedCellValue}</span>, //render Date as a string
      },
    ],
    []
  );
  const navigate = useNavigate();

  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableColumnFilterModes: true,
    enableColumnOrdering: true,
    enableGrouping: true,

    enableColumnPinning: true,
    enableFacetedValues: true,
    enableRowActions: true,
    enableRowSelection: true,

    initialState: {
      // showColumnFilters: true,
      pagination: { pageSize: 5 },
      showGlobalFilter: true,
      columnPinning: {
        left: ["mrt-row-expand", "mrt-row-select"],
        right: ["mrt-row-actions"],
      },
    },
    paginationDisplayMode: "pages",
    positionToolbarAlertBanner: "bottom",
    muiSearchTextFieldProps: {
      size: "small",
      variant: "outlined",
    },
    muiPaginationProps: {
      color: "secondary",
      rowsPerPageOptions: [2, 5, 10],
      shape: "rounded",
      variant: "outlined",
    },

    // row action
    renderRowActionMenuItems: ({ closeMenu, row }) => [
      <MenuItem
        key={0}
        onClick={() => {
          // View profile logic...
          closeMenu();
          navigate(`/admin/list/${row.original.id}`);
        }}
        sx={{ m: 0 }}
      >
        {/* { {row.original.id}} */}
        <ListItemIcon>
          <Edit className="text-green-700" />
        </ListItemIcon>
        Update Property
      </MenuItem>,
      <MenuItem
        key={1}
        onClick={() => {
          // Send email logic...
          closeMenu();
          setOpen(true);
          setId(row.original.id);
        }}
        sx={{ m: 0 }}
      >
        <ListItemIcon>
          <FaTrash className="text-red-600" />
        </ListItemIcon>
        Delete Property
      </MenuItem>,
    ],
  });

  return (
    <div className="bg-black w-full mx-auto">
      <Dialog onClose={handleClose} open={open}>
        <div className="p-4  space-y-5">
          <h2>Are you sure want to delete</h2>
          <div className="button flex items-center gap-5 justify-end">
            <button
              className="px-3 py-2 border shadow-sm rounded-md"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
            <button
              onClick={() => mutation.mutate({ id })}
              className="px-3 py-2 border shadow-sm rounded-md bg-red-600 text-white"
            >
              Delete
            </button>
          </div>
        </div>
      </Dialog>
      <MaterialReactTable table={table} />
    </div>
  );
}

export default Table;
