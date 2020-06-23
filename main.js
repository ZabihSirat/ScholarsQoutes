
 const quotesArray =[
{
 quote: 'Imagination is more important than knowledge ',
 name: 'Albert, Einstein '
 },
 {
 quote: ' It does not matter how slowly you go as long as you do not stop. ',
 name: 'Confucius'
 },
 {
 quote: ' All our dreams can come true, if we have the courage to pursue them.',
 name: 'Walt Disney'
 },
 {
 quote: 'I never dreamed about success, I worked for it. ',
 name: 'Estée Lauder'
 },
 {
 quote: 'Difficulties in your life do not come to destroy you but to help you realise your hidden potential and power.Let difficulties know that you too are difficult. ',
 name: 'Avul Pacir Zainulabidin Abdul Kalam'
 },
 {
 quote: 'There is nothing more powerful in the world than the idea that came in time. ',
 name: 'Victor Hugo'
 },
 {
 quote: `When we close ourselves off, we're not just closing ourselves off to other people,we're closing ourselves off from ourselves and impeding ourselves. When you open up, you allow yourself to be who you are. `,
 name: 'Amy Cuddy'
 },
 {
 quote: 'Never bend your head. Always hold it high. Look the world straight in the eye.  ',
 name: 'Some one'
 }
 ];
 const quoteDis_Btn = document.querySelector('#quotes-displayerBtn');
 const quoteField = document.querySelector('#quote');
 const quote_name = document.querySelector('#quotename');
 
 quoteDis_Btn.addEventListener('click',displayQuote);
 
 function displayQuote(){
 let ranNumber=Math.floor(Math.random()*quotesArray.length);
 quoteField.innerHTML=quotesArray[ranNumber].quote;
 quote_name.innerHTML=quotesArray[ranNumber].name;
 }
 