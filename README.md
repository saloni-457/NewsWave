<!-- 🌊 NEWSWAVE - Modern README Design -->

<div align="center">

# **NEWSWAVE**
### _Your AI-Powered Daily News Companion_

<p align="center">
  <img src="https://github.com/saloni-457/NewsWave/blob/main/logo.png" alt="NewsWave Logo" width="150px">
</p>

---

### 📰 **Stay Updated | Stay Smart | Stay Ahead**

<p align="center">
  <img src="https://img.shields.io/badge/Frontend%20Live%20🟢-Netlify-blue?style=for-the-badge&logo=netlify">
  <img src="https://img.shields.io/badge/Backend%20Live%20🟣-Render-purple?style=for-the-badge&logo=render">
  <img src="https://img.shields.io/badge/Made%20With-Python%20%7C%20Flask-blue?style=for-the-badge&logo=python">
  <img src="https://img.shields.io/badge/Powered%20By-Google%20Gemini%20AI-orange?style=for-the-badge&logo=google">
</p>


---

</div>

## 💫 **Overview**

**NewsWave** delivers **real-time global news** with **AI-powered summaries**.  
Using **Google Gemini AI** + **NewsAPI**, it transforms long news articles into quick, insightful bites.  
Stay informed, effortlessly — **anytime, anywhere**. 🌍🧠

---

## ⚙️ **Tech Stack**

<div align="center">

| Category | Technologies |
|-----------|---------------|
| 🎨 **Frontend** | HTML, CSS, JavaScript |
| 📰 **API Source** | NewsAPI.org |
| 🔥 **Backend** | Flask (Python) |
| ☁️ **Hosting** | Netlify + Render |
| 🧰 **Utilities** | dotenv, requests, Flask-CORS |

</div>

---

## ✨ **Key Features**

- 📰 Real-time, trending news powered by **NewsAPI**
- 🤖 **AI Summarization** using **Google Gemini**
- 🗂️ Browse by categories (*Business, Sports, Tech, Health, etc.*)
- 📱 Fully **responsive** across all devices
- 🎨 Elegant, minimal **UI/UX** inspired by premium news apps

---

## 📱 **Responsive Design Showcase**

### 🖥️ Desktop View
<p align="center">
  <img src="https://github.com/saloni-457/NewsWave/blob/main/desktop_newswave.png" alt="Desktop View" width="650px">
</p>

### 📲 Mobile View
<p align="center">
  <img src="https://github.com/saloni-457/NewsWave/blob/main/mobile_newswave.png" alt="Mobile View" width="250px">
</p>

> 💡 The layout automatically adapts to phones & tablets for smooth reading.

---

## 🧠 **AI Summarization in Action**

Below is a quick Python example demonstrating how NewsWave summarizes trending AI news using Gemini API:

```python
from google import generativeai as genai

model = genai.GenerativeModel("gemini-pro")
response = model.generate_content("Summarize the latest AI trends.")
print(response.text)

---

**⚡ Quick Start (Local Setup)**
1️⃣ Clone the Repository

git clone https://github.com/saloni-457/NewsWave.git
cd NewsWave

2️⃣ Set Up Backend (Flask)

cd backend
pip install -r requirements.txt
python app.py

3️⃣ Add Environment Variables

Create a .env file inside /backend:

NEWS_API_KEY=your_newsapi_key_here
GEMINI_GOOGLE_API_KEY=your_gemini_api_key_here

4️⃣ Run the Frontend

cd ../frontend
open index.html

💡 Or deploy directly to Netlify from your GitHub repo!

---

🌈 Future Enhancements

🔐 User Login & Personalization (Firebase)

📌 Save / Bookmark Articles

🔊 Voice-based News Reader (TTS)

📈 Admin Dashboard & Analytics

---

💡 Learning Highlights

🧩 Integrated Flask + Gemini AI for real-time news summarization

⚡ Built RESTful API endpoints for scalable data handling

🎨 Designed responsive UI/UX with pure HTML + CSS

🪶 Deployed using Render (Backend) & Netlify (Frontend)


 ```


<div align="center">
<p> 🌟 “Empowering readers with clarity and AI intelligence — that’s NewsWave.” 🌊 <p>
<p> Crafted with ❤️ by Saloni Gupta </p>
</div>

