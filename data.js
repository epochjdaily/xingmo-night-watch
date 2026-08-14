export const dimensions = {
  signal: '信号强度',
  boundary: '轨道边界',
  recovery: '回复速度',
  motion: '流星行动',
}

export const results = {
  trail: {
    name: '开路星貘', mansion: '角木蛟', bureau: '东方青龙·首宿', code: 'TRAILBLAZER 01',
    tagline: '你不等宇宙给答案，你先给宇宙一条路。',
    intro: '信息越混乱，你越会用一个可执行的动作割开雾气。角宿是青龙之角，在你身上变成“先走半步”的勇气。',
    gift: '可以在信息不全时开出第一版，还能让周围的人跟上。',
    shadow: '别把“走得快”变成“永远不用回头”；有些人需要先被听见。',
    mission: '把今晚最纠结的事缩成一个 15 分钟可完成的动作。',
    ally: '回信星貘', friction: '排阵星貘', color: '#b8ff35', ink: '#100d2b', symbol: '✦',
    base: { signal: 72, boundary: 66, recovery: 70, motion: 96 },
  },
  harbor: {
    name: '容光星貘', mansion: '房日兔', bureau: '东方青龙·第四宿', code: 'HARBOR 04',
    tagline: '你的轨道不拥挤，刚好能让人停靠。',
    intro: '你擅长读懂气氛，也能让紧张的现场恢复人类温度。房宿被视作青龙的腹房，你像一处正好可以歇脚的光。',
    gift: '把尴尬翻译成可以说的话，让关系不必靠猜。',
    shadow: '别把所有人的天气都带回自己身上；关心不等于接管。',
    mission: '回复一个真正想回的人，然后把其他通知静音一小时。',
    ally: '清醒星貘', friction: '留白星貘', color: '#ff8fba', ink: '#100d2b', symbol: '◎',
    base: { signal: 94, boundary: 48, recovery: 70, motion: 58 },
  },
  grid: {
    name: '排阵星貘', mansion: '斗木獬', bureau: '北方玄武·首宿', code: 'ORBIT GRID 08',
    tagline: '别急，你已经在给混乱标坐。',
    intro: '当别人看见一团事，你看见节点、顺序和备用路线。斗宿如天上的斗柄，你的安心来自“事情可以被拆开”。',
    gift: '在新工具、AI 协作和复杂项目中快速建立可信的秩序。',
    shadow: '规则太完整时，第一步反而会迟到。别等每颗星都归位。',
    mission: '给明天的任务只留三栏：必须、可以、不做也行。',
    ally: '开路星貘', friction: '燃点星貘', color: '#69e6ff', ink: '#100d2b', symbol: '⌘',
    base: { signal: 62, boundary: 82, recovery: 74, motion: 68 },
  },
  void: {
    name: '留白星貘', mansion: '虚日鼠', bureau: '北方玄武·第四宿', code: 'QUIET VOID 11',
    tagline: '你不是掉线，是在给灵魂清缓存。',
    intro: '你的恢复不发生在热闹里。虚宿的“虚”在这里不是空无，而是为新东西腾出位置——先把外界的声音调小。',
    gift: '不被即时反应绑架，能够在独处中恢复判断力。',
    shadow: '沉默时记得留一盏灯；对重要的人说“我会回来回复”。',
    mission: '开一次 30 分钟无屏幕航行，让无聊先发生。',
    ally: '造境星貘', friction: '容光星貘', color: '#a99bff', ink: '#100d2b', symbol: '○',
    base: { signal: 36, boundary: 92, recovery: 88, motion: 40 },
  },
  archive: {
    name: '造境星貘', mansion: '奎木狼', bureau: '西方白虎·首宿', code: 'DREAM ARCHIVE 15',
    tagline: '你把没有答案的夜，改写成一个世界。',
    intro: '你会通过画面、故事、歌单或奇怪类比理解自己。奎宿有文苑意象，你的强项是把无形的感受做成可被分享的东西。',
    gift: '在同质化内容中制造真正的新鲜感，还会给情绪一个容器。',
    shadow: '灵感不是交付；你需要一个有边界的完成时刻。',
    mission: '把今天的一种情绪命名成一颗虚构星球，只写三句介绍。',
    ally: '留白星貘', friction: '清醒星貘', color: '#ff6b57', ink: '#100d2b', symbol: '◇',
    base: { signal: 66, boundary: 58, recovery: 76, motion: 64 },
  },
  signal: {
    name: '清醒星貘', mansion: '昴日鸡', bureau: '西方白虎·第四宿', code: 'CLEAR SIGNAL 18',
    tagline: '你的温柔有校验码，不会被热闹伪造。',
    intro: '你对夸张结论、算法回声和 AI 幻觉有天然警觉。昴宿像一组同时亮起的眼睛，你喜欢在转发前再看一眼来源。',
    gift: '分得清“听起来很对”和“真的可信”，是团队里的降噪装置。',
    shadow: '别让核验变成情绪绝缘；有些人先需要被接住，再一起对事。',
    mission: '对今天最想转发的一条消息做两次交叉核验。',
    ally: '容光星貘', friction: '造境星貘', color: '#f7f2e7', ink: '#100d2b', symbol: '◉',
    base: { signal: 78, boundary: 88, recovery: 64, motion: 54 },
  },
  tide: {
    name: '回信星貘', mansion: '柳土獐', bureau: '南方朱雀·第三宿', code: 'TIDAL REPLY 23',
    tagline: '你不一定秒回，但你会真正回来。',
    intro: '你不喜欢把关系做成全天候客服，却很重视有内容的回应。柳宿在这套星图里是柔韧的信使：慢一点，但不失约。',
    gift: '让“已读”不再是冷漠，而是一种诚实的时间承诺。',
    shadow: '别在脑内把一条消息修订二十遍；真话可以不那么完美。',
    mission: '给一个被你放久的对话发句：“我没忘，现在认真回你。”',
    ally: '开路星貘', friction: '燃点星貘', color: '#67ffd2', ink: '#100d2b', symbol: '≈',
    base: { signal: 88, boundary: 72, recovery: 78, motion: 50 },
  },
  spark: {
    name: '燃点星貘', mansion: '星日马', bureau: '南方朱雀·第四宿', code: 'LIVE SPARK 24',
    tagline: '你的活人感，是冷启动宇宙的火花。',
    intro: '你会用现场、玩笑和一点冲动打破卡住的空气。星宿有明亮之意，你的天赋是让一群等待指令的人重新变成“活人”。',
    gift: '在僵局里创造气氛、开启对话，给过度计算一个现场答案。',
    shadow: '热度不等于续航；每次点燃别人前，先看看自己剩几格电。',
    mission: '组一个不为打卡的十分钟小局：散步、吃瓜或只是看天。',
    ally: '排阵星貘', friction: '回信星貘', color: '#ffb02e', ink: '#100d2b', symbol: '✹',
    base: { signal: 96, boundary: 44, recovery: 68, motion: 92 },
  },
}

const o = (type, title, detail, vector) => ({ type, title, detail, vector })

export const questions = [
  {
    scene: '01 / 通知雨', prompt: '睡前打开手机，群消息已经 99+，三个人同时问“在吗”。你的第一个动作是——',
    options: [o('grid','先给消息分轨道','紧急、重要、明天再说，三类快速清场。',{signal:2,boundary:2,recovery:1,motion:2}),o('void','开勿扰，明天处理','灵魂已经下班，公司号也该下班。',{signal:-2,boundary:3,recovery:3,motion:-1}),o('harbor','先看谁真的需要我','语气不对的那条，你会先点开。',{signal:3,boundary:-1,recovery:1,motion:1}),o('spark','发个表情包统一回应','先证明本人还活着，详情明天再议。',{signal:3,boundary:0,recovery:1,motion:3})],
  },
  {
    scene: '02 / AI 幻觉', prompt: '小组作业里，AI 给了一段非常自信、但你隐约觉得不对的资料。你会——',
    options: [o('signal','先查原始来源','不跟“听起来很对”赌运气。',{signal:2,boundary:3,recovery:1,motion:1}),o('trail','删掉可疑段，先做可验证的部分','不让一个问号拖停整页进度。',{signal:1,boundary:2,recovery:2,motion:3}),o('archive','把它当灵感，自己重写','思路可以借，句子和结论得重新长出来。',{signal:1,boundary:1,recovery:2,motion:2}),o('grid','建一个“待核验”清单','谁生成、谁核验、谁最终签字，责任要清楚。',{signal:1,boundary:3,recovery:1,motion:2})],
  },
  {
    scene: '03 / 算法漩涡', prompt: '本来只想刷五分钟，回过神已经一小时，首页还在反复投喂同类内容。',
    options: [o('void','直接退出，让无聊回来','不再给下一条“最后一条”的机会。',{signal:-2,boundary:3,recovery:3,motion:1}),o('signal','点几个“不感兴趣”','算法不是天意，也需要被调教。',{signal:1,boundary:3,recovery:2,motion:2}),o('archive','转去做一个真正想看的东西','从被推荐，改成自己挑世界。',{signal:1,boundary:2,recovery:2,motion:2}),o('spark','叫朋友出门买点吃的','用真人出现打断无限下滑。',{signal:3,boundary:0,recovery:2,motion:3})],
  },
  {
    scene: '04 / 已读未回', prompt: '你发出一条很认真的消息，对方已读两小时没回。脑内星轨开始偏移。',
    options: [o('tide','先不追问，给对方一个回复周期','真正的回应不一定来自秒回。',{signal:2,boundary:2,recovery:3,motion:0}),o('harbor','回想对方最近是不是很忙','你会先为沉默补一个温和解释。',{signal:3,boundary:-1,recovery:1,motion:0}),o('signal','不猜，等需要时直接问','没有证据的脑补，不录入档案。',{signal:1,boundary:3,recovery:2,motion:1}),o('archive','把这两小时写成一部微型电影','明知在脑补，但这个版本确实很会拍。',{signal:2,boundary:0,recovery:1,motion:1})],
  },
  {
    scene: '05 / 活人会议', prompt: '线上会议沉默了十五秒，摄像头一片黑，没人知道该谁开口。',
    options: [o('spark','先说一句“我们是不是都卡住了”','空气一旦变成人话，就好办了。',{signal:3,boundary:0,recovery:2,motion:3}),o('grid','贴出三个待决定项','没人开口，那就先给对话一副骨架。',{signal:1,boundary:2,recovery:1,motion:2}),o('harbor','点名邀请一位平时比较安静的人','你想让“没抢到话”的声音也被听见。',{signal:3,boundary:0,recovery:1,motion:1}),o('void','安静等主持人找回自己的工作','不是每个真空都需要你补。',{signal:-1,boundary:3,recovery:2,motion:-1})],
  },
  {
    scene: '06 / 流星失约', prompt: '约好去看流星雨，出发前一小时突然暴雨。你更像——',
    options: [o('trail','换个观测点或直接改室内夜聊','愿望不一定非要用原路线实现。',{signal:2,boundary:1,recovery:3,motion:3}),o('tide','先确认大家的失望，再约下一次','流星没看到，关系别也淋湿。',{signal:3,boundary:1,recovery:2,motion:1}),o('archive','把阳台改成临时天文台','投影、歌单、玻璃上的雨，也能成为一晚。',{signal:2,boundary:0,recovery:3,motion:2}),o('void','取消，认真回家睡觉','天气的拒绝也是一种宇宙批假。',{signal:-1,boundary:3,recovery:3,motion:-1})],
  },
  {
    scene: '07 / 搭子漂移', prompt: '最近很合拍的“搭子”忽然开始降低联系频率，你会先——',
    options: [o('tide','发一条不绕弯的关心','“最近还好吗？不急着回。”',{signal:3,boundary:2,recovery:2,motion:1}),o('signal','看事实，不立即判定关系降级','频率变了，不等于原因已经确定。',{signal:1,boundary:3,recovery:2,motion:0}),o('harbor','先想对方是不是遇到了什么','你的雷达会自动转向他的天气。',{signal:3,boundary:-1,recovery:1,motion:0}),o('trail','接受轨道变化，去开新副本','有些同行是季节限定，也不影响它真实。',{signal:1,boundary:2,recovery:3,motion:3})],
  },
  {
    scene: '08 / 七夕宇宙', prompt: '七夕前夕，首页忽然只剩秀恩爱和“一个人也要精致”。你会——',
    options: [o('spark','发起一场非情侣限定夜游','节日可以是关系的，不必只是恋爱的。',{signal:3,boundary:0,recovery:2,motion:3}),o('void','退出首页，不配合算法按时感慨','我的心情不按营销日历生产。',{signal:-1,boundary:3,recovery:3,motion:0}),o('archive','给自己设计一个奇怪的节日仪式','比如给未来的自己写一张星际明信片。',{signal:1,boundary:1,recovery:3,motion:2}),o('harbor','认真问候一个最近有点孤单的人','不管是什么关系，被想起就是一束光。',{signal:3,boundary:0,recovery:1,motion:2})],
  },
  {
    scene: '09 / 多线任务', prompt: '实习、课程、项目和社交同时报警，每件事都在问“你就说重不重要吧”。',
    options: [o('grid','把时间和后果摆到一张表上','不让谁声音大，谁就自动成为最重要。',{signal:1,boundary:3,recovery:1,motion:2}),o('trail','先做那件能解锁其他任务的事','不求全部并行，先让轨道动起来。',{signal:1,boundary:2,recovery:2,motion:3}),o('void','先停十分钟，不在报警声里决策','紧急感太浓的时候，哪个选择都像假的。',{signal:-1,boundary:2,recovery:3,motion:0}),o('spark','拉个人一起开 25 分钟专注局','一个人启动困难，就借点现场能量。',{signal:3,boundary:0,recovery:1,motion:3})],
  },
  {
    scene: '10 / 情绪外包', prompt: '朋友连发八条长语音，你今天的电量其实也只剩 12%。',
    options: [o('harbor','先确认对方是否安全','重要的信号先接住，其他可以慢慢来。',{signal:3,boundary:0,recovery:0,motion:1}),o('tide','坦白电量，约一个能认真听的时间','不用半块电池假装全天候港口。',{signal:3,boundary:3,recovery:2,motion:1}),o('signal','问“你现在想被听，还是想一起想办法？”','先校准频道，少让两个人同时误读。',{signal:2,boundary:2,recovery:1,motion:1}),o('void','先发一句“我看到了，但今晚真的接不住”','不消失，也不透支。',{signal:1,boundary:3,recovery:3,motion:0})],
  },
  {
    scene: '11 / 评价陨石', prompt: '你做了很久的东西，对方只回了一句：“感觉还是差点意思。”',
    options: [o('signal','问清楚“差”在哪个可观察部分','模糊评价不能直接拥有你的自我价值。',{signal:1,boundary:3,recovery:2,motion:1}),o('archive','先稍微难过，再看能不能改成更有趣的版本','失落可以是材料，不必是结论。',{signal:1,boundary:1,recovery:2,motion:2}),o('grid','拆成内容、结构、表达三部分查','先把一块陨石切成可以处理的样本。',{signal:1,boundary:2,recovery:1,motion:2}),o('spark','去找懂的人现场讲一遍','比起独自对着句子内耗，你更相信实时反应。',{signal:3,boundary:0,recovery:2,motion:3})],
  },
  {
    scene: '12 / 最后一颗', prompt: '凌晨两点，任务只差最后 20%，但你明显开始把同一行读三遍。',
    options: [o('trail','交一个能跑的版本，明天再补','先让事情穿过大气层。',{signal:1,boundary:2,recovery:2,motion:3}),o('tide','给合作伙伴留言，说清当前状态','负责不等于假装还在满电运行。',{signal:3,boundary:2,recovery:2,motion:1}),o('grid','用清单锁死最后三步','不再给疲惫的大脑临场加戏。',{signal:1,boundary:2,recovery:1,motion:2}),o('void','设闹钟睡 90 分钟再回来','有时候继续熬不是坚持，是把明天也押上。',{signal:-1,boundary:3,recovery:3,motion:0})],
  },
]

export const zodiacSigns = [
  ['摩羯座','earth'],['水瓶座','air'],['双鱼座','water'],['白羊座','fire'],['金牛座','earth'],['双子座','air'],
  ['巨蟹座','water'],['狮子座','fire'],['处女座','earth'],['天秤座','air'],['天蝎座','water'],['射手座','fire'],
]

const cutoffs = [19,18,20,19,20,20,22,22,22,22,21,21]
export function getZodiac(month, day) {
  if (!month || !day) return { name: '未签收星座', element: 'ether', symbol: '✦' }
  const index = day <= cutoffs[month - 1] ? month - 1 : month === 12 ? 0 : month
  const [name, element] = zodiacSigns[index]
  const symbols = { fire: '▲', earth: '■', air: '≈', water: '●' }
  return { name, element, symbol: symbols[element] }
}

export const elementLabels = { fire: '火象', earth: '土象', air: '风象', water: '水象', ether: '星尘' }
export const elementBoosts = { fire: ['spark','trail'], earth: ['grid','signal'], air: ['tide','archive'], water: ['harbor','void'], ether: [] }
