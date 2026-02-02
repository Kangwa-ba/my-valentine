<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Be My Valentine 💘</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      height: 100vh;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(135deg, #ff9a9e, #fad0c4);
    }

    .container {
      text-align: center;
      background: white;
      padding: 40px;
      border-radius: 20px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    }

    h1 {
      margin-bottom: 30px;
    }

    button {
      padding: 15px 30px;
      font-size: 18px;
      border: none;
      border-radius: 12px;
      cursor: pointer;
      margin: 10px;
      position: relative;
    }

    #yes {
      background-color: #ff4d6d;
      color: white;
    }

    #no {
      background-color: #ccc;
    }

    #message {
      display: none;
      font-size: 22px;
      margin-top: 20px;
      color: #ff4d6d;
      font-weight: bold;
    }
  </style>
</head>
<body>

  <div class="container">
    <h1>Will you be my Valentine? 💘</h1>

    <button id="yes">Yes ❤️</button>
    <button id="no">No 😅</button>

    <div id="message">
      YAY!!! 😍💖 
      You just made me the happiest man alive. 
      Valentine’s Day is OURS 🥂✨
    </div>
  </div>

  <script>
    const noBtn = document.getElementById("no");
    const yesBtn = document.getElementById("yes");
    const message = document.getElementById("message");

    noBtn.addEventListener("mouseover", () => {
      const x = Math.random() * 300 - 150;
      const y = Math.random() * 300 - 150;
      noBtn.style.transform = `translate(${x}px, ${y}px)`;
    });

    yesBtn.addEventListener("click", () => {
      message.style.display = "block";
      noBtn.style.display = "none";
      yesBtn.style.display = "none";
    });
  </script>

</body>
</html>
