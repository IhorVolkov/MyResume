var ownerResume = document.getElementById('ownerResume');
var tooltip = document.querySelector('.toolTip');

ownerResume.addEventListener('mouseover', function(e) {
  tooltip.style.display = 'block';
  tooltip.innerHTML = 'ToolTip JavaScript';
});
ownerResume.addEventListener('mouseout', function(e) {
  tooltip.style.display = 'none';
});
