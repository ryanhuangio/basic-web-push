const button = document.querySelector("button");

button.addEventListener("click", () => {
  Notification.requestPermission().then((perm) => {
    if (perm === "granted") {
      const notify = new Notification("First Notification", {
        body: "Hello Notification",
        icon: "icon.png",
      });
    } else {
      console.log("Permission denied.");
    }
  });
});
