export function definePost() {
    class Post extends HTMLElement { }
    customElements.define('post-articles', Post, { extends: 'div'})

    class PostTitle extends HTMLElement { }
    customElements.define('post-title', PostTitle, { extends: 'div'})

    class PostDate extends HTMLElement { }
    customElements.define('post-date', PostDate, { extends: 'div'})

    class PostSummary extends HTMLElement { }
    customElements.define('post-summary', PostSummary, { extends: 'div'})
}

export function generatePostId() {
    return crypto.randomUUID();
}

/**
 * @typedef {{
 * title: string
 * date: string
 * summary: string
 * }} Post
 */


export const examplePost = {
    "title": "A Day in UCSD",
    "date": "09/17/2021",
    "summary": "Today was a great day"
};

/**
 * @param {string} [postId] id of post
 * @param {Post} [post]  post
 * @return {DocumentFragment}
 */

export function renderPost(postId,post){
    const template = document.getElementById('post-template')
    const postElement = template.content.cloneNode(true);
    postElement.children[0].dataset.postId = postId;

    const titleH1= postElement.querySelector("post-title > h1");
    titleH1.textContent = post.title;

    const dateH2= postElement.querySelector("post-date > h2");
    dateH2.textContent = post.date;

    const summaryP= postElement.querySelector("post-summary > p");
    summaryP.textContent = post.summary;

    return postElement
};

/**
 * 
 * @param {string} postId 
 * @param {Post|undefined} post 
 * @param {HTMLElement} container 
 */
 export function displayPost(postId, post, container) {
    const postElement = renderPost(postId,post);

    const existing = container.querySelector(`[data-post-id]="${postId}"`)
    if(existing) {
        existing.remove();
    }

    if(post) {
        container.appendChild(postElement);
    }

}

//export { definePost, generatePostId, examplePost, renderPost,displayPost};


// let posts = [{title:"title",date:"date",summary:"summary"}];



// document.addEventListener('DOMContentLoaded', function(){
//     let addBtn = document.getElementById("add");
//     let dialog = document.getElementById("dialog");
//     let submitAdd = document.getElementById("submitAdd");
//     let list = document.getElementById("list");
//     let title = document.getElementById('title');
//     let date = document.getElementById('date');
//     let summary = document.getElementById('summary');

//     addBtn.addEventListener('click',function() {
//         dialog.open = true;
//     });
    
//     submitAdd.addEventListener('click', function(){
//         posts[posts.length] = {
//             title: title.value,
//             date: date.value,
//             summary: summary.value
//         }
//         loadInfo();
//     });
// });

// export function loadInfo(){
//     let title = document.getElementById('title');
//     let date = document.getElementById('date');
//     let summary = document.getElementById('summary');
    
//     for(let i = 0; i < posts.length; i++) {
//         let strTemp = `<li> ${title.value}, ${date.value},${summary.value}</li>`
//         list.innerHTML = list.innerHTML + strTemp;
//     }
// }