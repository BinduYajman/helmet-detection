# helmet-detection
🪖 AI-Based Automatic Helmet Alert System

An AI-powered safety system that detects helmet usage in real time using a camera and alerts riders when a helmet is not worn. The solution promotes road safety through proactive, automated enforcement without manual intervention.

📌 Problem Statement

Two-wheeler accidents due to non-helmet usage are a major cause of serious injuries and fatalities. Existing enforcement relies on manual police checks, which are inconsistent and inefficient. There is a need for an automated, real-time solution that ensures helmet compliance without inconveniencing riders.

💡 Solution Overview

This project uses machine learning and computer vision to detect whether a rider is wearing a helmet. A camera captures live video, which is processed by an AI model trained using Google Teachable Machine. Based on the prediction:

✅ Helmet detected → Safe status shown

❌ No helmet detected → Visual warning + buzzer alert

The system runs entirely in the browser using TensorFlow.js, making it lightweight and easy to deploy.

✨ Features

Real-time helmet detection using AI
Live camera (webcam) input
Automatic classification: Helmet / No Helmet
Visual alerts for safety status
Audio buzzer warning for non-compliance
Browser-based (no special hardware required)
Scalable for smart vehicles and smart helmets

🛠️ Technologies Used

Google Technologies
Google Teachable Machine – Model training
TensorFlow.js – Real-time inference in browser
Teachable Machine Image Library
Google Chrome Web APIs (Camera & Audio)
Google Actions Sound Library

Others

HTML5 
JavaScript

⚙️ How It Works (Process Flow)

User starts the system
Camera captures live video frames
AI model analyzes each frame
Helmet status is classified
Alerts are triggered if helmet is not detected
System continuously monitors during the ride

🚀 Getting Started

1️⃣ Clone the Repository
git clone https://github.com/BinduYajman/helmet-detection.git
cd helmet-detection

2️⃣ Open the Project
Open the index.html file in Google Chrome

⚠️ Camera access requires HTTPS or localhost

3️⃣ Allow Camera Access
Click Start and allow webcam permission when prompted.

📁 Project Structure
├── index.html
├── README.md
└── (Teachable Machine model loaded via URL)

🔮 Future Enhancements

🔐 Ignition interlock system (vehicle won’t start without helmet)
🪖 Smart helmet integration with built-in sensors
🚨 Accident detection using motion sensors
📍 GPS-based emergency alerts
📱 Mobile app integration
☁️ Cloud-based analytics for smart cities

Inspired by industry developments such as TVS Motor Company’s automatic helmet detection connected to vehicle ignition systems.

🎯 Use Cases

Two-wheeler rider safety systems 
Smart vehicles  
Smart helmets  
Smart city road safety solutions  
