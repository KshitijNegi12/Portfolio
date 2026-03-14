function showResume(){
  const pdfUrl = 'https://drive.google.com/file/d/1ogyxw8rX4Fr72iivlQu9waNTY0SaWTbY/view?usp=sharingf';
  window.open(pdfUrl, "_blank");
}

function btnshadow(index, docs){
  var content=document.querySelectorAll('.bar-btn')
  for (let i = 0; i < content.length; i++) {
    content[i].style.removeProperty('background-color');
    content[i].style.removeProperty('box-shadow');
  }
  content[index].style.backgroundColor='#2492FF';
  content[index].style.boxShadow='5px 5px rgb(48, 44, 44)';
  var iframe=document.getElementById('myframe');
  iframe.src=docs;
}
