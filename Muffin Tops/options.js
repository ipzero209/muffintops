  let page = document.getElementById('buttonDiv');
  const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
  function constructOptions(kButtonColors) {
    for (let item of kButtonColors) {
      let button = document.createElement('button');
      button.style.backgroundColor = item;
      button.addEventListener('click', function() {
        chrome.storage.sync.set({color: item}, function() {
          console.log('color is ' + item);
          if(item == '#3aa757') console.log('color is green'); 
          if(item == '#e8453c') console.log('color is red'); 
          if(item == '#f9bb2d') console.log('color is yellow'); 
          if(item == '#4688f1') console.log('color is blue'); 
        })
      });
      page.appendChild(button);
    }
  }
  /*function changeText() {
      let tryText = document.getElementById('buttonDiv');
  }*/
  constructOptions(kButtonColors);