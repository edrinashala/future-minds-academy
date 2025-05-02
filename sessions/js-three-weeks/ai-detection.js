let data = [
    {
        title: "AI Face Recognition",
        desc: "AI Face Recognition is a technology that uses artificial intelligence to identify or verify a person’s identity by analyzing facial features. It is widely used in security systems, smartphones, and surveillance, offering fast and accurate identification."
    },
    {
        title: "Vehicle Speed",
        desc: "Vehicle speed refers to how fast a vehicle is moving, typically measured in kilometers or miles per hour. It plays a key role in traffic safety, fuel efficiency, and law enforcement monitoring."
    },
    {
        title: "Counting",
        desc: "AI Counting uses artificial intelligence to automatically count objects, people, or events in images or video. It enhances accuracy, saves time, and is widely used in retail, traffic management, and surveillance."
    },
    {
        title: "Bouding Area",
        desc: "A Bounding Area refers to a defined rectangular zone around an object in an image or video, used in computer vision tasks like object detection. It helps AI systems locate, track, and analyze specific items within a scene accurately."
    }
]

const categories = document.querySelector('#categories');
const titleL = document.querySelector('#titleL');
const descL = document.querySelector('#descL');

for(let i=0; i<data.length; i++){
    categories.innerHTML +=`
        <option value="${i}">${data[i].title}</option>
    `;
}

categories.addEventListener('change', (obj)=>{
    let index = obj.target.value;

    titleL.textContent = data[index].title;
    descL.textContent = data[index].desc;
})
