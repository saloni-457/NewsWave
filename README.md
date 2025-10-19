<div align="center">
  
# 🌊 **NewsWave**
### _Your AI-Powered Daily News Companion_
  
![NewsWave Preview]()

[![Netlify](https://img.shields.io/badge/Frontend%20Live%20🟢-Netlify-blue?style=for-the-badge)](https://dailynews-on-newswave.netlify.app)
[![Render](https://img.shields.io/badge/Backend%20Live%20🟣-Render-purple?style=for-the-badge)](https://newswave-3.onrender.com)

</div>

---

## 💫 **Overview**

**NewsWave** brings you real-time global news from **NewsAPI**, beautifully summarized by **Google Gemini AI** for quick, insightful reading.  
Stay informed, effortlessly — anywhere, anytime. 🌍🧠

---

## ⚙️ **Tech Stack**

<div align="center">

| Category | Technologies |
|-----------|---------------|
| 🎨 **Frontend** | HTML, CSS, JavaScript |
| 📰 **API Source** | NewsAPI.org |
| 🔥 **Backend** | Flask (Python) |
| ☁️ **Hosting** | Netlify + Render |
| 🧰 **Tools** | dotenv, requests, Flask-CORS |

</div>

---

## ✨ **Key Features**

✅ Fetches **real-time, trending news** using NewsAPI  
✅ **AI Summarization** of articles using Google Gemini  
✅ Category-wise headlines (e.g. *Business, Sports, Tech, Health*)  
✅ Fully **responsive** for mobile, tablet, and desktop  
✅ Beautiful **modern UI** inspired by premium news apps  

---

## 📱 **Responsive Design Showcase**

### 🖥️ Desktop View
<p align="center">
  <img src="https://github.com/saloni-457/NewsWave/blob/main/desktop.png" alt="Desktop View" width="800px">
</p>

### 📱 Mobile View
<p align="center">
  <img src="https://github.com/saloni-457/NewsWave/blob/main/mobile.png" alt="Mobile View" width="350px">
</p>


> 💡 The layout automatically adapts for tablets & smartphones for smooth reading experience.

---

## 🧠 **AI Summarization in Action**

python
from google import generativeai as genai

model = genai.GenerativeModel("gemini-pro")
response = model.generate_content("Summarize the latest AI trends.")
print(response.text)


**💫 Quick Start Guide (Local Setup)**

1️⃣ Clone the Repository
git clone https://github.com/saloni-457/NewsWave.git
cd NewsWave

2️⃣ Set Up Backend (Flask)
cd backend
pip install -r requirements.txt
python app.py

3️⃣ Configure Environment Variables
Create a .env file inside /backend:

NEWS_API_KEY=your_newsapi_key_here
GEMINI_GOOGLE_API_KEY=your_gemini_api_key_here

4️⃣ Run the Frontend
cd ../frontend
open index.html


Or deploy to Netlify directly from your GitHub repo 🌐



**🌈 Future Enhancements**
Planned Upgrades:
User Login & Personalization (Firebase)
Save / Bookmark Articles
Voice-based News Reader (TTS)
Save/Bookmark Articles
Admin Dashboard with Analytics

**💡 Learning Highlights**
🧩 Integrated Flask + AI (Gemini) for real-time text summarization
⚡ Designed RESTful API endpoints for scalable architecture
🎨 Developed a clean, responsive UI/UX using pure HTML + CSS
🪶 Deployed on Render (Backend) & Netlify (Frontend) for CI/CD


