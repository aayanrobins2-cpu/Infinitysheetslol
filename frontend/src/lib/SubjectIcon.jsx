import React from 'react';
import {
  Sigma, Calculator, Atom, FlaskConical, Dna, Globe2, BookOpen,
  Laptop, TrendingUp, BookMarked, PenLine, GraduationCap,
} from 'lucide-react';

/**
 * One icon per subject, replacing the emoji that used to sit next to
 * subject names. Emoji render differently on every OS and undercut the
 * rest of the design system; lucide icons inherit currentColor and stay
 * consistent everywhere.
 */
const ICONS = {
  'Mathematics': Sigma,
  'Mathematics AA': Sigma,
  'Mathematics AI': Sigma,
  'Further Maths': Sigma,
  'Math': Calculator,
  'Physics': Atom,
  'Chemistry': FlaskConical,
  'Biology': Dna,
  'Social Science': Globe2,
  'English': BookOpen,
  'Computer Applications': Laptop,
  'Economics': TrendingUp,
  'Reading': BookMarked,
  'Writing': PenLine,
};

export default function SubjectIcon({ subject, className = 'w-4 h-4', strokeWidth = 2 }) {
  const Icon = ICONS[subject] || GraduationCap;
  return <Icon className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
