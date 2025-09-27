// =================== DOM LOADED ===================
document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "https://newsapi.org/v2/top-headlines";
    const defaultCategory = "general";
    const newsContent = document.getElementById("news-content");

    const BASE_URL =
        window.location.hostname === "localhost"
            ? "http://127.0.0.1:5000" // Local Flask server
            : "https://newswave-3.onrender.com";

    // Function to fetch news
    function fetchNews(query = "India") {
        return fetch(`${BASE_URL}/get-news?query=${query}`)
            .then(res => res.json())
            .then(data => data.articles);
    }

    // Display news
    function displayNews(articles) {
        newsContent.innerHTML = "";
        articles.forEach(article => {
            const articleElement = document.createElement("article");
            articleElement.innerHTML = `
                <div class="article-thumbnail">
                    <img src="${article.urlToImage || 'images/logo.png'}" alt="${article.title}">
                </div>
                <div class="article-details">
                    <h2>${article.title}</h2>
                    <p>${article.description || ""}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                </div>
            `;
            newsContent.appendChild(articleElement);
        });
    }

    // Initial load
    fetchNews(defaultCategory)
        .then(displayNews)
        .catch(err => console.error("Error fetching news:", err));

    // Category click
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const category = this.getAttribute("id").replace("category-", "");
            fetchNews(category).then(displayNews);

            // Optional: auto-hide nav on small screens
            if (window.innerWidth <= 768) {
                document.querySelector("nav").classList.remove("open");
            }
        });
    });
});

// =================== CHATBOT ===================
const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const userInput = document.querySelector(".chat-input textarea");
const sendButton = document.getElementById("send-btn");

document.addEventListener("DOMContentLoaded", () => {
    sendButton.addEventListener("click", handleChat);

    // Enter key for send
    userInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleChat();
        }
    });
});

// Handle chat
const handleChat = () => {
    const userMessage = userInput.value.trim();
    if (!userMessage) return;

    // User bubble
    const userChat = createChatElement(userMessage, "user");
    chatbox.appendChild(userChat);

    userInput.value = "";
    chatbox.scrollTop = chatbox.scrollHeight;

    // Bot typing bubble
    const botChat = createChatElement("Typing...", "bot");
    chatbox.appendChild(botChat);
    chatbox.scrollTop = chatbox.scrollHeight;

    // Generate response
    generateResponse(botChat, userMessage);
};

// Chat element
const createChatElement = (text, sender) => {
    const chatDiv = document.createElement("div");
    chatDiv.classList.add("chat", sender);

    const message = document.createElement("p");
    message.textContent = text;
    chatDiv.appendChild(message);

    return chatDiv;
};

// Generate response
const generateResponse = (chatElement, userMessage) => {
    const messageElement = chatElement.querySelector("p");

    fetch(`${BASE_URL}/summarize`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: userMessage })
    })
        .then(res => {
            if (!res.ok) throw new Error("Server error");
            return res.json();
        })
        .then(data => {
            const response = data.summary || "No summary found.";
            messageElement.textContent = response;
            chatbox.scrollTop = chatbox.scrollHeight;
        })
        .catch(error => {
            console.error("Error:", error);
            messageElement.classList.add("error");
            messageElement.textContent = "Oops! Something went wrong. Please try again.";
        });
};

// =================== DATE & TIME ===================
function updateTime() {
    const dateTimeElement = document.getElementById('dateTime');
    const now = new Date();
    const options = {
        weekday: 'long', year: 'numeric', month: 'long',
        day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'
    };
    dateTimeElement.textContent = now.toLocaleDateString('en-US', options);
}
setInterval(updateTime, 1000);
updateTime();

closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));



