const publications = [
  {key:"tang2026evodiff",corresponding:true,year:2026,type:"journal",short:"SWEVO",title:"EvoDiff-NAS: Evolutionary Neural Architecture Search with Diffusion-Guided Mutation",authors:["Zeyu Tang","Zaipeng Xie","Xiaoyi Wen","Bin Tang","Wenzhan Song"],venue:"Swarm and Evolutionary Computation",citation:"Swarm and Evolutionary Computation 107, Article 102442 (2026)",volume:"107",pages:"102442",doi:"10.1016/j.swevo.2026.102442",overview:"publications/evodiff-nas.html"},
  {key:"zhang2026experience",corresponding:true,year:2026,type:"journal",short:"MLJ",title:"Boosting Efficient Experience Exchange in Sparse-Reward Multi-Agent Reinforcement Learning",authors:["Jianan Zhang","Zaipeng Xie","Nuo Yang","Juguang Jin","Wenzhan Song"],venue:"Machine Learning",citation:"Machine Learning 115, Article 95 (2026)",volume:"115",number:"4",pages:"95",doi:"10.1007/s10994-025-06967-y",overview:"publications/experience-exchange.html"},
  {key:"xie2026s2te",corresponding:true,year:2026,type:"journal",short:"MLJ",title:"S2TE: Staged Scale-Free Topology Evolution for Sparse Spiking Neural Networks",authors:["Zaipeng Xie","Wei Zhu","Peixin Li","Haotian Ding","Wenzhan Song"],venue:"Machine Learning",citation:"Machine Learning 115, Article 50 (2026)",volume:"115",number:"3",pages:"50",doi:"10.1007/s10994-025-06982-z",overview:"publications/s2te.html"},
  {key:"xie2026rhomarl",corresponding:true,year:2026,type:"journal",short:"MLJ",title:"RhoMARL: Robust Learning for Heterogeneous Multi-Agent Systems in Dynamic Environments",authors:["Zaipeng Xie","Wenhao Fang","Chentai Qiao","Yiming Zhao","Wenzhan Song"],venue:"Machine Learning",citation:"Machine Learning 115, Article 44 (2026)",volume:"115",number:"3",pages:"44",doi:"10.1007/s10994-025-06972-1",overview:"publications/rhomarl.html"},
  {key:"xie2026roco",corresponding:true,year:2026,type:"journal",short:"ESWA",title:"ROCO: Role-Oriented Communication for Efficient Multi-Agent Reinforcement Learning",authors:["Zaipeng Xie","Sitong Shen","Yaowu Wang","Chentai Qiao","Bin Tang","Wenzhan Song"],venue:"Expert Systems with Applications",citation:"Expert Systems with Applications 297, Article 129421 (2026)",volume:"297",pages:"129421",doi:"10.1016/j.eswa.2025.129421",overview:"publications/roco.html"},

  {key:"xie2026fedstar",corresponding:true,year:2026,displayYear:2025,type:"conference",short:"CollaborateCom",title:"FedSTAR: A Federated Learning Framework for Reliable Trajectory Prediction Under Spatiotemporal Heterogeneity",authors:["Zaipeng Xie","Dingxu Sun","Peixin Li","Ziyang Ye","Leihan Wang"],venue:"21st EAI International Conference on Collaborative Computing: Networking, Applications and Worksharing (CollaborateCom 2025)",citation:"CollaborateCom 2025, Proceedings, pp. 63–83 (2026)",pages:"63--83",doi:"10.1007/978-3-032-21171-2_4"},
  {key:"xie2025fedhan",corresponding:true,year:2025,type:"conference",short:"BigData",title:"FedHAN: Robust Federated Learning Under Model Heterogeneity and Label Noise",authors:["Zaipeng Xie","Zishu Zhou","Xuanyao Jie","Xing Gao","Han Xu","Leihan Wang"],venue:"2025 IEEE International Conference on Big Data (BigData)",citation:"IEEE BigData 2025, pp. 1597–1604",pages:"1597--1604",doi:"10.1109/BigData66926.2025.11401644"},
  {key:"xie2025adapt",corresponding:true,year:2025,type:"conference",short:"ECAI",title:"ADAPT: Auction-Based Dynamic Prioritization for Multi-Agent Coordination",authors:["Zaipeng Xie","Chentai Qiao","Nuo Yang","Yiming Zhao"],venue:"28th European Conference on Artificial Intelligence (ECAI 2025)",citation:"ECAI 2025, pp. 3527–3534",pages:"3527--3534",doi:"10.3233/FAIA251227",overview:"publications/adapt.html"},
  {key:"xie2025graphsem",corresponding:true,year:2025,type:"conference",short:"ECAI",title:"GraphSem: Robust Multi-Agent Reinforcement Learning via Semantic-Graph Communication",authors:["Zaipeng Xie","Yaowu Wang","Sitong Shen","Jianan Zhang"],venue:"28th European Conference on Artificial Intelligence (ECAI 2025)",citation:"ECAI 2025, pp. 3839–3846",pages:"3839--3846",doi:"10.3233/FAIA251266",overview:"publications/graphsem.html"},
  {key:"xie2025aeras",corresponding:true,year:2025,type:"conference",short:"ICRA",title:"AERAS: Adaptive Experience Replay with Attention-Based Sequence Embedding for Improved Multi-Agent Reinforcement Learning",authors:["Zaipeng Xie","Sitong Shen","Yaowu Wang","Wenhao Fang","Wenzhan Song"],venue:"2025 IEEE International Conference on Robotics and Automation (ICRA)",citation:"ICRA 2025, pp. 1156–1162",pages:"1156--1162",doi:"10.1109/ICRA55743.2025.11128572",overview:"publications/aeras.html"},
  {key:"xie2025fedm2m",corresponding:true,year:2025,type:"conference",short:"CSCWD",title:"FedM2M: Robust Federated Voiceprint Recognition via Memory-Momentum Meta-Learning",authors:["Zaipeng Xie","Zhong Huang","Zishu Zhou","Yiming Zhao","Clément Pechnyk"],venue:"28th International Conference on Computer Supported Cooperative Work in Design (CSCWD 2025)",citation:"CSCWD 2025, pp. 2221–2226",pages:"2221--2226",doi:"10.1109/CSCWD64889.2025.11033462"},
  {key:"xie2025feddgl",corresponding:true,year:2025,type:"conference",short:"ACML",title:"FedDGL: Federated Dynamic Graph Learning for Temporal Evolution and Data Heterogeneity",authors:["Zaipeng Xie","Likun Li","Xiangbin Chen","Hao Yu","Qian Huang"],venue:"Proceedings of the 16th Asian Conference on Machine Learning (ACML)",citation:"PMLR 260, pp. 463–478 (2025)",series:"Proceedings of Machine Learning Research",volume:"260",pages:"463--478",url:"https://proceedings.mlr.press/v260/xie25b.html"},

  {key:"xie2024runoff",corresponding:true,year:2024,type:"conference",short:"ICPR",title:"Improving Adaptive Runoff Forecasts in Data-Scarce Watersheds Through Personalized Federated Learning",authors:["Zaipeng Xie","Xiangqin Zhang","Yunfei Wang","Xuanyao Jie","Wenhao Fang","Yanping Cai"],venue:"27th International Conference on Pattern Recognition (ICPR 2024)",citation:"ICPR 2024, pp. 180–198",pages:"180--198",doi:"10.1007/978-3-031-78183-4_12"},
  {key:"xie2024fed2pkd",corresponding:true,year:2024,type:"conference",short:"CLOUD",title:"Fed2PKD: Bridging Model Diversity in Federated Learning via Two-Pronged Knowledge Distillation",authors:["Zaipeng Xie","Han Xu","Xing Gao","Junchen Jiang","Ruiqian Han"],venue:"2024 IEEE 17th International Conference on Cloud Computing (CLOUD)",citation:"IEEE CLOUD 2024, pp. 1–11",pages:"1--11",doi:"10.1109/CLOUD62652.2024.00011"},
  {key:"zhang2024sqmg",corresponding:true,year:2024,type:"conference",short:"IJCNN",title:"SQMG: An Optimized Stochastic Quantization Method Using Multivariate Gaussians for Distributed Learning",authors:["Jianan Zhang","Zaipeng Xie","Hongxing Li","Xuanyao Jie","Yunfei Wang","Bowen Li"],venue:"2024 International Joint Conference on Neural Networks (IJCNN)",citation:"IJCNN 2024, pp. 1–8",pages:"1--8",doi:"10.1109/IJCNN60899.2024.10650133"},
  {key:"song2024bed",year:2024,type:"journal",short:"IEEE IoTJ",title:"Engagement-Free and Contactless Bed Occupancy and Vital Signs Monitoring",authors:["Yingjian Song","Bingnan Li","Dan Luo","Zaipeng Xie","Bradley G. Phillips","Yuan Ke","Wenzhan Song"],venue:"IEEE Internet of Things Journal",citation:"IEEE Internet of Things Journal 11(5), pp. 7935–7947 (2024)",volume:"11",number:"5",pages:"7935--7947",doi:"10.1109/JIOT.2023.3316674"},
  {key:"gao2024fatigue",corresponding:true,year:2024,type:"journal",short:"CACAIE",title:"Vision-Based Fatigue Crack Automatic Perception and Geometric Updating of Finite Element Model for Welded Joint in Steel Structures",authors:["Tian Gao","Zhiyuan Yuanzhou","Bohai Ji","Zaipeng Xie"],venue:"Computer-Aided Civil and Infrastructure Engineering",citation:"Computer-Aided Civil and Infrastructure Engineering 39, pp. 1659–1675 (2024)",volume:"39",pages:"1659--1675",doi:"10.1111/mice.13166"},
  {key:"xie2024miodsc",corresponding:true,year:2024,type:"journal",short:"CAAI TIT",title:"MioDSC: Mutual Information Oriented Deep Skill Chaining for Multi-Agent Reinforcement Learning",authors:["Zaipeng Xie","Cheng Ji","Chentai Qiao","Wenzhan Song","Zewen Li","Yufeng Zhang","Yujing Zhang"],venue:"CAAI Transactions on Intelligence Technology",citation:"CAAI Transactions on Intelligence Technology 9(4), pp. 1014–1030 (2024)",volume:"9",number:"4",pages:"1014--1030",doi:"10.1049/cit2.12322"},

  {key:"xie2023spiking",corresponding:true,year:2023,type:"conference",short:"ICONIP",title:"Efficient Spiking Neural Architecture Search with Mixed Neuron Models and Variable Thresholds",authors:["Zaipeng Xie","Ziang Liu","Peng Chen","Jianan Zhang"],venue:"30th International Conference on Neural Information Processing (ICONIP 2023)",citation:"ICONIP 2023, pp. 466–481",pages:"466--481",doi:"10.1007/978-981-99-8082-6_36"},
  {key:"xie2023fault",corresponding:true,year:2023,type:"conference",short:"ICA3PP",title:"An Efficient Fault Tolerance Strategy for Multi-Task MapReduce Models Using Coded Distributed Computing",authors:["Zaipeng Xie","Jianan Zhang","Yida Zhang","Chenghong Xu","Peng Chen","Zhihao Qu","Wenzhan Song"],venue:"23rd International Conference on Algorithms and Architectures for Parallel Processing (ICA3PP 2023)",citation:"ICA3PP 2023, pp. 253–271",pages:"253--271",doi:"10.1007/978-981-97-0862-8_16"},
  {key:"xie2023amtl",corresponding:true,year:2023,type:"conference",short:"GLOBECOM",title:"AMTL-Loc: Efficient WiFi Indoor Localization with Reduced Fingerprint Collection",authors:["Zaipeng Xie","Wenhao Fang","Bingzhe Yu","Yang Ding","Yanling Pan","Wenzhan Song"],venue:"2023 IEEE Global Communications Conference (GLOBECOM)",citation:"IEEE GLOBECOM 2023, pp. 2475–2480",pages:"2475--2480",doi:"10.1109/GLOBECOM54140.2023.10437555"},
  {key:"lu2023gcsalm",corresponding:true,year:2023,type:"conference",short:"SMC",title:"GC-SALM: Multi-Task Runoff Prediction Using Spatial-Temporal Attention Graph Convolution Networks",authors:["Jin Lu","Zaipeng Xie","Jiayu Chen","Maohua Li","Chenghong Xu","Hongli Cao"],venue:"2023 IEEE International Conference on Systems, Man, and Cybernetics (SMC)",citation:"IEEE SMC 2023, pp. 3633–3638",pages:"3633--3638",doi:"10.1109/SMC53992.2023.10394287"},
  {key:"xie2023ipers",corresponding:true,year:2023,type:"conference",short:"ECAI",title:"IPERS: Individual Prioritized Experience Replay with Subgoals for Sparse Reward Multi-Agent Reinforcement Learning",authors:["Zaipeng Xie","Yufeng Zhang","Chentai Qiao","Sitong Shen"],venue:"26th European Conference on Artificial Intelligence (ECAI 2023)",citation:"ECAI 2023, pp. 2760–2767",pages:"2760--2767",doi:"10.3233/FAIA230586"},
  {key:"wang2023fedcrc",corresponding:true,year:2023,type:"conference",short:"SMC",title:"Federated Learning with Common Representation Learning Criterion and Personalized Predictor",authors:["Wenzhong Wang","Zaipeng Xie","Bingzhe Yu","Zhihao Qu","Yufeng Zhang","Hongli Cao"],venue:"2023 IEEE International Conference on Systems, Man, and Cybernetics (SMC)",citation:"IEEE SMC 2023, pp. 2069–2074",pages:"2069--2074",doi:"10.1109/SMC53992.2023.10394426"},
  {key:"xie2023queue",corresponding:true,year:2023,type:"journal",short:"Sensors",title:"Towards an Optimized Distributed Message Queue System for AIoT Edge Computing: A Reinforcement Learning Approach",authors:["Zaipeng Xie","Cheng Ji","Lifeng Xu","Mingyao Xia","Hongli Cao"],venue:"Sensors",citation:"Sensors 23(12), Article 5447 (2023)",volume:"23",number:"12",pages:"5447",doi:"10.3390/s23125447"},
  {key:"xie2023stochastic",corresponding:true,year:2023,type:"conference",short:"ISCAS",title:"Energy-Efficient Stochastic Computing for Convolutional Neural Networks by Using Kernel-Wise Parallelism",authors:["Zaipeng Xie","Chenyu Yuan","Likun Li","Jiahao Wu"],venue:"2023 IEEE International Symposium on Circuits and Systems (ISCAS)",citation:"IEEE ISCAS 2023, pp. 1–5",pages:"1--5",doi:"10.1109/ISCAS46773.2023.10181378"}
];

// CCF 2026 (7th edition). Only venues in the recommendation list receive a CCF tag.
const ccfRanks = {
  MLJ:"B", ESWA:"C", "IEEE IoTJ":"C",
  ECAI:"B", ICRA:"B", ISCAS:"B",
  CollaborateCom:"C", BigData:"C", CSCWD:"C", ACML:"C",
  ICPR:"C", CLOUD:"C", IJCNN:"C", ICONIP:"C",
  ICA3PP:"C", GLOBECOM:"C", SMC:"C"
};

// JCR 2026 JIF quartiles; XinRui 2026 and CAS 2025 broad subject categories.
const journalRanks = {
  SWEVO:{jcr:"Q1",jcrArea:"Computer Science, Artificial Intelligence",xinrui:"1区 Top",xinruiArea:"Computer Science"},
  MLJ:{jcr:"Q2",jcrArea:"Computer Science, Artificial Intelligence",xinrui:"3区",xinruiArea:"Computer Science"},
  ESWA:{jcr:"Q1",jcrArea:"Computer Science, Artificial Intelligence",xinrui:"1区 Top",xinruiArea:"Computer Science"},
  "IEEE IoTJ":{jcr:"Q1",jcrArea:"Computer Science, Information Systems",cas:"2区 Top",casArea:"Computer Science"},
  CACAIE:{jcr:"Q1",jcrArea:"Engineering, Civil",cas:"1区 Top",casArea:"Engineering & Technology"},
  "CAAI TIT":{jcr:"Q2",jcrArea:"Computer Science, Artificial Intelligence",cas:"1区 Top",casArea:"Computer Science"},
  Sensors:{jcr:"Q2",jcrArea:"Instruments & Instrumentation",cas:"3区",casArea:"Multidisciplinary Sciences"}
};

(() => {
  const root = document.getElementById("publications");
  const list = document.getElementById("publication-list");
  const empty = document.getElementById("publication-empty");
  const count = document.getElementById("publication-count");
  const yearControls = document.getElementById("pub-years");
  const typeControls = document.getElementById("pub-types");
  const publicationYear = item => item.displayYear ?? item.year;
  const years = [...new Set(publications.map(publicationYear))].sort((a, b) => b - a);
  const defaultYear = years.find(year => year <= new Date().getFullYear());
  let selectedYear = defaultYear ? String(defaultYear) : "all";
  let selectedType = "all";
  const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[character]));

  function bibtex(item) {
    const fields = [
      ["author", item.authors.join(" and ")],
      ["title", "{" + item.title + "}"],
      [item.type === "journal" ? "journal" : "booktitle", item.venue],
      ["year", String(item.year)]
    ];
    for (const name of ["series", "volume", "number", "pages", "note", "doi", "url"]) {
      if (item[name]) fields.push([name, item[name]]);
    }
    if (item.doi) fields.push(["url", "https://doi.org/" + item.doi]);
    return "@" + (item.type === "journal" ? "article" : "inproceedings") + "{" + item.key + ",\n" +
      fields.map(([name, value]) => "  " + name + " = {" + value + "}").join(",\n") + "\n}";
  }

  function rankingHtml(item) {
    const tags = [];
    if (ccfRanks[item.short]) tags.push(["CCF " + ccfRanks[item.short], "CCF recommendation list, 2026 edition"]);
    if (item.type === "journal") {
      const ranks = journalRanks[item.short];
      if (ranks?.jcr) tags.push(["JCR " + ranks.jcr, "JCR 2026 JIF quartile · " + ranks.jcrArea]);
      if (publicationYear(item) >= 2026 && ranks?.xinrui)
        tags.push(["新锐 " + ranks.xinrui, "XinRui 2026 · " + ranks.xinruiArea]);
      if (publicationYear(item) <= 2025 && ranks?.cas)
        tags.push(["中科院 " + ranks.cas, "CAS 2025 · " + ranks.casArea]);
    }
    return tags.length ? '<div class="pub-rankings" aria-label="Venue rankings">' +
      tags.map(([label, detail]) => '<span class="pub-rank" title="' + escapeHtml(detail) + '">' + escapeHtml(label) + '</span>').join("") + '</div>' : "";
  }

  function publicationHtml(item) {
    const authors = item.authors.map(author => author === "Zaipeng Xie" ? "<strong>Zaipeng Xie" + (item.corresponding ? '<sup class="pub-corresponding" aria-label="corresponding author">*</sup>' : "") + "</strong>" : escapeHtml(author)).join(", ");
    const primaryUrl = item.doi ? "https://doi.org/" + item.doi : item.url;
    const link = "Paper ↗";
    const venueIcon = item.type === "journal"
      ? '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6c-2-2-5-2-9-2v14c4 0 7 0 9 2"/><path d="M12 6c2-2 5-2 9-2v14c-4 0-7 0-9 2"/><path d="M12 6v14"/></svg>'
      : item.type === "conference"
        ? '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h18v12H3z"/><path d="M12 16v4"/><path d="M8 20h8"/><path d="m8 12 3-3 2 2 3-3"/></svg>'
        : "";
    return '<article class="publication publication--' + escapeHtml(item.type) + '">' +
      '<div class="pub-mark"><span class="pub-venue-tag">' + venueIcon + escapeHtml(item.short) + '</span><span class="pub-kind">' + (item.type === "journal" ? "Journal" : item.type === "conference" ? "Conference" : "Other") + '</span></div>' +
      '<div class="pub-body"><h4><a href="' + escapeHtml(primaryUrl) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(item.title) + '</a></h4>' +
      '<p class="pub-authors">' + authors + '</p><p class="pub-citation">' + escapeHtml(item.citation) + '</p>' + rankingHtml(item) +
      '<div class="pub-actions">' +
      (item.overview ? '<a href="' + escapeHtml(item.overview) + '">Overview →</a>' : "") +
      '<a href="' + escapeHtml(primaryUrl) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(link) + '</a>' +
      '<button type="button" class="pub-bib-toggle" aria-expanded="false" aria-controls="bib-' + escapeHtml(item.key) + '">BibTeX</button></div>' +
      '<div id="bib-' + escapeHtml(item.key) + '" class="pub-bibtex" hidden><button type="button" class="pub-bib-copy">Copy BibTeX</button><pre><code>' + escapeHtml(bibtex(item)) + '</code></pre></div></div></article>';
  }

  yearControls.innerHTML = '<button type="button" data-year="all" aria-pressed="' + String(selectedYear === "all") + '">All years</button>' +
    years.map(year => '<button type="button" data-year="' + year + '" aria-pressed="' + String(String(year) === selectedYear) + '">' + year + '</button>').join("");

  function render() {
    const filtered = publications.filter(item => (selectedYear === "all" || publicationYear(item) === Number(selectedYear)) &&
      (selectedType === "all" || item.type === selectedType));
    count.textContent = filtered.length + (filtered.length === 1 ? " paper" : " papers");
    empty.hidden = filtered.length > 0;
    list.innerHTML = years.filter(year => filtered.some(item => publicationYear(item) === year)).map(year =>
      '<section class="pub-year" aria-labelledby="pub-year-' + year + '"><h3 id="pub-year-' + year + '">' + year + '</h3>' +
      filtered.filter(item => publicationYear(item) === year).map(publicationHtml).join("") + '</section>'
    ).join("");
    yearControls.querySelectorAll("button").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.year === selectedYear)));
    typeControls.querySelectorAll("button").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.type === selectedType)));
  }

  yearControls.addEventListener("click", event => {
    const button = event.target.closest("button[data-year]");
    if (!button) return;
    selectedYear = button.dataset.year;
    render();
  });
  typeControls.addEventListener("click", event => {
    const button = event.target.closest("button[data-type]");
    if (!button) return;
    selectedType = button.dataset.type;
    render();
  });
  list.addEventListener("click", async event => {
    const toggle = event.target.closest(".pub-bib-toggle");
    if (toggle) {
      const panel = document.getElementById(toggle.getAttribute("aria-controls"));
      panel.hidden = !panel.hidden;
      toggle.setAttribute("aria-expanded", String(!panel.hidden));
      return;
    }
    const copy = event.target.closest(".pub-bib-copy");
    if (!copy) return;
    try {
      await navigator.clipboard.writeText(copy.parentElement.querySelector("code").textContent);
      copy.textContent = "Copied";
      setTimeout(() => { if (copy.isConnected) copy.textContent = "Copy BibTeX"; }, 1800);
    } catch {
      copy.textContent = "Select text to copy";
    }
  });
  render();
})();
