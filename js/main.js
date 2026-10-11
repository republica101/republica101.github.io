(function(){
  var btn=document.getElementById('copy-email'),addr=document.getElementById('email-addr');
  if(!btn||!addr) return;
  function sel(){try{var r=document.createRange();r.selectNodeContents(addr);var s=getSelection();s.removeAllRanges();s.addRange(r);}catch(e){}}
  btn.addEventListener('click',function(){
    var t=addr.textContent.trim();
    var ok=function(){btn.textContent='Copied';setTimeout(function(){btn.textContent='Copy';},1800);};
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(ok,function(){sel();btn.textContent='Selected';});}
    else{sel();btn.textContent='Selected';}
  });
})();
