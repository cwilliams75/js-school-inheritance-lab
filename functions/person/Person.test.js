const Person = require('./Person');
test("What is your name?", () => {
    let person = new Person("Bobby", "Digital", 51, "M", "Making Phat Beats");
    let expected = "Bobby";
    let actual = person.name.firstName;
    expect(actual).toEqual(expected);
});
test("Greeting", () => {
    let person = new Person("Bobby", "Digital", 51, "M", "Making Phat Beats");
    let expected = "Hi, my name is Bobby";
    let actual = person.greeting();
    expect(actual).toEqual(expected);
});
test("Bio", () => {
    let person = new Person("Bobby", "Digital", 51, "M", "Making Phat Beats");
    let expected = "This persons name is Bobby Digital and he is 51 years old. He likes Making Phat Beats"
    let actual = person.bio();
    expect(actual).toEqual(expected);
});
test("Array of interests ", () => {
    let person = new Person("Sally", "Mae", 49, "F", ["Working Out", "Building Cars", "Cooking"]);
    let expected = "This persons name is Sally Mae and she is 49 years old. She likes Working Out, Building Cars, and Cooking"
    let actual = person.bio();
    expect(actual).toEqual(expected);
})
test("Array of interests ", () => {
    let person = new Person("Josh", "Peck", 23, "F", ["Working Out", "Building Cars", "Cooking", "Coffee", "Fine dining", "Catch these hands", "HATING on WuTang", "The Cowboys"]);
    let expected = "This persons name is Josh Peck and she is 23 years old. She likes Working Out, Building Cars, Cooking, Coffee, Fine dining, Catch these hands, HATING on WuTang, and The Cowboys"
    let actual = person.bio();
    expect(actual).toEqual(expected);
})