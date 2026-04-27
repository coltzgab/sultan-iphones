import * as React from 'react'

interface ProjectData {
  title: string
  image: string
  category: string
  year: string
  description: string
}

const PROJECT_DATA: ProjectData[] = [
  {
    title: 'Sultan Detail 01',
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1887&auto=format&fit=crop',
    category: 'Hero Showcase',
    year: '2026',
    description: 'Titanium finish focus',
  },
  {
    title: 'Midnight Frame',
    image:
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=1964&auto=format&fit=crop',
    category: 'Editorial Motion',
    year: '2026',
    description: 'Premium black device study',
  },
  {
    title: 'Camera Cluster',
    image:
      'https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1964&auto=format&fit=crop',
    category: 'Product Detail',
    year: '2026',
    description: 'Lens texture and light',
  },
  {
    title: 'Desk Reflection',
    image:
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=1887&auto=format&fit=crop',
    category: 'Studio Scene',
    year: '2026',
    description: 'Soft luxury composition',
  },
  {
    title: 'Color Pairing',
    image:
      'https://images.unsplash.com/photo-1605236453806-6ff36851218e?q=80&w=1964&auto=format&fit=crop',
    category: 'Visual Research',
    year: '2026',
    description: 'Palette and material contrast',
  },
]

const CONFIG = {
  SCROLL_SPEED: 0.75,
  LERP_FACTOR: 0.05,
  BUFFER_SIZE: 5,
  MAX_VELOCITY: 150,
  SNAP_DURATION: 500,
}

const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor

const getProjectData = (index: number) => {
  const i = ((Math.abs(index) % PROJECT_DATA.length) + PROJECT_DATA.length) % PROJECT_DATA.length
  return PROJECT_DATA[i]
}

const getProjectNumber = (index: number) => {
  return (
    (((Math.abs(index) % PROJECT_DATA.length) + PROJECT_DATA.length) % PROJECT_DATA.length) + 1
  )
    .toString()
    .padStart(2, '0')
}

export function Component() {
  const [visibleRange, setVisibleRange] = React.useState({
    min: -CONFIG.BUFFER_SIZE,
    max: CONFIG.BUFFER_SIZE,
  })

  const state = React.useRef({
    currentY: 0,
    targetY: 0,
    isDragging: false,
    isSnapping: false,
    snapStart: { time: 0, y: 0, target: 0 },
    lastScrollTime: Date.now(),
    dragStart: { y: 0, scrollY: 0 },
    projectHeight: 0,
    minimapHeight: 250,
  })

  const projectsRef = React.useRef<Map<number, HTMLDivElement>>(new Map())
  const minimapRef = React.useRef<Map<number, HTMLDivElement>>(new Map())
  const infoRef = React.useRef<Map<number, HTMLDivElement>>(new Map())
  const requestRef = React.useRef<number | undefined>(undefined)

  const updateParallax = (
    img: HTMLImageElement | null,
    scroll: number,
    index: number,
    height: number,
  ) => {
    if (!img) return
    if (!img.dataset.parallaxCurrent) img.dataset.parallaxCurrent = '0'

    let current = Number.parseFloat(img.dataset.parallaxCurrent)
    const target = (-scroll - index * height) * 0.2
    current = lerp(current, target, 0.1)

    if (Math.abs(current - target) > 0.01) {
      img.style.transform = `translateY(${current}px) scale(1.5)`
      img.dataset.parallaxCurrent = current.toString()
    }
  }

  const updateSnap = () => {
    const s = state.current
    const progress = Math.min((Date.now() - s.snapStart.time) / CONFIG.SNAP_DURATION, 1)
    const eased = 1 - (1 - progress) ** 3
    s.targetY = s.snapStart.y + (s.snapStart.target - s.snapStart.y) * eased
    if (progress >= 1) s.isSnapping = false
  }

  const snapToProject = () => {
    const s = state.current
    const current = Math.round(-s.targetY / s.projectHeight)
    const target = -current * s.projectHeight
    s.isSnapping = true
    s.snapStart = { time: Date.now(), y: s.targetY, target }
  }

  const updatePositions = () => {
    const s = state.current
    const minimapY = (s.currentY * s.minimapHeight) / s.projectHeight

    projectsRef.current.forEach((el, index) => {
      const y = index * s.projectHeight + s.currentY
      el.style.transform = `translateY(${y}px)`
      updateParallax(el.querySelector('img'), s.currentY, index, s.projectHeight)
    })

    minimapRef.current.forEach((el, index) => {
      const y = index * s.minimapHeight + minimapY
      el.style.transform = `translateY(${y}px)`
      updateParallax(el.querySelector('img'), minimapY, index, s.minimapHeight)
    })

    infoRef.current.forEach((el, index) => {
      const y = index * s.minimapHeight + minimapY
      el.style.transform = `translateY(${y}px)`
    })
  }

  const animate = () => {
    const s = state.current
    const now = Date.now()

    if (!s.isSnapping && !s.isDragging && now - s.lastScrollTime > 100) {
      const snapPoint = -Math.round(-s.targetY / s.projectHeight) * s.projectHeight
      if (Math.abs(s.targetY - snapPoint) > 1) snapToProject()
    }

    if (s.isSnapping) updateSnap()
    if (!s.isDragging) s.currentY += (s.targetY - s.currentY) * CONFIG.LERP_FACTOR

    updatePositions()
  }

  const renderedRange = React.useRef({ min: -CONFIG.BUFFER_SIZE, max: CONFIG.BUFFER_SIZE })

  const animationLoop = React.useCallback(() => {
    animate()
    const s = state.current
    const currentIndex = Math.round(-s.targetY / s.projectHeight)
    const min = currentIndex - CONFIG.BUFFER_SIZE
    const max = currentIndex + CONFIG.BUFFER_SIZE

    if (min !== renderedRange.current.min || max !== renderedRange.current.max) {
      renderedRange.current = { min, max }
      setVisibleRange({ min, max })
    }

    requestRef.current = requestAnimationFrame(animationLoop)
  }, [])

  React.useEffect(() => {
    state.current.projectHeight = window.innerHeight

    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      const s = state.current
      s.isSnapping = false
      s.lastScrollTime = Date.now()
      const delta = Math.max(
        Math.min(e.deltaY * CONFIG.SCROLL_SPEED, CONFIG.MAX_VELOCITY),
        -CONFIG.MAX_VELOCITY,
      )
      s.targetY -= delta
    }

    const onTouchStart = (e: TouchEvent) => {
      const s = state.current
      s.isDragging = true
      s.isSnapping = false
      s.dragStart = { y: e.touches[0].clientY, scrollY: s.targetY }
      s.lastScrollTime = Date.now()
    }

    const onTouchMove = (e: TouchEvent) => {
      const s = state.current
      if (!s.isDragging) return
      s.targetY = s.dragStart.scrollY + (e.touches[0].clientY - s.dragStart.y) * 1.5
      s.lastScrollTime = Date.now()
    }

    const onTouchEnd = () => {
      state.current.isDragging = false
    }

    const onResize = () => {
      state.current.projectHeight = window.innerHeight
      const container = document.querySelector('.parallax-container') as HTMLElement | null
      if (container) container.style.height = `${window.innerHeight}px`
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('touchstart', onTouchStart)
    window.addEventListener('touchmove', onTouchMove)
    window.addEventListener('touchend', onTouchEnd)
    window.addEventListener('resize', onResize)

    onResize()
    requestRef.current = requestAnimationFrame(animationLoop)

    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
      window.removeEventListener('resize', onResize)
      if (requestRef.current) cancelAnimationFrame(requestRef.current)
    }
  }, [animationLoop])

  const indices = []
  for (let i = visibleRange.min; i <= visibleRange.max; i += 1) {
    indices.push(i)
  }

  return (
    <div className="parallax-container relative h-screen overflow-hidden rounded-[2.25rem] border border-white/50 bg-white/60 shadow-[0_30px_80px_rgba(72,49,108,.14)] backdrop-blur-xl">
      <ul className="project-list m-0 list-none p-0">
        {indices.map((i) => {
          const data = getProjectData(i)
          return (
            <div
              key={i}
              className="project absolute left-0 top-0 flex h-screen w-full items-center justify-center overflow-hidden"
              ref={(el) => {
                if (el) projectsRef.current.set(i, el)
                else projectsRef.current.delete(i)
              }}
            >
              <img
                src={data.image}
                alt={data.title}
                className="h-[72vh] w-[52vw] min-w-[320px] max-w-[680px] rounded-[2.5rem] object-cover shadow-[0_28px_80px_rgba(10,10,20,.22)]"
              />
            </div>
          )
        })}
      </ul>

      <div className="minimap pointer-events-none absolute bottom-6 right-6 z-10 w-[min(420px,88vw)] rounded-[2rem] border border-white/60 bg-black/78 p-4 text-white shadow-[0_24px_60px_rgba(0,0,0,.26)] backdrop-blur-xl">
        <div className="mb-4 flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.28em] text-white/60">
          <span>Loop Gallery</span>
          <span>Scroll</span>
        </div>

        <div className="minimap-wrapper flex gap-4">
          <div className="minimap-img-preview relative h-[250px] w-[90px] overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/6">
            {indices.map((i) => {
              const data = getProjectData(i)
              return (
                <div
                  key={i}
                  className="minimap-img-item absolute left-0 top-0 h-[250px] w-full overflow-hidden rounded-[1.4rem]"
                  ref={(el) => {
                    if (el) minimapRef.current.set(i, el)
                    else minimapRef.current.delete(i)
                  }}
                >
                  <img src={data.image} alt={data.title} className="h-full w-full object-cover" />
                </div>
              )
            })}
          </div>

          <div className="minimap-info-list relative h-[250px] flex-1 overflow-hidden">
            {indices.map((i) => {
              const data = getProjectData(i)
              const num = getProjectNumber(i)
              return (
                <div
                  key={i}
                  className="minimap-item-info absolute left-0 top-0 flex h-[250px] w-full flex-col justify-between border-b border-white/10 py-1"
                  ref={(el) => {
                    if (el) infoRef.current.set(i, el)
                    else infoRef.current.delete(i)
                  }}
                >
                  <div className="flex items-center justify-between gap-4 text-sm font-semibold tracking-[-0.02em]">
                    <p className="text-white/55">{num}</p>
                    <p>{data.title}</p>
                  </div>
                  <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.18em] text-white/45">
                    <p>{data.category}</p>
                    <p>{data.year}</p>
                  </div>
                  <div className="text-sm text-white/70">
                    <p>{data.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
