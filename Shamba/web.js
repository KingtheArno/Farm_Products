const searchInput = document.getElementById("srch1");

function searchBox(){
if(searchInput.value == ''){
    alert("Please type text");
}
}

function toggleDropdown(index) {
    var dropdownContent = document.getElementById("dropdownContent" + index);
    dropdownContent.classList.toggle("show");
  }