let changeColor = document.getElementById('changeColor');

  chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
  });

  changeColor.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
    
    function createDoc() {
      var doc = DocumentApp.create('Sample Document');
      var body = doc.getBody();
      var rowsData = [['Plants', 'Animals'], ['Ficus', 'Goat'], ['Basil', 'Cat'], ['Moss', 'Frog']];
      body.insertParagraph(0, doc.getName())
          .setHeading(DocumentApp.ParagraphHeading.HEADING1);
      table = body.appendTable(rowsData);
      table.getRow(0).editAsText().setBold(true);
    }
  };