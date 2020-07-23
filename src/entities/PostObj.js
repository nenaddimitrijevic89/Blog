class PostObj {
    constructor(postApi) {
        this.body = postApi.body;
        this.title = postApi.title;
        this.id = postApi.id;
        this.userId = postApi.userId;
    }
}

export { PostObj }