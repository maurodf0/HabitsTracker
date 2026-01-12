# DESIGN SYSTEM - Habits Tracker

## FILOSOFIA VISIVA

> "Show up every day. Do the work. No excuses."

Minimalista, calma, seria, identitaria. Zero gamificazione. Zero distrazioni.

---

## PALETTE COLORI

**Background principale:**

- `#0F0F0F` – Nero quasi puro (meno aggressivo del vero nero)

**Background secondario:**

- `#1A1A1A` – Grigio scuro (per card e sezioni)

**Testo:**

- `#FFFFFF` – Bianco puro (titoli, call-to-action)
- `#E0E0E0` – Grigio chiaro (body text)
- `#888888` – Grigio medio (secondary text, streak counter)

**Accent Color (unico):**

- `#00D4FF` – Cyan freddo (progresso, focus state, azioni primarie)

**Neutri:**

- `#2A2A2A` – Grigio scuro (borders, dividers)
- `#FFFFFF` – Bianco (negative space)

---

## TYPOGRAPHY

### Font Stack

```
Font Stack: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
```

### Scala Tipografica

| Elemento      | Size  | Weight | Line-height | Usage                  |
| ------------- | ----- | ------ | ----------- | ---------------------- |
| Greeting      | 32px  | 300    | 1.2         | "Good morning, Mauro"  |
| Heading 1     | 28px  | 600    | 1.3         | Titoli schermata       |
| Heading 2     | 20px  | 500    | 1.4         | Sottotitoli            |
| Body          | 16px  | 400    | 1.6         | Testo principale       |
| Small         | 14px  | 400    | 1.5         | Labels, secondary info |
| Tiny          | 12px  | 400    | 1.4         | Captions               |
| Timer (Focus) | 128px | 300    | 1           | Display numerico       |
| Button        | 16px  | 500    | 1.5         | Call-to-action         |

---

## SPACING SYSTEM

```
4px, 8px, 16px, 24px, 32px, 48px, 64px
```

### Padding (Intra-elemento)

- Buttons: 12px 24px
- Cards: 24px
- List items: 16px 0

### Margin (Inter-elementi)

- Between sections: 48px
- Between items: 24px
- Between small elements: 16px

---

## COMPONENTI CORE

### Button - Primary

```
Background: #00D4FF
Text: #0F0F0F (contrasto alto)
Padding: 12px 32px
Border-radius: 4px
Font-weight: 500
Font-size: 16px
Transition: opacity 200ms ease
Hover state: opacity 0.9
Active state: opacity 0.8
```

### Button - Secondary

```
Background: transparent
Border: 1px solid #00D4FF
Text: #00D4FF
Padding: 12px 32px
Border-radius: 4px
Hover: background #00D4FF + 10% opacity
```

### Card

```
Background: #1A1A1A
Border: 1px solid #2A2A2A
Border-radius: 8px
Padding: 24px
Box-shadow: none (no shadows)
```

### Progress Bar

```
Height: 4px
Background: #2A2A2A (unfilled)
Filled: #00D4FF (animated width)
Border-radius: 2px
Transition: width 300ms ease-out
```

### Checkbox

```
Size: 20x20px
Border: 2px solid #00D4FF
Background (unchecked): transparent
Background (checked): #00D4FF
Checkmark: white, animated
Border-radius: 3px
```

---

## ANIMAZIONI

- **Checkbox toggle:** 150ms ease-out
- **Progress bar:** 300ms ease-out
- **Button hover:** 100ms ease-out (opacity)
- **Focus timer:** No animation (static, predictable)
- **Fade transitions:** 200ms ease-in-out

Nessuna animazione che distrae. Solo feedback visuale.

---

## LAYOUT GRID

Mobile-first, responsive.

```
Padding laterale:
- Mobile: 20px
- Tablet (768px+): 32px
- Desktop (1024px+): 48px

Max-width content:
- 768px (max-width su desktop)
```

---

## ACCORDI DI DESIGN

1. **Una azione primaria per schermata** (pulsante principale ben visibile)
2. **Gerarchia tipografica chiara** (tagli diversi guidano lo sguardo)
3. **Spazio negativo generoso** (non affollare)
4. **Assenza di icon decorativi** (solo funzionali, se necessari)
5. **Color consistency** (cyan solo per azioni e stato attivo)
6. **No shadows, no depth** (design piatto, lineare)
7. **Border-radius minimale** (4-8px max)
8. **Accento: righe divisorie sottili** (1px solid #2A2A2A)
