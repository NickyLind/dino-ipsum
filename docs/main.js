import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Words(input) {
let url = `http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1`;
input = parseInt(input);
url = url+"&words="+input;
return url;
}
$(document).ready(function() {
  $('#submit').click(function() {
    let userWords = $('#wordsInput').val();
    let request = new XMLHttpRequest();

    const url = Words(userWords);
    request.onload = function() {
      if (this.status === 200)  {
        const response = JSON.parse(this.responseText);
        getElements(response);
    }
  };
    request.open("GET", url, true);
    request.send();

    function getElements(response)  {
    $("#dinoWords").text(`${response}`);
    }
  });
});