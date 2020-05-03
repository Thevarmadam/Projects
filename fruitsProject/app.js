const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please check your data entry no name specified"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const mango = new Fruit({
  name: "mango",
  rating: 7,
  review: "Nice!"
});

const orange = new Fruit({
  name: "orange",
  rating: 7,
  review: "Nice!"
});


const banana = new Fruit({
  name: "banana",
  rating: 7,
  review: "Nice!"
});

const peopleSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  age: Number,
  favoriteFruit:fruitSchema
});
const Person = mongoose.model("Person", peopleSchema);



const david =new Person({
  first_name:"David",
  last_name:"Thevarmadam",
  age:18
});

const basil= new Person({
  first_name:"Basil",
  last_name:"Thervarmadam",
  age:44,
  favoriteFruit:mango
});
// basil.save();
// Fruit.insertMany([banana,orange,mango],function(err){
//   if(err){
//     console.log(err);
//
//   }
//   else{
//   console.log("Successfully Added Fruits");
//   }
// })

  // Person.insertMany([david,diane],function(err){
  //   if(err){
  //     console.log(err);
  //
  //   }
  //   else{
  //   console.log("Successfully Added People");
  //   }
  // });


// person.save();
Person.find(function(err, people) {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();

    people.forEach(function(person) {
      console.log(person.first_name);
    })
  }
});

// Fruit.updateOne({name:"apple"},{name:"mango"} ,function(err){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log("Successfully Updated");
//   }
// });

Person.updateOne({first_name:"David"},{favoriteFruit:mango} ,function(err){
  if(err){
    console.log(err);
  }
  else{
    console.log("Successfully Updated");
  }
});


// Person.deleteMany({ first_name:"John" }, function (err) {
//   if (err){
// }
// else{
//   console.log("Successfully Deleted");
// }
// });
