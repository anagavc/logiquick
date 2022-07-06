import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import { HeadingSix } from "../../components/FontStyles";
import {
  getShipmentFailure,
  getShipmentStart,
  getShipmentSuccess,
} from "../../redux/shipmentSlice";
const ShipmentHistory = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { currentUser } = useSelector((state) => state.user);
  const [pageSize, setPageSize] = useState(10);
  useEffect(() => {
    if (!currentUser) {
      router.push("/Login");
    }
    const fetchShipments = async () => {
      try {
        dispatch(getShipmentStart());
        const res = await axios.get("/api/shipment/history", {
          headers: { authorization: `Bearer ${currentUser.token}` },
        });
        dispatch(getShipmentSuccess(res.data));
      } catch (error) {
        console.log(error);
        dispatch(getShipmentFailure());
      }
    };
    fetchShipments();
  }, [router, currentUser, dispatch]);
  const { shipment } = useSelector((state) => state.shipment);
  const columns = [
    { field: "_id", headerName: "ID", width: 180 },
    { field: "receiverName", headerName: "Receiver's Name", width: 150 },
    { field: "receiverNumber", headerName: "Receiver's Number", width: 150 },
    { field: "destination", headerName: "Destination", width: 160 },
    { field: "location", headerName: "Location", width: 160 },
    { field: "itemType", headerName: "Item Type", width: 100 },
    { field: "freightType", headerName: "Freight Type", width: 100 },
    { field: "trackingNo", headerName: "Tracking Number", width: 160 },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <button
            onClick={() => router.push(`/#track`)}
            className="border-0 rounded-sm px-4 py-2 bg-pry-100 text-pry-50 my-4"
          >
            View shipment
          </button>
        );
      },
    },
  ];
  return (
    <div className="px-24 py-24 flex space-y-4 bg-pry-50 flex-col h-screen">
      <HeadingSix
        title="Shipment history"
        size="2xl"
        color="pry-100"
        align="center"
      />

      <div className="flex-1 bg-white drop-shadow">
        <DataGrid
          rows={shipment}
          //   disableSelectionOnClick
          columns={columns}
          getRowId={(row) => row._id}
          components={{
            Toolbar: GridToolbar,
          }}
          sx={{ color: "#232E51" }}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
        />
      </div>
    </div>
  );
};

export default ShipmentHistory;
