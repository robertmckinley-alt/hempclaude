# AppLovin gaming interstitials — video, 9:16, 1080×1920, 5s

19 animated clips built from the stills in `../1080x1920/`. Each keeps the frame, text and
product locked and animates only the HUD element that carries the hook:

| Clip | What moves |
|---|---|
| Game Over (×2) | headline flickers on like a dying cabinet, scanlines roll |
| Final Level | progress bar fills 85→100% with sparkle |
| Continue? (×2) | countdown digit ticks 9→5, button throbs, ghost "no" stays still |
| 1 Life Left (×2) | the one red heart beats; DEC 11 pulses in time |
| Time's Up | colon blinks, glow breathes — digits locked (see below) |
| Boss: Congress (×2) | YOUR SUPPLY bar fills while the boss bar pulses |
| Achievement Unlocked (sleep) | trophy light sweep, confetti drifts |
| Pause | pause icon blinks over a frozen game |
| Respawn: None (×2) | headline glitches with RGB split, snaps back |
| Loading… (×2) | bar fills, dots animate, label locked |
| Power-Up | bag bobs like a collectible, electric ring rotates |
| Speedrun | timer seconds race, motion streaks |
| Insert Coin | headline blinks in attract-mode |

All have generated audio (arcade beeps, heartbeat, boss drums, chimes) — mute-safe by design,
since interstitials usually play silent.

**Missing: THC Achievement Unlocked.** Seedance's IP filter rejected it twice (the trophy +
banner reads as console trophy UI to the classifier; the sleep version passed). Use the still.

**Time's Up** — the model could not hold seven-segment digits (they wobbled 9→0→8 across two
attempts), so the top 300px of the still is composited over the clip in ffmpeg. Digits are
now pixel-locked; glow and button still animate.

Model: Seedance 2.5, omni_reference from start image, 1080p, 5s, audio on. ~45 credits per
clip. `qa/` holds frame strips for every clip and the rejected takes.

The "89 days" figures are baked in — regenerate the countdown-style clips as the number moves.
