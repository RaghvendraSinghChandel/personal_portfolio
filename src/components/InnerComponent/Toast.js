import { toast } from 'react-toastify';

// Function to show success toast
export const showSuccessToast = (message) => {
  toast.success(message);
};

// Function to show error toast
export const showErrorToast = (message) => {
  toast.error(message);
};