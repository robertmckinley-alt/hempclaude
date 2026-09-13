// 20 concepts x 10 variants = 200 ads.
// Line "sleep" = THC Sleep Gummies (Huckleberry). Line "thc" = D9 THC Gummies (Watermelon / Blue Raspberry).
// Deadline: December 11, 2026 (P.L. 119-37 s.781 as amended by H.R. 6500).

const S3 = '../img/sleep-3bags.png';      // 3-bag sleep lineup (wide)
const SH = '../img/sleep-hand.png';       // hand holding sleep bag (tall)
const GM = '../img/gummy.png';            // single gummy
const WM = '../img/d9-watermelon.png';    // D9 watermelon (tall)
const BR = '../img/d9-blueraspberry.png'; // D9 blue raspberry (tall)

const img = (src, style = '') => `<img src="${src}"${style ? ` style="${style}"` : ''}>`;
const cycle = (arr, i) => arr[i % arr.length];

// ---------- shared fragments ----------
const TOUR_DATES = `
<div class="out"><span>Sept 2026</span><span>Selling fast</span></div>
<div class="out"><span>Oct 2026</span><span>Selling fast</span></div>
<div class="out"><span>Nov 2026</span><span>Last legs</span></div>
<div class="final"><span>Dec 11</span><span><b>Final show</b></span></div>`;

const PROHIB_DATES = `
<div class="out"><span>2018</span><span>Farm Bill · open</span></div>
<div class="out"><span>2019–25</span><span>The good years</span></div>
<div class="out"><span>Nov 2025</span><span>Bill signed</span></div>
<div class="final"><span>Dec 11 '26</span><span><b>Dry</b></span></div>`;

const P1_GUMMY = `<div class="lbl">Your gummy today</div><img class="pimg" src="${GM}"><div class="big">5mg<small>per gummy · 100mg per bag</small></div>`;
const P2_GLASS = `<div class="lbl">Legal after Dec 11</div><div class="glass"><div class="dot"></div></div><div class="big em">0.4mg<small>per <u>entire bag</u> · 250× less</small></div>`;
const P1_WEEKENDS = `<div class="lbl">Weekends left</div><div class="huge em">13</div><div class="big"><small>until December 11</small></div>`;
const P2_BAG = (src) => `<div class="lbl">Gummies per bag</div><img class="pimg bag" src="${src}"><div class="big">20<small>10mg each · 200mg per bag</small></div>`;
const P1_THCGUM = `<div class="lbl">Your gummy today</div><img class="pimg" src="${GM}"><div class="big">10mg<small>per gummy · 200mg per bag</small></div>`;
const P2_THCGLASS = `<div class="lbl">Legal after Dec 11</div><div class="glass"><div class="dot"></div></div><div class="big em">0.4mg<small>per <u>entire bag</u> · 500× less</small></div>`;

const CAL_NOV = (w) => `<div class="m">November</div><div class="d">26</div><div class="w">${w}</div>`;
const CAL_DEC = (w) => `<div class="m">December</div><div class="d">11</div><div class="w">${w}</div>`;
const CARD_WM = `<div class="m">Watermelon</div><img class="pic" src="${WM}"><div class="w">10mg · 20 per bag</div>`;
const CARD_BR = `<div class="m">Blue Raspberry</div><img class="pic" src="${BR}"><div class="w">10mg · 20 per bag</div>`;

const CUP_SLEEP = img(S3, 'left:30px;height:205px') + img(S3, 'left:560px;height:205px');
const CUP_THC   = img(WM, 'left:60px;height:225px;transform:rotate(-4deg)') + img(BR, 'left:250px;height:225px;transform:rotate(3deg)') + img(WM, 'left:600px;height:225px;transform:rotate(-3deg)') + img(BR, 'left:790px;height:225px;transform:rotate(5deg)');

const concepts = [];

/* =====================================================================
   SLEEP LINE
   ===================================================================== */

// 01 Last Call ---------------------------------------------------------
concepts.push({ line: 'sleep', id: '01-last-call', template: 'neon',
  defaults: { H1SIZE: 250, CSS: ':root{--g1:#b13aff;--g2:#f0cf85;--t2:#f7e3a8}', IMGS: img(SH), CTA: 'Close out your tab', CTA2: '→' },
  variants: [
    { H1: 'LAST CALL', H2: 'FOR SLEEP GUMMIES', SUB: 'Congress flips the lights on <b>December 11.</b><br>What\'s in your cupboard by then is yours.' },
    { H1: 'LAST CALL', H2: 'LIGHTS OUT DEC 11', SUB: 'The federal THC cap hits <b>December 11.</b><br>After that, this bag doesn\'t get restocked.', IMGS: img(S3) },
    { H1: 'LAST ORDERS', H2: 'SLEEP GUMMIES', SUB: 'You don\'t have to go home.<br>You do have to order before <b>December 11.</b>', H1SIZE: 220 },
    { H1: 'CLOSING TIME', H2: 'DECEMBER 11', SUB: 'The last night these ship is <b>December 11.</b><br>No lock-in. No after-hours.', H1SIZE: 210, IMGS: img(S3), CTA: 'Order the last round' },
    { H1: 'LAST CALL', H2: '89 NIGHTS LEFT', SUB: 'Every night until <b>December 11</b> is one you can still buy for.<br>Then the tab closes.' },
    { H1: 'ONE MORE', H2: 'FOR THE ROAD', SUB: 'The THC sleep gummy stops shipping <b>December 11.</b><br>Make it a round.', IMGS: img(S3), CTA: 'Make it a round' },
    { H1: 'LAST CALL', H2: 'NO LOCK-IN', SUB: 'Congress isn\'t doing after-hours. <b>December 11</b> the cap hits<br>and the shutters come down.' },
    { H1: 'TAB\'S CLOSING', H2: 'DECEMBER 11', SUB: 'What you\'ve got at home stays legal.<br>What you haven\'t ordered doesn\'t exist.', H1SIZE: 200, IMGS: img(S3), CTA: 'Settle up' },
    { H1: 'LAST CALL', H2: 'STOCK THE BAR', SUB: 'Your nightstand is the bar now.<br>Fill it before <b>December 11.</b>', CTA: 'Stock the bar' },
    { H1: 'LIGHTS UP', H2: 'DECEMBER 11', SUB: 'That\'s the night the federal THC cap kicks in.<br><b>Last round is now.</b>', H1SIZE: 240, IMGS: img(S3) },
  ]});

// 02 Endangered Species -----------------------------------------------
concepts.push({ line: 'sleep', id: '02-endangered', template: 'doc',
  defaults: { TAG: 'EP. 11 · THE NIGHTSTAND', LABEL: 'Species profile', IMG: S3, IMGCLASS: '', CTA: 'Adopt a bag before extinction', CTA2: '→' },
  variants: [
    { H1: 'The THC<br>Sleep Gummy', STAMP: 'Status: Endangered', SUB: '"Here we observe it in its natural habitat.<br><i>Sadly, after December 11, it will no longer be found in the wild."</i>' },
    { H1: 'The Huckleberry<br>Sleep Gummy', STAMP: 'Extinct: Dec 11', SUB: '"Note the distinctive purple bag.<br><i>Note also that it has 89 days left."</i>', IMG: SH, IMGCLASS: 'tall' },
    { H1: 'Homo<br>Insomniac', STAMP: 'Losing its habitat', SUB: '"A creature that finally found something that works.<br><i>Its supply disappears December 11."</i>', LABEL: 'Subject' },
    { H1: 'The<br>Nightstand', STAMP: 'Habitat under threat', SUB: '"Once home to a thriving population of sleep gummies.<br><i>After December 11: melatonin and dust."</i>', LABEL: 'Habitat' },
    { H1: 'The THC<br>Sleep Gummy', STAMP: 'Last sighting: Dec 11', SUB: '"Herds are thinning.<br><i>Stockpile now, or study it in the archives."</i>', IMG: SH, IMGCLASS: 'tall', CTA: 'Stockpile now' },
    { H1: 'Migration:<br>The Cupboard', STAMP: 'Status: Endangered', SUB: '"Observe the wise ones moving their supply indoors<br><i>before the federal cap lands December 11."</i>', LABEL: 'Behaviour' },
    { H1: 'The 5mg<br>Sleeper', STAMP: 'Critically endangered', SUB: '"Federal law caps a bag at 0.4mg after December 11.<br><i>This one has 100. It does not survive."</i>' },
    { H1: 'The<br>Last Batch', STAMP: 'Now shipping', SUB: '"What you\'re looking at is the final generation.<br><i>Adopt before December 11."</i>', LABEL: 'Field notes', CTA: 'Adopt the last batch' },
    { H1: 'The THC<br>Sleep Gummy', STAMP: 'Do not disturb', SUB: '"Rarely seen awake. Soon rarely seen at all.<br><i>Cutoff December 11."</i>', IMG: SH, IMGCLASS: 'tall' },
    { H1: 'Extinction<br>Event', STAMP: 'December 11', SUB: '"Not a meteor. A funding bill.<br><i>Same result for the sleep gummy."</i>', LABEL: 'Incoming', TAG: 'EP. 12 · THE END' },
  ]});

// 03 Gummy Prepper ------------------------------------------------------
concepts.push({ line: 'sleep', id: '03-prepper', template: 'shelf',
  defaults: { H1SIZE: 76, ROWCLASS: 'tall', ROW1: img(S3) + img(S3, 'margin-left:-90px'), ROW2: img(S3, 'margin-right:-90px') + img(S3), TAPE1: 'Supply: Oct', TAPE2: 'Supply: Nov', TAPE3: 'Cutoff: Dec 11', CTA: 'Build your supply', CTA2: '→' },
  variants: [
    { H1: 'Some people stockpile <s>beans.</s><br>Smart people stockpile <b>sleep.</b>' },
    { H1: 'Bunker rule #1:<br><b>never</b> run out of sleep.', TAPE1: 'Shelf A', TAPE2: 'Shelf B', TAPE3: 'Cap: Dec 11' },
    { H1: 'Canned goods: <s>optional.</s><br>Sleep gummies: <b>essential.</b>' },
    { H1: 'The only shortage worth<br>prepping for is <b>sleep.</b>', TAPE1: 'Winter', TAPE2: 'Spring', TAPE3: 'Ships until Dec 11' },
    { H1: '89 days. 20 per bag.<br><b>Do the shelf math.</b>', TAPE1: '4 bags', TAPE2: '80 nights', CTA: 'Do the math' },
    { H1: 'Doomsday is <s>vague.</s><br>December 11 is <b>a date.</b>', TAPE1: 'Real', TAPE2: 'Also real' },
    { H1: 'Stack them now.<br><b>Sleep on it later.</b>', CTA: 'Stack the shelf' },
    { H1: 'Your winter sleep supply<br>ships until <b>Dec 11.</b>', TAPE1: 'Dec', TAPE2: 'Jan', TAPE3: 'No Feb restock' },
    { H1: 'Prepping for the apocalypse?<br><b>Start with bedtime.</b>', TAPE1: 'Priority 1', TAPE2: 'Priority 2' },
    { H1: 'Bulk buy. Deep sleep.<br><b>No regrets in January.</b>', TAPE1: 'Bought', TAPE2: 'Sorted', CTA: 'Buy in bulk' },
  ]});

// 04 The 0.4mg Rumor ----------------------------------------------------
concepts.push({ line: 'sleep', id: '04-point-four', template: 'compare',
  defaults: { H1SIZE: 52, P1: P1_GUMMY, P2: P2_GLASS, CTA: 'Get the real thing while it\'s real', CTA2: '→', LEGAL: 'P.L. 119-37 §781 · Hemp-derived THC · purekana.com' },
  variants: [
    { H1: 'After Dec 11, a legal bag can hold <em>0.4mg</em> of THC. Yours has <em>100mg.</em><br>That\'s not a gummy. That\'s a rumor.' },
    { H1: '<em>250×</em> over the new limit.<br>Buy the real one while it\'s real.', H1SIZE: 60 },
    { H1: 'New federal max: <em>0.4mg</em> per bag.<br>That\'s not a dose. That\'s a crumb.', H1SIZE: 58 },
    { H1: 'One gummy today has more THC than <em>12 whole bags</em> will be allowed after December 11.' },
    { H1: 'Congress\'s idea of a sleep gummy: <em>0.02mg</em> each. Ours: 5mg.<br>Pick one before Dec 11.' },
    { H1: 'The math Congress did: <em>0.4mg</em> per bag.<br>The math you should do: how many bags until spring.' },
    { H1: 'After December 11, "THC gummy" means <em>a rounding error.</em><br>Stock the real thing.' },
    { H1: 'Your bag: 100mg. Legal bag after Dec 11: <em>0.4mg.</em><br>One of these helps you sleep.' },
    { H1: 'They didn\'t lower the dose.<br>They <em>deleted</em> it. December 11.', H1SIZE: 60 },
    { H1: 'Per-container cap: <em>0.4mg.</em> Per gummy that leaves: <em>0.02mg.</em><br>Not a reformulation. A removal.' },
  ]});

// 05 Stocking Stuffers --------------------------------------------------
concepts.push({ line: 'sleep', id: '05-stocking', template: 'stocking',
  defaults: { H1SIZE: 78, IMG: S3, IMGCLASS: '', CTA: 'Give sleep. Give it before the 11th', CTA2: '→' },
  variants: [
    { H1: 'Stocking stuffers are about<br>to get <b>very boring.</b>', SUB: 'Order by December 11,<br>or Santa\'s bringing melatonin.', TAGTXT: 'From: the last<br>legal batch' },
    { H1: 'Santa\'s cutoff is Dec 24.<br><b>Congress\'s is Dec 11.</b>', SUB: 'Plan around the earlier one.', TAGTXT: 'To: someone<br>who never sleeps', IMG: SH, IMGCLASS: 'tall' },
    { H1: 'Give the gift of<br><b>actually sleeping.</b>', SUB: 'Ships until December 11. Not a day after.', TAGTXT: 'Do not open<br>until bedtime' },
    { H1: 'This year\'s must-have gift<br><b>won\'t exist next year.</b>', SUB: 'The federal THC cap lands December 11.', TAGTXT: 'Limited edition:<br>by law', H1SIZE: 72 },
    { H1: 'Naughty list: Congress.<br><b>Nice list: you, if you order now.</b>', SUB: 'Cutoff December 11.', TAGTXT: 'For: a very<br>good sleeper', H1SIZE: 68, IMG: SH, IMGCLASS: 'tall' },
    { H1: 'Every stocking on the block<br>is getting <b>melatonin.</b>', SUB: 'Yours doesn\'t have to. Order by Dec 11.', TAGTXT: 'The good stuff' },
    { H1: 'Ho ho <b>hurry.</b>', SUB: 'THC sleep gummies stop shipping December 11 —<br>two weeks before Christmas.', TAGTXT: 'Wrap it<br>before the 11th', H1SIZE: 110 },
    { H1: 'Christmas is Dec 25.<br><b>The cap is Dec 11.</b>', SUB: 'Read that order again.', TAGTXT: 'Last legal<br>stocking stuffer', IMG: SH, IMGCLASS: 'tall' },
    { H1: 'The gift they\'ll actually<br><b>use every night.</b>', SUB: 'Until the supply runs out.<br>Which is December 11.', TAGTXT: 'Handle with care.<br>Then sleep.' },
    { H1: 'For the person who has everything:<br><b>sleep. Before Dec 11.</b>', SUB: 'The only gift with a federal deadline.', TAGTXT: 'From:<br>Dec-10 you', H1SIZE: 66 },
  ]});

// 06 Survive Thanksgiving ----------------------------------------------
concepts.push({ line: 'sleep', id: '06-thanksgiving', template: 'calendar',
  defaults: { H1SIZE: 64, C1: CAL_NOV('In-laws arrive.<br>Guest room. Four nights.'), C2: CAL_DEC('Federal THC cap.<br>Gummies stop shipping.'), IMG: SH, CTA: 'Stock up for the whole holiday run', CTA2: '→' },
  variants: [
    { H1: 'The in-laws arrive Nov 26.<br>Your gummies leave Dec 11.', PLAN: 'Plan accordingly.' },
    { H1: 'Thanksgiving is 4 nights.<br>The cap is forever.', PLAN: 'Stock up for both.', C1: CAL_NOV('Four nights.<br>One guest room.') },
    { H1: 'Guest room. Air mattress.<br>Your cousin\'s podcast opinions.', PLAN: 'Sleep through it.', H1SIZE: 58, C1: CAL_NOV('Everyone arrives.<br>Nobody leaves early.') },
    { H1: 'Nov 26: family arrives.<br>Dec 11: sleep gummies don\'t.', PLAN: 'Prepare for one of them.' },
    { H1: 'Turkey coma isn\'t enough.<br>Not with that many people.', PLAN: 'Back it up.', C1: CAL_NOV('Turkey. Pie.<br>Twelve relatives.'), CTA: 'Order before Dec 11' },
    { H1: 'Survive Thanksgiving.<br>Then survive December.', PLAN: 'Both need a supply.', C2: CAL_DEC('The cap.<br>One has a cutoff.') },
    { H1: '15 days between the in-laws<br>and the federal cap.', PLAN: 'Use them.', C2: CAL_DEC('Last ship date.<br>15 days later.') },
    { H1: 'Black Friday is the 27th.<br>The real deadline is the 11th.', PLAN: 'Shop the one that matters.', C1: CAL_NOV('Thanksgiving.<br>Then the doorbusters.'), CTA: 'Shop the real deadline' },
    { H1: '"So, what are you doing<br>with your life?"', PLAN: 'Sleep. That\'s the plan.', H1SIZE: 62, C1: CAL_NOV('That question.<br>Every year.'), C2: CAL_DEC('No more sleep gummies.<br>Rough month.') },
    { H1: 'Thanksgiving. Office party.<br>Then the cap.', PLAN: 'Three reasons to stock up.', C2: CAL_DEC('Federal THC cap.<br>Order before it.'), CTA: 'Stock up for all three' },
  ]});

// 07 Farewell Tour ------------------------------------------------------
concepts.push({ line: 'sleep', id: '07-farewell-tour', template: 'poster',
  defaults: { BANDSIZE: 150, DATES: TOUR_DATES, IMG: S3, IMGCLASS: '', CTA: 'Get tickets', CTA2: '→' },
  variants: [
    { PRE: 'PureKana presents', BAND: 'THC Sleep<br>Gummies', TOUR: 'The Farewell Tour', ENC: 'No encore.' },
    { PRE: 'Final run', BAND: 'THC Sleep<br>Gummies', TOUR: 'Last Shows: Dec 11', ENC: 'Get your tickets.', IMG: SH, IMGCLASS: 'tall' },
    { PRE: 'One night only · every night until Dec 11', BAND: 'Huckle-<br>berry', TOUR: 'The Goodbye Tour', ENC: 'Then silence.' },
    { PRE: 'Greatest hits', BAND: '5mg CBN<br>3mg Melatonin<br>5mg THC', TOUR: 'The Last Setlist', ENC: 'No reunion tour.', BANDSIZE: 84, IMG: SH, IMGCLASS: 'tall' },
    { PRE: 'Sold out soon', BAND: 'THC Sleep<br>Gummies', TOUR: 'Residency ends Dec 11', ENC: 'Last chance to see it live.' },
    { PRE: 'Live from your nightstand', BAND: 'THC Sleep<br>Gummies', TOUR: 'Final Season', ENC: 'Not renewed.', IMG: SH, IMGCLASS: 'tall' },
    { PRE: 'Thank you for eight great years', BAND: 'THC Sleep<br>Gummies', TOUR: 'The Farewell Tour', ENC: 'Cancelled by Congress.' },
    { PRE: 'Limited engagement', BAND: 'Sleep<br>Gummies', TOUR: 'Closing Night: Dec 11', ENC: 'The venue is your cupboard.', CTA: 'Book the last night' },
    { PRE: 'Now booking', BAND: 'The Last<br>Bags', TOUR: 'Farewell Tour 2026', ENC: 'Don\'t miss the last show.', IMG: SH, IMGCLASS: 'tall' },
    { PRE: 'Standing ovation', BAND: 'THC Sleep<br>Gummies', TOUR: 'Curtain: Dec 11', ENC: 'No encore. No refunds on regret.' },
  ]});

// 08 Sleep Through the Ban ---------------------------------------------
concepts.push({ line: 'sleep', id: '08-sleep-through', template: 'night',
  defaults: { H1SIZE: 66, H2TOP: 405, MOON: '', Z: '', IMG: SH, IMGCLASS: '', CTA: 'Enough for winter. Ships until the 11th', CTA2: '→' },
  variants: [
    { H1: 'They\'re taking your sleep gummies December 11.<br><em>Sleep through it.</em>', SUB: 'Buy enough to last the winter. What\'s in your cupboard on the 11th is <b>yours to keep.</b>' },
    { H1: 'The ban is loud.<br><em>You\'ll be asleep.</em>', SUB: 'Order enough for the winter before <b>December 11.</b>', H1SIZE: 76, H2TOP: 330, IMG: S3, IMGCLASS: 'wide', Z: 'off' },
    { H1: 'Congress kept you up.<br><em>Don\'t let them win.</em>', SUB: 'Sleep gummies ship until <b>December 11.</b> Then they don\'t.', H1SIZE: 74, H2TOP: 330 },
    { H1: 'Winter is long.<br><em>The deadline isn\'t.</em>', SUB: '<b>December 11.</b> Buy the winter\'s supply before it.', H1SIZE: 78, H2TOP: 330, IMG: S3, IMGCLASS: 'wide', Z: 'off' },
    { H1: 'Hit snooze on the ban.<br><em>Literally.</em>', SUB: 'What you own by <b>December 11</b> stays yours. Order the winter now.', H1SIZE: 78, H2TOP: 330 },
    { H1: 'The last thing to lose sleep over<br><em>is losing sleep gummies.</em>', SUB: 'Order before <b>December 11</b> and don\'t.', H1SIZE: 62, H2TOP: 360, IMG: S3, IMGCLASS: 'wide', Z: 'off' },
    { H1: 'Some people will panic on Dec 11.<br><em>You\'ll be asleep by ten.</em>', SUB: 'Because you ordered in time.', H1SIZE: 62, H2TOP: 360 },
    { H1: 'Bad news for gummies.<br><em>Good news if you stocked up.</em>', SUB: '<b>December 11</b> cutoff. Order before then.', H1SIZE: 64, H2TOP: 360, IMG: S3, IMGCLASS: 'wide', Z: 'off', CTA: 'Stock up' },
    { H1: 'Sleep is not cancelled.<br><em>Supply is.</em>', SUB: '<b>December 11.</b> Fill the drawer.', H1SIZE: 78, H2TOP: 330, CTA: 'Fill the drawer' },
    { H1: 'Rest easy through the ban.<br><em>Because you planned ahead.</em>', SUB: 'Ships until <b>December 11.</b>', H1SIZE: 64, H2TOP: 360, IMG: S3, IMGCLASS: 'wide', Z: 'off' },
  ]});

// 09 No Grandfather Clause ---------------------------------------------
concepts.push({ line: 'sleep', id: '09-cupboard', template: 'cupboard',
  defaults: { H1SIZE: 76, IMGS: CUP_SLEEP, CTA: 'Fill the cupboard', CTA2: '→' },
  variants: [
    { KICKER: 'No grandfather clause for stores. One for you.', L1: 'Retailers get<br>a <span class="m">deadline.</span>', L2: 'You get<br>a <span class="r">cupboard.</span>', PAY: 'What\'s in it on December 11 stays yours.<br>What isn\'t, isn\'t.' },
    { KICKER: 'Read the fine print. Then read your pantry.', L1: 'Stores stop<br><span class="m">selling.</span>', L2: 'You don\'t stop<br><span class="r">having.</span>', PAY: 'The cap governs shelves, not homes.<br>Fill yours by Dec 11.' },
    { KICKER: 'The law says "sold." It doesn\'t say "owned."', L1: 'What ships<br><span class="m">ends Dec 11.</span>', L2: 'What\'s home<br><span class="r">stays home.</span>', PAY: 'Your supply is legal.<br>Your reorder isn\'t.' },
    { KICKER: 'The one loophole left is your kitchen.', L1: 'Congress closed<br>the <span class="m">loophole.</span>', L2: 'Not your<br><span class="r">cupboard.</span>', PAY: 'Order before Dec 11.<br>Keep it after.' },
    { KICKER: 'Personal stock: allowed. Restock: not.', L1: 'One bag<br><span class="m">runs out.</span>', L2: 'Four bags<br><span class="r">run through.</span>', PAY: 'Buy for the winter before Dec 11.', CTA: 'Buy for the winter' },
    { KICKER: 'Stores get a cutoff. Your drawer doesn\'t.', L1: 'Dec 11 is a<br><span class="m">shipping date.</span>', L2: 'Not an<br><span class="r">expiry date.</span>', PAY: 'Order now.<br>Sleep on it for months.' },
    { KICKER: 'What you own is yours. What you meant to order isn\'t.', L1: 'Meant to<br><span class="m">order.</span>', L2: 'Actually<br><span class="r">ordered.</span>', PAY: 'Only one of these counts<br>on December 11.' },
    { KICKER: 'Deadlines are for retailers.', L1: 'They lose<br>the <span class="m">shelf.</span>', L2: 'You keep<br>the <span class="r">stash.</span>', PAY: 'Fill it by December 11.' },
    { KICKER: 'The cupboard is the last legal shelf.', L1: 'Every store shelf<br><span class="m">empties Dec 11.</span>', L2: 'Yours<br><span class="r">doesn\'t have to.</span>', PAY: 'Order more than one.<br>Stack them.', H1SIZE: 68 },
    { KICKER: 'This is the whole strategy.', L1: 'Buy before<br><span class="m">Dec 11.</span>', L2: 'Own after<br><span class="r">Dec 11.</span>', PAY: 'There is no step three.' },
  ]});

// 10 Live Countdown -----------------------------------------------------
concepts.push({ line: 'sleep', id: '10-countdown', template: 'count',
  defaults: { NOTE: 'DAYS UNTIL THE FEDERAL THC CAP · DEC 11', NUMSIZE: 620, LBL: 'DAYS', IMG: SH, IMGCLASS: '', CTA: 'Stock up before the cap', CTA2: '→' },
  variants: [
    { NUM: '89', MATH: '20 gummies per bag. <b>Do the math.</b>' },
    { NUM: '75', MATH: 'Roughly four bags. <b>Or one bad January.</b>' },
    { NUM: '60', MATH: 'Two months. <b>Three bags, if you\'re honest.</b>' },
    { NUM: '45', MATH: 'Halfway. <b>Still time. Not much.</b>' },
    { NUM: '30', MATH: 'One month. <b>One order. Done.</b>' },
    { NUM: '21', MATH: 'Three weeks. <b>Shipping takes some of that.</b>' },
    { NUM: '14', MATH: 'Two weeks. <b>Two bags. Zero excuses.</b>' },
    { NUM: '7', NUMSIZE: 700, MATH: 'One week. <b>Last full order window.</b>' },
    { NUM: '3', NUMSIZE: 700, MATH: 'Seventy-two hours. <b>Then it\'s gone.</b>' },
    { NUM: '1', NUMSIZE: 700, LBL: 'DAY', MATH: 'Tomorrow the cap hits. <b>Tonight you order.</b>', CTA: 'Order tonight' },
  ]});

/* =====================================================================
   THC LINE (D9 THC Gummies · Watermelon / Blue Raspberry · 10mg · 200mg/bag)
   ===================================================================== */

const THC_NEON = ':root{--g1:#ff2d8a;--g2:#1fd1b0;--t2:#9ff5e3}';

// 01 Happy Hour's Over --------------------------------------------------
concepts.push({ line: 'thc', id: '01-happy-hour', template: 'neon',
  defaults: { H1SIZE: 230, CSS: THC_NEON, IMGS: img(WM) + img(BR), CTA: 'Order the last round', CTA2: '→' },
  variants: [
    { H1: 'HAPPY HOUR', H2: 'IS ENDING', SUB: 'The federal happy hour closes <b>December 11.</b><br>Last round is on you.' },
    { H1: 'LAST ROUND', H2: 'DECEMBER 11', SUB: 'Watermelon or Blue Raspberry. Doesn\'t matter —<br>both stop shipping <b>December 11.</b>' },
    { H1: 'TAB\'S OPEN', H2: 'UNTIL DEC 11', SUB: 'Then Congress closes it.<br>Order the round now.', CTA: 'Run the tab' },
    { H1: 'LAST CALL', H2: 'FOR THC GUMMIES', SUB: 'Congress is flipping the lights on <b>December 11.</b><br>What\'s in your cupboard stays yours.', H1SIZE: 250, CTA: 'Close out your tab' },
    { H1: 'EAT UP', H2: 'BAR CLOSES DEC 11', SUB: 'THC gummies. 10mg each. 20 a bag.<br>Gone after <b>December 11.</b>', H1SIZE: 260 },
    { H1: 'BAR CLOSES', H2: 'DECEMBER 11', SUB: 'Bartender\'s a funding bill.<br>He isn\'t doing after-hours.', IMGS: img(WM) },
    { H1: 'LAST ORDERS', H2: '10MG · 20 A BAG', SUB: 'The cap hits <b>December 11.</b><br>This bag has 500× the new limit.', H1SIZE: 220, IMGS: img(BR) },
    { H1: 'NO AFTER-PARTY', H2: 'DECEMBER 11', SUB: 'Federal cap. Hard stop.<br>Order before then, or don\'t order.', H1SIZE: 150 },
    { H1: 'HAPPY HOUR', H2: '89 DAYS LONG', SUB: 'Then it ends. <b>December 11.</b><br>Make it count.' },
    { H1: 'CLOSING TIME', H2: 'YOU CAN\'T STAY HERE', SUB: 'But you can stock up.<br>Until <b>December 11.</b>', H1SIZE: 210, CTA: 'Stock up' },
  ]});

// 02 Prohibition 2.0 ----------------------------------------------------
concepts.push({ line: 'thc', id: '02-prohibition', template: 'poster',
  defaults: { BANDSIZE: 150, DATES: PROHIB_DATES, IMG: WM, IMGCLASS: 'tall', CSS: ':root{--bg:#120f0a;--ink:#f1e6c8;--hi:#e0a83a}', CTA: 'Stock the cellar', CTA2: '→' },
  variants: [
    { PRE: 'Est. 2018 · Dry Dec 11, 2026', BAND: 'THC<br>Gummies', TOUR: 'Prohibition 2.0', ENC: 'Stock up like it\'s 1919.' },
    { PRE: 'Speakeasy hours: now', BAND: 'THC<br>Gummies', TOUR: 'Last Legal Batch', ENC: 'No password. Just a deadline.', IMG: BR },
    { PRE: 'They tried this once before', BAND: 'THC<br>Gummies', TOUR: 'Dry December', ENC: 'It didn\'t take then either.' },
    { PRE: 'Your grandfather stocked the cellar', BAND: 'Gummies', TOUR: 'Prohibition Returns', ENC: 'Be your grandfather.', BANDSIZE: 190, IMG: BR },
    { PRE: 'Even the Volstead Act had a date', BAND: 'THC<br>Gummies', TOUR: 'Dry: Dec 11, 2026', ENC: 'History rhymes. Cupboards don\'t have to.' },
    { PRE: 'Bootleg-free · legal today', BAND: 'Water-<br>melon', TOUR: 'The Last Open Bar', ENC: 'Order the case.', CTA: 'Order the case' },
    { PRE: 'The Roaring 2026', BAND: 'THC<br>Gummies', TOUR: 'The Great Dry-Up', ENC: 'Charleston optional.', IMG: BR },
    { PRE: 'Passed 370–48', BAND: 'THC<br>Gummies', TOUR: 'Prohibition 2.0', ENC: 'Congress isn\'t bluffing.' },
    { PRE: 'Cellar strategy', BAND: 'Blue<br>Raspberry', TOUR: 'Stock the Speakeasy', ENC: 'Twenty a bag. Stock the shelf.', IMG: BR },
    { PRE: 'Final pour', BAND: '10mg<br>Gummies', TOUR: 'Dry After Dec 11', ENC: 'No bathtub gummies. Buy the real ones.' },
  ]});

// 03 The Gummy Run ------------------------------------------------------
concepts.push({ line: 'thc', id: '03-gummy-run', template: 'shelf',
  defaults: { H1SIZE: 76, ROWCLASS: 'tall', CSS: ':root{--bg:#1c1f26;--ink:#eef0f4;--hi:#ff2d8a;--strike:#ff2d8a;--tape:#9ff5e3;--alert:#ff2d8a}',
    ROW1: img(WM) + img(BR) + img(WM) + img(BR) + img(WM), ROW2: img(BR) + img(WM) + img(BR) + img(WM) + img(BR),
    TAPE1: 'Aisle 7', TAPE2: 'Aisle 8', TAPE3: 'Cutoff: Dec 11', CTA: 'Buy before the run', CTA2: '→' },
  variants: [
    { H1: 'Remember toilet paper, 2020?<br><b>This is that.</b>' },
    { H1: 'The shelves clear<br><b>before</b> the deadline, not on it.', TAPE1: 'Going', TAPE2: 'Going' },
    { H1: 'Everyone thinks they\'ll <s>wait.</s><br><b>Nobody waits.</b>' },
    { H1: 'First the fast movers. Then<br>the flavors. <b>Then nothing.</b>', TAPE1: 'Watermelon', TAPE2: 'Blue Raspberry' },
    { H1: 'Panic buying is <s>silly.</s><br>Planned buying is <b>smart.</b>', CTA: 'Plan the buy' },
    { H1: '200mg a bag.<br><b>Zero after Dec 11.</b>' },
    { H1: 'This shelf is<br><b>a countdown.</b>', TAPE1: 'T-minus', TAPE2: '89 days' },
    { H1: 'Buy before the run.<br><b>Not during it.</b>' },
    { H1: 'The last legal restock<br>is <b>happening now.</b>', TAPE1: 'Last', TAPE2: 'Restock', CTA: 'Get in on it' },
    { H1: 'When it\'s gone,<br><b>it\'s federally gone.</b>' },
  ]});

// 04 Weekend Math -------------------------------------------------------
concepts.push({ line: 'thc', id: '04-weekend-math', template: 'compare',
  defaults: { H1SIZE: 54, P1: P1_WEEKENDS, P2: P2_BAG(WM), CSS: ':root{--bg:#eef7f4;--glow:rgba(31,209,176,.22);--em:#0d8f76}', CTA: 'Do the math, then the order', CTA2: '→', LEGAL: 'Hemp-derived THC · purekana.com' },
  variants: [
    { H1: '<em>13</em> weekends until Dec 11.<br><em>20</em> gummies per bag. Do the math.', H1SIZE: 60 },
    { H1: 'Every Friday until the cap is one you can still buy for. <em>Count them.</em>', P2: P2_BAG(BR) },
    { H1: 'Weekends left: <em>13.</em><br>Bags you\'ll want: <em>more than one.</em>', H1SIZE: 60 },
    { H1: 'One bag is <em>10 weekends</em> at two a night. The cap is 13 out.<br>You see the problem.', P2: P2_BAG(BR) },
    { H1: 'Football season runs past Dec 11.<br><em>Your gummies don\'t.</em>', H1SIZE: 60 },
    { H1: 'Halloween. Thanksgiving. Office party.<br><em>All before the cap. Stock for all three.</em>', P2: P2_BAG(BR), H1SIZE: 50 },
    { H1: '<em>89</em> days. <em>20</em> per bag.<br>How many bags is that? Math\'s done.', H1SIZE: 60, CTA: 'Order the winter' },
    { H1: 'New Year\'s Eve is 20 days after the cap.<br><em>Buy for it now, or don\'t have it.</em>', P2: P2_BAG(BR) },
    { H1: '10mg × 20 = 200mg a bag.<br>New legal max: <em>0.4mg.</em> This is the last real bag.', P1: P1_THCGUM, P2: P2_THCGLASS, CTA: 'Get the real thing while it\'s real' },
    { H1: 'Congress did the math: <em>0.4mg</em> per bag.<br>Your math: <em>how many until spring.</em>', P1: P1_THCGUM, P2: P2_THCGLASS, H1SIZE: 52 },
  ]});

// 05 Pick a Side --------------------------------------------------------
concepts.push({ line: 'thc', id: '05-pick-a-side', template: 'calendar',
  defaults: { H1SIZE: 64, C1: CARD_WM, C2: CARD_BR, IMG: GM, CSS: ':root{--bg:#f4f1ea;--glow:rgba(255,45,138,.18);--ink:#10151c;--mut:#5c6a78;--c1:#1fb89a;--c2:#1e6fd9} .bag{width:170px;right:40px;bottom:60px;transform:rotate(15deg)}', CTA: 'Pick a side', CTA2: '→ or buy both' },
  variants: [
    { H1: 'Watermelon or Blue Raspberry?', PLAN: 'Pick a side before there are no sides.' },
    { H1: 'Two flavors. One deadline.', PLAN: 'Dec 11. Choose. Or buy both.' },
    { H1: 'The great flavor debate<br>ends December 11.', PLAN: 'Not with a winner. With a cap.' },
    { H1: 'Team Watermelon.<br>Team Blue Razz.', PLAN: 'Both benched Dec 11.' },
    { H1: 'Can\'t decide?', PLAN: 'Get both. Now you don\'t have to.', H1SIZE: 80, CTA: 'Get both' },
    { H1: 'Pick your last flavor.', PLAN: 'Then pick three more bags of it.', H1SIZE: 72 },
    { H1: 'There\'s no wrong answer.', PLAN: 'There is a wrong date. Dec 11.', H1SIZE: 72 },
    { H1: 'The rivalry ends Dec 11.', PLAN: 'Both sides lose. Unless you stocked up.', H1SIZE: 72 },
    { H1: 'Voting closes December 11.', PLAN: 'Vote with your cart.', H1SIZE: 72, CTA: 'Cast your vote' },
    { H1: 'Two bags in. One deadline out.', PLAN: 'December 11. Choose, then stock.', H1SIZE: 66 },
  ]});

// 06 Dear January Me ----------------------------------------------------
concepts.push({ line: 'thc', id: '06-dear-january', template: 'note',
  defaults: { H1SIZE: 60, IMG: WM, IMGW: 260, CTA: 'Write your future self a favour', CTA2: '→' },
  variants: [
    { DATE: 'December 10, 2026', H1: 'Dear January-me,<br><br>You\'re welcome.', SIG: '— December-me<br>P.S. I ordered extra.', STAMP: 'Delivered' },
    { DATE: 'September 2026', H1: 'Dear future me,<br><br>Remember when THC gummies were <b>legal to buy?</b><br>Yeah. Ordered extra.', SIG: '— Past you, who thinks ahead', STAMP: 'Stocked', H1SIZE: 44, IMG: BR },
    { DATE: 'January 2027', H1: 'Dear September-me,<br><br>Why didn\'t you order more<br>before <b>December 11?</b>', SIG: '— January-you. Awake. Annoyed.', STAMP: 'Too late', H1SIZE: 46 },
    { DATE: 'Dec 11, 2026', H1: 'Note to self:<br><br>Today the cap hit.<br><b>The cupboard\'s full.</b><br>Crisis averted.', SIG: '— You, smug', STAMP: 'Handled', H1SIZE: 46, IMG: BR },
    { DATE: 'Today', H1: 'Reminder:<br><br>Buy before Dec 11.<br>Not "soon." <b>Before.</b>', SIG: '— The reasonable part of your brain', STAMP: 'Urgent' },
    { DATE: 'Sept 13, 2026', H1: 'Grocery list:<br><br>eggs, milk,<br><b>89 days of gummies.</b>', SIG: '— Same as it ever was', STAMP: 'Priority', IMG: BR, CTA: 'Tick the list' },
    { DATE: 'Dec 12, 2026', H1: 'Dear everyone who waited:<br><br>told you.', SIG: '— Everyone who didn\'t', STAMP: 'Sorry', H1SIZE: 56 },
    { DATE: 'Now', H1: 'Dear me,<br><br>You will not "get to it."<br><b>Get to it.</b>', SIG: '— Also me', STAMP: 'Do it', IMG: BR, CTA: 'Get to it' },
    { DATE: 'Winter 2026', H1: 'Dear cupboard,<br><br>You\'re about to be<br>the only store in town.', SIG: '— Management', STAMP: 'Fully stocked', H1SIZE: 48 },
    { DATE: 'Someday', H1: 'Dear regret,<br><br>Not this time.<br>Ordered before Dec 11.', SIG: '— Me, doing fine', STAMP: 'Ordered', IMG: BR },
  ]});

// 07 Be the Friend ------------------------------------------------------
concepts.push({ line: 'thc', id: '07-be-the-friend', template: 'night',
  defaults: { H1SIZE: 66, H2TOP: 405, MOON: 'off', Z: 'off', IMG: WM, IMGCLASS: 'tall', CSS: ':root{--bg:#0f1f1c;--glow:rgba(31,209,176,.45);--hi:#9ff5e3;--sub:#a9c9c2}', CTA: 'Be that friend', CTA2: '→' },
  variants: [
    { H1: 'Be the friend who<br><em>still has some</em> in February.', SUB: 'Stock up before <b>December 11.</b> Social currency, in gummy form.' },
    { H1: 'Everyone\'s going to ask you.<br><em>Have an answer.</em>', SUB: 'Stock up. Before <b>Dec 11.</b>', IMG: BR },
    { H1: 'The group chat, Dec 12:<br><em>"anyone still have gummies?"</em>', SUB: 'Be the one who does.', H1SIZE: 58, H2TOP: 380 },
    { H1: 'Generosity is easy<br><em>when you planned ahead.</em>', SUB: 'Order before <b>Dec 11.</b>', IMG: BR },
    { H1: 'Your friends will remember<br><em>who stocked up.</em>', SUB: 'Be memorable. <b>Dec 11.</b>' },
    { H1: 'Host gift of the year:<br><em>a bag that\'s federally rare.</em>', SUB: 'Ships until <b>December 11.</b>', H1SIZE: 60, H2TOP: 380, IMG: BR, CTA: 'Bring the good gift' },
    { H1: 'Some people hoard.<br><em>Some people share.</em>', SUB: 'Both bought before <b>Dec 11.</b> Your call.' },
    { H1: '"Where\'d you get these?"<br><em>"September."</em>', SUB: 'Buy now. Be smug later.', IMG: BR },
    { H1: 'The friend with the gummies<br><em>is the friend with the plan.</em>', SUB: '<b>December 11</b> cutoff.', H1SIZE: 60, H2TOP: 380 },
    { H1: 'Popularity is a supply chain.<br><em>Manage it.</em>', SUB: 'Stock up before <b>Dec 11.</b>', IMG: BR, CTA: 'Manage it' },
  ]});

// 08 Stores Stop. You Don't. ------------------------------------------
concepts.push({ line: 'thc', id: '08-stores-stop', template: 'cupboard',
  defaults: { H1SIZE: 76, IMGS: CUP_THC, CSS: ':root{--em:#0d8f76}', CTA: 'Fill the cupboard', CTA2: '→' },
  variants: [
    { KICKER: 'Stores stop. You don\'t.', L1: 'Shelves empty<br><span class="m">Dec 11.</span>', L2: 'Cupboards<br><span class="r">don\'t.</span>', PAY: 'Buy before the date.<br>Keep after it.' },
    { KICKER: 'The cap is for sellers.', L1: 'Their stock<br><span class="m">goes.</span>', L2: 'Your stock<br><span class="r">stays.</span>', PAY: 'What\'s home by Dec 11 is yours.' },
    { KICKER: 'Read the law, not the rumour.', L1: 'Selling ends<br><span class="m">Dec 11.</span>', L2: 'Owning<br><span class="r">doesn\'t.</span>', PAY: 'The only shelf that survives is yours.' },
    { KICKER: 'Legal today. Yours forever.', L1: 'Order<br><span class="m">now.</span>', L2: 'Own<br><span class="r">later.</span>', PAY: 'There\'s no step three.' },
    { KICKER: 'Restock closes. Stock doesn\'t.', L1: 'Last restock:<br><span class="m">Dec 11.</span>', L2: 'Your restock:<br><span class="r">the pantry.</span>', PAY: 'Fill it.' },
    { KICKER: 'Watermelon. Blue Raspberry. Both in the cupboard.', L1: 'They lose<br>the <span class="m">aisle.</span>', L2: 'You keep<br>the <span class="r">bags.</span>', PAY: 'Order more than one.<br>Then keep them all.' },
    { KICKER: 'Dec 11 is a shipping date.', L1: 'Not an<br><span class="m">expiry.</span>', L2: 'Not a<br><span class="r">confiscation.</span>', PAY: 'Order now.<br>Keep it all winter.' },
    { KICKER: 'The federal cap has one exception: your house.', L1: 'Shelves:<br><span class="m">capped.</span>', L2: 'Kitchens:<br><span class="r">not.</span>', PAY: 'Act like it. Dec 11.' },
    { KICKER: 'One rule.', L1: 'Buy before<br><span class="m">Dec 11.</span>', L2: 'Own after<br><span class="r">Dec 11.</span>', PAY: 'That\'s it. That\'s the ad.' },
    { KICKER: 'Stores get a deadline.', L1: 'You get<br><span class="m">a choice.</span>', L2: 'Make it<br><span class="r">a cupboard.</span>', PAY: 'Order before December 11.' },
  ]});

// 09 The Last Harvest ---------------------------------------------------
concepts.push({ line: 'thc', id: '09-last-harvest', template: 'doc',
  defaults: { TAG: 'SEASON FINALE', LABEL: 'Harvest report', IMG: WM, IMGCLASS: 'tall', CSS: ':root{--bg:#0d1a12;--glow:rgba(31,184,154,.5);--lbl:#9ff5e3;--stamp:#ff2d8a;--subt:#c9f27a}', CTA: 'Get the last harvest', CTA2: '→' },
  variants: [
    { H1: 'The Last<br>Legal Harvest', STAMP: 'Shipping now', SUB: '"Every bag came from the final season before the cap.<br><i>December 11 is the last day it ships."</i>' },
    { H1: 'Watermelon,<br>Final Cut', STAMP: 'Season ends Dec 11', SUB: '"What you see is the last run.<br><i>There is no spring crop."</i>' },
    { H1: 'Blue Raspberry,<br>Last Run', STAMP: 'Status: Final', SUB: '"Grown, gummied, and going.<br><i>December 11 is the cutoff."</i>', IMG: BR },
    { H1: 'The 200mg<br>Bag', STAMP: 'Endangered', SUB: '"After Dec 11 a legal bag holds 0.4mg. This one holds 200.<br><i>It does not make the cut."</i>' },
    { H1: 'Field Notes:<br>Dec 11', STAMP: 'Season finale', SUB: '"The cap lands. What shipped stays shipped.<br><i>The rest doesn\'t exist."</i>', IMG: BR },
    { H1: 'Last<br>Yield', STAMP: 'Now shipping', SUB: '"One final harvest. Twenty gummies a bag.<br><i>No second planting."</i>' },
    { H1: 'The Final<br>Crop', STAMP: 'Sold by Dec 11', SUB: '"There\'s no such thing as next year\'s batch.<br><i>Order this one."</i>', IMG: BR, CTA: 'Order this batch' },
    { H1: 'Season 8,<br>Episode Last', STAMP: 'Series finale', SUB: '"Eight years of legal hemp THC.<br><i>Final episode airs December 11."</i>', TAG: 'S8 · FINALE', LABEL: 'Now streaming' },
    { H1: 'Supply Chain:<br>Terminal', STAMP: 'Ends Dec 11', SUB: '"Farm to bag to cupboard. Then the chain stops.<br><i>Get to the last link."</i>', IMG: BR },
    { H1: 'The Last<br>Legal Harvest', STAMP: '89 days', SUB: '"Stock the cellar.<br><i>Congress isn\'t planting more."</i>', CTA: 'Stock the cellar' },
  ]});

// 10 Live Countdown -----------------------------------------------------
concepts.push({ line: 'thc', id: '10-countdown', template: 'count',
  defaults: { NOTE: 'DAYS UNTIL THE FEDERAL THC CAP · DEC 11', NUMSIZE: 620, LBL: 'DAYS', IMG: WM, IMGCLASS: '', CSS: ':root{--bg:#0d8f76;--lbl:#c8fff2}', CTA: 'Stock up before the cap', CTA2: '→' },
  variants: [
    { NUM: '89', MATH: '10mg each. 20 a bag. <b>Do the math.</b>' },
    { NUM: '75', MATH: 'About 11 weekends. <b>How many bags is that?</b>', IMG: BR },
    { NUM: '60', MATH: 'Two months of Fridays. <b>Plan them.</b>' },
    { NUM: '45', MATH: 'Halfway to the cap. <b>Halfway to regret?</b>', IMG: BR },
    { NUM: '30', MATH: 'One month. <b>One order. Sorted.</b>' },
    { NUM: '21', MATH: 'Three weeks. <b>Shipping eats some of it.</b>', IMG: BR },
    { NUM: '14', MATH: 'Two weeks. <b>One order. Done.</b>' },
    { NUM: '7', NUMSIZE: 700, MATH: 'One week. <b>This is the window.</b>', IMG: BR },
    { NUM: '3', NUMSIZE: 700, MATH: 'Seventy-two hours. <b>Then federally gone.</b>' },
    { NUM: '1', NUMSIZE: 700, LBL: 'DAY', MATH: 'Tomorrow it caps. <b>Tonight you order.</b>', IMG: BR, CTA: 'Order tonight' },
  ]});

module.exports = { concepts };
