// mini-url-shortener / script.js  (offline fake shortener)

const shortenBtn = document.getElementById("shorten-btn");
const urlInput = document.getElementById("url-input");
const resultDiv = document.getElementById("result");
const shortUrlAnchor = document.getElementById("short-url");
const copyBtn = document.getElementById("copy-btn");
const copiedMsg = document.getElementById("copied-msg");

// Function to generate random 6-character string
function generateCode() {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

shortenBtn.addEventListener("click", () => {
  let longUrl = urlInput.value.trim();

  if (longUrl === "") {
    alert("Please enter a URL first.");
    return;
  }

  if (!longUrl.startsWith("http://") && !longUrl.startsWith("https://")) {
    longUrl = "https://" + longUrl;
  }

  // Generate a fake short URL
  const shortCode = generateCode();
  const fakeShortUrl = `https://mini.ly/${shortCode}`;

  shortUrlAnchor.href = longUrl; // clicking opens the original URL
  shortUrlAnchor.innerText = fakeShortUrl;
  resultDiv.classList.remove("hidden");
});

// Copy shortened URL to clipboard
copyBtn.addEventListener("click", () => {
  const urlToCopy = shortUrlAnchor.innerText;
  navigator.clipboard.writeText(urlToCopy).then(() => {
    copiedMsg.classList.remove("hidden");
    setTimeout(() => copiedMsg.classList.add("hidden"), 2000);
  });
});
