from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import google.generativeai as genai
from dotenv import load_dotenv
load_dotenv()
import traceback

import os

app = Flask(__name__)
CORS(app)
# CORS(app, resources={r"/*": {"origins": "https://newswave-3.onrender.com"}})

# CORS(app, resources={r"/*": {"origins": ["https://newswave-3.onrender.com", "https://dailynews-on-newswave.netlify.app" ]}})

CORS(app, resources={
    r"/*": {
        "origins": [
            "http://127.0.0.1:5501",   # local frontend
            "http://localhost:3000",   # if you use React dev server
            "https://dailynews-on-newswave.netlify.app",  # Netlify frontend
            "https://newswave-3.onrender.com"  # Render backend itself
        ]
    }
})

from flask_cors import CORS

NEWS_API_KEY = os.getenv("NEWS_API_KEY")
GEMINI_API_KEY = os.getenv("GEMINI_GOOGLE_API_KEY")
print("Loaded Gemini API key:", GEMINI_API_KEY)

genai.configure(api_key=GEMINI_API_KEY)  

# model = genai.GenerativeModel("gemini-pro")
# response = model.generate_content(prompt)


@app.route("/")
def home():
    return "✅ NewsWave backend is running on Render!"



@app.route("/get-news")
def get_news():
    query = request.args.get("query", "India")
    url = f"https://newsapi.org/v2/everything?q={query}&apiKey={NEWS_API_KEY}"
    res = requests.get(url)
    return jsonify(res.json())



@app.route("/summarize", methods=["POST"])
def summarize():
    try:
        data = request.get_json()
        print("Incoming payload:", data)  

        prompt = data.get("text")
        if not prompt:
            return jsonify({"error": "Missing 'text' field"}), 400

        # model = genai.GenerativeModel("gemini-pro")

        model = genai.GenerativeModel(
            model_name="gemini-pro",
            safety_settings=[
                {"category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": 4},
                {"category": "HARM_CATEGORY_SEXUALLY_EXPLICIT", "threshold": 4},
                {"category": "HARM_CATEGORY_HARASSMENT", "threshold": 4},
                {"category": "HARM_CATEGORY_HATE_SPEECH", "threshold": 4},
            ]
    )

        response = model.generate_content(prompt)

        print("🟢 Gemini raw response:", response)  # not just .text
        print("✅ Gemini response text:", response.text)
        return jsonify({"summary": response.text})

    except Exception as e:
        print("🔴 Exception occurred:")

        traceback.print_exc()
        return jsonify({"error": str(e)}), 500
    
if __name__ == "__main__":
    app.run(debug=True)






