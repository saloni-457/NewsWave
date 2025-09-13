
// =================== DOM LOADED ===================
document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "https://newsapi.org/v2/top-headlines";
    const defaultCategory = "general";
    const newsContent = document.getElementById("news-content");

    // Function to fetch news from local Flask server
    function fetchNews(query = "India") {
        return fetch(`http://localhost:5000/get-news?query=${query}`)
            .then(res => res.json())
            .then(data => data.articles);
    }

    // Function to display news articles
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
                    <p>${article.description}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                </div>
            `;
            newsContent.appendChild(articleElement);
        });
    }

    // Initial load
    fetchNews(defaultCategory).then(displayNews).catch(err => console.error("Error fetching news:", err));

    // Handle category click
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const category = this.getAttribute("id").replace("category-", "");
            fetchNews(category).then(displayNews).catch(err => console.error("Error fetching news:", err));
        });
    });
});

// =================== CHATBOT ===================
const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
// const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
// const sendChatBtn = document.querySelector(".chat-input span");
// const inputInitHeight = chatInput.scrollHeight; // attention PLS
const chatbox = document.querySelector(".chatbox");
const userInput = document.querySelector(".chat-input textarea");
const sendButton = document.getElementById("send-btn");

document.addEventListener("DOMContentLoaded", () => {
    const sendButton = document.getElementById("send-btn");
    const userInput = document.querySelector(".chat-input textarea");

    // Make sure the button triggers the correct handler
    sendButton.addEventListener("click", handleChat);

    // Optional: Handle Enter key
    userInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleChat();
        }
    });
});



// ✅ Handle user message and trigger response
const handleChat = () => {
    const userMessage = userInput.value.trim();
    if (!userMessage) return;

    // 🧠 Create user chat bubble
    const userChat = createChatElement(userMessage, "user");
    chatbox.appendChild(userChat);

    // 🔄 Clear input and scroll down
    userInput.value = "";
    chatbox.scrollTo(0, chatbox.scrollHeight);

    // ⏳ Create loading bot bubble
    const botChat = createChatElement("Typing...", "bot");
    chatbox.appendChild(botChat);
    chatbox.scrollTo(0, chatbox.scrollHeight);

    // 🧠 Generate response
    generateResponse(botChat, userMessage);
};

// ✅ Create chat bubble DOM
const createChatElement = (text, sender) => {
    const chatDiv = document.createElement("div");
    chatDiv.classList.add("chat", sender);

    const message = document.createElement("p");
    message.textContent = text;
    chatDiv.appendChild(message);

    return chatDiv;
};

// ✅ Generate response from Flask backend
const generateResponse = (chatElement, userMessage) => {
    const messageElement = chatElement.querySelector("p");

        fetch("http://localhost:5000/summarize", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text: userMessage }) // ✅ correct for Gemini
        })

        .then(res => {
            if (!res.ok) throw new Error("Server error");
            return res.json();
        })
        .then(data => {
            const response = data.summary || "No summary found.";
            messageElement.textContent = response;
            chatbox.scrollTo(0, chatbox.scrollHeight);
        })
        .catch(error => {
            console.error("Error:", error);
            messageElement.classList.add("error");
            messageElement.textContent = "Oops! Something went wrong. Please try again.";
        });
};





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

// =================== DATE & TIME ===================

