import "./productList.css";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import { productRows } from "../../dumyData";
import { Link } from "react-router-dom";
import { useState } from "react";

// Define the type for a product row
interface ProductRow {
  id: number;
  img: string;
  name: string;
  stock: number;
  status: string;
  price: string;
}

export default function ProductList() {
  // Use the defined type for state
  const [data, setData] = useState<ProductRow[]>(productRows);

  // Type the id as number
  const handleDelete = (id: number) => {
    setData(data.filter((item) => item.id !== id));
  };

  // Define column configuration with proper typing
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
        }}
        pageSizeOptions={[8]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
}
