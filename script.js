function resumedownload(){
  const pdfUrl = './assets/Resume(Kshitij_Negi).pdf';
  const anchorElement = document.createElement('a');
  anchorElement.href = pdfUrl;
  anchorElement.download = 'Resume(Kshitij_Negi).pdf';
  // document.body.appendChild(anchorElement);
  anchorElement.click();
  // document.body.removeChild(anchorElement);
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
