class AuthorObj {
    constructor(authorApi) {
        this.name = authorApi.name;
        this.id = authorApi.id;
        this.username = authorApi.username;
        this.website = authorApi.website;
        this.phone = authorApi.phone;
        this.email = authorApi.email;
        this.address = {
            street: authorApi.address.street,
            lat: authorApi.address.geo.lat,
            lng: authorApi.address.geo.lng,
            city: authorApi.address.city,
            zipcode: authorApi.address.zipcode
        }
        this.company = {
            name: authorApi.company.name,
            bs: authorApi.company.bs
        }
    }
}

export { AuthorObj }