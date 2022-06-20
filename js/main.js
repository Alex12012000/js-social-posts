// Array per i post
const post = [
    {
        id: 1,
        name: 'Phil Mangione',
        profile: 'https://unsplash.it/300/300?image=15',
        date: '06/04/2022',
        content: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        img: 'https://unsplash.it/600/300?image=3',
        like: 80
    },
    {
        id: 2,
        name: 'Sofia Perlari',
        profile: 'https://unsplash.it/300/300?image=21',
        date: '06/18/2022',
        content: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        img: 'https://unsplash.it/600/300?image=1',
        like: 113
    },
    {
        id: 3,
        name: 'Mario Rossi',
        profile: 'https://unsplash.it/300/300?image=56',
        date: '04/12/2021',
        content: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        img: null,
        like: 100
    },
    {
        id: 4,
        name: 'Luca Verdi',
        profile: 'https://unsplash.it/300/300?image=93',
        date: '06/21/2022',
        content: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        img: 'https://unsplash.it/600/300?image=1',
        like: 43
    }
]


const postContainer = document.getElementById('container'); //Variabile che richiama il container dei post nel DOM
drawToDom(post) //Invoco la variabile



// Variabili che racchiudono tutti i pulsanti 'mi piace' e i loro relativo numero di 'mi piace'
const likeBtn = document.querySelectorAll('.js-like-button');
const likeNumb = document.querySelectorAll('.js-likes-counter');

for(let i = 0; i < likeBtn.length; i++) {
    const thisBtn = likeBtn[i];
    let likeNumbAsNumb = parseInt(likeNumb[i].innerHTML);
    // Al click dell'utente sul pulsante 'mi piace' il pulsante cambia colore e il numero di like aumenta di uno 
    thisBtn.addEventListener('click', 
        function(event) {
            event.preventDefault();
            // Se il pulsante non ha classe 'like-button--liked' aumento di 1 il numero di like e coloro il pulsante
            if(!this.classList.contains('like-button--liked')){    
                likeNumbAsNumb++;
                thisBtn.classList.add('like-button--liked');
                likeNumb[i].innerHTML = likeNumbAsNumb;
            }
    });
}


// ----------------
//  FUNCTION
// ----------------

// Funzione che crea i post nel dom utilizzando l'array dei post
function drawToDom (postArray) {

    // Per ogni oggetto nell'array appendo nel container del DOM il template
    for(let i = 0; i < post.length; i++){
        let singleContent = postArray[i];
        
        // Template nel DOM
        postContainer.innerHTML += `
        <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src=${singleContent.profile} alt="Phil Mangione">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${singleContent.name}</div>
                    <div class="post-meta__time">${singleContent.date}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${singleContent.content}</div>
        <div class="post__image">
            <img src=${singleContent.img} alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${singleContent.like}</b> persone
                </div>
            </div> 
        </div>            
        </div>
        `;

    }

}

