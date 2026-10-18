/* Piknivo click tracking. Sends GA4 events only when gtag is loaded (Measurement ID set). */
(function(){
  document.addEventListener('click',function(e){
    var a=e.target.closest&&e.target.closest('a[data-track]');if(!a||typeof gtag!=='function')return;
    var t=a.dataset.track,b=document.body.dataset;
    var name=t==='affiliate'?'affiliate_click':t==='official'?'official_site_click':'cta_click';
    gtag('event',name,{tool_name:a.dataset.tool||'',link_location:a.dataset.loc||'',page_type:b.pageType||'',content_id:b.contentId||'',cta_label:a.textContent.trim().slice(0,60)});
  });
  var btn=document.querySelector('.menu-btn'),nav=document.querySelector('nav.main');
  if(btn&&nav)btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
})();
