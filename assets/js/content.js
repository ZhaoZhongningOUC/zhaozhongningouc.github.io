// -----------------------------------------------------------------------------
// Site content
// -----------------------------------------------------------------------------
// Most future edits happen in this file. Every visible string is bilingual;
// add a new object to an array to add another publication, award, or timeline
// entry. Page templates live in scripts/build-pages.mjs; styling lives in
// assets/css/styles.css. Run the generator after changing this file.

export const siteContent = {
  meta: {
    url: "https://zhaozhongningouc.github.io/",
    title: {
      en: "Jonny Chao — Personal Résumé",
      zh: "赵中宁｜个人主页",
    },
    description: {
      en: "Sugon · High-Performance Computing Product Division. Ph.D. from Ocean University of China.",
      zh: "目前就职于中科曙光高性能计算产品事业部，博士毕业于中国海洋大学。",
    },
    lastUpdated: "2026-07-19",
  },

  person: {
    name: { en: "Jonny Chao", zh: "赵中宁" },
    portrait: "/assets/images/portrait-wide.jpg",
    email: "zhaozhn@sugon.com",
    location: { en: "China", zh: "中国" },
    role: {
      en: "OneScience Development · Earth Science R&D",
      zh: "OneScience 整体推进 · 地球科学研发",
    },
    organization: { en: "Sugon", zh: "中科曙光" },
    department: {
      en: "High-Performance Computing Product Division",
      zh: "高性能计算产品事业部",
    },
    links: [
      {
        label: { en: "GitHub", zh: "GitHub" },
        url: "https://github.com/ZhaoZhongningOUC",
      },
      {
        label: { en: "OneScience", zh: "OneScience" },
        url: "https://gitee.com/onescience-ai/onescience",
      },
    ],
  },

  nav: [
    {
      page: "home",
      label: { en: "Home", zh: "主页" },
      description: { en: "Résumé overview", zh: "一页简历总览" },
    },
    {
      page: "about",
      label: { en: "About", zh: "介绍" },
      description: { en: "Profile, highlights, and background", zh: "个人简介、成果亮点与经历" },
    },
    {
      page: "experience",
      label: { en: "Experience", zh: "经历" },
      description: { en: "Work, education, and recognition", zh: "工作、教育与代表荣誉" },
    },
    {
      page: "research",
      label: { en: "Research", zh: "研究" },
      description: { en: "Selected work and publications", zh: "代表性研究、论文与专利" },
    },
    {
      page: "work",
      label: { en: "Work", zh: "工作" },
      description: { en: "Organization and professional experience", zh: "公司、部门与主要工作" },
    },
  ],

  hero: {
    eyebrow: {
      en: "AI FOR SCIENCE · HIGH-PERFORMANCE COMPUTING",
      zh: "科学智能 · 高性能计算",
    },
    headline: {
      en: "From marine data research to AI for Science.",
      zh: "从海洋数据研究走向科学智能。",
    },
  },

  about: {
    eyebrow: { en: "PERSONAL BIO", zh: "个人介绍" },
    role: {
      en: "AI for Science · High-Performance Computing",
      zh: "科学智能 · 高性能计算",
    },
    brief: {
      copyLabel: { en: "Copy profile", zh: "复制简介" },
      copiedLabel: { en: "Copied", zh: "已复制" },
      copyFailedLabel: { en: "Select the text to copy", zh: "请选中文字复制" },
      text: {
        en: "Jonny Chao earned a Ph.D. in Computer Architecture from Ocean University of China in 2024. He works in Sugon’s High-Performance Computing Product Division, where he coordinates OneScience development and leads its Earth science track. His experience spans marine data intelligence, AI for Science, and heterogeneous high-performance computing. He has published eight papers and filed two invention patents. His doctoral dissertation received outstanding dissertation honors from both Shandong Province and Ocean University of China, while a separate collaborative study received the Best Paper Award at the 15th China IoT Conference.",
        zh: "赵中宁，2024 年获中国海洋大学计算机系统结构博士学位，现就职于中科曙光高性能计算产品事业部，统筹 OneScience 研发，并负责地球科学方向建设。研究与工作聚焦海洋数据智能、科学智能与异构高性能计算，已发表 8 篇论文、申请 2 项发明专利。博士学位论文分别获评山东省优秀博士学位论文和中国海洋大学优秀博士学位论文，另有合作研究获第十五届中国物联网学术会议最佳论文。",
      },
    },
    highlights: {
      label: { en: "Highlights", zh: "核心亮点" },
      title: { en: "Research, recognition, and current role", zh: "研究成果、代表荣誉与主要工作" },
      items: [
        {
          index: "01",
          title: { en: "Doctoral research", zh: "博士研究" },
          text: {
            en: "Ph.D. in Computer Architecture from Ocean University of China. The dissertation on fishing-effort distribution forecasting received outstanding dissertation honors from both Shandong Province and OUC in 2025.",
            zh: "中国海洋大学计算机系统结构博士。围绕捕捞努力量分布预测完成的博士学位论文，于 2025 年获山东省和中国海洋大学优秀博士学位论文。",
          },
        },
        {
          index: "02",
          title: { en: "Research output", zh: "学术成果" },
          text: {
            en: "Eight papers, including five as first or co-first author, and two invention patents. A separate collaborative study received a Best Paper Award at the China IoT Conference.",
            zh: "发表 8 篇论文，其中 5 篇为第一作者或共同第一作者；申请 2 项发明专利。另有合作研究获中国物联网学术会议最佳论文。",
          },
        },
        {
          index: "03",
          title: { en: "OneScience development", zh: "OneScience 研发" },
          text: {
            en: "Coordinates development of the open-source AI for Science framework OneScience at Sugon and leads its Earth science track.",
            zh: "就职于中科曙光高性能计算产品事业部，统筹开源 AI4S 框架 OneScience 的研发推进，并负责地球科学方向建设。",
          },
        },
      ],
    },
    detailed: {
      label: { en: "Background", zh: "个人经历" },
      title: { en: "Education, research, and current work", zh: "教育、研究与主要工作" },
      copyLabel: { en: "Copy full profile", zh: "复制完整介绍" },
      copiedLabel: { en: "Copied", zh: "已复制" },
      copyFailedLabel: { en: "Select the text to copy", zh: "请选中文字复制" },
      paragraphs: [
        {
          index: "01",
          label: { en: "Education", zh: "教育经历" },
          text: {
            en: "Jonny Chao completed all three degrees at Ocean University of China, earning a bachelor’s degree in Computer Science and Technology, a master’s degree in Computer Technology, and a Ph.D. in Computer Architecture in 2024. His training progressed from core computer science and software development to data-intensive research in marine applications.",
            zh: "本科、硕士和博士阶段均就读于中国海洋大学，先后学习计算机科学与技术、计算机技术和计算机系统结构，于 2024 年获博士学位。学习和研究方向由计算机基础与软件开发，逐步延伸到海洋数据分析和智能预测。",
          },
        },
        {
          index: "02",
          label: { en: "Research", zh: "学术研究" },
          text: {
            en: "His doctoral research focused on multi-source ocean data fusion, with an emphasis on vessel-trajectory reconstruction and forecasting the distribution of fishing effort. He also contributed to research supported by the National Natural Science Foundation of China. His output includes eight papers—five as first or co-first author—and two invention patents. In 2025, his dissertation, “Fishing-effort distribution forecasting based on vessel monitoring system data,” received outstanding dissertation honors from both Shandong Province and Ocean University of China. Separately, a collaborative study received the Best Paper Award at the 15th China IoT Conference.",
            zh: "博士阶段围绕多源海洋数据融合开展研究，主要关注渔船轨迹重建、捕捞努力量分布预测等问题，并参与国家自然科学基金等科研项目。相关成果包括 8 篇论文和 2 项发明专利，其中 5 篇论文为第一作者或共同第一作者。博士学位论文《基于船位监控系统数据的海洋捕捞强度分布预测研究》于 2025 年获评山东省优秀博士学位论文和中国海洋大学优秀博士学位论文；另有合作研究获第十五届中国物联网学术会议最佳论文。",
          },
        },
        {
          index: "03",
          label: { en: "Current role", zh: "主要工作" },
          text: {
            en: "At Sugon’s High-Performance Computing Product Division, Jonny Chao coordinates development across OneScience, an open-source AI for Science framework, and leads its Earth science track. His work covers weather and ocean model engineering, scientific data pipelines, reusable tools, OneSkills and Agent support, and deployment across GPU and Hygon DCU platforms, turning research models into software that can be reused and deployed in practice.",
            zh: "现就职于中科曙光高性能计算产品事业部，统筹开源 AI4S 框架 OneScience 的研发安排与整体推进，并负责地球科学方向建设。主要工作包括气象海洋模型研发、科学数据处理流程与通用工具建设、OneSkills 与 Agent 支持，以及 GPU、海光 DCU 等异构计算平台的适配和部署，推动科研模型从研究原型走向可复用、可部署的软件。",
          },
        },
      ],
    },
  },

  homepageFeatures: {
    research: {
      label: { en: "Research", zh: "学术研究" },
      title: {
        en: "Understanding fishing activity through ocean data",
        zh: "从海洋数据中理解捕捞活动",
      },
      summary: {
        en: "Research on multi-source ocean-data fusion, vessel-trajectory reconstruction, and fishing-effort distribution forecasting.",
        zh: "围绕多源海洋数据融合、渔船轨迹重建与捕捞努力量分布预测开展研究。",
      },
    },
    work: {
      label: { en: "Main work", zh: "主要工作" },
      title: {
        en: "Turning scientific models into usable software",
        zh: "把科学模型变成可用的软件",
      },
      summary: {
        en: "Coordinates development across OneScience and leads its Earth science track, bringing models, data, and tools together for weather and ocean applications.",
        zh: "统筹 OneScience 的研发安排与推进，负责地球科学方向建设，围绕气象海洋场景组织模型、数据与工具的研发和整合。",
      },
    },
    recognition: {
      label: { en: "Recognition", zh: "代表荣誉" },
      title: {
        en: "Outstanding doctoral dissertation",
        zh: "优秀博士学位论文",
      },
      summary: {
        en: "The doctoral dissertation was recognized by both Shandong Province and Ocean University of China.",
        zh: "博士学位论文获评山东省优秀博士学位论文和中国海洋大学优秀博士学位论文。",
      },
    },
  },

  focusAreas: [
    {
      index: "01",
      title: { en: "AI4S Platform Engineering", zh: "AI4S 平台研发" },
      description: {
        en: "Planning and integrating scientific models, datasets, workflows, and reusable software components.",
        zh: "围绕科学模型、数据集和工作流，开发可复用的工具与软件组件。",
      },
    },
    {
      index: "02",
      title: { en: "Earth-system Intelligence", zh: "气象海洋智能" },
      description: {
        en: "Weather and ocean models spanning forecasting, downscaling, nowcasting, and marine prediction.",
        zh: "研发天气预报、海洋预测、降尺度和短临预报模型，并配套数据处理流程。",
      },
    },
    {
      index: "03",
      title: { en: "Heterogeneous HPC Software", zh: "异构高性能计算" },
      description: {
        en: "Making scientific AI workloads usable across GPU and Hygon DCU computing environments.",
        zh: "推动科学智能模型在 GPU、海光 DCU 等平台上的适配、优化和部署。",
      },
    },
  ],

  oneScience: {
    title: "OneScience",
    subtitle: {
      en: "An open-source AI for Science model toolkit",
      zh: "开源 AI4S 模型工具包",
    },
    description: {
      en: "OneScience brings together datasets, foundation and pretrained models, preprocessing and postprocessing tools, and scientific data pipelines across multiple research domains. OneSkills packages reusable capabilities for Agent workflows. The project is validated on GPU and Hygon DCU platforms and released under Apache-2.0.",
      zh: "OneScience 面向多个科研领域，提供数据集、基础模型与预训练模型、前后处理工具及科学数据处理流程，并通过 OneSkills 封装可复用能力，为 Agent 调用与任务流程提供支持。项目支持 GPU 与海光 DCU，并采用 Apache-2.0 协议开源。",
    },
    role: {
      en: "Coordinates development across OneScience and leads the Earth science track, covering weather and ocean models, data pipelines, OneSkills and Agent support, and deployment on GPU and Hygon DCU platforms.",
      zh: "统筹 OneScience 研发，负责地球科学方向建设，包括气象海洋模型研发、数据流程开发、OneSkills 与 Agent 支持，以及 GPU、海光 DCU 平台适配。",
    },
    facts: [
      { value: "6", label: { en: "capability areas", zh: "能力方向" } },
      { value: "GPU + DCU", label: { en: "validated platforms", zh: "支持平台" } },
      { value: "Apache-2.0", label: { en: "open-source license", zh: "开源协议" } },
    ],
    domains: [
      { en: "Earth Science", zh: "地球科学" },
      { en: "Computational Fluid Dynamics", zh: "计算流体力学" },
      { en: "Structural Mechanics", zh: "结构力学" },
      { en: "Bioinformatics", zh: "生物信息学" },
      { en: "Materials Chemistry", zh: "材料化学" },
      { en: "OneSkills & Agent Support", zh: "OneSkills 与 Agent 支持" },
    ],
    links: [
      {
        label: { en: "Source repository", zh: "查看开源仓库" },
        url: "https://gitee.com/onescience-ai/onescience",
      },
      {
        label: { en: "Try on SCNet", zh: "前往超算互联网体验" },
        url: "https://www.scnet.cn/ui/mall/app",
      },
    ],
  },

  selectedResearch: [
    {
      year: "2025",
      title: "TransFish",
      fullTitle: "TransFish: day-level forecasting of fishing effort distribution via transformer on multi-source data",
      role: { en: "First author", zh: "第一作者" },
      summary: {
        en: "Fuses historical fishing distributions, ocean hydrology, and chlorophyll data with ResNet and Transformer to forecast day-level fishing effort for the coming week.",
        zh: "融合历史捕捞努力量分布、海洋水文要素和叶绿素浓度数据，基于 ResNet 与 Transformer 预测未来一周的逐日捕捞努力量分布。",
      },
      links: [
        { label: { en: "Paper", zh: "论文原文" }, url: "https://doi.org/10.1007/s11160-025-09951-w" },
        { label: { en: "Code & data", zh: "开源代码与数据" }, url: "https://github.com/ZhaoZhongningOUC/TransFish" },
      ],
    },
    {
      year: "2024",
      title: "HiTrip",
      fullTitle: "HiTrip: Historical trajectory interpolation for trawlers via deep learning on multi-source data",
      role: { en: "First author", zh: "第一作者" },
      summary: {
        en: "Reconstructs two-hour historical vessel tracks at three-minute resolution by combining VMS records with ocean hydrological fields.",
        zh: "融合 VMS 轨迹记录与海洋水文场，将采样间隔为两小时的历史渔船轨迹重建为采样间隔三分钟的轨迹。",
      },
      links: [
        { label: { en: "Paper", zh: "论文原文" }, url: "https://doi.org/10.1016/j.oceaneng.2023.116588" },
        { label: { en: "Code & samples", zh: "代码与示例数据" }, url: "https://github.com/ZhaoZhongningOUC/HiTrip" },
      ],
    },
    {
      year: "2021",
      title: "Fishing Chronology",
      fullTitle: "Short-term prediction of fishing effort distributions by discovering fishing chronology among trawlers based on VMS dataset",
      role: { en: "First author", zh: "第一作者" },
      summary: {
        en: "Introduces fishing chronology to identify a small indicator fleet whose current behavior predicts near-future fishing-effort distributions.",
        zh: "提出捕捞时序关系，并据此从船队中识别少量指示渔船，利用其当前捕捞行为预测短期捕捞努力量分布。",
      },
      links: [
        { label: { en: "Paper", zh: "论文原文" }, url: "https://doi.org/10.1016/j.eswa.2021.115512" },
        { label: { en: "Code & data", zh: "开源代码与数据" }, url: "https://github.com/ZhaoZhongningOUC/EarlyBirds" },
      ],
    },
  ],

  publications: [
    {
      year: "2025",
      title: "TransFish: day-level forecasting of fishing effort distribution via transformer on multi-source data",
      venue: "Reviews in Fish Biology and Fisheries, 35, 1143–1170",
      role: { en: "First author", zh: "第一作者" },
      leadAuthor: true,
      citations: 0,
      openAlexUrl: "https://openalex.org/W4411112115",
      metric: { en: "Journal IF 5.9 · CiteScore 10.0", zh: "期刊 IF 5.9 · CiteScore 10.0" },
      metricUrl: "https://www.springer.com/us/journal-impact/life-sciences/ecology",
      url: "https://doi.org/10.1007/s11160-025-09951-w",
    },
    {
      year: "2024",
      title: "HiTrip: Historical trajectory interpolation for trawlers via deep learning on multi-source data",
      venue: "Ocean Engineering, 292, 116588",
      role: { en: "First author", zh: "第一作者" },
      leadAuthor: true,
      citations: 13,
      openAlexUrl: "https://openalex.org/W4390022206",
      url: "https://doi.org/10.1016/j.oceaneng.2023.116588",
    },
    {
      year: "2024",
      title: "HyFish: hydrological factor fusion for prediction of fishing effort distribution with VMS dataset",
      venue: "Frontiers in Marine Science, 11, 1296146",
      role: { en: "Third author", zh: "第三作者" },
      leadAuthor: false,
      citations: 5,
      openAlexUrl: "https://openalex.org/W4392002215",
      url: "https://doi.org/10.3389/fmars.2024.1296146",
    },
    {
      year: "2023",
      title: "Echo-ID: Smartphone Placement Region Identification for Context-Aware Computing",
      venue: "Sensors, 23, 4302",
      role: { en: "Co-first author", zh: "共同第一作者" },
      leadAuthor: true,
      citations: 2,
      openAlexUrl: "https://openalex.org/W4367183324",
      url: "https://doi.org/10.3390/s23094302",
    },
    {
      year: "2023",
      title: "VDU: VMS Dataset Upsampling via Multi-Source Data Fusion for Trawlers",
      venue: "OCEANS 2023 - Limerick",
      role: { en: "Second author", zh: "第二作者" },
      leadAuthor: false,
      citations: 0,
      openAlexUrl: "https://openalex.org/W4386631333",
      metric: { en: "Indexed in IEEE Xplore", zh: "IEEE Xplore 收录" },
      metricUrl: "https://doi.org/10.1109/OCEANSLimerick52467.2023.10244460",
      url: "https://doi.org/10.1109/OCEANSLimerick52467.2023.10244460",
    },
    {
      year: "2021",
      title: "Short-term prediction of fishing effort distributions by discovering fishing chronology among trawlers based on VMS dataset",
      venue: "Expert Systems with Applications, 184, 115512",
      role: { en: "First author", zh: "第一作者" },
      leadAuthor: true,
      citations: 24,
      openAlexUrl: "https://openalex.org/W3179438486",
      url: "https://doi.org/10.1016/j.eswa.2021.115512",
    },
    {
      year: "2021",
      title: "HIT: Hybrid Interpolation for Trawlers based on Deep Learning",
      venue: "OCEANS 2021: San Diego - Porto",
      role: { en: "Second author", zh: "第二作者" },
      leadAuthor: false,
      citations: 2,
      openAlexUrl: "https://openalex.org/W4213217286",
      url: "https://doi.org/10.23919/OCEANS44145.2021.9705828",
    },
    {
      year: "2020",
      title: "Trawler Fishing Track Interpolation using LSTM for Satellite-based VMS Traces",
      venue: "2020 Global Oceans: Singapore - U.S. Gulf Coast (OCEANS 2020)",
      role: { en: "First author", zh: "第一作者" },
      leadAuthor: true,
      citations: 7,
      openAlexUrl: "https://openalex.org/W3152767834",
      url: "https://doi.org/10.1109/IEEECONF38699.2020.9389435",
    },
  ],

  citationData: {
    source: "OpenAlex",
    sourceUrl: "https://openalex.org/",
    updated: { en: "July 2026", zh: "2026 年 7 月" },
    note: {
      en: "Citation counts are from OpenAlex. For papers without a positive citation count, journal or indexing information is shown instead; Google Scholar links run a live title search.",
      zh: "引用次数来自 OpenAlex；没有正向引用数据的论文改为展示期刊指标或收录信息，Google Scholar 链接按论文题目实时检索。",
    },
  },

  patents: [
    {
      title: {
        en: "Method for short-term fishing-effort distribution prediction based on fishing chronology",
        zh: "基于捕捞时序关系的短时捕捞努力量分布预测方法",
      },
      type: { en: "Invention patent · Granted", zh: "发明专利（已授权）" },
    },
    {
      title: {
        en: "Historical vessel-trajectory dataset upsampling method with hydrological data fusion",
        zh: "融合水文数据的渔船历史轨迹数据集上采样方法",
      },
      type: { en: "Invention patent", zh: "发明专利" },
    },
  ],

  journey: [
    {
      period: { en: "Now", zh: "至今" },
      title: { en: "OneScience & Earth Science R&D", zh: "OneScience 与地球科学方向研发" },
      subtitle: { en: "Sugon", zh: "中科曙光" },
      description: {
        en: "Coordinates OneScience development and leads weather and ocean model engineering, data pipelines, and heterogeneous platform deployment.",
        zh: "统筹 OneScience 研发，开展气象海洋模型研发、数据流程开发和异构计算平台适配。",
      },
    },
    {
      period: { en: "2020–2024", zh: "2020–2024" },
      featuredOnHome: true,
      homeDegree: { en: "Ph.D. in Computer Architecture", zh: "计算机系统结构博士" },
      title: { en: "Ph.D. · Computer Architecture", zh: "博士 · 计算机系统结构" },
      subtitle: { en: "Ocean University of China", zh: "中国海洋大学" },
      description: {
        en: "Research on multi-source ocean data fusion, vessel-trajectory reconstruction, and fishing-effort distribution forecasting.",
        zh: "围绕多源海洋数据融合、渔船轨迹重建与捕捞努力量分布预测开展研究。",
      },
    },
    {
      period: { en: "2017–2020", zh: "2017–2020" },
      title: { en: "Master’s · Computer Technology", zh: "硕士 · 计算机技术" },
      subtitle: { en: "Ocean University of China", zh: "中国海洋大学" },
      description: {
        en: "Large-scale vessel trajectory processing and fishing-effort prediction.",
        zh: "研究渔船轨迹数据处理与捕捞努力量预测。",
      },
    },
    {
      period: { en: "2013–2017", zh: "2013–2017" },
      title: { en: "Bachelor’s · Computer Science & Technology", zh: "本科 · 计算机科学与技术" },
      subtitle: { en: "Ocean University of China", zh: "中国海洋大学" },
      description: {
        en: "Foundations in computer systems, software, networks, and data.",
        zh: "学习计算机系统、软件开发、网络与数据等基础课程。",
      },
    },
  ],

  programs: [
    {
      period: "2020–2023",
      title: {
        en: "VMS big-data-driven fishing intensity distribution prediction",
        zh: "船位监控系统大数据驱动的海洋捕捞强度分布预测研究",
      },
      sponsor: {
        en: "National Natural Science Foundation of China · 41976185",
        zh: "国家自然科学基金面上项目 · 41976185",
      },
      contribution: {
        en: "Contributed to the proposal and research, led the mid-term report, and participated in project close-out materials.",
        zh: "参与项目申报和研究工作，负责中期报告，协助完成结题材料。",
      },
    },
    {
      period: "2017–2019",
      title: {
        en: "Modeling and application of marine fishery resource spatiotemporal evolution using vessel-trajectory and remote-sensing big data",
        zh: "融合渔业船舶轨迹和遥感图像大数据的海洋渔业资源时空演化规律建模与应用",
      },
      sponsor: {
        en: "Qingdao National Laboratory for Marine Science and Technology · QNLM20160RP0405",
        zh: "青岛海洋科学与技术试点国家实验室开放基金 · QNLM20160RP0405",
      },
      contribution: {
        en: "Participated in the research work of the program.",
        zh: "参与课题研究。",
      },
    },
  ],

  awards: [
    {
      year: "2025",
      featured: true,
      featuredOnHome: true,
      tier: { en: "Provincial", zh: "省级" },
      title: { en: "Outstanding Doctoral Dissertation of Shandong Province", zh: "山东省优秀博士学位论文" },
      organization: { en: "Shandong Provincial Department of Education", zh: "山东省教育厅" },
      description: {
        en: "Doctoral dissertation: Fishing-effort distribution forecasting based on vessel monitoring system data",
        zh: "博士学位论文《基于船位监控系统数据的海洋捕捞强度分布预测研究》",
      },
    },
    {
      year: "2025",
      featured: true,
      featuredOnHome: true,
      tier: { en: "University", zh: "校级" },
      title: { en: "Outstanding Doctoral Dissertation of Ocean University of China", zh: "中国海洋大学优秀博士学位论文" },
      organization: { en: "Ocean University of China", zh: "中国海洋大学" },
      description: {
        en: "Doctoral dissertation: Fishing-effort distribution forecasting based on vessel monitoring system data",
        zh: "博士学位论文《基于船位监控系统数据的海洋捕捞强度分布预测研究》",
      },
    },
    {
      year: "2024",
      featured: false,
      title: { en: "Academic and Practice Innovation Scholarship", zh: "学术（实践）创新奖学金" },
      organization: { en: "Ocean University of China", zh: "中国海洋大学" },
    },
    {
      year: "2022",
      featured: false,
      title: { en: "Outstanding Graduate Student · 2021–2022", zh: "2021—2022 学年优秀研究生" },
      organization: { en: "Ocean University of China", zh: "中国海洋大学" },
    },
    {
      year: "2021",
      featured: false,
      featuredOnHome: true,
      title: { en: "Best Paper · 15th China IoT Conference", zh: "第十五届中国物联网学术会议最佳论文" },
      organization: { en: "CCF IoT Technical Committee", zh: "中国计算机学会物联网专业委员会" },
    },
  ],

  earlierRecognition: {
    en: "Other recognition includes Outstanding Graduate Student and a first-class academic scholarship during the master’s program, plus second prize in the 4th Shandong University Student AI Competition.",
    zh: "其他荣誉包括硕士阶段优秀研究生、一等学业奖学金，以及第四届山东省大学生人工智能大赛二等奖。",
  },
};
