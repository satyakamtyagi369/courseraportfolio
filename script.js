// Get the reference to the element.
const nameInput=document.getElementById('name-input');
const messageInput=document.getElementById('message-input');
const submitButton=document.getElementById('submit-button');
const recommendationsContainer=document.querySelector('.threerecommendations');

// add the event listener for the submit button.
submitButton.addEventListener('click',function(){
    // get the input values from the field.
    const name=nameInput.value.trim();
    const message=messageInput.value.trim();
     

    // Ensure the message is not empty.
    if(message==" "){
        alert("Message cannot be empty");
        return;
    }

    // Create a new Recommendation box.
    const newRecommendation = document.createElement('div');
    newRecommendation.classList.add('recommendation-box','thirdrecommendation');

    // construct the inner HTML
    newRecommendation.innerHTML = `
    <p class="passageWrite">
        ${message}
        ${name ? `<br><strong>${name}</strong>` : ''}
    </p>
`;

recommendationsContainer.appendChild(newRecommendation);

//clear the input fields
nameInput.value=' ';
messageInput.value=" ";

// show the modal
const modal = document.getElementById('thank-you-modal');
modal.style.display = 'flex';

// Add event listener to the OK button to close the modal
const okButton = document.getElementById('modal-ok-button');
okButton.addEventListener('click', function () {
    modal.style.display = 'none';
});
});
