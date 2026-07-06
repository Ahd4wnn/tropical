import puppeteer from 'puppeteer-core'

const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
const URL = process.env.SITE_URL || 'http://localhost:5174'

const browser = await puppeteer.launch({
  executablePath: EDGE,
  headless: 'new',
  args: ['--window-size=1440,900'],
  defaultViewport: { width: 1440, height: 900 },
})

const page = await browser.newPage()
const errors = []
page.on('console', (m) => {
  if (m.type() === 'error') errors.push(m.text())
})
page.on('pageerror', (e) => errors.push('PAGEERROR: ' + e.message))

await page.goto(URL, { waitUntil: 'networkidle2' })
await new Promise((r) => setTimeout(r, 3500)) // preloader + fonts

await page.screenshot({ path: 'scripts/shot-hero.png' })

// is the about quote split into masked lines?
const splitInfo = await page.evaluate(() => {
  const q = document.querySelector('.about__quote')
  return {
    childDivs: q ? q.querySelectorAll('div').length : -1,
    html: q ? q.innerHTML.slice(0, 200) : 'missing',
  }
})

// scroll to stats and read counters after the tween should finish
await page.evaluate(() => {
  document.querySelector('.about__stats').scrollIntoView({ block: 'center' })
})
await new Promise((r) => setTimeout(r, 2500))
const counters = await page.evaluate(() =>
  [...document.querySelectorAll('.about__stat b')].map((b) =>
    b.textContent.trim(),
  ),
)
await page.screenshot({ path: 'scripts/shot-stats.png' })

// scroll to the menu section
await page.evaluate(() => {
  document.querySelector('.menu-card').scrollIntoView({ block: 'start' })
})
await new Promise((r) => setTimeout(r, 2000))
await page.screenshot({ path: 'scripts/shot-menu.png' })

console.log(JSON.stringify({ splitInfo, counters, errors }, null, 2))
await browser.close()
