(function () {
    'use strict';
    console.log('reading JS');

    const form = document.querySelector('#myform');
    const madlib = document.querySelector('#madlib');
    const inputs = document.querySelectorAll('#myform input[type="text"]');
    const dog = document.querySelector('.dog');
    function updateProgress(){
        let move=0;
        inputs.forEach(function(input){
            if(input.value.trim() !=='') move++;
        });
        dog.style.marginLeft = (move/inputs.length*76) + '%';
    }
    inputs.forEach(function(input){
       
        input.addEventListener('input', updateProgress);
    });
   
    form.addEventListener('submit',function(event){
        event.preventDefault();
        const randomname = document.querySelector('#randomname').value.trim();
        const animal = document.querySelector('#animal').value.trim().toLowerCase();
        const adjective = document.querySelector('#adjective').value.trim().toLowerCase();
        const petname = document.querySelector('#petname').value.trim();
        const favfood = document.querySelector('#favfood').value.trim().toLowerCase();
        const activity = document.querySelector('#activity').value.trim().toLowerCase();

        let myText;
        if(randomname == ''){
            myText = "Please provide a name :3"
            document.querySelector('#randomname').focus();
        }
        else if(animal == ''){
            myText = "Please provide your pet's animal type"
            document.querySelector('#animal').focus();
        }
        else if(adjective == ''){
            myText = "Please provide an adjective"
            document.querySelector('#adjective').focus();
        }
        else if(petname == ''){
            myText = "Please provide the name of your pet \(0_0)/"
            document.querySelector('#petname').focus();
        }
        else if(favfood == ''){
            myText = "Please provide a food :p"
            document.querySelector('#favfood').focus();
        }
        else if(activity == ''){
            myText = "Please fill in an activity"
            document.querySelector('#activity').focus();
        }
        else {
            myText = `<h3>Why can't <span>${petname}</span> Own the World</h3> <p>I'm <span>${petname}</span> the <span>${adjective}</span> <span>${animal}</span>. My owner...no, my servant, <span>${randomname}</span>, likes to serve me with <span>${favfood}</span> to get me addicted to it. This harmed my chances of being the king of the animal world. Why? Because if I love some food, I have a fatal weakness of being seduced with it when I'm not near <span>${randomname}</span>. They will try to get me with <span>${favfood}</span> and I can't help but eat it. Thus, I never have enough time to work on my grand project of <span>${activity}</span> and own the world.<br><br><img src="images/dog.png" alt="dog" width="141" height="189"><img src="images/ball.png" alt="ball" width="56" height="56"></p>`;
            document.querySelector('#randomname').value = '';
            document.querySelector('#animal').value = '';
            document.querySelector('#adjective').value = '';
            document.querySelector('#petname').value = '';
            document.querySelector('#favfood').value = '';
            document.querySelector('#activity').value = '';
            updateProgress();
        }
            madlib.innerHTML = myText;
            madlib.scrollIntoView({block: 'center'});
    });

    form.addEventListener('reset', function(){
        madlib.innerHTML = '';
        dog.style.marginLeft = '0%';
    });

})();