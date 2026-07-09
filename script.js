var DATA = {

  about: [
    { icon:"&#127979;", label:"University",  val:"ICFAI University, Jaipur", sub:"B.Tech CSE · 2025–2029" },
    { icon:"&#11088;",  label:"CGPA",        val:"8.9 / 10", sub:"Consistent academic performance" },
    { icon:"&#128187;", label:"Current Focus",val:"Frontend Dev + DSA", sub:"React, JavaScript, problem-solving daily" },
    { icon:"&#129302;", label:"AI & Tools",  val:"Exploring AI Stack", sub:"Claude, Microsoft Foundry, AI agents" },
    { icon:"&#127942;", label:"Hackathons",  val:"Greenovation 3.0", sub:"National-level sustainability hackathon" },
    { icon:"&#128338;", label:"Available",   val:"Open to Internships", sub:"Looking for summer/part-time opportunities" }
  ],

  skills: [
    "HTML","CSS","JavaScript","React",
    "C / C++","Python (Basic)","DSA","Git & GitHub",
    "Canva","Problem Solving","Microsoft Excel","Team Collaboration"
  ],

  careerOSFeatures: [
    { icon:"&#128202;", title:"Dashboard",            desc:"Career overview and live progress summary at a glance." },
    { icon:"&#128188;", title:"Opportunity Tracker",  desc:"Internships, jobs, hackathons, fellowships — all tracked." },
    { icon:"&#128197;", title:"Deadline Calendar",    desc:"Upcoming deadlines so you never miss an application window." },
    { icon:"&#128739;", title:"Journey Timeline",     desc:"Record and visualise every career milestone you hit." },
    { icon:"&#128200;", title:"Progress Analytics",   desc:"Charts and activity data to see your momentum over time." },
    { icon:"&#127942;", title:"Certificate Vault",   desc:"Organise and showcase every certification you've earned." },
    { icon:"&#128221;", title:"Notes Hub",            desc:"Interview prep, study notes — all searchable in one place." },
    { icon:"&#127919;", title:"XP & Streak System",  desc:"Gamified motivation to keep you building consistently." }
  ],

  certifications: [
    { icon:"&#129302;", title:"AI Skills Passport",             issuer:"Microsoft AI Skills Fest 2026",   year:"2026" },
    { icon:"&#127807;", title:"Introduction to Claude Cowork",  issuer:"Anthropic",                        year:"2026" },
    { icon:"&#128451;", title:"MongoDB Basics for Students",    issuer:"MongoDB University",               year:"2026" },
    { icon:"&#11088;",  title:"AI Skills Fest 2026",            issuer:"Microsoft",                        year:"2026" },
    { icon:"&#128187;", title:"Web Development Basics",         issuer:"Self Learning / Online Resources", year:"2026 – Present" }
  ],

  experience: [
    { title:"Web Development Learning Program &mdash; Decode Labs", desc:"Exploring frontend workflow, modern web technologies, and project-based learning through internship exposure." },
    { title:"Greenovation 3.0 &mdash; Smart Waste Impact Analyzer", desc:"Built and presented EcoCalc at a national sustainability hackathon, covering waste impact analysis with carbon estimates, green scoring, city comparisons, and composting guidance." }
  ],

  contact: [
    { icon:"&#9993;",  label:"Email",     href:"mailto:kesujora01@gmail.com",                    display:"kesujora01@gmail.com" },
    { icon:"&#128025;",label:"GitHub",    href:"https://github.com/keshav-jora",                 display:"github.com/keshav-jora" },
    { icon:"&#128188;",label:"LinkedIn",  href:"https://www.linkedin.com/in/keshav-j-ab6bb1375", display:"linkedin.com/in/keshav-j" },
    { icon:"&#127760;",label:"Portfolio", href:"https://keshav-jora.github.io/portfolio/",       display:"keshav-jora.github.io" },
    { icon:"&#128196;",label:"Resume",    href:"https://keshav-jora.github.io/portfolio/keshav-jora-resume.png?v=3", display:"Download Resume (PNG)" }
  ]

};

(function(){

  // About cards
  var ag = document.getElementById("about-grid");
  DATA.about.forEach(function(a,i){
    var el=document.createElement("div");
    el.className="about-card reveal";
    el.style.transitionDelay=(i*55)+"ms";
    el.innerHTML='<div class="about-card-icon">'+a.icon+'</div>'
      +'<h4>'+a.label+'</h4>'
      +'<div class="val">'+a.val+'</div>'
      +'<p>'+a.sub+'</p>';
    ag.appendChild(el);
  });

  // Skills
  var sg=document.getElementById("skills-grid");
  DATA.skills.forEach(function(s,i){
    var el=document.createElement("div");
    el.className="skill reveal";
    el.style.transitionDelay=(i*40)+"ms";
    el.textContent=s;
    sg.appendChild(el);
  });

  // CareerOS features
  var cf=document.getElementById("co-features");
  DATA.careerOSFeatures.forEach(function(f,i){
    var el=document.createElement("div");
    el.className="co-feature reveal";
    el.style.transitionDelay=(i*55)+"ms";
    el.innerHTML='<div class="co-feature-icon">'+f.icon+'</div><h4>'+f.title+'</h4><p>'+f.desc+'</p>';
    cf.appendChild(el);
  });

  // Certs
  var cg=document.getElementById("certs-grid");
  DATA.certifications.forEach(function(c,i){
    var el=document.createElement("div");
    el.className="cert-card reveal";
    el.style.transitionDelay=(i*65)+"ms";
    el.innerHTML='<div class="cert-icon">'+c.icon+'</div><div><h4>'+c.title+'</h4><p>'+c.issuer+'</p><p class="cert-year">'+c.year+'</p></div>';
    cg.appendChild(el);
  });

  // Timeline
  var tl=document.getElementById("timeline");
  DATA.experience.forEach(function(e,i){
    var w=document.createElement("div");
    w.className="timeline-card "+(i%2===0?"reveal-left":"reveal-right");
    w.innerHTML='<div class="timeline-dot"></div><div class="card"><h3>'+e.title+'</h3><p>'+e.desc+'</p></div>';
    tl.appendChild(w);
  });

  // Contact links
  var con=document.getElementById("contact-links");
  DATA.contact.forEach(function(c,i){
    var el=document.createElement("a");
    el.href=c.href;
    if(!c.href.startsWith("mailto")){el.target="_blank";el.rel="noopener noreferrer";}
    el.className="contact-link-card";
    el.style.transitionDelay=(i*60)+"ms";
    el.innerHTML='<div class="cl-icon">'+c.icon+'</div><div><div class="cl-label">'+c.label+'</div><div class="cl-value">'+c.display+'</div></div>';
    con.appendChild(el);
  });

})();

(function(){

  // 1. Hero staggered entrance
  document.querySelectorAll(".hero-item").forEach(function(el){
    var d=parseInt(el.getAttribute("data-delay"))||0;
    setTimeout(function(){ el.classList.add("enter"); }, d+80);
  });

  // 2. IntersectionObserver — scroll reveal
  var obs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add("visible"); obs.unobserve(e.target); }
    });
  },{threshold:0.08});
  document.querySelectorAll(".reveal,.reveal-left,.reveal-right").forEach(function(el){ obs.observe(el); });

  // 3. Active nav
  var secs=document.querySelectorAll("section[id]");
  var navAs=document.querySelectorAll(".nav-links a[data-section]");
  var navObs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        var id=e.target.id;
        navAs.forEach(function(a){ a.classList.toggle("active",a.getAttribute("data-section")===id); });
      }
    });
  },{threshold:0.3});
  secs.forEach(function(s){ navObs.observe(s); });

  // 4. Navbar shadow on scroll
  var nb=document.getElementById("navbar");
  window.addEventListener("scroll",function(){ nb.classList.toggle("scrolled",window.scrollY>20); },{passive:true});

  // 5. Hero blob parallax
  var heroEl=document.querySelector(".hero");
  var b1=document.querySelector(".blob-1"), b2=document.querySelector(".blob-2");
  heroEl.addEventListener("mousemove",function(e){
    var r=heroEl.getBoundingClientRect();
    var cx=(e.clientX-r.left)/r.width-0.5, cy=(e.clientY-r.top)/r.height-0.5;
    b1.style.transform="translate("+(cx*28)+"px,"+(cy*18)+"px)";
    b2.style.transform="translate("+(cx*-22)+"px,"+(cy*-14)+"px)";
  });
  heroEl.addEventListener("mouseleave",function(){ b1.style.transform=""; b2.style.transform=""; });

  // 6. Button press micro-interaction
  document.querySelectorAll(".btn").forEach(function(btn){
    btn.addEventListener("mousedown",function(){ btn.style.transform="scale(0.96)"; });
    btn.addEventListener("mouseup",  function(){ btn.style.transform=""; });
    btn.addEventListener("mouseleave",function(){ btn.style.transform=""; });
  });

})();

// Gallery switcher
function switchScreen(thumb, label, src){
  document.querySelectorAll(".gallery-thumb").forEach(function(t){ t.classList.remove("active"); });
  thumb.classList.add("active");
  var img=document.getElementById("gallery-active-img");
  img.style.opacity="0";
  setTimeout(function(){ img.src=src; img.style.opacity="1"; }, 320);
  document.getElementById("gallery-url").textContent="career-os-lite.vercel.app \u2014 "+label;
}

// Contact form — opens mailto
function handleFormSubmit(){
  var name=document.getElementById("cf-name").value.trim();
  var email=document.getElementById("cf-email").value.trim();
  var msg=document.getElementById("cf-msg").value.trim();
  if(!name||!email||!msg){ alert("Please fill in all fields."); return; }
  var subject=encodeURIComponent("Portfolio contact from "+name);
  var body=encodeURIComponent("Name: "+name+"\nEmail: "+email+"\n\n"+msg);
  window.location.href="mailto:kesujora01@gmail.com?subject="+subject+"&body="+body;
  document.getElementById("form-success").style.display="block";
}
