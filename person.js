class Person {
    constructor(firstName,lastName,age,street,city,country,postcode,email,phone){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.street = street;
        this.city = city;
        this.country = country;
        this.email = email;
        this.phone = phone;
    }

    getInfo() {
        console.log(`The person ${this.firstName} ${this.lastName} is ${this.age} years old.`); 
    }
    getLocation() {
        console.log(`${this.firstName} ${this.lastName}'s adress is st.${this.street} ${this.postcode} ${this.city}, ${this.country}`); 
    }
    getContact() {
        console.log(`Contact info:\n email : ${this.email},\n phone: ${this.phone}`); 
    }
}

exports.Person = Person