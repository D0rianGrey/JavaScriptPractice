function getName() {
  console.log(this.name);
}

const prod = {
  name: "Eugene",
  getName,
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

prod.getName();
prod2.getSurname();

prod2.getName = prod.getName;
prod2.getName();
