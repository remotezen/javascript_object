function Person(name) {
  this.name = name;
    this.pName = function(){
      print(this.name);
    };
}

p = new Person("fred");
p.pName();
