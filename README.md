# BIGVU
Download the project zip.
In the project directory open cmd and run the following commands:
  npm init
  npm i express
  npm i puppeteer
  npm i fluent-ffmpeg
  npm i @ffmpeg-installer/ffmpeg
 
In order to run the program write in the terminal the command npm start.
The server is listening to POST request on http://localhost:3000/addVideo
in the body of the request you should write json object like the following:
{
    "url": "www.google.com"
}
The response should be in the form of json object like the following:
{
  "file": "path to the mp4 file"
}
