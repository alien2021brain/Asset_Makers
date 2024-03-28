import { useMemo } from "react";

//MRT Imports
import {
  MaterialReactTable,
  useMaterialReactTable,
  MRT_GlobalFilterTextField,
  MRT_ToggleFiltersButton,
} from "material-react-table";

//Material UI Imports
import {
  Box,
  Button,
  ListItemIcon,
  MenuItem,
  Typography,
  lighten,
} from "@mui/material";

//Icons Imports
import { AccountCircle, Send } from "@mui/icons-material";

//Mock Data
import { data } from "./data";

function Table() {
  const columns = useMemo(
    () => [
      {
        id: "employee", //id used to define `group` column
        header: "Property",
        columns: [
          {
            accessorFn: (row) => `${row.firstName} ${row.lastName}`, //accessorFn used to join multiple data into a single cell
            id: "name", //id is still required when using accessorFn instead of accessorKey
            header: "Name",
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
                  alt="avatar"
                  src={row.original.avatar}
                  loading="lazy"
                  style={{ borderRadius: "50%", height: "30px", width: "30px" }}
                />
                {/* using renderedCellValue instead of cell.getValue() preserves filter match highlighting */}
                <span>{renderedCellValue}</span>
              </Box>
            ),
          },
          {
            accessorKey: "email", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            enableClickToCopy: true,
            filterVariant: "autocomplete",
            header: "Email",
            size: 300,
          },
        ],
      },
      {
        id: "id",
        header: "Job Info",
        columns: [
          {
            accessorKey: "salary",
            // filterVariant: 'range', //if not using filter modes feature, use this instead of filterFn
            filterFn: "between",
            header: "Price",
            size: 200,
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
            accessorKey: "jobTitle", //hey a simple column for once
            header: "Property Name",
            size: 350,
          },
          {
            accessorFn: (row) => new Date(row.startDate), //convert to Date for sorting and filtering
            id: "startdate",
            header: "Added On",
            filterVariant: "date",
            filterFn: "lessThan",
            sortingFn: "datetime",
            Cell: ({ cell }) => cell.getValue()?.toLocaleDateString(), //render Date as a string
            Header: ({ column }) => <em>{column.columnDef.header}</em>, //custom header markup
            muiFilterTextFieldProps: {
              sx: {
                minWidth: "250px",
              },
            },
          },
        ],
      },
    ],
    []
  );

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
    renderRowActionMenuItems: ({ closeMenu }) => [
      <MenuItem
        key={0}
        onClick={() => {
          // View profile logic...
          closeMenu();
        }}
        sx={{ m: 0 }}
      >
        <ListItemIcon>
          <AccountCircle />
        </ListItemIcon>
        View Profile
      </MenuItem>,
      <MenuItem
        key={1}
        onClick={() => {
          // Send email logic...
          closeMenu();
        }}
        sx={{ m: 0 }}
      >
        <ListItemIcon>
          <Send />
        </ListItemIcon>
        Send Email
      </MenuItem>,
    ],
  });

  return (
    <div className="bg-black w-full mx-auto">
      <MaterialReactTable table={table} />
    </div>
  );
}

export default Table;
