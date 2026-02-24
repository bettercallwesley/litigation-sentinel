// ─── US State SVG Paths ──────────────────────────────────────────────────────
// Simplified SVG path data for each US state, optimized for an 960x600 viewBox.
// These paths produce a clean, recognizable US map suitable for a heat map.

export interface StatePath {
  id: string;
  name: string;
  d: string;
  labelX: number;
  labelY: number;
}

export const US_STATE_PATHS: StatePath[] = [
  { id: "AL", name: "Alabama", d: "M628,396 L628,430 L618,466 L622,472 L610,472 L604,460 L604,396 L628,396Z", labelX: 616, labelY: 434 },
  { id: "AK", name: "Alaska", d: "M161,485 L183,485 L183,510 L209,510 L209,530 L161,530Z", labelX: 185, labelY: 510 },
  { id: "AZ", name: "Arizona", d: "M205,390 L270,390 L280,396 L280,458 L258,472 L212,472 L200,445 L200,410Z", labelX: 238, labelY: 432 },
  { id: "AR", name: "Arkansas", d: "M560,396 L604,396 L604,440 L556,440 L552,424 L556,396Z", labelX: 578, labelY: 418 },
  { id: "CA", name: "California", d: "M120,270 L148,270 L165,294 L195,340 L205,390 L200,410 L188,410 L168,380 L145,340 L128,316 L110,290 L112,270Z", labelX: 152, labelY: 340 },
  { id: "CO", name: "Colorado", d: "M290,290 L380,290 L380,350 L290,350Z", labelX: 335, labelY: 320 },
  { id: "CT", name: "Connecticut", d: "M830,218 L852,210 L860,220 L852,232 L836,230Z", labelX: 855, labelY: 236 },
  { id: "DE", name: "Delaware", d: "M808,295 L818,288 L822,306 L812,312Z", labelX: 828, labelY: 302 },
  { id: "FL", name: "Florida", d: "M642,462 L695,440 L722,440 L740,455 L740,476 L730,510 L710,530 L690,534 L680,520 L660,504 L640,490 L632,478 L630,466Z", labelX: 700, labelY: 480 },
  { id: "GA", name: "Georgia", d: "M642,390 L690,390 L700,430 L695,440 L642,462 L630,466 L622,472 L618,466 L628,430 L628,396 L642,390Z", labelX: 664, labelY: 430 },
  { id: "HI", name: "Hawaii", d: "M260,505 L290,505 L295,520 L270,525 L260,515Z", labelX: 278, labelY: 515 },
  { id: "ID", name: "Idaho", d: "M220,148 L252,148 L262,165 L262,240 L240,260 L220,260 L215,218 L220,190Z", labelX: 238, labelY: 204 },
  { id: "IL", name: "Illinois", d: "M590,248 L614,248 L618,268 L622,310 L618,340 L606,365 L592,370 L580,360 L576,330 L578,290 L580,260Z", labelX: 598, labelY: 310 },
  { id: "IN", name: "Indiana", d: "M618,268 L650,258 L656,290 L656,340 L648,356 L622,360 L618,340 L622,310Z", labelX: 638, labelY: 310 },
  { id: "IA", name: "Iowa", d: "M510,240 L580,240 L590,248 L580,260 L578,290 L576,300 L510,300 L504,280 L504,252Z", labelX: 542, labelY: 270 },
  { id: "KS", name: "Kansas", d: "M430,330 L530,330 L530,380 L424,380 L424,354 L430,340Z", labelX: 476, labelY: 356 },
  { id: "KY", name: "Kentucky", d: "M622,340 L648,340 L656,340 L690,326 L720,334 L722,350 L700,365 L660,374 L620,376 L606,365 L618,340Z", labelX: 668, labelY: 356 },
  { id: "LA", name: "Louisiana", d: "M556,440 L604,440 L604,460 L610,472 L620,492 L608,500 L590,500 L575,490 L564,476 L548,466 L548,448 L556,440Z", labelX: 578, labelY: 468 },
  { id: "ME", name: "Maine", d: "M858,120 L874,108 L888,130 L880,168 L864,180 L852,170 L850,148 L856,130Z", labelX: 870, labelY: 148 },
  { id: "MD", name: "Maryland", d: "M752,295 L808,295 L812,312 L798,320 L778,320 L760,310 L752,308Z", labelX: 800, labelY: 322 },
  { id: "MA", name: "Massachusetts", d: "M836,200 L870,190 L878,200 L864,210 L836,212Z", labelX: 862, labelY: 210 },
  { id: "MI", name: "Michigan", d: "M608,180 L618,168 L640,172 L660,190 L668,215 L660,240 L640,248 L618,248 L608,230 L602,208Z M572,170 L596,150 L616,162 L610,180 L590,194 L572,190Z", labelX: 636, labelY: 218 },
  { id: "MN", name: "Minnesota", d: "M490,135 L540,132 L552,148 L558,190 L558,240 L510,240 L504,252 L492,228 L490,180Z", labelX: 522, labelY: 186 },
  { id: "MS", name: "Mississippi", d: "M594,396 L604,396 L604,440 L604,460 L610,472 L598,476 L588,468 L578,456 L576,440 L580,420 L594,396Z", labelX: 592, labelY: 436 },
  { id: "MO", name: "Missouri", d: "M530,310 L576,300 L576,330 L580,360 L592,370 L594,396 L560,396 L556,396 L530,380 L530,330Z", labelX: 558, labelY: 350 },
  { id: "MT", name: "Montana", d: "M260,130 L390,130 L392,190 L362,194 L310,194 L272,186 L260,170Z", labelX: 326, labelY: 162 },
  { id: "NE", name: "Nebraska", d: "M390,270 L504,270 L504,280 L510,300 L504,310 L430,320 L430,330 L390,330 L386,300Z", labelX: 444, labelY: 298 },
  { id: "NV", name: "Nevada", d: "M168,220 L220,220 L220,260 L205,340 L205,390 L200,410 L168,380 L155,330 L160,260Z", labelX: 186, labelY: 304 },
  { id: "NH", name: "New Hampshire", d: "M846,150 L858,146 L860,172 L856,192 L846,196 L840,178Z", labelX: 856, labelY: 176 },
  { id: "NJ", name: "New Jersey", d: "M808,250 L822,248 L830,270 L825,298 L818,312 L808,295 L806,270Z", labelX: 828, labelY: 278 },
  { id: "NM", name: "New Mexico", d: "M280,396 L350,396 L350,472 L290,472 L280,458Z", labelX: 314, labelY: 434 },
  { id: "NY", name: "New York", d: "M756,178 L800,170 L830,180 L842,200 L836,218 L830,218 L820,230 L808,240 L808,250 L790,250 L770,232 L756,210Z", labelX: 790, labelY: 210 },
  { id: "NC", name: "North Carolina", d: "M690,360 L740,348 L780,352 L800,360 L790,376 L765,384 L720,392 L690,390 L664,390 L660,378Z", labelX: 738, labelY: 374 },
  { id: "ND", name: "North Dakota", d: "M400,132 L490,135 L490,190 L400,190Z", labelX: 445, labelY: 162 },
  { id: "OH", name: "Ohio", d: "M656,258 L700,250 L720,260 L724,290 L720,320 L710,334 L690,326 L656,340 L656,290Z", labelX: 688, labelY: 294 },
  { id: "OK", name: "Oklahoma", d: "M390,370 L424,370 L424,380 L530,380 L530,390 L535,406 L530,412 L476,412 L424,410 L394,410 L386,396Z", labelX: 462, labelY: 396 },
  { id: "OR", name: "Oregon", d: "M120,160 L205,160 L220,148 L220,190 L215,218 L220,220 L168,220 L148,200 L115,190 L112,168Z", labelX: 165, labelY: 186 },
  { id: "PA", name: "Pennsylvania", d: "M728,246 L790,232 L808,240 L808,250 L806,270 L808,295 L752,295 L740,280 L728,262Z", labelX: 770, labelY: 268 },
  { id: "RI", name: "Rhode Island", d: "M852,218 L862,214 L866,226 L858,230Z", labelX: 868, labelY: 226 },
  { id: "SC", name: "South Carolina", d: "M690,390 L720,392 L745,400 L738,418 L718,430 L695,440 L690,430 L688,410 L686,396Z", labelX: 714, labelY: 414 },
  { id: "SD", name: "South Dakota", d: "M400,190 L490,190 L490,228 L492,240 L504,252 L504,270 L390,270 L390,210Z", labelX: 442, labelY: 230 },
  { id: "TN", name: "Tennessee", d: "M604,370 L660,370 L660,374 L700,365 L722,350 L730,358 L730,370 L726,384 L690,390 L664,390 L642,390 L628,396 L604,396Z", labelX: 665, labelY: 382 },
  { id: "TX", name: "Texas", d: "M350,396 L390,396 L394,410 L424,410 L476,412 L530,412 L535,430 L530,468 L520,500 L505,530 L480,550 L445,560 L415,555 L390,540 L370,520 L358,504 L348,480 L350,460 L350,430Z", labelX: 440, labelY: 470 },
  { id: "UT", name: "Utah", d: "M262,240 L290,240 L290,290 L290,350 L260,350 L240,340 L240,260Z", labelX: 268, labelY: 296 },
  { id: "VT", name: "Vermont", d: "M832,148 L846,150 L840,178 L846,196 L836,200 L828,180 L828,160Z", labelX: 840, labelY: 172 },
  { id: "VA", name: "Virginia", d: "M700,320 L752,295 L752,308 L760,310 L778,320 L798,320 L790,340 L780,352 L740,348 L720,350 L722,334 L710,334Z", labelX: 748, labelY: 334 },
  { id: "WA", name: "Washington", d: "M140,100 L208,100 L218,114 L220,148 L205,160 L120,160 L112,145 L130,116Z", labelX: 170, labelY: 130 },
  { id: "WV", name: "West Virginia", d: "M710,300 L720,290 L724,290 L720,320 L710,334 L700,320 L690,326 L690,310 L700,296Z", labelX: 708, labelY: 316 },
  { id: "WI", name: "Wisconsin", d: "M550,155 L572,150 L590,148 L596,150 L590,168 L590,194 L580,210 L578,230 L558,240 L540,240 L540,200 L542,168Z", labelX: 566, labelY: 195 },
  { id: "WY", name: "Wyoming", d: "M272,186 L310,194 L380,194 L380,270 L290,270 L290,240 L262,240 L262,200Z", labelX: 326, labelY: 230 },
];

// Label positions for small states that need external labels with leader lines
export const SMALL_STATE_LABELS: { id: string; name: string; labelX: number; labelY: number; lineEndX: number; lineEndY: number }[] = [
  { id: "CT", name: "CT", labelX: 875, labelY: 236, lineEndX: 848, lineEndY: 222 },
  { id: "DE", name: "DE", labelX: 845, labelY: 302, lineEndX: 818, lineEndY: 302 },
  { id: "MA", name: "MA", labelX: 888, labelY: 206, lineEndX: 864, lineEndY: 202 },
  { id: "MD", name: "MD", labelX: 830, labelY: 332, lineEndX: 794, lineEndY: 312 },
  { id: "NH", name: "NH", labelX: 878, labelY: 172, lineEndX: 858, lineEndY: 172 },
  { id: "NJ", name: "NJ", labelX: 848, labelY: 274, lineEndX: 828, lineEndY: 274 },
  { id: "RI", name: "RI", labelX: 886, labelY: 224, lineEndX: 864, lineEndY: 224 },
  { id: "VT", name: "VT", labelX: 864, labelY: 160, lineEndX: 842, lineEndY: 168 },
  { id: "DC", name: "DC", labelX: 838, labelY: 318, lineEndX: 798, lineEndY: 318 },
];
