const overlay_types = ["FORM_SUCCESS"];
const mountHandler = (state, payload) => {
  if (overlay_types.includes(payload)) {
    return { ...state, overlayState: payload };
  }
};

export default function reducer(state, { action, payload }) {
  switch (action.type) {
    case "MOUNT_OVERLAY": {
      return { ...state, overlayState: null };
    }
    case "UNMOUNT_OVERLAY": {
      return mountHandler(state, payload);
    }
    default: {
      return state;
    }
  }
}
