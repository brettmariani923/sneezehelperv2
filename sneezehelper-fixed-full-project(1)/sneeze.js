const screen=document.getElementById('screen');
const prep=document.getElementById('prep');
const countdown=document.getElementById('countdown');
const after=document.getElementById('after');
const wait=ms=>new Promise(r=>setTimeout(r,ms));
async function run(){
  prep.classList.add('hidden'); after.classList.add('hidden'); countdown.classList.remove('hidden');
  screen.className='dark';
  for(const n of [3,2,1]){countdown.textContent=n;await wait(1000);}
  countdown.classList.add('hidden');
  screen.className='bright';
  await wait(3500);
  after.classList.remove('hidden');
}
run();
document.getElementById('again').addEventListener('click',run);
document.getElementById('close').addEventListener('click', async () => {

    const phrases = [
        'Bless You',
        'Gesundheit',
        'Nice'
    ];

    const randomPhrase =
        phrases[Math.floor(Math.random() * phrases.length)];

    after.innerHTML = `<img src="icons/final-cloud.png" class="final-cloud" alt=""><h1>${randomPhrase}</h1>`;

    await wait(900);

    window.close();
});