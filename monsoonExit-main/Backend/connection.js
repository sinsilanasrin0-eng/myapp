const mongoose = require("mongoose");
//Write missing code here
mongoose
  .connect(
  "mongodb+srv://sinsilanasrin0:sinsilanasrin@cluster0.bqactkd.mongodb.net/monsooon?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
