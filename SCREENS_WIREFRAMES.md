# WIREFRAMES - Screen Design

---

# 1) HOME SCREEN

## Scopo

Daily orientation, view della giornata.

## Layout (Mobile: 390x844px)

```
┌─────────────────────────────────┐
│                                 │
│   Good morning, Mauro           │  [32px, 300 weight]
│                                 │  Padding top: 48px
│   ─────────────────────────────  │  [#888888, linea sottile]
│                                 │
│   Streak: 12 days               │  [20px, 500 weight, #FFFFFF]
│   [icon: 🔥 o semplicemente     │  Sotto: 48px margin
│    accanto al numero]           │
│                                 │
│   ─────────────────────────────  │  Divider
│                                 │
│                                 │  Padding top: 32px
│   Today's Habits (3/5)           │  [20px, 500 weight]
│                                 │
│   ☐ Morning meditation (0 min)  │  [16px, 400]
│                                 │  Checkbox + testo
│   ☐ Read (30 min)               │  Spacing: 16px tra righe
│                                 │
│   ☐ Code review (45 min)        │
│                                 │
│   ☐ Journaling (5 min)          │
│                                 │
│   ☑ Drink water (tracked)       │  [Checkmark cyan, testo gray]
│                                 │
│   ─────────────────────────────  │  Divider, margin: 32px
│                                 │
│   Current Goal                  │  [20px, 500 weight]
│                                 │
│   ┌───────────────────────────┐ │  Card (#1A1A1A)
│   │ Launch SaaS MVP           │ │  Padding: 24px
│   │                           │ │
│   │ Progress                  │ │  Testo: 16px, 400
│   │ ███████░░░░░░░░░░░░ 42%  │ │  Progress bar: 4px height
│   │                           │ │  #00D4FF filling
│   │ 12 pomodoros this week    │ │  Testo piccolo: 12px, #888888
│   └───────────────────────────┘ │
│                                 │  Margin bottom: 48px
│                                 │
│       [ START FOCUS ]            │  Button primary (#00D4FF)
│                                 │  Padding: 12px 32px
│                                 │  Centered
│                                 │
└─────────────────────────────────┘  Padding bottom: 40px

```

### Specifiche

- **Color:** Dark background (#0F0F0F)
- **Primary CTA:** "START FOCUS" – Bold, centered, Cyan accent
- **Negative space:** Generoso tra sezioni (48px)
- **Dividers:** #2A2A2A, 1px solid
- **Progress bar:** Smooth, no background color change, just filling
- **Habit list:** Semplice, lineare, no badge o icon
- **Goal card:** Subtly elevated con border, non shadow

---

# 2) FOCUS MODE (Pomodoro)

## Scopo

Fullscreen, isolamento totale, deep work.

## Layout

```
┌─────────────────────────────────┐
│                                 │
│                                 │  NO HEADER
│                                 │  NO NAV
│                                 │  Fullscreen
│                                 │
│                                 │  [Background: #0F0F0F]
│                                 │
│                                 │
│       Launch SaaS MVP           │  Testo piccolo, centered
│       (25:00)                   │  #888888, 14px
│                                 │  Margin bottom: 64px
│                                 │
│                                 │
│              25:02              │  TIMER GIGANTE
│                                 │  128px, 300 weight
│                                 │  #FFFFFF
│                                 │  Centered
│                                 │
│                                 │
│                                 │  Margin top: 64px
│                                 │
│       ● ● ● ○ ○                 │  Progress indicator (Pomodoros)
│                                 │  Dots: 8px diameter
│       (Ciclo 3 di 4)            │  Spacing: 12px tra dots
│                                 │  Filled: #00D4FF, Empty: #2A2A2A
│                                 │
│                                 │
│       [ STOP SESSION ]           │  Button secondario
│                                 │  Border cyan, transparent bg
│                                 │  Bottom: 40px
│                                 │
└─────────────────────────────────┘

```

### Specifiche

- **Background:** #0F0F0F (nessun pattern, nessun distraction)
- **Timer:** Monospace preferibilmente (codice look), 128px, calma
- **Goal name:** Piccolo, gray, sopra il timer
- **Progress dots:** Minimalista, 5 dots per 4 pomodori = 25min di focus
- **Button:** Secondario, opzione per uscire (non intrusivo)
- **Nessuna animazione del timer** (cambio numerico netto)
- **No notifiche visive durante il session**
- **Colore di sfondo:** Rimanere scuro, nessun cambiamento

---

# 3) POMODORO COMPLETION SCREEN

## Scopo

Riflessione post-session, non giudicante.

## Layout

```
┌─────────────────────────────────┐
│                                 │
│                                 │
│   Session Completed             │  [28px, 600 weight]
│                                 │  Margin top: 64px
│                                 │
│   ───────────────────────────   │  Divider
│                                 │  Margin: 32px
│                                 │
│   Was this focused?             │  [20px, 500 weight]
│                                 │  Margin: 32px
│                                 │
│   [ Yes ]  [ Meh ]  [ No ]      │  3 Button secondari
│                                 │  Uguali, inline
│                                 │  Spaced evenly
│                                 │  Padding: 12px 24px
│                                 │
│                                 │  Margin bottom: 48px
│                                 │
│   ───────────────────────────   │  Divider
│                                 │
│                                 │
│   What did you work on?         │  [16px, 400]
│                                 │
│   ┌───────────────────────────┐ │  Textarea
│   │ Type here...              │ │  Placeholder: #888888
│   │                           │ │  Border: #2A2A2A, 1px
│   │                           │ │  Padding: 16px
│   │                           │ │  Min-height: 80px
│   │                           │ │
│   └───────────────────────────┘ │
│                                 │
│   (Optional)                    │  [12px, 400, #888888]
│                                 │
│                                 │  Margin top: 48px
│                                 │
│       [ SAVE ]                  │  Button primary (Cyan)
│                                 │  Centered
│                                 │
│                                 │  Margin bottom: 40px
│                                 │
└─────────────────────────────────┘

```

### Specifiche

- **Tone:** Non-judgmental ("Was this focused?" – semplice domanda)
- **Button options:** Yes/Meh/No (no positive/negative language)
- **Textarea:** Simple, no formatting, no hints
- **Color focus:** Cyan for primary action only
- **State tracking:** Quali button sono stati cliccati (change border color se selected)
- **Flow:** Domanda → Optional input → Save
- **No celebratory messages**

---

# 4) HABITS SCREEN

## Scopo

Tracking della disciplina, list view.

## Layout

```
┌─────────────────────────────────┐
│                                 │
│   My Habits                     │  [28px, 600 weight]
│                                 │  Padding top: 48px
│                                 │
│   ───────────────────────────   │  Divider
│                                 │
│                                 │
│   ┌───────────────────────────┐ │  Card habit
│   │ Morning Meditation        │ │  Padding: 24px
│   │ Streak: 7 days            │ │  Border: 1px #2A2A2A
│   │                           │ │
│   │ Last done: today          │ │  Testo: 16px (habit name)
│   └───────────────────────────┘ │  Subtitle: 14px (streak)
│                                 │  Spacing tra card: 16px
│                                 │
│   ┌───────────────────────────┐ │
│   │ Read                      │ │
│   │ Streak: 23 days           │ │
│   │                           │ │
│   │ Last done: 2 days ago     │ │  Se non completata oggi:
│   └───────────────────────────┘ │  color text #888888
│                                 │
│   ┌───────────────────────────┐ │
│   │ Code Review               │ │
│   │ Streak: 5 days            │ │
│   │                           │ │
│   │ Last done: today          │ │
│   └───────────────────────────┘ │
│                                 │
│   ┌───────────────────────────┐ │
│   │ Journaling                │ │
│   │ Streak: 1 day             │ │
│   │                           │ │
│   │ Last done: today          │ │
│   └───────────────────────────┘ │
│                                 │
│   ┌───────────────────────────┐ │
│   │ Exercise                  │ │
│   │ Streak: 0 days            │ │  Broken (reset di recente)
│   │                           │ │
│   │ Last done: 1 week ago     │ │
│   └───────────────────────────┘ │
│                                 │
│                                 │  Margin top: 48px
│   [ + ADD HABIT ]               │  Button secondario
│                                 │  Centered
│                                 │  Margin bottom: 40px
│                                 │
└─────────────────────────────────┘

```

### Specifiche

- **Card layout:** Nome prominente (16px), streak subtitle (14px, gray)
- **Streak counter:** Numero grande, bianco
- **"Last done" text:** Informativo, gray, small
- **Colore breaking streak:** Grigio/neutral (no red/negative)
- **No badges or icons**
- **Add button:** Secondario, inviting ma not pushy
- **List order:** Per completeness oggi, oppure per streak length
- **Mobile:** Full-width card (padding 20px laterale)

---

# 5) GOAL DETAIL SCREEN

## Scopo

Visione a lungo termine, context dell'obiettivo.

## Layout

```
┌─────────────────────────────────┐
│                                 │
│   Launch SaaS MVP               │  [28px, 600 weight]
│                                 │  Padding top: 48px
│                                 │
│   ───────────────────────────   │  Divider
│                                 │  Margin: 32px
│                                 │
│   Why                           │  [20px, 500 weight]
│                                 │
│   To achieve financial          │  [16px, 400 weight]
│   independence and help         │  Line-height: 1.6
│   people build their own        │  Color: #E0E0E0
│   business.                     │
│                                 │  Margin bottom: 32px
│                                 │
│   ───────────────────────────   │  Divider
│                                 │
│                                 │
│   Progress                      │  [16px, 500 weight]
│                                 │
│   ███████░░░░░░░░░░░░ 42%      │  Progress bar: 4px
│                                 │  Filled: #00D4FF
│                                 │  Percentuale: 14px, #888888
│                                 │
│   ───────────────────────────   │  Divider, margin: 32px
│                                 │
│                                 │
│   This Week                     │  [20px, 500 weight]
│                                 │
│   12 pomodoros completed        │  [16px, 400]
│                                 │  #E0E0E0
│                                 │
│   Target: 20 pomodoros          │  [14px, secondary]
│                                 │
│   ───────────────────────────   │  Divider, margin: 32px
│                                 │
│                                 │
│   Linked Habits                 │  [20px, 500 weight]
│                                 │
│   • Code Review                 │  Bullet list, semplice
│   • Deep Work (Morning)         │  #E0E0E0, 16px
│   • Learning (30 min)           │
│                                 │  Margin bottom: 40px
│                                 │
└─────────────────────────────────┘

```

### Specifiche

- **Goal title:** Prominente, top of screen
- **"Why" section:** Narrative text, calm tone, generous spacing
- **Progress bar:** Visivo principale (colore cyan)
- **Weekly stats:** Simple, no charts (textual preferred)
- **Linked habits:** Bullet list, minimal
- **Color:** Mantenere dark background, testo bianco/gray
- **No motivational language** – solo facts
- **Bottom button (optional):** Edit goal? O swipe da app (dipende dal flusso)

---

# 6) STATS SCREEN

## Scopo

Feedback senza giudizio, weekly review.

## Layout

```
┌─────────────────────────────────┐
│                                 │
│   This Week                     │  [28px, 600 weight]
│                                 │  Padding top: 48px
│                                 │
│   ───────────────────────────   │  Divider
│                                 │
│                                 │
│   Focus Time                    │  [20px, 500 weight]
│                                 │
│   8 hours 45 minutes            │  [28px, 400 weight]
│                                 │  #FFFFFF
│                                 │
│   ───────────────────────────   │  Divider, margin: 32px
│                                 │
│                                 │
│   Pomodoros                     │  [20px, 500 weight]
│                                 │
│   35 completed                  │  [28px, 400 weight]
│                                 │
│   ● ● ● ● ● ● ● ● ● ●          │  Progress dots (visual)
│   ● ● ● ● ● ○ ○ ○ ○ ○          │  10 dots = 10 cicli goal
│   ● ● ● ● ● ○ ○ ○ ○ ○          │  3 rows per goal
│                                 │
│   ───────────────────────────   │  Divider, margin: 32px
│                                 │
│                                 │
│   Best Day                      │  [20px, 500 weight]
│                                 │
│   Tuesday                       │  [20px, 400 weight]
│   5 hours 12 minutes            │  [14px, 400, #888888]
│                                 │
│   ───────────────────────────   │  Divider, margin: 32px
│                                 │
│                                 │
│   Longest Streak                │  [20px, 500 weight]
│                                 │
│   Morning Meditation: 23 days   │  [16px, 400]
│                                 │
│   ───────────────────────────   │  Divider, margin: 32px
│                                 │
│                                 │
│   Habits Completed              │  [20px, 500 weight]
│                                 │
│   5 / 5 (today)                 │  [28px, 400 weight, #00D4FF]
│   24 / 30 (this week)           │  Progress indicator
│                                 │
│                                 │  Margin bottom: 40px
│                                 │
└─────────────────────────────────┘

```

### Specifiche

- **Layout:** Verticale, sezioni chiare
- **Big numbers:** Tipografia grande (20-28px), facile da leggere
- **Charts:** Minimalisti (dots per visualizzare progress)
- **Color data:** Cyan solo per highlight (es: % complete)
- **Tone:** Neutrale, no praise ("Great job!") no judgment
- **Context:** Mostrare actual numbers, not rankings o comparisons
- **Mobile friendly:** Full-width lettura

---

## NAVIGATION

### Navigation Bar (Bottom)

Presente su tutte le schermate tranne Focus Mode.

```
┌─────────────────────────────────┐
│                                 │
│                                 │
│   Content area                  │
│                                 │
│                                 │
│                                 │
├─────────────────────────────────┤
│ Home │ Habits │ Goals │ Stats   │  [14px, gray]
│  ◆   │   ▢    │   ●   │   ▲    │  Icons simplified
│                                 │  Active: #00D4FF
│                                 │  Inactive: #888888
│                                 │  Height: 64px
└─────────────────────────────────┘
```

### Specifiche Nav

- **4 main sections:** Home, Habits, Goals (view list?), Stats
- **Icons:** Minimalisti, non-detailed
- **Active state:** Testo + icon in cyan
- **Inactive:** Gray
- **Padding:** 16px vertical
- **Border-top:** 1px #2A2A2A
- **Background:** #0F0F0F

---

## RESPONSIVE BREAKPOINTS

### Mobile (390px - baseline)

- Padding: 20px lateral
- Font sizes: Come specificate
- Button: Full-width spesso

### Tablet (768px+)

- Padding: 32px lateral
- Content max-width: 600px
- Cards: Più spazio
- Layout: Talvolta 2-column se sensato

### Desktop (1024px+)

- Padding: 48px lateral
- Content max-width: 768px
- Sidebar nav (optional): Invece di bottom nav
- Spacing: Più generoso

---

## ACCESSIBILITY

- **Color contrast:** Cyan (#00D4FF) vs Dark (#0F0F0F) = high contrast ✓
- **Focus states:** Visibili (cyan outline)
- **Buttons:** Min height 48px (touch target)
- **Typography:** Size minimo 12px (captions), 16px (body)
- **No color-only information** (streak è numero, not just verde/rosso)
