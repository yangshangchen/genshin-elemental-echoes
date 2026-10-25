
(function () {
  var hint = document.getElementById('deviceHint');
  if (!hint) return;
  var coarse = false;
  try { coarse = window.matchMedia('(pointer: coarse)').matches && window.innerWidth < 900; } catch (e) {}
  if (coarse) { hint.hidden = false; }
  var btn = document.getElementById('dhClose');
  if (btn) btn.addEventListener('click', function () { hint.hidden = true; });
})();
