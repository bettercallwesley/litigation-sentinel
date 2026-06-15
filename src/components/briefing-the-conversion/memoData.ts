// The 20-page Initial Case Analysis memo, reconstructed for the Liebeck
// demonstration file. Shared by the Inbox section (S3) and the Case Clerk
// extraction (S4) so the document carries visual continuity across both.

export interface MemoParagraph {
  num: number;
  text: string;
}

export const MEMO_TITLE = "INITIAL CASE ANALYSIS";
export const MEMO_SUBTITLE =
  "Liebeck v. McDonald's Restaurants, P.T.S., Inc. | Privileged and Confidential | Attorney Work Product";

export const MEMO_PARAGRAPHS: MemoParagraph[] = [
  { num: 1, text: "This memorandum sets forth our initial analysis of the above-referenced matter following receipt of the claim file, the incident report, preliminary medical records, and our first interviews with store personnel. As discussed on our call, a fuller report will follow completion of written discovery." },
  { num: 2, text: "On February 27, 1992, the claimant, Stella Liebeck, age 79, purchased a cup of coffee at the drive-through window of the insured location. While the vehicle was parked, the claimant placed the cup between her knees and removed the lid, at which point the contents spilled into her lap." },
  { num: 3, text: "The claimant sustained third-degree burns to the thighs, groin, and buttocks, comprising approximately six percent of her body surface. She was hospitalized for eight days and underwent skin grafting. Additional debridement treatments followed over a period of weeks." },
  { num: 4, text: "Counsel for the claimant has transmitted a written demand in the amount of $20,000, characterized as covering medical expenses and incidental losses. The carrier's prior response, issued before our retention, was an offer of $800." },
  { num: 5, text: "Liability turns principally on the holding temperature of the coffee at the time of sale and on what the insured knew about prior incidents of a similar character. Operations materials produced to date direct that coffee be held at 180 to 190 degrees Fahrenheit." },
  { num: 6, text: "Counsel notes that liquids at that temperature can produce full-thickness burns in a matter of seconds. The medical literature appended at Tab C will be the centerpiece of any plaintiff expert presentation, and we should assume the jury will see it." },
  { num: 7, text: "We have requested the insured's records of prior burn complaints. The volume and disposition of those complaints will materially affect both the liability assessment and any punitive exposure, and we flag this as the single most important open item in the file." },
  { num: 8, text: "Our preliminary liability assessment is that comparative fault will attach to the claimant for handling the cup in a parked vehicle, but that a jury is likely to assign a majority share to the insured if the temperature directives and complaint history come into evidence in their current form." },
  { num: 9, text: "On damages, the medical specials are modest in absolute terms, but the injury photographs are severe, the claimant is a sympathetic witness by every account, and the grafting course was painful and disfiguring. Verdict potential materially exceeds the demand." },
  { num: 10, text: "We currently band the exposure as moderate-to-severe, with a realistic case value in the low-to-mid six figures if liability findings break against the insured. The current demand of $20,000 is, in our judgment, well inside the range of reasonable resolution." },
  { num: 11, text: "The claimant's deposition has been noticed. Based on the interviews to date, we expect her to present as credible, measured, and without exaggeration. We do not recommend an aggressive cross on damages." },
  { num: 12, text: "The store manager will be a critical witness for both sides. Our initial preparation session raised concerns about demeanor; he is inclined to defend the operational directives in categorical terms and may present as dismissive of the injury." },
  { num: 13, text: "We recommend a settlement posture of early, structured engagement rather than positional delay. The facts will not improve with time, and each discovery milestone that confirms the complaint history narrows our leverage." },
  { num: 14, text: "The optimal settlement window, in our judgment, is the period after the claimant's deposition and before the deposition of the store manager. Informal signals from opposing counsel suggest a resolution in the vicinity of $225,000 would be entertained inside that window." },
  { num: 15, text: "If authority is to be sought, we recommend it be sought in the current quarter. Carrying the file past the manager's deposition risks converting a contained claim into a punitive damages vehicle." },
  { num: 16, text: "The next milestone in the file is the claimant's deposition, followed within approximately one week by the deposition of the store manager. Preparation for the latter should begin immediately." },
  { num: 17, text: "We have also begun assembling the documentary record for the prior-complaints request, including correspondence files, quality assurance logs, and franchise bulletins. A supplemental report will follow." },
  { num: 18, text: "Venue analysis, jury pool composition, and trial counsel staffing recommendations are addressed at Tabs D through F. We defer a trial budget until the close of written discovery." },
  { num: 19, text: "Please advise whether the carrier wishes us to open a mediation track in parallel with the deposition schedule. Our recommendation is yes, for the reasons stated at paragraph 13." },
  { num: 20, text: "We remain available to discuss at your convenience. A status call following the claimant's deposition is recommended, and we will circulate a summary within ten days of the transcript." },
];

// The eight Case Clerk extraction fields, each cited to its source paragraph.
export interface ClerkField {
  label: string;
  value: string;
  para: number;
}

export const CLERK_FIELDS: ClerkField[] = [
  { label: "Exposure Band", value: "Moderate-to-severe", para: 10 },
  { label: "Case Value", value: "Low-to-mid six figures", para: 10 },
  { label: "Liability Assessment", value: "Majority share likely against insured", para: 8 },
  { label: "Key Witness", value: "Store manager; demeanor concerns", para: 12 },
  { label: "Settlement Posture", value: "Early, structured engagement", para: 13 },
  { label: "Settlement Window", value: "Post-plaintiff depo, pre-manager depo", para: 14 },
  { label: "Recommended Quarter", value: "Current quarter", para: 15 },
  { label: "Next Milestone", value: "Plaintiff deposition", para: 16 },
];
