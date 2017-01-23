// code solution here
class President {
  constructor(name, politicalParty, yearsInOffice, homeState) {
    this.name = name
    this.politicalParty = politicalParty
    this.yearsInOffice = yearsInOffice
    this.homeState = homeState
  }
  veto(){
    return "NO!"
  }

  passBill(){
    return "You can do that!"
  }

  doCharity(){
    return "I like to help people."
  }

  conductPressInterview(){
    return "I am proud to be an American."
  }

  sayHi(){
    return `Hi, my name is ${this.name}. I am from ${this.homeState}. I represent the ${this.politicalParty}s, and was in office ${this.yearsInOffice}.`
  }
}

var georgeWashington = President.new("George Washington", null, 8, "Virgina")
var abrahamLincoln = President.new("Abraham Lincoln", "Republican", 4, "Illinois" )
var richardNixon = President.new("Richard Nixon", "Republican", 4, "California" )
var JimmyCarter = President.new("Jimmy Carter", "Democratic", 4, "Georgia" )
