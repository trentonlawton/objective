import DailyForm from '../../src/view/dailyForm.js'

describe("Objective", function() {

		/*
		building objective object
		*/
		function objective(difficulty,data){
  this.difficulty = difficulty;
  this.data = data;
  this.completed = false;
		}

		/*
		sample data pulled from daily objective form
		*/

			var dailyobjective ={name:"trenton",
														objective:[new objective('easy','get coffee'),new objective('easy','get groceries'),
														new objective('easy','get food')]
													}

	describe("Data",function(){
  /*
  initializing a blank objective object to check that it has needed properties
  */
  var instance = new objective();

  /*
  Checks that the new instance has properties
  */

  it("should have difficulty,data,and completed properties", function() {

    expect(instance.hasOwnProperty('difficulty')).toBe(true)
    expect(instance.hasOwnProperty('data')).toBe(true)
    expect(instance.hasOwnProperty('completed')).toBe(true)
  })

  it("should pull data from imput and place it in an object literal with a name and array of objectives",
     function() { expect("foo").toBe("bar") })




	})
/*

Render logic
*/

describe("Render", function() {

  it("Should Render setup ui if the user doesnt have stored data",
     function() { expect("foo").toEqual("cow"); })

  it("should Render the current daily objectives if the user has daily stored objectives",
     function() { expect("food").toEqual("cow") })

  it("should Render previous daily Objectives if the user has previously completed daily objectives",
     function() { expect("foo").toEqual("cow") })

  it("should render the current time left to complete daily objectives if they exist",
     function() { expect("foo").toEqual("cow") })

  it("should render a help view when the user clicks a help tooltip",
     function() {
       expect("foo").toEqual("cow")

     })

})
/*
Saving logic
*/

describe("Save",function(){
  ReactDOM.render(<DailyForm />, div) function savetest(name, data) {
    localStorage.setItem("data", data)
  } spyOn()

  it("should save setup info when the user clicks done to local storage",
     function() {


       savetest("trenton", JSON.stringify(dailyobjective))
       expect(JSON.parse(localStorage.getItem("data")).name).toEqual('trenton')

     })
  it("should save completed state to true on objective object if a user double clicks a rendered objective",
     function() {
       expect("foo").toEqual("cow")

     })
  it("should save completed objective to past objectives if the user double clicks a daily objective",
     function() {
       expect("foo").toEqual("cow")

     })




})

})
