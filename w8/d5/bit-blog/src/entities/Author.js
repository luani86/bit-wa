class Author {
    constructor(author) {
        this.id = author.id;
        this.name = author.name;
        this.username = author.username;
        this.email = author.email;
        this.phone = author.phone;
        this.street = author.address.street;
        this.city = author.address.city;
        this.zipcode = author.address.zipcode;
        this.companyName = author.company.name;
    }
}

export default Author;