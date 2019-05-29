export default function gridGuides() {
  function toggleGrid() {
    function KeyPress(e) {
      var evtobj = window.event? event : e
      if (evtobj.keyCode == 71 && evtobj.ctrlKey) {
        var guides = document.getElementById('guides');
        guides.classList.toggle('hidden');
      }
    }
    document.onkeydown = KeyPress;
  }
  toggleGrid();
}
