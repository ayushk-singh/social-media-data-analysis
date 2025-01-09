# Social Media Analysis
This project analyzes social media data stored in a DataStax database to provide insights using LangFlow. The backend leverages Express.js, while the frontend is built with Next.js and TypeScript. Insights are visualized using Chart.js.

## Features

- Fetch social media engagement data from a DataStax NoSQL database.
- Process the data using LangFlow for insights and predictions.
- Visualize data with interactive charts using Chart.js.
- Provides useful metrics like likes, shares, and comments per post.
- Frontend built with Next.js and TypeScript for fast rendering and type safety.
- Backend API built with Express.js to serve data and insights.

## Tech Stack

- **Frontend**: Next.js, TypeScript, Chart.js
- **Backend**: Express.js, LangFlow, Node.js
- **Database**: DataStax Astra DB (NoSQL)
- **Analytics**: LangFlow for processing data and generating insights

### Access the Application

Visit [[https://media-metrics-supermind.vercel.app](https://media-metrics-supermind.vercel.app/)] in your browser to access the application.

## Usage

1. The app fetches engagement data (likes, shares, comments) for social media posts.
2. Insights and analytics are processed through LangFlow and visualized in the frontend using interactive charts powered by Chart.js.
3. You can explore the insights and track the engagement trends over time.


## Project Setup

1. Clone the project
2. rename `env.sample` to `.env` and fill the required API tokens
3. Upload social_media_flow.json to your langflow account
4. Update your grok api key

### Backend Setup
1. Go inside /backend
2. Run `npm install`
3. Run `npm run dev`
4. To test the backend make a postman request at `http://127.0.0.1:3000/langflow`

### Frontend Setup
1. Go inside /frontend
2. Run `npm install`
3. Run `npm run dev`
4. To test visit `http://127.0.0.1:3000`

### Demo
![image](https://github.com/user-attachments/assets/58acb5c5-65d0-4b60-9f5b-2a831fb47e3c)
![image](https://github.com/user-attachments/assets/1aa8bc53-257a-4582-87a8-f3ad2e600e31)
![image](https://github.com/user-attachments/assets/6b8112d6-33f1-4596-adea-f0b9a3d199f0)
![image](https://github.com/user-attachments/assets/dce20045-1e98-4847-addd-77e9b3730c12)
![image](https://github.com/user-attachments/assets/574ffcde-aed9-4551-b1fd-7b8beee92aca)









