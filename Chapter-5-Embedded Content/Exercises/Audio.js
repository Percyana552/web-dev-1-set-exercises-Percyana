const sounds = ['ah-ah','back-of-the-net','bangoutoforder','dan','emailoftheenvening',
'hellopatridge','iateascotchegg','imconfused'];


function create(sound){
 const btn = document.createElement('button');
 btn.classList.add('btn');
 
 btn.innerText = sound;
 
 document.getElementById('buttons').appendChild(btn);
};