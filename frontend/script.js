
// =================== CONFIG ===================

const isLocal = window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost";
const BASE_URL = isLocal ? "http://127.0.0.1:5000" : "https://newswave-3.onrender.com";

const DEFAULT_CATEGORY = "general";

// =================== DOM LOADED ===================
document.addEventListener("DOMContentLoaded", () => {
    const newsContent = document.getElementById("news-content");

    // ========== Fetch News ==========
    async function fetchNews(query = "India") {
        try {
            const res = await fetch(`${BASE_URL}/get-news?query=${query}`);
            if (!res.ok) throw new Error("Failed to fetch news");
            const data = await res.json();
            return data.articles || [];
        } catch (err) {
            console.error("Error fetching news:", err);
            return [];
        }
    }

    // ========== Display News ==========
    // function displayNews(articles) {
    //     newsContent.innerHTML = "";
    //     if (!articles.length) {
    //         newsContent.innerHTML = `<p class="error">No news found. Try again later.</p>`;
    //         return;
    //     }

    //     articles.forEach(article => {
    //         const articleElement = document.createElement("article");
    //         articleElement.innerHTML = `
    //             <div class="article-thumbnail">
    //                 <img src="${article.urlToImage || 'images/logo.png'}" alt="${article.title}">
    //             </div>
    //             <div class="article-details">
    //                 <h2>${article.title || "Untitled"}</h2>
    //                 <p>${article.description || ""}</p>
    //                 <a href="${article.url}" target="_blank">Read more</a>
    //             </div>
    //         `;
    //         newsContent.appendChild(articleElement);
    //     });
    // }

    function displayNews(articles) {
    newsContent.innerHTML = "";
    if (!articles.length) {
        newsContent.innerHTML = `<p class="error">No news found. Try again later.</p>`;
        return;
    }

    articles.forEach(article => {
        const articleElement = document.createElement("article");
        articleElement.innerHTML = `
            <div class="article-thumbnail">
                <img src="${article.urlToImage || 'images/logo.png'}" 
                     alt="${article.title || "News Image"}"
                     onerror="this.onerror=null; this.src='images/logo.png';">
            </div>
            <div class="article-details">
                <h2>${article.title || "Untitled"}</h2>
                <p>${article.description || ""}</p>
                <a href="${article.url}" target="_blank">Read more</a>
            </div>
        `;
        newsContent.appendChild(articleElement);
    });
}

    // Initial load
    fetchNews(DEFAULT_CATEGORY).then(displayNews);

    // Category click
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", async (event) => {
            event.preventDefault();
            const category = link.id.replace("category-", "");
            const articles = await fetchNews(category);
            displayNews(articles);

            // Auto-hide nav on small screens
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

// Handling chats
async function handleChat() {
    const userMessage = userInput.value.trim();
    if (!userMessage) return;

    // User bubble
    chatbox.appendChild(createChatElement(userMessage, "user"));
    userInput.value = "";
    chatbox.scrollTop = chatbox.scrollHeight;

    // Bot typing bubble
    const botChat = createChatElement("Typing...", "bot");
    chatbox.appendChild(botChat);
    chatbox.scrollTop = chatbox.scrollHeight;

    await generateResponse(botChat, userMessage);
}

// Chat element
function createChatElement(text, sender) {
    const chatDiv = document.createElement("div");
    chatDiv.classList.add("chat", sender);

    const message = document.createElement("p");
    message.textContent = text;
    chatDiv.appendChild(message);

    return chatDiv;
}

// Generating response
async function generateResponse(chatElement, userMessage) {
    const messageElement = chatElement.querySelector("p");

    try {
        const res = await fetch(`${BASE_URL}/summarize`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: userMessage })
        });

        if (!res.ok) throw new Error("Server error");
        const data = await res.json();

        messageElement.textContent = data.summary || "No summary found.";
    } catch (error) {
        console.error("Error:", error);
        messageElement.classList.add("error");
        messageElement.textContent = "Oops! Something went wrong. Please try again.";
    } finally {
        chatbox.scrollTop = chatbox.scrollHeight;
    }
}

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

// =================== EVENT LISTENERS ===================
document.addEventListener("DOMContentLoaded", () => {
    sendButton.addEventListener("click", handleChat);
    userInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleChat();
        }
    });
});

closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));

