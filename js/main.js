    // ── Color schemes ──────────────────────────────────────────────────────
    const COLOR_SCHEMES = [
      // ── 纯色 (0–5) ───────────────────────────────────────────────────────
      {
        name: '宝蓝',
        bg: '#1d4ed8',
        glow1: 'rgba(96,165,250,0.22)', glow2: 'rgba(147,197,253,0.15)',
        blob: 'rgba(59,130,246,0.45)', label: '#93c5fd', title: '#ffffff',
        subtitle: 'rgba(191,219,254,0.85)', meta: 'rgba(191,219,254,0.75)', metaLine: 'rgba(191,219,254,0.4)', accent: '#60a5fa'
      },
      {
        name: '翡翠',
        bg: '#047857',
        glow1: 'rgba(52,211,153,0.22)', glow2: 'rgba(110,231,183,0.15)',
        blob: 'rgba(16,185,129,0.45)', label: '#6ee7b7', title: '#ffffff',
        subtitle: 'rgba(167,243,208,0.85)', meta: 'rgba(167,243,208,0.75)', metaLine: 'rgba(167,243,208,0.4)', accent: '#34d399'
      },
      {
        name: '紫罗兰',
        bg: '#6d28d9',
        glow1: 'rgba(167,139,250,0.22)', glow2: 'rgba(196,181,253,0.15)',
        blob: 'rgba(139,92,246,0.45)', label: '#c4b5fd', title: '#ffffff',
        subtitle: 'rgba(221,214,254,0.85)', meta: 'rgba(221,214,254,0.75)', metaLine: 'rgba(221,214,254,0.4)', accent: '#a78bfa'
      },
      {
        name: '玫红',
        bg: '#be123c',
        glow1: 'rgba(251,113,133,0.22)', glow2: 'rgba(253,164,175,0.15)',
        blob: 'rgba(244,63,94,0.45)', label: '#fda4af', title: '#ffffff',
        subtitle: 'rgba(254,205,211,0.85)', meta: 'rgba(254,205,211,0.75)', metaLine: 'rgba(254,205,211,0.4)', accent: '#fb7185'
      },
      {
        name: '石墨',
        bg: '#334155',
        glow1: 'rgba(148,163,184,0.18)', glow2: 'rgba(203,213,225,0.1)',
        blob: 'rgba(100,116,139,0.45)', label: '#94a3b8', title: '#ffffff',
        subtitle: 'rgba(203,213,225,0.85)', meta: 'rgba(203,213,225,0.75)', metaLine: 'rgba(203,213,225,0.35)', accent: '#94a3b8'
      },
      {
        name: '琥珀',
        bg: '#d87757',
        glow1: 'rgba(253,186,116,0.25)', glow2: 'rgba(254,215,170,0.18)',
        blob: 'rgba(249,115,22,0.45)', label: '#fed7aa', title: '#ffffff',
        subtitle: 'rgba(255,237,213,0.9)', meta: 'rgba(255,237,213,0.85)', metaLine: 'rgba(255,237,213,0.5)', accent: '#fb923c'
      },
      // ── 渐变色 (6–11) ─────────────────────────────────────────────────────
      {
        name: '海蓝',
        bg: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #2563eb 100%)',
        glow1: 'rgba(96,165,250,0.2)', glow2: 'rgba(147,197,253,0.15)',
        blob: 'rgba(59,130,246,0.4)', label: '#93c5fd', title: '#ffffff',
        subtitle: 'rgba(191,219,254,0.85)', meta: 'rgba(191,219,254,0.8)', metaLine: 'rgba(191,219,254,0.5)', accent: '#60a5fa'
      },
      {
        name: '翠绿',
        bg: 'linear-gradient(135deg, #064e3b 0%, #047857 50%, #059669 100%)',
        glow1: 'rgba(52,211,153,0.2)', glow2: 'rgba(110,231,183,0.15)',
        blob: 'rgba(16,185,129,0.4)', label: '#6ee7b7', title: '#ffffff',
        subtitle: 'rgba(167,243,208,0.85)', meta: 'rgba(167,243,208,0.8)', metaLine: 'rgba(167,243,208,0.5)', accent: '#34d399'
      },
      {
        name: '深紫',
        bg: 'linear-gradient(135deg, #3b0764 0%, #6d28d9 50%, #7c3aed 100%)',
        glow1: 'rgba(167,139,250,0.2)', glow2: 'rgba(196,181,253,0.15)',
        blob: 'rgba(139,92,246,0.4)', label: '#c4b5fd', title: '#ffffff',
        subtitle: 'rgba(221,214,254,0.85)', meta: 'rgba(221,214,254,0.8)', metaLine: 'rgba(221,214,254,0.5)', accent: '#a78bfa'
      },
      {
        name: '玫瑰',
        bg: 'linear-gradient(135deg, #881337 0%, #be123c 50%, #e11d48 100%)',
        glow1: 'rgba(251,113,133,0.2)', glow2: 'rgba(253,164,175,0.15)',
        blob: 'rgba(244,63,94,0.4)', label: '#fda4af', title: '#ffffff',
        subtitle: 'rgba(254,205,211,0.85)', meta: 'rgba(254,205,211,0.8)', metaLine: 'rgba(254,205,211,0.5)', accent: '#fb7185'
      },
      {
        name: '烈焰',
        bg: 'linear-gradient(135deg, #ea580c 0%, #f97316 50%, #fbd38d 100%)',
        glow1: 'rgba(255,255,255,0.4)', glow2: 'rgba(255,237,213,0.3)',
        blob: 'rgba(254,215,170,0.4)', label: '#fffbeb', title: '#ffffff',
        subtitle: 'rgba(255,237,213,0.95)', meta: 'rgba(255,237,213,0.9)', metaLine: 'rgba(255,237,213,0.6)', accent: '#f97316'
      },
      {
        name: '午夜',
        bg: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
        glow1: 'rgba(129,140,248,0.2)', glow2: 'rgba(165,180,252,0.15)',
        blob: 'rgba(99,102,241,0.4)', label: '#a5b4fc', title: '#ffffff',
        subtitle: 'rgba(199,210,254,0.85)', meta: 'rgba(199,210,254,0.8)', metaLine: 'rgba(199,210,254,0.5)', accent: '#818cf8'
      },
      {
        name: '智核',
        bg: 'linear-gradient(135deg, #020617 0%, #0f172a 50%, #1e1b4b 100%)',
        glow1: 'rgba(99,102,241,0.3)', glow2: 'rgba(56,189,248,0.2)',
        blob: 'rgba(99,102,241,0.4)', label: '#818cf8', title: '#ffffff',
        subtitle: 'rgba(203,213,225,0.85)', meta: 'rgba(203,213,225,0.8)', metaLine: 'rgba(203,213,225,0.5)', accent: '#818cf8'
      },
    ];

    // [labelHex, subtitleHex, metaHex] per scheme — title is always #ffffff
    const SCHEME_HEX = [
      ['#93c5fd', '#bfdbfe', '#bfdbfe'],  // 0 宝蓝
      ['#6ee7b7', '#a7f3d0', '#a7f3d0'],  // 1 翡翠
      ['#c4b5fd', '#ddd6fe', '#ddd6fe'],  // 2 紫罗兰
      ['#fda4af', '#fecdd3', '#fecdd3'],  // 3 玫红
      ['#94a3b8', '#cbd5e1', '#cbd5e1'],  // 4 石墨
      ['#fed7aa', '#ffedd5', '#ffedd5'],  // 5 琥珀
      ['#93c5fd', '#bfdbfe', '#bfdbfe'],  // 6 海蓝渐变
      ['#6ee7b7', '#a7f3d0', '#a7f3d0'],  // 7 翠绿渐变
      ['#c4b5fd', '#ddd6fe', '#ddd6fe'],  // 8 深紫渐变
      ['#fda4af', '#fecdd3', '#fecdd3'],  // 9 玫瑰渐变
      ['#fffbeb', '#ffedd5', '#ffedd5'],  // 10 烈焰渐变
      ['#a5b4fc', '#c7d2fe', '#c7d2fe'],  // 11 午夜渐变
      ['#818cf8', '#cbd5e1', '#cbd5e1'],  // 12 智核渐变
    ];

    const DEFAULT_RATIO = '1200/480';
    const DEFAULT_SCHEME = 6;
    const DEFAULT_DECO = 'classic';
    const DEFAULT_FONT = 'default';
    let currentDeco = 'classic';

    const FONT_OPTIONS = {
      default: { name: 'Noto Serif SC', family: "'Noto Serif SC', serif" },
      misans: { name: '小米 MiSans', family: "'FFMiSans', 'Noto Serif SC', sans-serif", loadFamily: 'FFMiSans' },
      xinxihei: { name: '霞鹜新晰黑', family: "'FFXinXiHei', 'Noto Serif SC', sans-serif", loadFamily: 'FFXinXiHei' },
      nanoflat: { name: '纳米扁界黑', family: "'FFNanoFlat', 'Noto Serif SC', sans-serif", loadFamily: 'FFNanoFlat' },
      xiangcube: { name: '乡立方黑体', family: "'FFXiangCube', 'Noto Serif SC', sans-serif", loadFamily: 'FFXiangCube' },
      jingang: { name: '创客贴金刚体 3.0', family: "'FFJingang', 'Noto Serif SC', sans-serif", loadFamily: 'FFJingang' },
      manhei: { name: '霞鹜漫黑', family: "'FFManHei', 'Noto Serif SC', sans-serif", loadFamily: 'FFManHei' },
    };
    const FONT_ORDER = ['default', 'misans', 'xinxihei', 'nanoflat', 'xiangcube', 'jingang', 'manhei'];

    // ── Field visibility ──────────────────────────────────────────────────
    const VIS_MAP = {
      label: { inputId: 'inp-label', selector: '.label' },
      title: { inputId: 'inp-title', selector: 'h1' },
      subtitle: { inputId: 'inp-subtitle', selector: '.subtitle' },
      author: { inputId: 'inp-author', selector: '.meta' },
    };
    const visState = { label: true, title: true, subtitle: true, author: true };

    function toggleVis(field) {
      visState[field] = !visState[field];
      const vis = visState[field];
      const { inputId, selector } = VIS_MAP[field];
      const btn = document.getElementById('toggle-' + field);
      const input = document.getElementById(inputId);
      const el = document.querySelector('#cover-main ' + selector);
      btn.textContent = vis ? '显示' : '隐藏';
      btn.classList.toggle('on', vis);
      if (input) input.disabled = !vis;
      if (el) el.style.display = vis ? '' : 'none';
    }

    function syncColorSwatches(idx) {
      const [lh, sh, mh] = SCHEME_HEX[idx];
      document.getElementById('clr-label').value = lh;
      document.getElementById('clr-title').value = '#ffffff';
      document.getElementById('clr-subtitle').value = sh;
      document.getElementById('clr-meta').value = mh;
      // Clear any inline overrides so the scheme CSS vars take effect
      const cover = document.getElementById('cover-main');
      cover.querySelector('.label').style.color = '';
      cover.querySelector('h1').style.color = '';
      cover.querySelector('.subtitle').style.color = '';
      cover.querySelector('.meta').style.color = '';
    }

    function applyColorScheme(idx) {
      const s = COLOR_SCHEMES[idx];
      const cover = document.getElementById('cover-main');
      cover.style.setProperty('--c-bg', s.bg);
      cover.style.setProperty('--c-glow1', s.glow1);
      cover.style.setProperty('--c-glow2', s.glow2);
      cover.style.setProperty('--c-blob', s.blob);
      cover.style.setProperty('--c-label', s.label);
      cover.style.setProperty('--c-title', s.title);
      cover.style.setProperty('--c-subtitle', s.subtitle);
      cover.style.setProperty('--c-meta', s.meta);
      cover.style.setProperty('--c-meta-line', s.metaLine);
      cover.style.setProperty('--c-accent', s.accent);
      syncColorSwatches(idx);
    }

    // Color swatch → override inline style on cover element
    const COLOR_SWATCH_MAP = [
      ['clr-label', () => document.querySelector('#cover-main .label')],
      ['clr-title', () => document.querySelector('#cover-main h1')],
      ['clr-subtitle', () => document.querySelector('#cover-main .subtitle')],
      ['clr-meta', () => document.querySelector('#cover-main .meta')],
    ];

    COLOR_SWATCH_MAP.forEach(([id, getEl]) => {
      document.getElementById(id).addEventListener('input', e => {
        getEl().style.color = e.target.value;
      });
    });

    document.getElementById('color-section').addEventListener('click', e => {
      const btn = e.target.closest('.color-btn[data-scheme]');
      if (!btn) return;
      document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyColorScheme(+btn.dataset.scheme);
    });

    // ── Custom solid color ─────────────────────────────────────────────────
    function applyCustomColor(hex) {
      const cover = document.getElementById('cover-main');
      cover.style.setProperty('--c-bg', hex);
      cover.style.setProperty('--c-glow1', 'rgba(255,255,255,0.18)');
      cover.style.setProperty('--c-glow2', 'rgba(255,255,255,0.12)');
      cover.style.setProperty('--c-blob', 'rgba(255,255,255,0.22)');
      cover.style.setProperty('--c-label', 'rgba(255,255,255,0.88)');
      cover.style.setProperty('--c-title', '#ffffff');
      cover.style.setProperty('--c-subtitle', 'rgba(255,255,255,0.80)');
      cover.style.setProperty('--c-meta', 'rgba(255,255,255,0.70)');
      cover.style.setProperty('--c-meta-line', 'rgba(255,255,255,0.40)');
      cover.style.setProperty('--c-accent', 'rgba(255,255,255,0.75)');
      // Sync text color swatches & clear any inline overrides
      document.getElementById('clr-label').value = '#ffffff';
      document.getElementById('clr-title').value = '#ffffff';
      document.getElementById('clr-subtitle').value = '#ffffff';
      document.getElementById('clr-meta').value = '#ffffff';
      ['.label', 'h1', '.subtitle', '.meta'].forEach(sel => {
        const el = cover.querySelector(sel);
        if (el) el.style.color = '';
      });
    }

    document.getElementById('inp-custom-bg').addEventListener('input', function () {
      const hex = this.value;
      const lbl = document.getElementById('btn-custom-bg');
      // Show chosen color on the button, hide the "+" overlay
      lbl.style.background = hex;
      lbl.classList.add('has-custom');
      document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
      lbl.classList.add('active');
      applyCustomColor(hex);
    });

    // ── Ratio presets ──────────────────────────────────────────────────────
    const RATIO_PRESETS = {
      '1200/480': { labelSize: 2, titleSize: 5, subtitleSize: 2, width: 70, titleLH: 1.5, subtitleLH: 1.6, titleMT: 0, titleMB: 1.6, titleMax: 9, subtitleMax: 4, maxWidth: '' },
      '3/4': { labelSize: 3.3, titleSize: 9.5, subtitleSize: 4.7, width: 95, titleLH: 1.6, subtitleLH: 1.6, titleMT: 6, titleMB: 6, titleMax: 16, subtitleMax: 7, maxWidth: '500px' },
      '16/9': { labelSize: 2, titleSize: 5.5, subtitleSize: 2, width: 70, titleLH: 1.5, subtitleLH: 1.6, titleMT: 0, titleMB: 1.6, titleMax: 9, subtitleMax: 4, maxWidth: '' },
      '2.35/1': { labelSize: 2, titleSize: 5.6, subtitleSize: 2.1, width: 70, titleLH: 1.5, subtitleLH: 1.6, titleMT: 0, titleMB: 1.6, titleMax: 9, subtitleMax: 4, maxWidth: '' },
      '2/1': { labelSize: 2, titleSize: 5.2, subtitleSize: 2, width: 70, titleLH: 1.5, subtitleLH: 1.6, titleMT: 0, titleMB: 1.6, titleMax: 9, subtitleMax: 4, maxWidth: '' },
      '4/3': { labelSize: 2, titleSize: 6, subtitleSize: 2.2, width: 75, titleLH: 1.5, subtitleLH: 1.6, titleMT: 0, titleMB: 1.6, titleMax: 12, subtitleMax: 5, maxWidth: '' },
      '1/1': { labelSize: 2, titleSize: 7, subtitleSize: 2.4, width: 80, titleLH: 1.4, subtitleLH: 1.5, titleMT: 0, titleMB: 1.6, titleMax: 14, subtitleMax: 6, maxWidth: '' },
    };

    // ── Decoration builders ────────────────────────────────────────────────
    function makeDiv(...classes) {
      const d = document.createElement('div');
      d.className = ['deco-el', ...classes].join(' ');
      return d;
    }

    function buildDecorations(style) {
      const cover = document.getElementById('cover-main');
      cover.querySelectorAll('.deco-el').forEach(el => el.remove());
      cover.classList.remove('deco-classic', 'deco-cyberpunk', 'deco-sphere', 'deco-minimal');
      cover.classList.add('deco-' + style);

      const anchor = cover.querySelector('.cover-content');
      const before = el => cover.insertBefore(el, anchor);

      if (style === 'classic') {
        before(makeDiv('deco-grid', 'classic'));
        before(makeDiv('deco-line'));
        before(makeDiv('deco-circle'));
        before(makeDiv('deco-blob'));
        const dots = makeDiv('deco-dots');
        for (let i = 0; i < 20; i++) dots.appendChild(document.createElement('span'));
        before(dots);

      } else if (style === 'cyberpunk') {
        before(makeDiv('deco-grid', 'cyberpunk'));
        before(makeDiv('deco-scan'));
        ['tl', 'tr', 'bl', 'br'].forEach(pos => before(makeDiv('deco-hud', `deco-hud-${pos}`)));
        before(makeDiv('deco-line', 'cyberpunk'));
        before(makeDiv('deco-circle', 'cyberpunk'));
        before(makeDiv('deco-blob', 'cyberpunk'));
        const code = makeDiv('deco-code');
        code.innerHTML = 'const agent = new Hermes()<br>agent.init({ model: \'claude\' })<br>await agent.run(task)<br>// ✓ task completed<br>export default agent';
        before(code);
        const dots = makeDiv('deco-dots-cp');
        for (let i = 0; i < 24; i++) dots.appendChild(document.createElement('span'));
        before(dots);

      } else if (style === 'sphere') {
        before(makeDiv('deco-grid', 'sphere'));
        before(makeDiv('deco-line'));
        before(makeDiv('deco-ai-sphere'));
        before(makeDiv('deco-blob'));
        const circuit = makeDiv('deco-circuit');
        [[6], [4], [8], [5], [7]].forEach(([h]) => {
          const s = document.createElement('span'); s.style.height = h + 'cqi'; circuit.appendChild(s);
        });
        before(circuit);
        const dots = makeDiv('deco-dots-sp');
        for (let i = 0; i < 16; i++) dots.appendChild(document.createElement('span'));
        before(dots);

      } else if (style === 'minimal') {
        // No shape elements — layout handled entirely by CSS class (centered text, ambient glow kept)
      }
    }

    function applyDecoVis(newDeco) {
      const wasMinimal = currentDeco === 'minimal';
      const isMinimal = newDeco === 'minimal';
      if (isMinimal && !wasMinimal) {
        if (visState.subtitle) toggleVis('subtitle');
        if (visState.author) toggleVis('author');
      } else if (!isMinimal && wasMinimal) {
        if (!visState.subtitle) toggleVis('subtitle');
        if (!visState.author) toggleVis('author');
      }
    }

    document.getElementById('deco-picker').addEventListener('click', e => {
      const btn = e.target.closest('.deco-btn');
      if (!btn) return;
      document.querySelectorAll('.deco-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyDecoVis(btn.dataset.deco);
      currentDeco = btn.dataset.deco;
      buildDecorations(currentDeco);
    });

    function initFontPicker() {
      const select = document.getElementById('sel-font');
      select.innerHTML = FONT_ORDER.map(id => `<option value="${id}">${FONT_OPTIONS[id].name}</option>`).join('');
      select.value = DEFAULT_FONT;
    }

    function applyFontChoice(fontId) {
      const cover = document.getElementById('cover-main');
      const choice = FONT_OPTIONS[fontId] || FONT_OPTIONS[DEFAULT_FONT];
      cover.style.setProperty('--c-font', choice.family);
      cover.dataset.font = fontId in FONT_OPTIONS ? fontId : DEFAULT_FONT;
      if (choice.loadFamily && document.fonts?.load) {
        document.fonts.load(`700 48px "${choice.loadFamily}"`).catch(() => { });
      }
    }

    function getCurrentFontChoice() {
      return document.getElementById('sel-font')?.value || DEFAULT_FONT;
    }

    document.getElementById('sel-font').addEventListener('change', e => {
      applyFontChoice(e.target.value);
    });

    // ── Content sync ──────────────────────────────────────────────────────
    const DEFAULT = {
      label: '我的的工具箱',
      title: '一个用 Claude 做的封面工具，开箱即用，亦可自由迭代',
      subtitle: '多次实践，数小时精心打磨',
      author: '@youname',
    };

    function syncContent() {
      const cover = document.getElementById('cover-main');
      // Convert newlines to <br> for proper line breaks in HTML
      const nl2br = str => str.replace(/\n/g, '<br>');
      cover.querySelector('.label').innerHTML = nl2br(document.getElementById('inp-label').value);
      cover.querySelector('h1').innerHTML = nl2br(document.getElementById('inp-title').value);
      cover.querySelector('.subtitle').innerHTML = nl2br(document.getElementById('inp-subtitle').value);
      cover.querySelector('.meta').innerHTML = nl2br(document.getElementById('inp-author').value);
    }

    ['inp-label', 'inp-title', 'inp-subtitle', 'inp-author'].forEach(id => {
      document.getElementById(id).addEventListener('input', syncContent);
    });


    // ── Sliders ────────────────────────────────────────────────────────────
    function syncAllSliders() {
      const cover = document.getElementById('cover-main');
      const h1 = cover.querySelector('h1');
      const subtitle = cover.querySelector('.subtitle');
      const label = cover.querySelector('.label');
      const g = id => document.getElementById(id).value;

      const labelSize = g('sld-label'), titleSize = g('sld-title'), subSize = g('sld-subtitle');
      const width = g('sld-width'), titleLH = g('sld-title-lh'), subLH = g('sld-subtitle-lh');
      const titleMT = g('sld-title-mt'), titleMB = g('sld-title-mb');

      label.style.fontSize = labelSize + 'cqi';
      h1.style.fontSize = titleSize + 'cqi';
      h1.style.maxWidth = width + 'cqi';
      h1.style.lineHeight = titleLH;
      h1.style.marginTop = titleMT + 'cqi';
      h1.style.marginBottom = titleMB + 'cqi';
      subtitle.style.fontSize = subSize + 'cqi';
      subtitle.style.maxWidth = width + 'cqi';
      subtitle.style.lineHeight = subLH;

      document.getElementById('val-label').textContent = labelSize + ' cqi';
      document.getElementById('val-title').textContent = titleSize + ' cqi';
      document.getElementById('val-subtitle').textContent = subSize + ' cqi';
      document.getElementById('val-width').textContent = width + ' cqi';
      document.getElementById('val-title-lh').textContent = titleLH;
      document.getElementById('val-subtitle-lh').textContent = subLH;
      document.getElementById('val-title-mt').textContent = titleMT + ' cqi';
      document.getElementById('val-title-mb').textContent = titleMB + ' cqi';
    }

    ['sld-label', 'sld-title', 'sld-subtitle', 'sld-width',
      'sld-title-lh', 'sld-subtitle-lh', 'sld-title-mt', 'sld-title-mb'].forEach(id => {
        document.getElementById(id).addEventListener('input', syncAllSliders);
      });

    // ── Ratio ──────────────────────────────────────────────────────────────
    document.getElementById('ratio-picker').addEventListener('click', e => {
      const btn = e.target.closest('.ratio-btn');
      if (!btn) return;
      document.querySelectorAll('.ratio-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cover = document.getElementById('cover-main');
      cover.style.aspectRatio = btn.dataset.ratio;
      document.getElementById('ratio-label').textContent = btn.dataset.label;
      const p = RATIO_PRESETS[btn.dataset.ratio];
      if (!p) return;
      cover.style.maxWidth = p.maxWidth;
      document.getElementById('sld-title').max = p.titleMax;
      document.getElementById('sld-subtitle').max = p.subtitleMax;
      const set = (id, v) => document.getElementById(id).value = v;
      set('sld-label', p.labelSize); set('sld-title', p.titleSize);
      set('sld-subtitle', p.subtitleSize); set('sld-width', p.width);
      set('sld-title-lh', p.titleLH); set('sld-subtitle-lh', p.subtitleLH);
      set('sld-title-mt', p.titleMT); set('sld-title-mb', p.titleMB);
      syncAllSliders();

      // Show/hide crop toggle for 2.35:1 ratio
      const cropSection = document.getElementById('crop-toggle-section');
      const cropOverlay = document.getElementById('crop-overlay');
      if (btn.dataset.ratio === '2.35/1') {
        cropSection.style.display = 'block';
      } else {
        cropSection.style.display = 'none';
        // Hide crop overlay when switching away from 2.35:1
        cropOverlay.style.display = 'none';
        cropEnabled = false;
        setCropEnabled(false);
      }
    });

    // ── Crop toggle and drag logic ─────────────────────────────────────────
    let cropEnabled = false;
    let cropState = {
      cropX: 0.3,
      cropY: 0.3,
      cropSize: 0.4,
      isDragging: false,
      isResizing: false,
      startX: 0,
      startY: 0,
      startCropX: 0,
      startCropY: 0,
      startCropSize: 0.4
    };

    function setCropEnabled(enabled) {
      cropEnabled = enabled;
      const cropOverlay = document.getElementById('crop-overlay');
      const cropToggle = document.getElementById('crop-toggle');
      const cropLabel = document.getElementById('crop-label');

      // Sync checkbox state
      if (cropToggle) cropToggle.checked = enabled;

      if (enabled) {
        cropOverlay.style.display = 'block';
        cropLabel.textContent = '关闭';
      } else {
        cropOverlay.style.display = 'none';
        cropLabel.textContent = '打开';
      }
    }

    // Setup drag and resize for crop border
    function setupCropDrag() {
      const cropBorder = document.getElementById('crop-border');
      if (!cropBorder) return;

      // Drag - move the crop border (not on resize handles)
      cropBorder.addEventListener('mousedown', (e) => {
        if (!cropEnabled) return;
        if (e.target.classList.contains('resize-handle')) return; // Skip if clicking handle
        cropState.isDragging = true;
        cropState.startX = e.clientX;
        cropState.startY = e.clientY;
        cropState.startCropX = cropState.cropX;
        cropState.startCropY = cropState.cropY;
        cropBorder.classList.add('dragging');
        e.preventDefault();
        e.stopPropagation();
      });

      // Resize - using handles
      cropBorder.addEventListener('mousedown', (e) => {
        if (!cropEnabled) return;
        if (!e.target.classList.contains('resize-handle')) return;
        cropState.isResizing = true;
        cropState.resizeHandle = e.target.className.replace('resize-handle ', ''); // nw, ne, sw, se, n, s, w, e
        cropState.startX = e.clientX;
        cropState.startY = e.clientY;
        cropState.startCropX = cropState.cropX;
        cropState.startCropY = cropState.cropY;
        cropState.startCropSize = cropState.cropSize;
        e.preventDefault();
        e.stopPropagation();
      });

      document.addEventListener('mousemove', (e) => {
        if (!cropEnabled) return;
        const cover = document.getElementById('cover-main');
        const rect = cover.getBoundingClientRect();

        // Dragging - move in all directions
        if (cropState.isDragging) {
          const deltaX = (e.clientX - cropState.startX) / rect.width;
          const deltaY = (e.clientY - cropState.startY) / rect.height;

          let newCropX = cropState.startCropX + deltaX;
          let newCropY = cropState.startCropY + deltaY;

          // Clamp to bounds (keep crop box within cover)
          newCropX = Math.max(0, Math.min(1 - cropState.cropSize, newCropX));
          newCropY = Math.max(0, Math.min(1 - cropState.cropSize, newCropY));

          cropState.cropX = newCropX;
          cropState.cropY = newCropY;

          cropBorder.style.left = (cropState.cropX * 100) + '%';
          cropBorder.style.top = (cropState.cropY * 100) + '%';
          cropBorder.style.transform = 'none';
        }

        // Resizing - scale the crop box
        if (cropState.isResizing) {
          const deltaX = (e.clientX - cropState.startX) / rect.width;
          const deltaY = (e.clientY - cropState.startY) / rect.height;

          // Use larger of the two deltas for uniform scaling (maintain aspect ratio)
          const delta = Math.abs(deltaX) > Math.abs(deltaY) ? deltaX : deltaY;

          let newSize = cropState.startCropSize + delta;
          // Clamp size between 20% and 80%
          newSize = Math.max(0.2, Math.min(0.8, newSize));

          cropState.cropSize = newSize;

          // Update size
          cropBorder.style.width = (cropState.cropSize * 100) + '%';
          cropBorder.style.height = (cropState.cropSize * 100) + '%';

          // Keep crop box within bounds when resizing from corners
          if (cropState.resizeHandle.includes('w')) {
            const maxX = 1 - cropState.cropSize;
            if (cropState.cropX > maxX) {
              cropState.cropX = maxX;
              cropBorder.style.left = (cropState.cropX * 100) + '%';
            }
          }
          if (cropState.resizeHandle.includes('n')) {
            const maxY = 1 - cropState.cropSize;
            if (cropState.cropY > maxY) {
              cropState.cropY = maxY;
              cropBorder.style.top = (cropState.cropY * 100) + '%';
            }
          }
        }
      });

      document.addEventListener('mouseup', () => {
        cropState.isDragging = false;
        cropState.isResizing = false;
        cropState.resizeHandle = null;
        cropBorder.classList.remove('dragging');
      });
    }

    // ── Presets ────────────────────────────────────────────────────────────
    const PRESETS = [
      { name: '海蓝极简', scheme: 6, deco: 'classic', font: 'default' },
      { name: '智核球体', scheme: 12, deco: 'sphere', font: 'default' },
      { name: '翠绿球体', scheme: 7, deco: 'sphere', font: 'default' },
      { name: '玫瑰极简', scheme: 9, deco: 'classic', font: 'misans' },
      { name: '琥珀简约', scheme: 5, deco: 'minimal', font: 'misans' },
      { name: '石墨简约', scheme: 4, deco: 'minimal', font: 'misans' },
      { name: '琥珀', scheme: 5, deco: 'classic', font: 'default' },
    ];

    const DECO_LABELS = {
      classic: '极简几何', cyberpunk: '赛博朋克', sphere: 'AI 球体', minimal: '简约风',
    };

    function buildThumb(thumb, scheme, deco) {
      const s = COLOR_SCHEMES[scheme];
      thumb.style.background = s.bg;
      const glow = document.createElement('div');
      glow.style.cssText = `position:absolute;inset:0;background:radial-gradient(ellipse 60% 80% at 15% 50%,${s.glow1} 0%,transparent 70%)`;
      thumb.appendChild(glow);
      if (deco === 'classic') {
        const line = document.createElement('div'); line.className = 'thumb-line'; thumb.appendChild(line);
        const circle = document.createElement('div'); circle.className = 'thumb-circle'; thumb.appendChild(circle);
      } else if (deco === 'cyberpunk') {
        const scan = document.createElement('div'); scan.className = 'thumb-scan'; thumb.appendChild(scan);
        const tl = document.createElement('div'); tl.className = 'thumb-hud tl'; tl.style.color = s.accent; thumb.appendChild(tl);
        const br = document.createElement('div'); br.className = 'thumb-hud br'; br.style.color = s.accent; thumb.appendChild(br);
        const line = document.createElement('div'); line.className = 'thumb-line';
        line.style.background = `linear-gradient(to bottom,transparent,${s.accent},transparent)`;
        thumb.appendChild(line);
      } else if (deco === 'sphere') {
        const sphere = document.createElement('div'); sphere.className = 'thumb-sphere'; thumb.appendChild(sphere);
        const line = document.createElement('div'); line.className = 'thumb-line'; thumb.appendChild(line);
      } else if (deco === 'minimal') {
        const bar = document.createElement('div');
        bar.style.cssText = 'position:absolute;left:20%;right:20%;top:50%;height:2px;margin-top:-1px;background:rgba(255,255,255,0.35);border-radius:1px';
        thumb.appendChild(bar);
      }
    }

    function getPresetVisibility(preset) {
      return {
        label: true,
        title: true,
        subtitle: preset.deco === 'minimal' ? false : true,
        author: preset.deco === 'minimal' ? false : true,
        ...(preset.vis || {})
      };
    }

    function getPresetContent(preset) {
      return {
        label: DEFAULT.label,
        title: DEFAULT.title,
        subtitle: DEFAULT.subtitle,
        author: DEFAULT.author,
        ...(preset.content || {})
      };
    }

    function applyPreset(idx) {
      const p = PRESETS[idx];
      document.querySelectorAll('.color-btn').forEach(b => b.classList.toggle('active', +b.dataset.scheme === p.scheme));
      applyColorScheme(p.scheme);
      document.querySelectorAll('.deco-btn').forEach(b => b.classList.toggle('active', b.dataset.deco === p.deco));
      applyDecoVis(p.deco);
      currentDeco = p.deco;
      buildDecorations(p.deco);
      document.getElementById('sel-font').value = p.font || DEFAULT_FONT;
      applyFontChoice(p.font || DEFAULT_FONT);
      // Do NOT overwrite existing user text input when switching presets
      // Only sync colors, decorations, font, and visibility
      syncContent();
      const targetVis = getPresetVisibility(p);
      Object.entries(targetVis).forEach(([field, show]) => {
        if (visState[field] !== show) toggleVis(field);
      });
      document.querySelectorAll('.preset-card').forEach(c => c.classList.toggle('active', +c.dataset.preset === idx));
    }

    function initPresets() {
      const list = document.getElementById('presets-list');
      PRESETS.forEach((p, i) => {
        const card = document.createElement('button');
        card.className = 'preset-card' + (i === 0 ? ' active' : '');
        card.dataset.preset = i;
        const thumb = document.createElement('div'); thumb.className = 'preset-thumb';
        buildThumb(thumb, p.scheme, p.deco);
        const info = document.createElement('div'); info.className = 'preset-info';
        const name = document.createElement('span'); name.className = 'preset-name'; name.textContent = p.name;
        const tags = document.createElement('span'); tags.className = 'preset-tags';
        tags.textContent = COLOR_SCHEMES[p.scheme].name + ' · ' + DECO_LABELS[p.deco];
        card.title = [p.name, COLOR_SCHEMES[p.scheme].name, DECO_LABELS[p.deco], FONT_OPTIONS[p.font || DEFAULT_FONT].name].join(' · ');
        info.append(name, tags);
        card.append(thumb, info);
        card.addEventListener('click', () => applyPreset(i));
        list.appendChild(card);
      });
    }

    function normalizeHex(hex) {
      return (hex || '').trim().toLowerCase();
    }

    function readNumber(id) {
      return +document.getElementById(id).value;
    }

    function getActiveRatioButton() {
      return document.querySelector('.ratio-btn.active') || document.querySelector('.ratio-btn');
    }

    function getActiveSchemeButton() {
      return document.querySelector('.color-btn.active[data-scheme]');
    }

    function getCurrentBackgroundConfig() {
      const customBtn = document.getElementById('btn-custom-bg');
      if (customBtn.classList.contains('active')) {
        return {
          type: 'custom',
          value: normalizeHex(document.getElementById('inp-custom-bg').value),
        };
      }

      const activeSchemeBtn = getActiveSchemeButton();
      const idx = activeSchemeBtn ? +activeSchemeBtn.dataset.scheme : DEFAULT_SCHEME;
      return {
        type: 'scheme',
        index: idx,
        name: COLOR_SCHEMES[idx].name,
      };
    }

    function getDefaultTextColors(backgroundConfig) {
      if (backgroundConfig.type === 'custom') {
        return {
          label: '#ffffff',
          title: '#ffffff',
          subtitle: '#ffffff',
          meta: '#ffffff',
        };
      }

      const [label, subtitle, meta] = SCHEME_HEX[backgroundConfig.index];
      return {
        label: normalizeHex(label),
        title: '#ffffff',
        subtitle: normalizeHex(subtitle),
        meta: normalizeHex(meta),
      };
    }

    async function writeTextToClipboard(text) {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        return;
      }

      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.top = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
    }

    function buildConfigPayload() {
      const changes = {};
      const ratioBtn = getActiveRatioButton();
      const ratio = ratioBtn?.dataset.ratio || DEFAULT_RATIO;
      const ratioLabel = ratioBtn?.dataset.label || '5:2 · 1200×480';
      const background = getCurrentBackgroundConfig();
      const defaultTextColors = getDefaultTextColors(background);
      const ratioDefaults = RATIO_PRESETS[ratio] || RATIO_PRESETS[DEFAULT_RATIO];

      if (ratio !== DEFAULT_RATIO) {
        changes.ratio = { value: ratio, label: ratioLabel };
      }

      if (background.type === 'custom') {
        changes.background = background;
      } else if (background.index !== DEFAULT_SCHEME) {
        changes.background = background;
      }

      const fontId = getCurrentFontChoice();
      if (fontId !== DEFAULT_FONT && FONT_OPTIONS[fontId]) {
        changes.font = {
          id: fontId,
          name: FONT_OPTIONS[fontId].name,
        };
      }

      if (currentDeco !== DEFAULT_DECO) {
        changes.decoration = currentDeco;
      }

      const content = {};
      if (document.getElementById('inp-label').value !== DEFAULT.label) content.label = document.getElementById('inp-label').value;
      if (document.getElementById('inp-title').value !== DEFAULT.title) content.title = document.getElementById('inp-title').value;
      if (document.getElementById('inp-subtitle').value !== DEFAULT.subtitle) content.subtitle = document.getElementById('inp-subtitle').value;
      if (document.getElementById('inp-author').value !== DEFAULT.author) content.author = document.getElementById('inp-author').value;
      if (Object.keys(content).length) changes.content = content;

      const visibility = {};
      Object.entries(visState).forEach(([field, value]) => {
        if (value !== true) visibility[field] = value;
      });
      if (Object.keys(visibility).length) changes.visibility = visibility;

      const typography = {};
      if (readNumber('sld-label') !== ratioDefaults.labelSize) typography.labelSize = readNumber('sld-label');
      if (readNumber('sld-title') !== ratioDefaults.titleSize) typography.titleSize = readNumber('sld-title');
      if (readNumber('sld-subtitle') !== ratioDefaults.subtitleSize) typography.subtitleSize = readNumber('sld-subtitle');
      if (readNumber('sld-width') !== ratioDefaults.width) typography.contentWidth = readNumber('sld-width');
      if (readNumber('sld-title-lh') !== ratioDefaults.titleLH) typography.titleLineHeight = readNumber('sld-title-lh');
      if (readNumber('sld-subtitle-lh') !== ratioDefaults.subtitleLH) typography.subtitleLineHeight = readNumber('sld-subtitle-lh');
      if (readNumber('sld-title-mt') !== ratioDefaults.titleMT) typography.titleMarginTop = readNumber('sld-title-mt');
      if (readNumber('sld-title-mb') !== ratioDefaults.titleMB) typography.titleMarginBottom = readNumber('sld-title-mb');
      if (Object.keys(typography).length) changes.typography = typography;

      const textColors = {};
      const currentColors = {
        label: normalizeHex(document.getElementById('clr-label').value),
        title: normalizeHex(document.getElementById('clr-title').value),
        subtitle: normalizeHex(document.getElementById('clr-subtitle').value),
        meta: normalizeHex(document.getElementById('clr-meta').value),
      };

      Object.entries(currentColors).forEach(([key, value]) => {
        if (value !== defaultTextColors[key]) textColors[key] = value;
      });
      if (Object.keys(textColors).length) changes.textColors = textColors;

      return {
        tool: 'cover.html',
        note: '请按以下配置新建一个快捷预设。未列出的字段保持默认。',
        changes,
      };
    }

    async function copyConfig() {
      const payload = buildConfigPayload();
      const text = [
        '请按以下配置为 cover.html 新建一个快捷预设。未列出的字段保持默认。',
        '```json',
        JSON.stringify(payload, null, 2),
        '```'
      ].join('\n');

      try {
        await writeTextToClipboard(text);
        const btn = document.getElementById('btn-copy-config');
        const prev = btn.textContent;
        btn.textContent = '已复制';
        setTimeout(() => { btn.textContent = prev; }, 1200);
      } catch (err) {
        alert('复制配置失败：' + err);
      }
    }

    function saveConfig() {
      const payload = buildConfigPayload();
      const json = JSON.stringify(payload, null, 2);
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.download = `config.json`;
      a.href = url;
      a.click();
      URL.revokeObjectURL(url);
      const btn = document.getElementById('btn-save-config');
      const prev = btn.textContent;
      btn.textContent = '已保存';
      setTimeout(() => { btn.textContent = '保存配置'; }, 1200);
    }

    // ── Reset ──────────────────────────────────────────────────────────────
    function resetAll() {
      document.getElementById('inp-label').value = DEFAULT.label;
      document.getElementById('inp-title').value = DEFAULT.title;
      document.getElementById('inp-subtitle').value = DEFAULT.subtitle;
      document.getElementById('inp-author').value = DEFAULT.author;
      syncContent();
      document.querySelectorAll('.ratio-btn').forEach((b, i) => b.classList.toggle('active', i === 0));
      document.querySelectorAll('.color-btn').forEach(b => b.classList.toggle('active', +b.dataset.scheme === 6));
      document.querySelectorAll('.deco-btn').forEach((b, i) => b.classList.toggle('active', i === 0));
      document.querySelectorAll('.preset-card').forEach((c, i) => c.classList.toggle('active', i === 0));
      const cover = document.getElementById('cover-main');
      cover.style.aspectRatio = '1200/480';
      cover.style.maxWidth = '';
      document.getElementById('ratio-label').textContent = '5:2 · 1200×480';
      applyColorScheme(6);
      const customLbl = document.getElementById('btn-custom-bg');
      customLbl.style.background = '';
      customLbl.classList.remove('has-custom');
      document.getElementById('inp-custom-bg').value = '#1d4ed8';
      currentDeco = 'classic';
      buildDecorations('classic');
      const defaultPresetFont = PRESETS[0]?.font || DEFAULT_FONT;
      document.getElementById('sel-font').value = defaultPresetFont;
      applyFontChoice(defaultPresetFont);
      Object.keys(visState).forEach(f => { if (!visState[f]) toggleVis(f); });
      const p = RATIO_PRESETS['1200/480'];
      document.getElementById('sld-title').max = p.titleMax;
      document.getElementById('sld-subtitle').max = p.subtitleMax;
      const set = (id, v) => document.getElementById(id).value = v;
      set('sld-label', p.labelSize); set('sld-title', p.titleSize); set('sld-subtitle', p.subtitleSize);
      set('sld-width', p.width); set('sld-title-lh', p.titleLH); set('sld-subtitle-lh', p.subtitleLH);
      set('sld-title-mt', p.titleMT); set('sld-title-mb', p.titleMB);
      syncAllSliders();
    }

    // ── Export ─────────────────────────────────────────────────────────────
    function captureEl(fn) {
      const el = document.getElementById('cover-main');
      const prev = el.style.maxWidth;
      el.style.maxWidth = 'none';
      const rect = el.getBoundingClientRect();
      const options = { pixelRatio: 2, width: Math.round(rect.width), height: Math.round(rect.height) };
      const fontsReady = document.fonts?.ready || Promise.resolve();
      return fontsReady
        .then(() => fn(el, options))
        .finally(() => { el.style.maxWidth = prev; });
    }

    function exportPng() {
      captureEl(htmlToImage.toPng).then(url => {
        const a = document.createElement('a'); a.download = 'cover.png'; a.href = url; a.click();
      }).catch(err => alert('截图失败：' + err));
    }

    function copyImage() {
      captureEl(htmlToImage.toBlob)
        .then(blob => navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]))
        .then(() => alert('已复制到剪贴板'))
        .catch(err => alert('截图失败：' + err));
    }

    // ── Init ───────────────────────────────────────────────────────────────
    document.getElementById('inp-label').value = DEFAULT.label;
    document.getElementById('inp-title').value = DEFAULT.title;
    document.getElementById('inp-subtitle').value = DEFAULT.subtitle;
    document.getElementById('inp-author').value = DEFAULT.author;

    initFontPicker();
    syncContent();
    syncAllSliders();
    initPresets();
    setupCropDrag();
    applyPreset(0);
