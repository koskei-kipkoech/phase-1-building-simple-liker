// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');

//modal.style.display = 'none'

document.querySelectorAll('.like').forEach(likeButton =>{
  likeButton.addEventListener('click', () =>{
    const likeGlyph = likeButton.querySelector('.like-glyph');

    if (likeGlyph.textContent === EMPTY_HEART){
      mimicServerCall()
        .then(() => {
          likeGlyph.innerHTML = FULL_HEART;
          likeGlyph.classList.add('activated-heart')
        })
        .catch((error) => {
          modalMessage.textContent = error;
          modal.classList.remove('hidden')

          setTimeout(() => {
            modal.classList.add('hidden')
          },3000)
        })
    }else {
      likeGlyph.innerHTML = EMPTY_HEART;
      likeGlyph.classList.remove('activated-heart')
    }
  })
})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

