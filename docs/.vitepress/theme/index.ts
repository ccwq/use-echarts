import DefaultTheme from 'vitepress/theme'

const LANG_COOKIE = 'vp-preferred-lang'
const isBrowser = typeof window !== 'undefined'

const getCookie = (name: string) => {
  if (!isBrowser) return ''
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
  return match ? match[2] : ''
}

const setCookie = (name: string, value: string) => {
  if (!isBrowser) return
  document.cookie = `${name}=${value}; path=/; max-age=31536000`
}

const getPreferredLocale = () => {
  if (!isBrowser) return 'zh'
  const saved = getCookie(LANG_COOKIE)
  if (saved === 'en' || saved === 'zh') return saved
  const lang = navigator.language || ''
  return lang.toLowerCase().startsWith('en') ? 'en' : 'zh'
}

const getBase = () => {
  const base = (import.meta as { env?: { BASE_URL?: string } }).env?.BASE_URL || '/'
  return base.endsWith('/') ? base : `${base}/`
}

const getLocalPath = (pathname: string, base: string) => {
  if (pathname.startsWith(base)) {
    const rest = pathname.slice(base.length)
    return rest ? `/${rest}` : '/'
  }
  return pathname
}

const withBase = (base: string, path: string) => {
  if (base === '/') return path
  return `${base}${path.replace(/^\//, '')}`
}

const shouldRedirect = (localPath: string, preferred: string) => {
  if (preferred === 'en' && !localPath.startsWith('/en/')) return true
  if (preferred === 'zh' && localPath.startsWith('/en/')) return true
  return false
}

const redirectToPreferred = () => {
  if (!isBrowser) return
  
  // 仅在根路径或根 en 路径且没有 cookie 时尝试重定向
  const base = getBase()
  const localPath = getLocalPath(window.location.pathname, base)
  const hasCookie = !!getCookie(LANG_COOKIE)
  
  // 如果用户已经有 cookie（表示手动切换过或已经重定向过），则不再自动重定向
  if (hasCookie) return

  const preferred = getPreferredLocale()
  if (!shouldRedirect(localPath, preferred)) return

  const targetLocal = preferred === 'en'
    ? `/en${localPath === '/' ? '/' : localPath}`
    : localPath.replace(/^\/en\//, '/')

  window.location.replace(withBase(base, targetLocal))
}

const watchLanguageToggle = () => {
  if (!isBrowser) return
  const base = getBase()
  const setFromPath = () => {
    const localPath = getLocalPath(window.location.pathname, base)
    if (localPath.startsWith('/en/')) {
      setCookie(LANG_COOKIE, 'en')
    } else {
      setCookie(LANG_COOKIE, 'zh')
    }
  }
  setFromPath()
  window.addEventListener('popstate', setFromPath)
}

export default {
  ...DefaultTheme,
  enhanceApp() {
    redirectToPreferred()
    watchLanguageToggle()
  }
}
