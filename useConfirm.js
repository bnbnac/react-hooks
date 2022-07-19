export const useConfirm = (message = "", onConfirm, onCancel) => {
  if (typeof onCancel !== "function" || typeof onConfirm !== "function") {
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
    return confirmAction;
  };
};
