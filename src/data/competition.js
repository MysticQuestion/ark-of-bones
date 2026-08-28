/**
 * Competition records are intentionally empty until source material can be
 * verified. Keep these shapes stable so a future CMS can replace this module.
 */

export const officialPlayStatus = {
  label: 'In Development',
  updatedAt: null,
};

export const rulesets = [];
export const matches = [];
export const rankings = [];

export const verificationStates = ['Pending', 'Verified', 'Corrected', 'Withdrawn'];

export const recordRequirements = [
  'Named players or teams',
  'Final score',
  'Game and ruleset version',
  'Event, date, and location',
  'Verification status',
  'Correction history',
];

export const correctionProcedure = [
  ['01', 'Submit', 'Identify the record and provide the disputed field with supporting material.'],
  ['02', 'Review', 'Preserve the published record while the source material is checked.'],
  ['03', 'Resolve', 'Publish the decision, date, and changed fields in the record history.'],
];
