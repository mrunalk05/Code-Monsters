const { Router } = require("express");
const jwt = require("jsonwebtoken");
const express = require("express");
//const router= express.Router();
//const router= require('express');
const bodyparser = require("body-parser");

//require('../db/conn');
//const idpass = require("../model/idpassSchema");

const app = express();
//const ap= router();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

const mongoose = require("mongoose");
//const { compare } = require("bcrypt");

const DB =
  "mongodb+srv://Mrunalk:Mrunalk@cluster0.jewb3.mongodb.net/hackathon?retryWrites=true&w=majority";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    //useCreateIndex:true,
    useUnifiedTopology: true,
    //useFindAndModify:false
  })
  .then((res) => {
    //console.log(res.models.user)
    console.log(`connection sucessfull`);
  })
  .catch((err) => console.log(`no connection`, err));

//Middleware

// const middleware= (req, res, next)=>{
//     console.log(`Hello my middleware`);
//     next();
// }

//routes

// const ciri= require('./ciriculum');
// const ciriyr = require('./ciriculum/year');
// const ciriyrbr= require('./ciriculum/year/branch');
// const nonciri= require('./nonciriculum');
// const nonciricl= require('./nonciriculum/clubs');
// const nonciriclacm= require('./nonciriculum/clubs/acm');
// const cafeteria= require('./cafeteria');

app.get("/", (req, res) => {
  res.send(`Hello World!!`);
});

app.get("/about", (req, res) => {
  res.cookie("test", "123456");
  res.send(`Hello about!!`);
});

app.get("/ciriculum", (req, res) => {
  res.send(`Hello World!!`);
});
app.get("/ciriculum/year", (req, res) => {
  res.send(`Hello World!!`);
});
app.get("/ciriculum/year/branch", (req, res) => {
  res.send(`Hello World!!`);
});

app.get("/non-ciriculum", (req, res) => {
  res.send(`Hello World!!`);
});
app.get("/non-ciriculum/clubs", (req, res) => {
  res.send(`Hello World!!`);
});
app.get("/non-ciriculum/clubs/clubname", (req, res) => {
  res.send(`Hello World!!`);
});

app.get("/cafeteria", (req, res) => {
  res.send(`Hello World!!`);
});

app.listen(5500, () => {
  console.log(`server is running at port 3000`);
});

//schema

//const mongoose= require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

const user = mongoose.model("user", userSchema);
//module.exports= idpass;

//generating token

userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_key);
    this.tokens = this.tokens.concat({ token: token });

    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

//login

app.post("/signin", async (req, res) => {
  //console.log(req.body);
  // res.json({message:"awesome"});

  try {
    let token;
    const { email, password } = req.body;
    console.log(email, password);
    // if(!email || !password){
    //     return res.json({error:"Plz fill the data"})

    const userlogin = await user.findOne({ email: email });
    // findone({email:"email"});
    // user
    //   .findOne({ email: "mrunalkhade35@gmail.com" })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
    // user.find();
    //console.log(user.find({}))

    // console.log(userlogin);
    //let token;

    if (userlogin) {
      const ismatch = await user.findOne({ password: password });
      console.log(ismatch);
      // token = await userlogin.generateAuthToken();
      let token = jwt.sign(
        { _id: userlogin._id },
        "MrunalLovesNodeJS123456789"
      );

      console.log(token);

      res.cookie("jwt", token, {
        maxAge: 3 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      }); // 3 days

      //  res.cookie("jwtoken", token, {
      //   expires:new Date(Date.now()+25892000000),
      //   httpOnly:true
      //  });

      if (!ismatch) {
        res.status(400).json({ error: "user error!!" });
      } else {
        res.send({ message: "user signin sucefull!!" });
      }
    } else {
      res.status(400).json({ error: "user error!!" });
    }
  } catch (err) {
    console.log(err);
  }
});

//login
//const Router = require('express').Router();
//const UserSchema = require('../../models');

//const { validatePassword } = require('../../middlewares/validatePassword')

// const jwt = require('jsonwebtoken')
// Router.post('/login', async (req, res) => {
//     const { email, password } = req.body;

//     const user = await UserSchema.findOne({ email: email })
//     if (!user) {
//         res.status(404).json({ "Error": "User Not Found" })
//     }
//     else if (validatePassword(user, password)) {
//         const token = jwt.sign({ id: user.id }, process.env.SECRET_FOOKIN_KEY);
//         res.cookie('jwt', token, { maxAge: 3 * 24 * 60 * 60 * 1000, httpOnly: true }); // 3 days
//         res.status(200).json({ "message": "Logged in successfull", token ,user })
//     } else {
//         res.status(401).json({ "Error": "Wrong Password" })
//     }

// })

//schema 2(lecture)

const lecSchema = new mongoose.Schema({
  cse: {
    type: Object,
    required: true,
  },
  sy: {
    type: Object,
    required: true,
  },
  mon: {
    type: Object,
    required: true,
  },
  slot1: {
    type: String,
    required: true,
  },
  slot2: {
    type: String,
    required: true,
  },
  slot3: {
    type: String,
    required: true,
  },
  slot4: {
    type: String,
    required: true,
  },
  slot5: {
    type: String,
    required: true,
  },
  slot6: {
    type: String,
    required: true,
  },
});

const lecture = mongoose.model("lecture", lecSchema);
lecture
  .findOneAndUpdate({cse:{sy:{mon:{slot1:"os"}}}})
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
// lecture
//   .findOne({cse:{}
//     // cse: {
//     //   sy: {
//     //     mon: {
//     //       slot1: "os",
//     //       slot2: "cn",
//     //       slot3: "dbms",
//     //       slot4: "",
//     //       slot5: "os",
//     //       slot6: "flat",
//     //     },
//     //   },
//     // },
//   })
//   .then((data) => {
//     console.log(data);
//   });
// lecture.findOne()
// const cse =  new lecture({
//   "cse": {
//     "sy": {
//       "mon": {
//         "slot1": "os",
//         "slot2": "cn",
//         "slot3": "dbms",
//         "slot4": "",
//         "slot5": "os",
//         "slot6": "flat",
//       },
//     },
//   },
// });

// cse.save((err, doc) => {
//   console.log(err?err:"Success")
// });
