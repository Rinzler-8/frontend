import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography } from "@mui/material";
import { IconButton } from "@mui/material";

export default function CancelDialog(props) {
  let { isDialogOpen, onHandleCancel, toggle, selectedOrderId } = props;


  function toggleModal() {
    toggle(); // Call the toggle function from props
  }

  function handleCancel() {
    onHandleCancel(selectedOrderId);
  }

  return (
    <Dialog
      open={isDialogOpen}
      onClose={toggleModal}
      PaperProps={{
        elevation: 8,
        style: { backgroundColor: "white" },
      }}
    >
      <DialogTitle>
        <Typography color="error">
          XÁC NHẬN HỦY ĐƠN
        </Typography>
      </DialogTitle>
      <DialogContent dividers>
        <Typography>Bạn có chắc chắn muốn hủy đơn (ID:{selectedOrderId}) không?</Typography>
      </DialogContent>
      <DialogActions>
        <IconButton onClick={toggleModal} color="primary">
          <Typography variant="button" style={{ color: "black" }}>
            Đóng
          </Typography>
        </IconButton>
        <IconButton onClick={handleCancel} color="primary" autoFocus>
          <Typography variant="button" color="error">
            Hủy
          </Typography>
        </IconButton>
      </DialogActions>
    </Dialog>
  );
}
