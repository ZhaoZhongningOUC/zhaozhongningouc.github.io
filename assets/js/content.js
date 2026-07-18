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
      en: "Jonny — AI4S, Earth Systems & HPC",
      zh: "Jonny｜AI4S、气象海洋与高性能计算",
    },
    description: {
      en: "Jonny builds high-performance AI for Science software for weather, ocean, and scientific discovery, and coordinates the development of OneScience at Sugon.",
      zh: "Jonny 现就职于中科曙光，负责 OneScience 整体推进和地球科学方向研发，主要关注气象海洋 AI4S 与异构高性能软件。",
    },
    lastUpdated: "2026-07-19",
  },

  person: {
    name: "Jonny",
    portrait: "/assets/images/portrait.jpg",
    email: "zhaozhn@sugon.com",
    location: { en: "China", zh: "中国" },
    role: {
      en: "OneScience Work Coordination & Earth Science R&D",
      zh: "OneScience 整体推进与地球科学方向研发",
    },
    organization: { en: "Sugon", zh: "中科曙光" },
    organizationLogo: {
      src: "/assets/images/sugon-logo.png",
      alt: { en: "Sugon logo", zh: "中科曙光标识" },
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
      description: { en: "A short introduction", zh: "个人简介与联系方式" },
    },
    {
      page: "work",
      label: { en: "Work", zh: "工作" },
      description: { en: "OneScience and current focus", zh: "OneScience 与当前工作" },
    },
    {
      page: "research",
      label: { en: "Research", zh: "研究" },
      description: { en: "Selected work and publications", zh: "代表性研究、论文与专利" },
    },
    {
      page: "experience",
      label: { en: "Experience", zh: "经历" },
      description: { en: "Work, education, and recognition", zh: "工作、教育与项目经历" },
    },
  ],

  hero: {
    eyebrow: {
      en: "AI FOR SCIENCE · EARTH SYSTEMS · HPC",
      zh: "AI4S · 气象海洋 · 高性能计算",
    },
    headline: {
      en: "Building the software layer between scientific ideas and high-performance computing.",
      zh: "把气象海洋领域的 AI 模型做成真正可用的科学软件。",
    },
    summary: {
      en: "At Sugon, I coordinate work across OneScience and am responsible for R&D in its Earth science track, working across weather, ocean, scientific models, and heterogeneous computing.",
      zh: "我目前就职于中科曙光，负责 OneScience 的整体推进和地球科学方向研发，主要涉及气象海洋模型、数据处理流程以及 GPU 与海光 DCU 平台适配。",
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
    organizationLogo: {
      src: "/assets/images/sugon-logo.png",
      alt: { en: "Sugon logo", zh: "中科曙光标识" },
    },
    title: "OneScience",
    subtitle: {
      en: "An open-source AI for Science model toolkit",
      zh: "开源 AI4S 模型工具包",
    },
    description: {
      en: "OneScience brings together datasets, foundation and pretrained models, preprocessing and postprocessing tools, and scientific data pipelines across multiple research domains. The project is validated on GPU and Hygon DCU platforms and released under Apache-2.0.",
      zh: "OneScience 面向多个科研领域，提供数据集、基础模型与预训练模型、前后处理工具及科学数据处理流程。项目支持 GPU 与海光 DCU，并采用 Apache-2.0 协议开源。",
    },
    role: {
      en: "Responsible for work coordination across OneScience and for Earth science R&D spanning weather and ocean models, data workflows, and heterogeneous deployment.",
      zh: "我负责 OneScience 的整体推进，并承担地球科学方向研发，包括气象海洋模型、数据处理流程和异构平台适配。",
    },
    facts: [
      { value: "5", label: { en: "research domains", zh: "覆盖方向" } },
      { value: "GPU + DCU", label: { en: "validated platforms", zh: "支持平台" } },
      { value: "Apache-2.0", label: { en: "open-source license", zh: "开源协议" } },
    ],
    domains: [
      { en: "Earth Science", zh: "地球科学" },
      { en: "Computational Fluid Dynamics", zh: "计算流体力学" },
      { en: "Structural Mechanics", zh: "结构力学" },
      { en: "Bioinformatics", zh: "生物信息学" },
      { en: "Materials Chemistry", zh: "材料化学" },
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
      metric: { value: "5.32%", label: { en: "average error", zh: "平均预测误差率" } },
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
      metric: { value: "0.20 km", label: { en: "East China Sea error", zh: "东海数据集插值误差" } },
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
      metric: {
        value: { en: "19 / 1,589", zh: "19 艘" },
        label: { en: "indicator vessels · 6.95% error", zh: "指示渔船（共 1,589 艘） · 预测误差率 6.95%" },
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
      url: "https://doi.org/10.1007/s11160-025-09951-w",
    },
    {
      year: "2024",
      title: "HiTrip: Historical trajectory interpolation for trawlers via deep learning on multi-source data",
      venue: "Ocean Engineering, 292, 116588",
      role: { en: "First author", zh: "第一作者" },
      url: "https://doi.org/10.1016/j.oceaneng.2023.116588",
    },
    {
      year: "2024",
      title: "HyFish: hydrological factor fusion for prediction of fishing effort distribution with VMS dataset",
      venue: "Frontiers in Marine Science, 11, 1296146",
      role: { en: "Third author", zh: "第三作者" },
      url: "https://doi.org/10.3389/fmars.2024.1296146",
    },
    {
      year: "2023",
      title: "Echo-ID: Smartphone Placement Region Identification for Context-Aware Computing",
      venue: "Sensors, 23, 4302",
      role: { en: "Co-first author", zh: "共同第一作者" },
      url: "https://doi.org/10.3390/s23094302",
    },
    {
      year: "2023",
      title: "VDU: VMS Dataset Upsampling via Multi-Source Data Fusion for Trawlers",
      venue: "OCEANS 2023 - Limerick",
      role: { en: "Second author", zh: "第二作者" },
      url: "https://doi.org/10.1109/OCEANSLimerick52467.2023.10244460",
    },
    {
      year: "2021",
      title: "Short-term prediction of fishing effort distributions by discovering fishing chronology among trawlers based on VMS dataset",
      venue: "Expert Systems with Applications, 184, 115512",
      role: { en: "First author", zh: "第一作者" },
      url: "https://doi.org/10.1016/j.eswa.2021.115512",
    },
    {
      year: "2021",
      title: "HIT: Hybrid Interpolation for Trawlers based on Deep Learning",
      venue: "OCEANS 2021: San Diego - Porto",
      role: { en: "Second author", zh: "第二作者" },
      url: "https://doi.org/10.23919/OCEANS44145.2021.9705828",
    },
    {
      year: "2020",
      title: "Trawler Fishing Track Interpolation using LSTM for Satellite-based VMS Traces",
      venue: "2020 Global Oceans: Singapore - U.S. Gulf Coast (OCEANS 2020)",
      role: { en: "First author", zh: "第一作者" },
      url: "https://doi.org/10.1109/IEEECONF38699.2020.9389435",
    },
  ],

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
      title: { en: "OneScience at Sugon", zh: "中科曙光 · OneScience" },
      subtitle: {
        en: "Overall coordination · Earth science R&D · Heterogeneous software",
        zh: "整体推进 · 地球科学研发 · 异构适配",
      },
      description: {
        en: "Responsible for work coordination across OneScience and for advancing weather and ocean capabilities in the AI4S framework.",
        zh: "负责 OneScience 整体工作安排和地球科学方向研发，重点开展气象海洋模型、数据处理流程与异构平台适配。",
      },
    },
    {
      period: { en: "2020–2024", zh: "2020–2024" },
      title: { en: "Ph.D. · Computer Architecture", zh: "博士 · 计算机系统结构" },
      subtitle: { en: "Ocean University of China", zh: "中国海洋大学" },
      description: {
        en: "Multi-source ocean data fusion and fishing-effort distribution forecasting.",
        zh: "研究多源海洋数据融合与捕捞努力量分布预测。",
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
      year: "2022",
      title: { en: "Outstanding Doctoral Student", zh: "博士优秀研究生" },
      organization: { en: "Ocean University of China", zh: "中国海洋大学" },
    },
    {
      year: "2021",
      title: { en: "Best Paper · 15th China IoT Conference", zh: "第十五届中国物联网学术会议最佳论文" },
      organization: { en: "Conference presenter", zh: "获奖论文答辩人" },
    },
    {
      year: "2019",
      title: { en: "First-class Academic Scholarship", zh: "一等学业奖学金" },
      organization: { en: "Ocean University of China", zh: "中国海洋大学" },
    },
  ],
};
