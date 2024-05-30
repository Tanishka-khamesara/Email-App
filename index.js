const express = require("express");
const nodemon = require("nodemon");
const nodemailer = require("nodemailer");

app = express();
app.use(express.urlencoded())

// const transporter = nodemailer.createTransport({
//     host:,
//     port:,
//     secure: true,
//     auth: {
//         user: "tanishkajain24941@gmail.com",
//         pass:""
//     }
// })
const transporter = nodemailer.createTransport({
    host:"localhost",
    port: 1025,
    secure: false,
})
// const mailoptions = {
//     from: "abcaaaaaaaaaaa2gmail.com",
//     to: "recipent@gmail.com",
//     subject: "sending email using nodemailer",
//     // text:"this is a plain text email body"
//     //you can send html also instead of text
//     html:""
// }

// transporter.sendMail(mailoptions, (error, info) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("email sent",info.response)
//     }
// })

app.get("/", (req,res) => {
    res.send(` <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Form</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
      form {
        background-color: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        width: 400px;
      }
      label {
        font-weight: bold;
      }
      input[type="email"],
      input[type="text"],
      textarea {
        width: 100%;
        padding: 10px;
        margin-top: 5px;
        margin-bottom: 15px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
      }
      textarea {
        height: 100px;
      }
      button {
        background-color: #4CAF50;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
      }
      button:hover {
        background-color: #45a049;
      }
    </style>
    </head>
    <body>
    
    <form action="/send-email" method="post">
      <label for="email">Email:</label><br>
      <input type="email" id="email" name="email" required><br>
      <label for="subject">Subject:</label><br>
      <input type="text" id="subject" name="subject" required><br>
      <label for="message">Message:</label><br>
      <textarea id="message" name="message" rows="4" required></textarea><br><br>
      <button type="submit">Send Email</button>
    </form>
    
    </body>
    </html>`)
})

app.post("/send-email", (req, res) => {
    console.log(req.body);
    const mailoptions = {
        from: "abcaaaaaaaaaaa2gmail.com",
        to: req.body.email,
        subject: req.body.subject,
        text: req.body.message,
        //you can send html also instead of text
        html: ""
    };
    transporter.sendMail(mailoptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log("email sent", info.response);
        res.send("email sent succesfully");
    }
})
})


app.listen(8080, () => {
    console.log("server is up and running on port 8080");
})