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

```


<div style="max-width:900px;margin:20px auto;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;">
  <hr style="border:0;border-top:1px solid #e6e6e6;margin:24px 0;">
  
  <section aria-labelledby="future-enhancements" style="margin-bottom:20px;">
    <h2 id="future-enhancements" style="display:flex;align-items:center;gap:10px;font-size:1.25rem;margin:0 0 12px;">
      <span style="font-size:1.35rem">🌈</span>
      <span style="font-weight:700">Future Enhancements</span>
    </h2>


<ul style="list-style:none;padding:0;margin:8px 0 0;display:grid;gap:8px;">
  <li style="display:flex;align-items:flex-start;gap:12px;padding:8px 12px;border-radius:8px;background:#fafafa;">
    <span style="font-size:1.15rem;margin-top:2px"></span>
    <div>
      <strong>User Login & Personalization</strong>
      <div style="color:#555;font-size:0.95rem;margin-top:4px;">Implement Firebase auth to enable user accounts, profiles, and personalized feeds.</div>
    </div>
  </li>

  <li style="display:flex;align-items:flex-start;gap:12px;padding:8px 12px;border-radius:8px;background:#fafafa;">
    <span style="font-size:1.15rem;margin-top:2px"></span>
    <div>
      <strong>Save / Bookmark Articles</strong>
      <div style="color:#555;font-size:0.95rem;margin-top:4px;">Allow users to save favorites to view later — persisted per user.</div>
    </div>
  </li>

  <li style="display:flex;align-items:flex-start;gap:12px;padding:8px 12px;border-radius:8px;background:#fafafa;">
    <span style="font-size:1.15rem;margin-top:2px"></span>
    <div>
      <strong>Voice-based News Reader (TTS)</strong>
      <div style="color:#555;font-size:0.95rem;margin-top:4px;">Add text-to-speech so users can listen to articles on the go (accessible feature).</div>
    </div>
  </li>

  <li style="display:flex;align-items:flex-start;gap:12px;padding:8px 12px;border-radius:8px;background:#fafafa;">
    <span style="font-size:1.15rem;margin-top:2px"></span>
    <div>
      <strong>Admin Dashboard & Analytics</strong>
      <div style="color:#555;font-size:0.95rem;margin-top:4px;">Admin panel to view usage metrics, trending topics, and manage content.</div>
    </div>
  </li>
</ul>
  </section>


---


  <hr style="border:0;border-top:1px solid #e6e6e6;margin:18px 0;">

  <section aria-labelledby="learning-highlights">
    <h2 id="learning-highlights" style="display:flex;align-items:center;gap:10px;font-size:1.25rem;margin:0 0 12px;">
      <span style="font-size:1.35rem">💡</span>
      <span style="font-weight:700">Learning Highlights</span>
    </h2>

  <ul style="margin:8px 0 0;padding-left:18px;color:#222;line-height:1.6;">
      <li>🧩 <strong>Integrated Flask + Gemini AI</strong> for real-time news summarization</li>
      <li>⚡ <strong>Built RESTful API</strong> endpoints for scalable data handling</li>
      <li>🎨 <strong>Designed responsive UI/UX</strong> using pure HTML & CSS</li>
      <li>🪶 <strong>Deployed on Render (Backend) & Netlify (Frontend)</strong> for CI/CD</li>
    </ul>
  </section>
</div>


---


<div align="center">
<p> 🌟 “Empowering readers with clarity and AI intelligence — that’s NewsWave.” 🌊 <p>
<p> Crafted with ❤️ by Saloni Gupta </p>
</div>


