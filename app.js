import { dimensions, elementBoosts, elementLabels, getZodiac, questions, results } from './data.js'

const app = document.querySelector('#app')
const resultKeys = Object.keys(results)
const state = { screen: 'home', current: 0, answers: [], month: 0, day: 0, result: null }

const arrow = '<span class="arrow" aria-hidden="true">↗</span>'
const mansionTicker = '角 亢 氐 房 心 尾 箕 斗 牛 女 虚 危 室 壁 奎 娄 胃 昴 毕 觜 参 井 鬼 柳 星 张 翼 轸'

function shell(content, className = '') {
  return `
    <div class="site-shell ${className}">
      <header class="site-header">
        <button class="wordmark" data-home aria-label="返回首页"><span>✶</span>星貘夜航局<sup>BETA</sup></button>
        <div class="sky-status"><i></i><span>PERSEID DROP</span><b>流星余晖·七夕将至</b></div>
      </header>
      ${content}
      <footer><span>© 2026 星貘夜航局</span><p>借用星座与二十八宿文化意象的创意测评 · 不构成命理或心理诊断</p></footer>
    </div>`
}

function stars() {
  return Array.from({ length: 24 }, (_, index) => {
    const x = (index * 37 + 11) % 100
    const y = (index * 61 + 7) % 100
    const delay = (index % 7) * -0.6
    return `<i class="star" style="--x:${x}%;--y:${y}%;--delay:${delay}s"></i>`
  }).join('')
}

function renderHome() {
  state.screen = 'home'
  document.title = '星貘夜航局｜你的夜班星官人格'
  app.innerHTML = shell(`
    <main>
      <section class="hero">
        <div class="star-field" aria-hidden="true">${stars()}<i class="meteor"></i></div>
        <div class="hero-copy">
          <div class="eyebrow"><span>2026.08 NIGHT SHIFT</span><i></i><span>今夜营业</span></div>
          <h1><span>你是哪位</span><em>夜班星官？</em></h1>
          <p class="hero-lead">当所有人都要求秒回，哪颗星替你保持未读？<br />12 个当代信息过载瞬间，签收你的星宿夜航档案。</p>
          <div class="birth-console">
            <div class="console-label"><span>OPTIONAL SIGNAL</span><b>让十二星座参与校准</b></div>
            <div class="birth-row">
              <label><span>月</span><select id="birth-month" aria-label="出生月份"><option value="0">——</option>${Array.from({length:12},(_,i)=>`<option value="${i+1}">${String(i+1).padStart(2,'0')}</option>`).join('')}</select></label>
              <i>/</i>
              <label><span>日</span><select id="birth-day" aria-label="出生日期"><option value="0">——</option>${Array.from({length:31},(_,i)=>`<option value="${i+1}">${String(i+1).padStart(2,'0')}</option>`).join('')}</select></label>
              <button class="primary-button" id="start-quiz"><span>登舰测试</span>${arrow}</button>
            </div>
            <button class="skip-button" id="skip-birth">不想透露生日，用纯星尘模式 →</button>
            <p class="form-note" id="form-note">只需月日，不保存、不上传。</p>
          </div>
          <div class="test-meta"><span>12 个场景</span><i></i><span>约 3 分钟</span><i></i><span>8 位星貘</span></div>
        </div>
        <div class="hero-visual">
          <div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>
          <img src="./assets/star-tapir.png" alt="抱着流星瓶在星间值夜的星貘" />
          <span class="floating-tag tag-a">吞掉<br />99+</span>
          <span class="floating-tag tag-b">DO NOT<br />DISTURB</span>
          <div class="id-chip"><small>NIGHT CLERK</small><b>星貘·001</b><span>情绪邮件分拣中</span></div>
        </div>
      </section>
      <div class="mansion-ticker" aria-label="中国传统二十八宿"><div>${mansionTicker} · ${mansionTicker}</div></div>
      <section class="concept" id="concept">
        <div class="section-heading"><p>WHY THIS QUIZ</p><h2>旧星图，新型掉线方式。</h2><span>NO. 28 / 12 / 08</span></div>
        <div class="concept-grid">
          <article class="concept-manifesto"><span class="quote-mark">“</span><p>我们不预测你会遇见谁，<br />只想知道你怎么接住今天。</p><small>—— 星貘夜航局·局长留言</small></article>
          <article class="concept-copy"><p>十二星座提供你熟悉的元素底色，二十八宿则被重新想象为 8 种当代数字生存能力：开路、容光、排阵、留白、造境、清醒、回信、燃点。</p><p>结果不是“你注定如此”，而是一份今夜就能用的操作手册。</p></article>
        </div>
      </section>
      <section class="four-bureaus">
        <div class="bureau-card dragon"><span>01</span><small>EAST / 东方青龙</small><h3>让事情开始</h3><p>角木蛟 · 房日兔</p></div>
        <div class="bureau-card tortoise"><span>02</span><small>NORTH / 北方玄武</small><h3>给混乱边界</h3><p>斗木獬 · 虚日鼠</p></div>
        <div class="bureau-card tiger"><span>03</span><small>WEST / 西方白虎</small><h3>让信号可信</h3><p>奎木狼 · 昴日鸡</p></div>
        <div class="bureau-card bird"><span>04</span><small>SOUTH / 南方朱雀</small><h3>让关系发光</h3><p>柳土獐 · 星日马</p></div>
      </section>
    </main>`)
  bindCommon()
  document.querySelector('#birth-month').addEventListener('change', updateDayOptions)
  document.querySelector('#start-quiz').addEventListener('click', startWithBirthday)
  document.querySelector('#skip-birth').addEventListener('click', () => startQuiz(0, 0))
}

function updateDayOptions(event) {
  const month = Number(event.target.value)
  const max = month ? new Date(2024, month, 0).getDate() : 31
  const day = document.querySelector('#birth-day')
  if (Number(day.value) > max) day.value = '0'
  ;[...day.options].forEach((option, index) => { if (index) option.hidden = index > max })
}

function startWithBirthday() {
  const month = Number(document.querySelector('#birth-month').value)
  const day = Number(document.querySelector('#birth-day').value)
  const note = document.querySelector('#form-note')
  if (!month || !day) {
    note.textContent = '请同时选择月和日，或使用纯星尘模式。'
    note.classList.add('is-error')
    return
  }
  startQuiz(month, day)
}

function startQuiz(month, day) {
  Object.assign(state, { screen: 'quiz', current: 0, answers: [], month, day, result: null })
  renderQuiz()
}

function renderQuiz() {
  state.screen = 'quiz'
  const question = questions[state.current]
  const selected = state.answers[state.current]
  const percent = Math.round(((state.current + 1) / questions.length) * 100)
  app.innerHTML = shell(`
    <main class="quiz-page">
      <div class="quiz-topline"><span>NIGHT LOG ${String(state.current + 1).padStart(2,'0')}</span><div class="progress-track"><i style="width:${percent}%"></i></div><b>${percent}%</b></div>
      <section class="quiz-card" tabindex="-1">
        <aside class="quiz-aside">
          <span class="question-orbit">${String(state.current + 1).padStart(2,'0')}<i>/</i>${String(questions.length).padStart(2,'0')}</span>
          <div class="mini-constellation" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>
          <p>不要选“应该怎么做”。<br /><b>选你心里第一个动作。</b></p>
        </aside>
        <div class="quiz-main">
          <p class="scene-label">${question.scene}</p>
          <h1>${question.prompt}</h1>
          <div class="options" role="radiogroup" aria-label="请选择最像你的反应">
            ${question.options.map((option,index)=>`<button class="option ${selected===index?'is-selected':''}" data-option="${index}" role="radio" aria-checked="${selected===index}"><span class="option-key">${String.fromCharCode(65+index)}</span><span><b>${option.title}</b><small>${option.detail}</small></span><i>✓</i></button>`).join('')}
          </div>
        </div>
      </section>
      <div class="quiz-nav">
        <button class="back-button" id="prev" ${state.current===0?'disabled':''}>← 上一颗</button>
        <span>按数字键 1–4 也可选择</span>
        <button class="primary-button" id="next" ${selected===undefined?'disabled':''}><span>${state.current===questions.length-1?'签收星档':'下一颗'}</span>${arrow}</button>
      </div>
    </main>`, 'quiz-shell')
  bindCommon()
  document.querySelectorAll('[data-option]').forEach(button => button.addEventListener('click', () => selectOption(Number(button.dataset.option))))
  document.querySelector('#prev').addEventListener('click', previousQuestion)
  document.querySelector('#next').addEventListener('click', nextQuestion)
  document.querySelector('.quiz-card').focus({ preventScroll: true })
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function selectOption(index) {
  state.answers[state.current] = index
  document.querySelectorAll('[data-option]').forEach((button, buttonIndex) => {
    button.classList.toggle('is-selected', buttonIndex === index)
    button.setAttribute('aria-checked', buttonIndex === index ? 'true' : 'false')
  })
  document.querySelector('#next').disabled = false
}

function previousQuestion() { if (state.current > 0) { state.current -= 1; renderQuiz() } }
function nextQuestion() {
  if (state.answers[state.current] === undefined) return
  if (state.current < questions.length - 1) { state.current += 1; renderQuiz() }
  else { state.result = calculateResult(); renderResult() }
}

function calculateResult() {
  const scores = Object.fromEntries(resultKeys.map(key => [key, 0]))
  const metricSums = Object.fromEntries(Object.keys(dimensions).map(key => [key, 0]))
  state.answers.forEach((answer, qIndex) => {
    const option = questions[qIndex].options[answer]
    scores[option.type] += 1
    Object.entries(option.vector).forEach(([key, value]) => { metricSums[key] += value })
  })
  const zodiac = getZodiac(state.month, state.day)
  ;(elementBoosts[zodiac.element] || []).forEach(key => { scores[key] += 1.15 })
  const ranking = [...resultKeys].sort((a, b) => scores[b] - scores[a] || resultKeys.indexOf(a) - resultKeys.indexOf(b))
  const primary = results[ranking[0]]
  const metrics = Object.fromEntries(Object.keys(dimensions).map(key => [key, Math.max(18, Math.min(98, primary.base[key] + metricSums[key] * 1.4))]))
  return { key: ranking[0], secondaryKey: ranking[1], zodiac, metrics }
}

function renderResult() {
  state.screen = 'result'
  const { key, secondaryKey, zodiac, metrics } = state.result
  const item = results[key]
  const secondary = results[secondaryKey]
  document.title = `我是${item.name}｜星貘夜航局`
  app.innerHTML = shell(`
    <main class="result-page" style="--result:${item.color};--result-ink:${item.ink}">
      <section class="result-hero">
        <div class="result-stamp"><span>签收成功</span><b>ARCHIVE ${item.code.split(' ').at(-1)}</b></div>
        <div class="result-copy">
          <p class="result-kicker">${item.code} · ${item.bureau}</p>
          <div class="result-title"><span>${item.symbol}</span><div><small>你的夜班星官是</small><h1>${item.name}</h1></div></div>
          <h2>${item.tagline}</h2>
          <p class="result-intro">${item.intro}</p>
          <div class="cosmic-formula"><span>${zodiac.symbol} ${zodiac.name}</span><i>+</i><span>${item.mansion}</span><i>=</i><b>${elementLabels[zodiac.element]} 夜航体</b></div>
        </div>
        <div class="result-visual">
          <div class="result-halo"></div><img src="./assets/star-tapir.png" alt="${item.name}星貘" />
          <div class="mansion-seal"><small>YOUR MANSION</small><b>${item.mansion}</b><span>${item.bureau}</span></div>
        </div>
      </section>
      <section class="profile-section">
        <div class="profile-heading"><p>SIGNAL PROFILE</p><h2>你的星轨四维</h2><span>副星官：${secondary.name}</span></div>
        <div class="metrics">${Object.entries(metrics).map(([key,value])=>`<div class="metric"><div><span>${dimensions[key]}</span><b>${Math.round(value)}</b></div><div class="metric-track"><i style="width:${value}%"></i></div></div>`).join('')}</div>
        <div class="reading-grid">
          <article><span>01 / GIFT</span><h3>你的星光</h3><p>${item.gift}</p></article>
          <article><span>02 / SHADOW</span><h3>轨道盲区</h3><p>${item.shadow}</p></article>
          <article class="mission-card"><span>03 / TONIGHT</span><h3>今晚的微型星任务</h3><p>${item.mission}</p><i aria-hidden="true">${item.symbol}</i></article>
        </div>
      </section>
      <section class="relation-section">
        <div><p>ORBIT RELATIONS</p><h2>谁会出现在你的附近轨道？</h2></div>
        <div class="relation-cards">
          <article><small>BEST NIGHT PARTNER</small><span>↔</span><h3>${item.ally}</h3><p>你们一个发出信号，一个让信号落地。</p></article>
          <article><small>HIGH FRICTION ORBIT</small><span>⚡</span><h3>${item.friction}</h3><p>不是不合，只是你们的时钟需要手动对齐。</p></article>
        </div>
      </section>
      <section class="share-section">
        <div><p>BOARDING PASS</p><h2>把星档带走。</h2><span>生成一张可分享的 1080 × 1440 夜航通行证。</span></div>
        <div class="share-actions">
          <button class="primary-button" id="download-card"><span>下载星档卡</span>${arrow}</button>
          <button class="secondary-button" id="share-result">分享测试链接</button>
          <button class="text-button" id="restart">重新校准星轨 ↻</button>
        </div>
      </section>
      <canvas id="result-canvas" hidden></canvas>
      <div class="toast" role="status" aria-live="polite"></div>
    </main>`, 'result-shell')
  bindCommon()
  document.querySelector('#restart').addEventListener('click', renderHome)
  document.querySelector('#download-card').addEventListener('click', downloadCard)
  document.querySelector('#share-result').addEventListener('click', shareResult)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function showToast(message) {
  const toast = document.querySelector('.toast')
  if (!toast) return
  toast.textContent = message
  toast.classList.add('is-visible')
  clearTimeout(showToast.timer)
  showToast.timer = setTimeout(() => toast.classList.remove('is-visible'), 2200)
}

async function shareResult() {
  const item = results[state.result.key]
  const payload = { title: `我是${item.name}`, text: `我在星貘夜航局签收了「${item.mansion}·${item.name}」星档。`, url: location.href.split('#')[0] }
  try {
    if (navigator.share) await navigator.share(payload)
    else { await navigator.clipboard.writeText(`${payload.text} ${payload.url}`); showToast('链接已复制到剪贴板') }
  } catch (error) { if (error.name !== 'AbortError') showToast('分享失败，可以手动复制当前网址') }
}

function loadImage(src) {
  return new Promise((resolve, reject) => { const image = new Image(); image.onload = () => resolve(image); image.onerror = reject; image.src = src })
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 4) {
  let line = '', row = 0
  for (const char of [...text]) {
    if (ctx.measureText(line + char).width > maxWidth && line) { ctx.fillText(line, x, y + row * lineHeight); line = char; row += 1; if (row >= maxLines) return }
    else line += char
  }
  if (line && row < maxLines) ctx.fillText(line, x, y + row * lineHeight)
}

async function downloadCard() {
  const button = document.querySelector('#download-card')
  button.disabled = true
  showToast('正在调取星档…')
  try {
    const { key, zodiac, metrics } = state.result
    const item = results[key]
    const canvas = document.querySelector('#result-canvas')
    const ctx = canvas.getContext('2d')
    canvas.width = 1080; canvas.height = 1440
    ctx.fillStyle = '#100d2b'; ctx.fillRect(0, 0, 1080, 1440)
    ctx.fillStyle = item.color; ctx.fillRect(38, 38, 1004, 18); ctx.fillRect(38, 1384, 1004, 18)
    ctx.strokeStyle = '#f7f2e7'; ctx.lineWidth = 3; ctx.strokeRect(38, 38, 1004, 1364)
    ctx.fillStyle = '#f7f2e7'; ctx.font = '900 36px Microsoft YaHei, sans-serif'; ctx.fillText('✶ 星貘夜航局', 76, 118)
    ctx.font = '700 18px Arial, sans-serif'; ctx.textAlign = 'right'; ctx.fillText(item.code, 1004, 112); ctx.textAlign = 'left'
    const image = await loadImage('./assets/star-tapir.png')
    ctx.save(); ctx.shadowColor = item.color; ctx.shadowBlur = 60; ctx.drawImage(image, 500, 120, 520, 520); ctx.restore()
    ctx.fillStyle = item.color; ctx.font = '900 26px Microsoft YaHei, sans-serif'; ctx.fillText(`你的夜班星官 · ${item.mansion}`, 76, 254)
    ctx.fillStyle = '#f7f2e7'; ctx.font = '900 92px Microsoft YaHei, sans-serif'; ctx.fillText(item.name, 76, 366)
    ctx.font = '700 34px Microsoft YaHei, sans-serif'; wrapText(ctx, item.tagline, 76, 430, 430, 52, 3)
    ctx.fillStyle = item.color; ctx.fillRect(76, 604, 928, 4)
    ctx.fillStyle = '#f7f2e7'; ctx.font = '700 25px Microsoft YaHei, sans-serif'; ctx.fillText(`${zodiac.symbol} ${zodiac.name}  +  ${item.mansion}  =  ${elementLabels[zodiac.element]} 夜航体`, 76, 658)
    ctx.font = '500 26px Microsoft YaHei, sans-serif'; ctx.fillStyle = '#d8d2eb'; wrapText(ctx, item.intro, 76, 724, 928, 42, 4)
    let mx = 76
    Object.entries(metrics).forEach(([key, value]) => {
      ctx.fillStyle = '#77708f'; ctx.font = '700 19px Microsoft YaHei, sans-serif'; ctx.fillText(dimensions[key], mx, 930)
      ctx.fillStyle = '#2c2750'; ctx.fillRect(mx, 952, 190, 12); ctx.fillStyle = item.color; ctx.fillRect(mx, 952, 190 * value / 100, 12)
      ctx.fillStyle = '#f7f2e7'; ctx.font = '900 27px Arial, sans-serif'; ctx.fillText(Math.round(value), mx, 1000); mx += 232
    })
    ctx.fillStyle = item.color; ctx.fillRect(76, 1064, 928, 190)
    ctx.fillStyle = '#100d2b'; ctx.font = '900 22px Microsoft YaHei, sans-serif'; ctx.fillText('TONIGHT’S MICRO MISSION / 今夜微型星任务', 108, 1110)
    ctx.font = '800 30px Microsoft YaHei, sans-serif'; wrapText(ctx, item.mission, 108, 1165, 850, 44, 2)
    ctx.fillStyle = '#f7f2e7'; ctx.font = '600 22px Microsoft YaHei, sans-serif'; ctx.fillText('旧星图 × 新型掉线方式', 76, 1330)
    ctx.textAlign = 'right'; ctx.fillText('epochjdaily.github.io/xingmo-night-watch', 1004, 1330)
    canvas.toBlob(blob => {
      const url = URL.createObjectURL(blob); const link = document.createElement('a'); link.href = url; link.download = `我的夜班星官-${item.name}.png`; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000); showToast('星档卡已下载')
    }, 'image/png')
  } catch { showToast('星档调取失败，请稍后再试') }
  finally { button.disabled = false }
}

function bindCommon() {
  document.querySelectorAll('[data-home]').forEach(button => button.addEventListener('click', renderHome))
}

document.addEventListener('keydown', event => {
  if (state.screen !== 'quiz') return
  if (/^[1-4]$/.test(event.key)) selectOption(Number(event.key) - 1)
  if (event.key === 'Enter' && state.answers[state.current] !== undefined) nextQuestion()
  if (event.key === 'ArrowLeft') previousQuestion()
})

renderHome()
