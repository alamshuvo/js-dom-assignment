const h1 =document.getElementById('blog-title');
h1.style.color='red';
h1.style.textAlign='center';
h1.style.fontSize='25px';
h1.style.paddingTop='30px';

const mainBody=document.getElementById('main-body');
mainBody.style.backgroundColor='gray';
mainBody.style.color='white';
mainBody.style.width='80% ';
mainBody.style.margin='0px auto';

const sectionArea=document.getElementById('section-area');
sectionArea.style.display='flex';
sectionArea.style.gap='5px';
sectionArea.style.justifyContent='center';
sectionArea.style.padding='10px';
sectionArea.style.textAlign='center';

const firstArea=document.getElementById('first-area');
firstArea.style.backgroundColor='white';
firstArea.style.color='black';
firstArea.style.fontSize='20px';

const secondArea=document.getElementById('second-area');
secondArea.style.backgroundColor='purple';
secondArea.style.fontSize='20px';

const thirdArea =document.getElementById('third-area');
thirdArea.style.backgroundColor='orange';
thirdArea.style.fontSize='20px';


const btn1=document.getElementsByClassName('btn')
for (const btn of btn1){
btn.style.backgroundColor='salmon';
btn.style.color='white';
btn.style.padding='15px 20px';
btn.style.border='none';
btn.style.fontStyle='bold';
btn.style.margin='5px';
}




