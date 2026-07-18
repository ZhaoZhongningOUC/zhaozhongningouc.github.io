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
      zh: "Jonny — AI4S、地球科学与高性能计算",
    },
    description: {
      en: "Jonny builds high-performance AI for Science software for weather, ocean, and scientific discovery, and coordinates the development of OneScience at Sugon.",
      zh: "Jonny 面向气象、海洋与科学发现构建高性能 AI4S 软件，并负责中科曙光 OneScience 的整体工作安排与地球科学研发。",
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
      zh: "OneScience 整体协调与地球科学研发",
    },
    organization: { en: "Sugon", zh: "中科曙光" },
    organizationLogo: {
      src: "/assets/images/sugon-logo.png",
      alt: { en: "Sugon logo", zh: "中科曙光 Logo" },
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
      description: { en: "A short introduction", zh: "简短的个人介绍" },
    },
    {
      page: "work",
      label: { en: "Work", zh: "工作" },
      description: { en: "OneScience and current focus", zh: "OneScience 与当前方向" },
    },
    {
      page: "research",
      label: { en: "Research", zh: "研究" },
      description: { en: "Selected work and publications", zh: "代表成果与论文专利" },
    },
    {
      page: "experience",
      label: { en: "Experience", zh: "经历" },
      description: { en: "Work, education, and recognition", zh: "工作、教育与荣誉" },
    },
  ],

  hero: {
    eyebrow: {
      en: "AI FOR SCIENCE · EARTH SYSTEMS · HPC",
      zh: "科学智能 · 地球系统 · 高性能计算",
    },
    headline: {
      en: "Building the software layer between scientific ideas and high-performance computing.",
      zh: "在科学问题与高性能计算之间，构建可用的 AI4S 软件。",
    },
    summary: {
      en: "At Sugon, I coordinate work across OneScience and am responsible for R&D in its Earth science track, working across weather, ocean, scientific models, and heterogeneous computing.",
      zh: "我在中科曙光负责 OneScience 的整体工作安排与地球科学领域研发，工作覆盖气象、海洋、科学模型与异构计算。",
    },
    education: {
      en: "I completed my bachelor’s, master’s, and doctoral studies at Ocean University of China.",
      zh: "本科、硕士和博士均就读于中国海洋大学。",
    },
  },

  focusAreas: [
    {
      index: "01",
      title: { en: "AI4S Platform Engineering", zh: "AI4S 平台工程" },
      description: {
        en: "Planning and integrating scientific models, datasets, workflows, and reusable software components.",
        zh: "规划并集成科学模型、数据集、工作流与可复用软件组件。",
      },
    },
    {
      index: "02",
      title: { en: "Earth-system Intelligence", zh: "地球系统智能" },
      description: {
        en: "Weather and ocean models spanning forecasting, downscaling, nowcasting, and marine prediction.",
        zh: "面向天气与海洋的预报、降尺度、短临预测及海洋环境建模。",
      },
    },
    {
      index: "03",
      title: { en: "Heterogeneous HPC Software", zh: "异构高性能软件" },
      description: {
        en: "Making scientific AI workloads usable across GPU and Hygon DCU computing environments.",
        zh: "推动科学智能负载在 GPU 与海光 DCU 等计算环境中的适配与使用。",
      },
    },
  ],

  oneScience: {
    organizationLogo: {
      src: "/assets/images/sugon-logo.png",
      alt: { en: "Sugon logo", zh: "中科曙光 Logo" },
    },
    title: "OneScience",
    subtitle: {
      en: "An open-source AI for Science model toolkit",
      zh: "面向科学智能的开源模型工具包",
    },
    description: {
      en: "OneScience brings together datasets, foundation and pretrained models, preprocessing and postprocessing tools, and scientific data pipelines across multiple research domains. The project is validated on GPU and Hygon DCU platforms and released under Apache-2.0.",
      zh: "OneScience 集成数据集、基础模型与预训练模型、前后处理工具及科学数据管线，覆盖多个科研领域。项目已在 GPU 与海光 DCU 平台完成测试验证，并以 Apache-2.0 协议开源。",
    },
    role: {
      en: "Responsible for work coordination across OneScience and for Earth science R&D spanning weather and ocean models, data workflows, and heterogeneous deployment.",
      zh: "负责 OneScience 整体工作安排，以及气象海洋模型、数据工作流与异构部署等地球科学领域研发。",
    },
    facts: [
      { value: "5", label: { en: "research domains", zh: "科研领域" } },
      { value: "GPU + DCU", label: { en: "validated platforms", zh: "验证平台" } },
      { value: "Apache-2.0", label: { en: "open-source license", zh: "开源协议" } },
    ],
    domains: [
      { en: "Earth Science", zh: "地球科学" },
      { en: "Computational Fluid Dynamics", zh: "计算流体" },
      { en: "Structural Mechanics", zh: "结构力学" },
      { en: "Bioinformatics", zh: "生物信息" },
      { en: "Materials Chemistry", zh: "材料化学" },
    ],
    links: [
      {
        label: { en: "Source repository", zh: "开源仓库" },
        url: "https://gitee.com/onescience-ai/onescience",
      },
      {
        label: { en: "Try on SCNet", zh: "超算互联网试用" },
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
        zh: "融合历史捕捞分布、海洋水文与叶绿素数据，通过 ResNet 与 Transformer 预测未来一周逐日捕捞努力量。",
      },
      metric: { value: "5.32%", label: { en: "average error", zh: "平均误差率" } },
      links: [
        { label: { en: "Paper", zh: "论文" }, url: "https://doi.org/10.1007/s11160-025-09951-w" },
        { label: { en: "Code & data", zh: "代码与数据" }, url: "https://github.com/ZhaoZhongningOUC/TransFish" },
      ],
    },
    {
      year: "2024",
      title: "HiTrip",
      fullTitle: "HiTrip: Historical trajectory interpolation for trawlers via deep learning on multi-source data",
      role: { en: "First author", zh: "第一作者" },
      summary: {
        en: "Reconstructs two-hour historical vessel tracks at three-minute resolution by combining VMS records with ocean hydrological fields.",
        zh: "融合 VMS 记录与海洋水文场，将两小时间隔的历史渔船轨迹重建至三分钟分辨率。",
      },
      metric: { value: "0.20 km", label: { en: "East China Sea error", zh: "东海数据误差" } },
      links: [
        { label: { en: "Paper", zh: "论文" }, url: "https://doi.org/10.1016/j.oceaneng.2023.116588" },
        { label: { en: "Code & samples", zh: "代码与样例" }, url: "https://github.com/ZhaoZhongningOUC/HiTrip" },
      ],
    },
    {
      year: "2021",
      title: "Fishing Chronology",
      fullTitle: "Short-term prediction of fishing effort distributions by discovering fishing chronology among trawlers based on VMS dataset",
      role: { en: "First author", zh: "第一作者" },
      summary: {
        en: "Introduces fishing chronology to identify a small indicator fleet whose current behavior predicts near-future fishing-effort distributions.",
        zh: "提出捕捞时序关系，从船队中识别少量指示渔船，以其当前行为预测近期捕捞努力量分布。",
      },
      metric: { value: "19 / 1,589", label: { en: "indicator vessels · 6.95% error", zh: "指示渔船 · 6.95% 误差" } },
      links: [
        { label: { en: "Paper", zh: "论文" }, url: "https://doi.org/10.1016/j.eswa.2021.115512" },
        { label: { en: "Code & data", zh: "代码与数据" }, url: "https://github.com/ZhaoZhongningOUC/EarlyBirds" },
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
      type: { en: "Invention patent · Granted", zh: "发明专利 · 已授权" },
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
      period: { en: "Now", zh: "现在" },
      title: { en: "OneScience at Sugon", zh: "中科曙光 · OneScience" },
      subtitle: {
        en: "Overall coordination · Earth science R&D · Heterogeneous software",
        zh: "整体工作安排 · 地球科学研发 · 异构软件",
      },
      description: {
        en: "Responsible for work coordination across OneScience and for advancing weather and ocean capabilities in the AI4S framework.",
        zh: "负责 OneScience 整体工作安排与地球科学领域研发，推进 AI4S 框架中的气象海洋能力建设。",
      },
    },
    {
      period: { en: "2020–2024", zh: "2020–2024" },
      title: { en: "Ph.D. · Computer Architecture", zh: "博士 · 计算机系统结构" },
      subtitle: { en: "Ocean University of China", zh: "中国海洋大学" },
      description: {
        en: "Multi-source ocean data fusion and fishing-effort distribution forecasting.",
        zh: "多源海洋数据融合与捕捞努力量分布预测。",
      },
    },
    {
      period: { en: "2017–2020", zh: "2017–2020" },
      title: { en: "Master’s · Computer Technology", zh: "硕士 · 计算机技术" },
      subtitle: { en: "Ocean University of China", zh: "中国海洋大学" },
      description: {
        en: "Large-scale vessel trajectory processing and fishing-effort prediction.",
        zh: "渔业船舶轨迹大数据处理与捕捞努力量预测。",
      },
    },
    {
      period: { en: "2013–2017", zh: "2013–2017" },
      title: { en: "Bachelor’s · Computer Science & Technology", zh: "本科 · 计算机科学与技术" },
      subtitle: { en: "Ocean University of China", zh: "中国海洋大学" },
      description: {
        en: "Foundations in computer systems, software, networks, and data.",
        zh: "系统学习计算机系统、软件、网络与数据基础。",
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
        zh: "参与项目申报与科研，负责中期报告，并参与结题材料撰写。",
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
        zh: "参与项目科研工作。",
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
      organization: { en: "Conference presenter", zh: "论文答辩人" },
    },
    {
      year: "2019",
      title: { en: "First-class Academic Scholarship", zh: "一等学业奖学金" },
      organization: { en: "Ocean University of China", zh: "中国海洋大学" },
    },
  ],
};
