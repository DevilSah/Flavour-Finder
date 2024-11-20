const findButton = document.getElementById("find-button");
const tasteSelect = document.getElementById("taste");
const videoSection = document.getElementById("video-section");

const videoData = {
    spicy: [
        { title: "Spicy Tacos Recipe", url: "https://www.youtube.com/embed/1" },
        { title: "Hot Chili Noodles", url: "https://www.youtube.com/embed/2" }
    ],
    sweet: [
        { title: "Chocolate Cake", url: "https://www.youtube.com/embed/3" },
        { title: "Fruit Smoothies", url: "https://www.youtube.com/embed/4" }
    ],
    savory: [
        { title: "Savory Pancakes", url: "https://www.youtube.com/embed/5" },
        { title: "Hearty Soups", url: "https://www.youtube.com/embed/6" }
    ],
    dessert: [
        { title: "Ice Cream Sundae", url: "https://www.youtube.com/embed/7" },
        { title: "Cheesecake Delight", url: "https://www.youtube.com/embed/8" }
    ]
};

findButton.addEventListener("click", () => {
    const selectedTaste = tasteSelect.value;
    const videos = videoData[selectedTaste];
    videoSection.innerHTML = "";

    if (videos) {
        videos.forEach(video => {
            videoSection.innerHTML += `
                <div>
                    <h3>${video.title}</h3>
                    <iframe width="300" height="200" src="${video.url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            `;
        });
    } else {
        videoSection.innerHTML = "<p>No videos available for the selected taste.</p>";
    }
});
