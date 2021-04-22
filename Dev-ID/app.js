let data = [
    {
        fisrt_name: 'ebrima',
        last_name: 'touray',
        designation: 'web developer',
        emp_id: 09934,
        img: '../assets/images/eb2.jpg',
        cetegory: 'staff'
    },
    {
        fisrt_name: 'abd al',
        last_name: 'camara',
        designation: 'Director G',
        emp_id: 09931,
        img: '../assets/images/image-colton.jpg',
        cetegory: 'admin'
    },
    {
        fisrt_name: 'ebrima',
        last_name: 'faal',
        designation: 'web developer',
        emp_id: 09932,
        img: '../assets/images/image-irene.jpg',
        cetegory: 'part-t'
    },
    {
        fisrt_name: 'alasana',
        last_name: 'camara',
        designation: 'registerer',
        emp_id: 09933,
        img: '../assets/images/image-anne.jpg',
        cetegory: 'admin'
    },
    {
        fisrt_name: 'ebrima',
        last_name: 'jallow',
        designation: 'database admin',
        emp_id: 09935,
        img: '../assets/images/eb2.jpg',
        cetegory: 'staff'
    },
    {
        fisrt_name: 'ismaila',
        last_name: 'turner',
        designation: 'data admin',
        emp_id: 09936,
        img: '../assets/images/image-colton.jpg',
        cetegory: 'staff'
    },
    {
        fisrt_name: 'essu',
        last_name: 'fonny',
        designation: 'network engineer',
        emp_id: 09937,
        img: '../assets/images/image-irene.jpg',
        cetegory: 'staff'
    },
    {
        fisrt_name: 'lamin',
        last_name: 'gibba',
        designation: 'database admin',
        emp_id: 09938,
        img: '../assets/images/image-colton.jpg',
        cetegory: 'part-t'
    },
    {
        fisrt_name: 'gibreal',
        last_name: 'ceesay',
        designation: 'project manager',
        emp_id: 09938,
        img: '../assets/images/image-colton.jpg',
        cetegory: 'staff'
    }
]



// selectors from html
const card = document.querySelector('.info');
const fisrt_name = document.querySelector('.first-name');
const last_name = document.querySelector('.last-name');
const designation = document.querySelector('.designation');
const emp_id = document.querySelector('.emp-id');
const img = document.querySelector('.dev-img');
const category = document.querySelector('.role');

const btnNext = document.querySelector('.btn-right');
const btnPrev = document.querySelector('.btn-left');

let currentItem = 0;

// Windows Event
window.addEventListener('DOMContentLoaded', ()=>{
    showPerson(currentItem);
});


// show person
const showPerson = (person) => {
    let item = data[person];
    img.src = item.img;
    fisrt_name.textContent = item.fisrt_name
    last_name.textContent = item.last_name;
    designation.textContent = item.designation;
    emp_id.textContent = item.emp_id;
    category.textContent = item.cetegory;
}

// next person
btnNext.addEventListener('click', () => {    
    currentItem++;
    if(currentItem > data.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
})

// prev person

btnPrev.addEventListener('click', () => {
    currentItem--;
    if(currentItem < 0){
        currentItem = data.length - 1;
    }
    showPerson(currentItem);
})