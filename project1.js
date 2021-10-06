
const changeColor = document.getElementById('btn'),
      color= ['#E43D10 ','#389A6F'];
      tet=['HEX COLOR :#E43D10','HEX COLOR :#389A6F']
let   colorIndex  = 0;
let textindex=0;
changeColor.addEventListener('click', () => {
  document.getElementById("mydiv").style.backgroundColor = color[colorIndex];  
  document.getElementById("qwe").innerHTML=tet[textindex]  
  colorIndex = (colorIndex + 1) % color.length
  textindex = (textindex + 1) % tet.length

});