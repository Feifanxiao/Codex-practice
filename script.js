const button = document.querySelector("#success-button");
const message = document.querySelector("#message");

button.addEventListener("click", () => {
  message.textContent = "Codex 运行成功！";
});
