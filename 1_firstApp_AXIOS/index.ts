import axios from 'axios'

// compiler on terminal type tsc index.ts [nameofile]
// ts-node index.ts

// interface is in type script use to define the structure of an object 
interface Post {
    userId: number;
    title: string;
    body: string;
}


const url = "https://jsonplaceholder.typicode.com/posts/1"

// async : receives a promise in return
axios.get(url).then(res => {
    const post = res.data as Post

    const userId = post.userId
    const title = post.title
    const body = post.body

    printPost(userId, title, body)
})

const printPost = (userId: number, title: string, body: string)=>{

    console.log(`
    User ID is ${userId}
    title of post : ${title}
    Post Content : ${body}
`)
}

