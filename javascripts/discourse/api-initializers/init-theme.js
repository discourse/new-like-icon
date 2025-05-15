import { apiInitializer } from "discourse/lib/api";

export default apiInitializer((api) => {
  api.replaceIcon("d-liked", "thumbs-up");
  api.replaceIcon("d-unliked", "far-thumbs-up");
  api.replaceIcon("notification.liked", "far-thumbs-up");
  api.replaceIcon("notification.liked_2", "far-thumbs-up");
  api.replaceIcon("notification.liked_many", "far-thumbs-up");
  api.replaceIcon("notification.liked_consolidated", "far-thumbs-up");
  api.replaceIcon("heart", "thumbs-up");
});
