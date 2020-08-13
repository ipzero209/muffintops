function createDoc() {
    var doc = DocumentApp.create('Sample Document');
    var body = doc.getBody();
    var rowsData = [['Plants', 'Animals'], ['Ficus', 'Goat'], ['Basil', 'Cat'], ['Moss', 'Frog']];
    body.insertParagraph(0, doc.getName())
        .setHeading(DocumentApp.ParagraphHeading.HEADING1);
    table = body.appendTable(rowsData);
    table.getRow(0).editAsText().setBold(true);
  }