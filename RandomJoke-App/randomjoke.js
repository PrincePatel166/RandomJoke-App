function randomjoke(){
    // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://raw.githubusercontent.com/15Dkatz/official_joke_api/refs/heads/master/jokes/index.json';
  return fetch(targetUrl)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    let ind=Math.round(Math.random()*30);
    let joke=data[ind];
    return `${joke.setup}-->${joke.punchline}`;
  })
  .catch(function(error){
    // return `Error is:${error}`;
    console.log(`Error is :${error}`);
    return "error is there";
  });
}
let rep;
document.getElementById("start").addEventListener("click",function(e){
 rep=setInterval(function (){
    
    randomjoke().then(function (joke){
        document.getElementById("h1").innerHTML=joke;
    });
 },1000);
});
document.getElementById("stop").addEventListener("click",function(e){
  clearInterval(rep);
});
