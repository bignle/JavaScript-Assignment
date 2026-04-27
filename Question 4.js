/*
Create
a JavaScript object named post representing a social media post with
    these properties: username, caption, likes, comments (array data type).

Add a method inside the object named addLike() that increases the like count by 1.
Then, use object destructuring to extract and print the username and caption.
    */

let post = {
    username: "nkazimulo",
    caption: "Life is like a sandwhich, whichever way you flip it, the bread comes first 👌",
    likes: 10,
    comments: ["Nice", "this is so coool", "ayy bro lets go for a brand shoot"],

    addLike: function(){
        this.likes = this.likes +1;
    }

}

let{username, caption} = post;
console.log("Username: ",username);
console.log("Caption: ",caption);