// Создай объект video.
// У него есть title и likes (число). Добавь метод like(), который увеличивает likes на 1. И метод show(), который возвращает строку: "Видео '...' собрало ... лайков".

let video = {
    title: "Смешные котики",
    likes: 0,
    like: function() {
        this.likes = this.likes + 1;
    },
    show: function() {
        return "Видео '" + this.title + "' собрало " + this.likes + " лайков";
    }
};

video.like();
video.like();
video.like();
console.log(video.show()); // "Видео 'Смешные котики' собрало 3 лайков"
