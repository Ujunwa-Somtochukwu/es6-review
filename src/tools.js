var logger = output => {
    console.log(output)
}
export var appName ="ES6 Review";
export var dummyFunction = () => {
    return "i am a dummy function";
}
export default logger;

export const genericFunction = () => {
    let languages = ['Python','Javscript','java','C#','C++'];
    let [firstLang,secondLang, ...otherLanguages] = languages;
    return `First Language is ${firstLang} and the second language is ${secondLang}.The rest are ${otherLanguages}. `
}





export const sibas = () => {
    let personalInformation = {
        firstname : " Somtochuwkuwu",
        lastname : "Ujunwa",
        gender : "Female",
        religon : "Christianity(Pentecostal)",
        fathersName : "Fortune",
        mothersName : "Emem"
    }
    let {firstname,lastname,...otherPersonalInfo} = personalInformation;
    return `The first name is ${firstname} and the lastname is ${lastname}. Others are: gender = ${otherPersonalInfo.gender}; religon = ${otherPersonalInfo.religon}; etc. `;
}

export const credentials = () => {
    let Biodata = {
        personalInformation : {
            firstName : 'Somtochukwu',
            lastName : 'Ujunwa',
            gender : 'Female',
            religon : 'Christian (pentecostal)',
            fathersName : 'Fortune',
            mothersName : 'Emem'
        },
        education : {
            highestQualificationObtained : 'High-school diploma',
            institution : 'Graceland-College'
        },
        occupation : 'Aspiring Artifical Intelligence specialist and software developer',
        skills : ['hosting','draftiing'],
        interestsAndHobbies : ['coding','reading','sleeping','photography','baking']
    }
    let {personalInformation : {firstName,lastName},occupation} = Biodata;
    let {personalInformation, ...otherBioData} = Biodata; //let {personalInformation,education, ...otherBioData} = Biodata; return `Firstname is ${personalInformation.firstName} and lastname is ${personalInformation.lastName}. The occupation is ${otherBioData.occupation}. Alot more data are available for exammple(this will also work)
    return `Firstname is ${firstName} and lastname is ${lastName}. The occupation is ${occupation}. Alot more data are available for exammple:
    Gender: ${personalInformation.gender}
    Religon: ${personalInformation.religon}
    Skills: ${otherBioData.skills}
    Interest and Hobbies: ${otherBioData.interestsAndHobbies}
    Eduction: Higehest qualification obtained is ${Biodata.education.highestQualificationObtained} from ${Biodata.education.institution} ` 
}
/*let {personalInformation : {firstName,lastName}, education :{highestQualificationObtained,institution},occupation} = Biodata;
    let {personalInformation,education, ...otherBioData} = Biodata; //let {personalInformation,education, ...otherBioData} = Biodata; return `Firstname is ${personalInformation.firstName} and lastname is ${personalInformation.lastName}. The occupation is ${otherBioData.occupation}. Alot more data are available for exammple(this will also work)
    return `Firstname is ${firstName} and lastname is ${lastName}. The occupation is ${occupation}. Alot more data are available for exammple:
    Gender: ${personalInformation.gender}
    Religon: ${personalInformation.religon}
    Skills: ${otherBioData.skils}
    Interest and Hobbies: ${otherBioData.interestsAndHobbies}
    Eduction: Higehest qualification obtained is ${highestQualificationObtained} from ${institution} `
    this will also work */

export const product = (a,b =1) => { //In summary, default parameters provide a fallback value if no parameter is provided, while rest parameters allow you to capture multiple arguments into an array within the function. They both make functions more flexible and easier to use in different situations.
    return (a*b);
}

export const multiplier = (...numbers) => {
    var product = 1;
    if (numbers.length < 2) {
        throw new error ("illegal arguments counts. Arguments must be greater than 1")
    }
    for (let number of numbers ) {
        product = product * number;
    }
    return product;
}

export const arithimetic = (m,c,...x) => {
    let coordinates = x.map((x) => {
        return {'x':x,'y':(m*x)+c};
    })
    let output = 'The (x,y) values are as follows'
    for (let coordinate of coordinates) {
        let xy = `(${coordinate.x},${coordinate.y})` // iterates through each x,y pair in the coordinates array
        output+= xy;

    }
    return output;
}
/*The genericFunction calculates y values for given x values using the formula (m*x) + c.
It then constructs a string representing each (x, y) pair and combines them into a single output string.
Finally, it returns the output string containing all the (x, y) pairs.
So, if you call genericFunction(2, 3, 1, 2, 3), it will calculate y values for x values 1, 2, and 3 using the formula (2*x) + 3, and return a string representing the (x, y) pairs. */
export const area = (b,...h) => {
    let values = h.map((h) => {
        return {'h':h,'a':1/2*(b*h)}
    })
    let output = `The area of the triangle with height are`
    for( let e of values) {
        let ha = `(${e.h},${e.a})`
        output+=ha
    }
    return output
}
const toTitleCase = (str) => { // defines a function called toTiltCase
    str.toLowerCase();//sets the whole string to lower case
    return str.substring(0,0) + str[0].toUpperCase() + str.substring(1);
} /*str.substring(0, 0): This part of the code is trying to extract the first character of the string. However, the substring method is being used incorrectly here. The syntax str.substring(0, 0) will always return an empty string.
str[0].toUpperCase(): This part accesses the first character of the string str and converts it to uppercase using the toUpperCase() method.
str.substring(1): This part extracts the substring of str starting from the second character (index 1) to the end of the string. */
export class Person{
    constructor(firstName,lastName,gender,height) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.height = height;
}
// similar to the pre Es6 javascript just new keywords such as class and constructor 
getfirstName(){
    return toTitleCase(this.firstName)
}
};

export class CustomMath {
    static sqrt(a) {
        return Math.sqrt(a);
    }
    static pow(a,b) {
        return Math.pow(a,b);
    }

}

export class User extends Person {
    constructor(username,password,firstName,lastName,gender,height) {
        super (firstName,lastName,gender,height);
        this.username = username;
        this.password = password;

    }
}
/*if you have a class Person with a constructor that sets properties like firstName, lastName, gender, and height, and you have a subclass Student that extends Person, calling super(firstName, lastName, gender, height) inside Student's constructor would initialize these properties in the Student class as well, using the constructor logic defined in the Person class. */

/*  22ND April 2024 (Crash course on React).
a library i s a collection of modules and modules consist of functions and properties. A system that can leverage on react to build native mobile apps is 'react native'
it is a framework for mobile. SPA's are single page applications and to manage such applications are not easy at all.
every site has a request response; when you send something to the server youre sending a request and the server gives a response. 
the early days had a redrawl issue,in the sense that when you clicked on a site that had a link, the site redraws. in order to solev this issue,
a new system that allowed parts of the parent page to be componentized. every componsent has a state and what you see at that point in time determins the state. 
when the state of the componsent changes the user sees something else that reflects the state. The states keep changing depending on activities. So only that componsent will be rendered and the rest will be left in peace.
if the state changed it will be rerendered and each componsent will have its own state and the component that doesnt experience any change isnt re rendered.

SELECTIVE REDNERING: once the physical DOM changes the whole page is redrawn. so facebook had to create another DOM called Virtual DOM so that changes can be made in the virtual Dom and the whole 
page doesnt have to be redrawn because it is only when the physical DOM changes that thepage is redrawn. The physical DOM changes but 
*/