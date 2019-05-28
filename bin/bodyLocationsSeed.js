
const mongoose = require("mongoose");
const bodyLocations = require("../models/bodyLocations.models");



mongoose
  .connect('mongodb://localhost/ironheart', {useNewUrlParser: true})
  .then(x => {
  
  
bodyLocations.create(bodyLocationsSeed)
.then(console.log("made"))
  
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const bodyLocationsSeed = [
  {
    "ID": 16,
    "Name": "Abdomen, pelvis & buttocks",
    "expanded": [{
      "ID": 36,
      "Name": "Abdomen"
    },
    {
      "ID": 40,
      "Name": "Buttocks & rectum"
    },
    {
      "ID": 38,
      "Name": "Genitals & groin"
    },
    {
      "ID": 39,
      "Name": "Hips & hip joint"
    },
    {
      "ID": 37,
      "Name": "Pelvis"
    },]
  },
  {
    "ID": 7,
    "Name": "Arms & shoulder",
    "expanded": [{
                   "ID": 48,
                   "Name": "Arms general"
                 },
                 {
                   "ID": 30,
                   "Name": "Finger"
                 },
                 {
                   "ID": 28,
                   "Name": "Forearm & elbow"
                 },
                 {
                   "ID": 29,
                   "Name": "Hand & wrist"
                 },
                 {
                   "ID": 26,
                   "Name": "Upper arm & shoulder"
                 },]
  },
  {
    "ID": 15,
    "Name": "Chest & back",
    "expanded": [
                  {
                    "ID": 33,
                    "Name": "Back"
                  },
                  {
                    "ID": 31,
                    "Name": "Chest"
                  },
                  {
                    "ID": 32,
                    "Name": "Lateral chest"
                  },]
  },
  {
    "ID": 6,
    "Name": "Head, throat & neck",
    "expanded": [{
                 "ID": 23,
                 "Name": "Face & eyes"
               },
               {
                 "ID": 22,
                 "Name": "Forehead & head in general"
               },
               {
                 "ID": 21,
                 "Name": "Hair & scalp"
               },
               {
                 "ID": 25,
                 "Name": "Mouth & jaw"
               },
               {
                 "ID": 24,
                 "Name": "Nose, ears, throat & neck"
               },
              ]
  },
  {
    "ID": 10,
    "Name": "Legs",
    "expanded": [ {
                  "ID": 44,
                  "Name": "Foot"
                },
                {
                  "ID": 49,
                  "Name": "Legs general"
                },
                {
                  "ID": 43,
                  "Name": "Lower leg & ankle"
                },
                {
                  "ID": 41,
                  "Name": "Thigh & knee"
                },
                {
                  "ID": 45,
                  "Name": "Toes"
                }]
  },
  {
    "ID": 17,
    "Name": "Skin, joints & general",
    "expanded": [  {
                  "ID": 47,
                  "Name": "General, joints & other"
                  },
                  {
                  "ID": 46,
                  "Name": "Skin"
                }]
  }
]

