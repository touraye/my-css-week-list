// blog post
const posts = [
    {
        img: './images/git-new-repo.png',
        topic: 'source control',
        title: 'Git Command - 10 Terminals Every Developer Should Know',
        info: ' Git is important part of daily programming(when working with teams) and is widely used in the Software Industry...',
        writerImg: './images/one.jpg',
        writerName: 'pa ebou',
        time: '1h ago'
    },
      {
        img: './images/ui.jpeg',
        topic: 'front-end',
        title: 'How To Become a Better Front-end Web Developer in 2021',
        info: 'A Front End Engineer and UX Designer that are passionate tackling challenges that make the World a better place....',
        writerImg: './images/two.jpg',
        writerName: 'pa ebou',
        time: '3h ago'
      },
        {
        img: './images/work-shop.jpg',
        topic: 'Hackathons',
        title: 'Why Hackathons Make You A Better Developer',
        info: 'Over the course of my life, I have participated in more than 10 hackathons, so i might be biased on them, but on the other hand, I....',
        writerImg: './images/one.jpg',
        writerName: 'pa ebou',
        time: '1d ago'
        },
          {
        img: './images/node.jpeg',
        topic: 'Back-end',
        title: 'The Most Popular Backend Technologies',
        info: 'As the higher in the demand for more sophisticated web apps the more the need for....',
        writerImg: './images/reader2.jpg',
        writerName: 'pa ebou',
        time: '2d ago'
          },
            {
        img: './images/learning.jpg',
        topic: 'Software Engineering',
        title: '10 Rules Of Every Software Developer Should Follow',
        info: 'The way the stack moves is very difficult to stay on the track, but here are the few tips you need...',
        writerImg: './images/reader1.jpg',
        writerName: 'pa ebou',
        time: '2m ago'
  },
            {
        img: './images/ux.jpg',
        topic: 'freelancing',
        title: 'How To Make Money As A Freelance Web Developer',
        info: '9 to 5 job will make you a well paid geek, but with some extract income...',
        writerImg: './images/reader1.jpg',
        writerName: 'pa ebou',
        time: '1w ago'
  },
            {
        img: './images/ubuntu.jpg',
        topic: 'Development & OSs',
        title: 'Why Linux Stands Out As the Best OS For Programming',
        info: 'Linux gives developers lots of freedoms and it has distro almost for anything...',
        writerImg: './images/reader1.jpg',
        writerName: 'pa ebou',
        time: '1m ago'
    }
]


const container = document.querySelector( '.container' );

window.addEventListener( 'DOMContentLoaded', () => {
    displayBlogs(posts);
})

const displayBlogs = (post) => {
    let blogs = post.map( blog => {
        
        return `
        <div class="card">        
        <div class="card-header">
                  <img src="${blog.img}" alt="" />
                </div>
                <div class="card-body">
                  <span class="tag tag-teal">${blog.topic}</span>
                  <h4>
                    ${blog.title}
                  </h4>
                  <p>
                    ${blog.info}
                  </p>
                  <div class="user">
                    <img src="${blog.writerImg}" alt="" />
                    <div class="user-info">
                      <h5>${blog.writerName}</h5>
                      <small>${blog.time}</small>
                    </div>
                  </div>
                </div>
                </div>`                        
    } )
    
            blogs = blogs.join( '' );
            container.innerHTML = blogs;            
}

