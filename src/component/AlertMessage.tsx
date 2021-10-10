import React from 'react';
import {ToastContainer} from 'react-toastify';

export const AlertMessage = () => {
  return (
    <div>
      <ToastContainer
        closeOnClick
        draggable
        pauseOnFocusLoss
        pauseOnHover
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        position="top-left"
        rtl={false}
      />
    </div>
  );
};
