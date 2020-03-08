function getName() {
  console.log(this.name);
  return this;
}

function getCountry() {
  console.log(this.country);
  return this;
}



const prod = {
  name: "Eugene",
  country:"Ukraine",
  getName,
  getCountry,
  surname: "Vakerin",
  func1: function() {
    console.log(this);
  },
  info: function() {
    console.log(this);
  },
  info2: {
    insideInfo2: ["2.3ghz"],
    func3: function() {
      console.log(this);
    },
  },
};

const prod2 = {
  name: "Karina",
  country:"Germany",
  surname: "Beautiful",
  getSurname() {
    console.log(this.surname);
  },
  func1: function() {
    console.log(this);
  },
  info: function() {
    console.log(this);
  },
  info2: {
    insideInfo2: ["2.3ghz"],
    func3: function() {
      console.log(this);
    },
  },
};

// prod.getName();
// prod2.getSurname();

// prod2.getName = prod.getName;
// prod2.getName();

prod.getName().getCountry();
getName.call(prod2);

