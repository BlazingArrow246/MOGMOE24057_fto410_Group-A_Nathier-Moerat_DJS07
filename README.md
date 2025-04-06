# DJS07 - Build a Meme Generator

Loom recording presentation:https://www.loom.com/share/512cd642ee2241e5adfc7ea8de42648f?sid=1d7991c3-5c47-42ae-8bcc-4a6113394467 

React Meme Generator
Description
This is a React-based meme generator where users can:

1.Create custom memes by adding top and bottom text.

2.Randomly generate meme images using the Imgflip API.

Features:

Dynamic Meme Text: Add custom text to the top and bottom of any meme.

Random Meme Selection: Click a button to load a random meme image.

Modern Design: Styled using CSS and responsive to screen sizes.

Technologies Used:

React: For building the user interface.

Imgflip API: For fetching meme images.

CSS: For styling.

Installation
Clone the repository:

bash
git clone https://github.com/your-username/meme-generator.git
cd meme-generator
Install dependencies:

bash
npm install
Start the development server:

bash
npm start
If you're using Vite:

bash
npm run dev
How to Use
Run the app using the instructions above.

Use the input fields to add custom text for the meme:

Top Text

Bottom Text

Click "Get a new meme image 🖼" to load a random meme template.

Watch as the top and bottom text dynamically appear on the meme image.

Project Structure
src/
│
├── components/
│   ├── Header.jsx
│   ├── Meme.jsx
│
├── index.css
├── App.jsx
├── main.jsx
API Information
Imgflip API:

URL: https://api.imgflip.com/get_memes

Provides a list of popular meme templates for use.

Future Features
Image download support for finished memes.

Ability to upload custom images.

Advanced text styling (color, font size, etc.).