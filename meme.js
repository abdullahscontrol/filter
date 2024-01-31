const generateMemeBtn =
    document.querySelector(".meme-generator .generate-meme-btn");
const memeImage = document.querySelector(".meme-generator img")
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeauthor = document.querySelector(".meme-generator .meme-author");
const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url)
    memeTitle.innerHTML = title;
    memeauthor.innerHTML = author;

}
const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
        .then(res => res.json()).then(data => {
            updateDetails(data.url, data.title, data.author)
        });
}
generateMemeBtn.addEventListener("click", generateMeme); 