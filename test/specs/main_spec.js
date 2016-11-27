describe("Objective", function() {


	/*

Render logic
	*/

  describe("Render", function() {

    it("Should Render setup ui if the user doesnt have stored data",
       function() { expect("foo").toEqual("cow"); })

	  it("should Render the current daily objectives if the user has daily stored objectives",
       function() { expect("food").toEqual("cow") })

	  it("should Render previous daily Objectives if the user has previously completed daily objectives",
       function() {
         expect("foo").toEqual("cow")
       })

		it("should render the current time left to complete daily objectives if they exist",
			function(){
				expect("foo").toEqual("cow")
		})

		it("should render a help view when the user clicks a help tooltip",
			function(){
				expect("foo").toEqual("cow")

		})

  })
/*
Saving logic
*/

describe("Save",function(){

	it("should save setup info when the user clicks done to local storage",function(){
		expect("foo").toEqual('cow')

	})
	it("should save completed state to true on objective object if a user double clicks a rendered objective",
function(){
expect("foo").toEqual("cow")

})
it("should save completed objective to past objectives if the user double clicks a daily objective",
function(){
epect("foo").toEqual("cow")

})




})

})
