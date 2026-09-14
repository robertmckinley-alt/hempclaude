# FAL gaming interstitials — 20 stills + 20 videos, 9:16 1080×1920

Rebuilt after the Higgsfield set baked a day count into the image. Every unit here is
**date-agnostic** and says the same thing: *THC gummies gone after Dec 11 — still legal to
buy — stock up.* No "illegal" wording, no offer or price copy, 21+ on every frame.

```
stills-2k/           native 1536×2752 from Nano Banana Pro
stills-1080x1920/    AppLovin cut
video-1080x1920/     30-second clips, H.264 + AAC, 1080×1920 exactly
video-raw/           native model output before normalising
video-qa/            frame strips (10 frames across each clip) + rejected takes
video-jobs.tsv       every FAL request id, by wave
```

## Concepts (same 10 on both lines)

Level Locked · Shop Closing · Final Boss: The Ban · Game Over · Save Game? · Last Slot ·
Connection Lost · Continue? · Cheat Code: None · New High Score

Sleep line uses the THC Sleep Gummies cutouts; THC line uses Watermelon / Blue Raspberry.

## How the videos were made — and the honest caveats

**13 clips** are native 30-second takes from **Seedance 2.5** (`bytedance/seedance-2.5/
image-to-video`, 1080p, audio). One continuous render, no loop seams. Frame-strip QA
confirmed text stable across all 30s on every one.

Seedance's backend rejected the other 7 frames repeatedly (3–4 attempts each, generic
"invalid parameters", same params that worked elsewhere — plus one explicit copyright flag
on Save Game). Failed jobs are not billed. Those 7 went to **MiniMax H3 Max** at 15s and
were looped 2× with a 0.4s dissolve (video + audio) to 30s:

- sleep-02 Shop Closing, sleep-05 Save Game, sleep-06 Last Slot, thc-02 Shop Closing,
  thc-09 Cheat Code — clean
- **sleep-08 Continue?** — MiniMax cannot count; the digit cycled randomly. The digit band
  (y 260–610) is composited from the still, so it holds at "9". The THC version, on
  Seedance, counts 9→1 properly.
- **thc-06 Last Slot** — MiniMax popped the bag out of its slot (take 1) then zoomed the
  camera and recoloured the bag (take 2). Rendered on Kling v3 with start+end frame pinned.

If a clip needs regenerating: the still URLs are in the submit calls logged in
`video-jobs.tsv`; Seedance 30s is the best result when it goes through, so try it first
and fall back to MiniMax + loop, or Kling with end_image_url = start for a hard-locked loop.

## Costs (FAL, USD)
Stills ≈ $0.15–0.20 each. Seedance 30s/1080p priced per token (see fal.ai billing).
MiniMax 15s ≈ $0.19. Kling v3 15s ≈ $2.10.
