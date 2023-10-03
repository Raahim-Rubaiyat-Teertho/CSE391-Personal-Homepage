const loc = document.getElementById("location");
loc.innerHTML = '<b>Page Location: </b>' + window.location.href;

const mod = document.getElementById("last-mod");
mod.innerHTML = '<b>Last Modified: </b>' + document.lastModified;