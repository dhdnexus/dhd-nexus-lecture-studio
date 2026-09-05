import type React from "react";
import type { PartContent, WorkedExample, PracticeProblem } from "../types/course";

import { part1Content } from "./part1";
import { part1WorkedExamples } from "./part1WorkedExamples";
import { part1PracticeProblems } from "./practice";
import { comprehensiveLectureNote as part1LectureNote } from "./lectureNote";

import { part2Content } from "./part2";
import { part2WorkedExamples } from "./part2WorkedExamples";
import { part2PracticeProblems } from "./practice2";
import { comprehensiveLectureNotePart2 as part2LectureNote } from "./lectureNote2";

import { part3Content } from "./part3";
import { part3WorkedExamples } from "./part3WorkedExamples";
import { part3PracticeProblems } from "./practice3";
import { comprehensiveLectureNotePart3 as part3LectureNote } from "./lectureNote3";

import { part4Content } from "./part4";
import { part4WorkedExamples } from "./part4WorkedExamples";
import { part4PracticeProblems } from "./practice4";
import { comprehensiveLectureNotePart4 as part4LectureNote } from "./lectureNote4";

import { part5Content } from "./part5";
import { part5WorkedExamples } from "./part5WorkedExamples";
import { part5PracticeProblems } from "./practice5";
import { comprehensiveLectureNotePart5 as part5LectureNote } from "./lectureNote5";

import { part6Content } from "./part6";
import { part6WorkedExamples } from "./part6WorkedExamples";
import { part6PracticeProblems } from "./practice6";
import { comprehensiveLectureNotePart6 as part6LectureNote } from "./lectureNote6";

import { NumberLineVisual } from "../components/visuals/NumberLineVisual";
import { DistanceDisplacementVisual } from "../components/visuals/DistanceDisplacementVisual";
import { SpeedVelocityVisual } from "../components/visuals/SpeedVelocityVisual";
import { InstantaneousVelocityVisual } from "../components/visuals/InstantaneousVelocityVisual";
import { AccelerationVisual } from "../components/visuals/AccelerationVisual";
import { SignCasesVisual } from "../components/visuals/SignCasesVisual";
import { ZeroVelocityAccelerationVisual } from "../components/visuals/ZeroVelocityAccelerationVisual";

import { PositionTimeGradientVisual } from "../components/visuals/PositionTimeGradientVisual";
import { VelocityTimeAreaVisual } from "../components/visuals/VelocityTimeAreaVisual";
import { SuvatGraphicalDerivationVisual } from "../components/visuals/SuvatGraphicalDerivationVisual";

import { EquationSelectionVisual } from "../components/visuals/EquationSelectionVisual";

import { DerivativeChainVisual } from "../components/visuals/DerivativeChainVisual";

import { MethodSelectionVisual } from "../components/visuals/MethodSelectionVisual";

import { WhichMethodVisual } from "../components/visuals/WhichMethodVisual";

/**
 * A single episode ("Part") of the DHD Nexus Lecture Studio.
 *
 * lessonVisualRegistry is keyed by LessonSection.visualKey.
 * lectureNoteVisualRegistry is keyed by the markdown code-fence language,
 * with the "interactive:" / "diagram:" prefix stripped (e.g. a fence
 * labelled ```interactive:coordinate-system resolves via the key
 * "interactive:coordinate-system").
 */
export interface PartDefinition {
  id: string;
  shortLabel: string;
  content: PartContent;
  workedExamples: WorkedExample[];
  practiceProblems: PracticeProblem[];
  lectureNoteMarkdown: string;
  lessonVisualRegistry: Record<string, React.FC>;
  lectureNoteVisualRegistry: Record<string, React.FC>;
}

const part1Definition: PartDefinition = {
  id: "part-1",
  shortLabel: "Part 1",
  content: part1Content,
  workedExamples: part1WorkedExamples,
  practiceProblems: part1PracticeProblems,
  lectureNoteMarkdown: part1LectureNote,
  lessonVisualRegistry: {
    "coordinate-system": NumberLineVisual,
    "displacement": DistanceDisplacementVisual,
    "speed-velocity": SpeedVelocityVisual,
    "sign-cases": SignCasesVisual,
    "zero-velocity-zero-acceleration": ZeroVelocityAccelerationVisual,
    "instantaneous-velocity": InstantaneousVelocityVisual,
    "acceleration": AccelerationVisual
  },
  lectureNoteVisualRegistry: {
    "interactive:coordinate-system": NumberLineVisual,
    "diagram:displacement": DistanceDisplacementVisual,
    "interactive:speed-velocity": SpeedVelocityVisual,
    "interactive:instantaneous-velocity": InstantaneousVelocityVisual,
    "interactive:acceleration": AccelerationVisual,
    "interactive:zero-velocity-zero-acceleration": ZeroVelocityAccelerationVisual
  }
};

const part2Definition: PartDefinition = {
  id: "part-2",
  shortLabel: "Part 2",
  content: part2Content,
  workedExamples: part2WorkedExamples,
  practiceProblems: part2PracticeProblems,
  lectureNoteMarkdown: part2LectureNote,
  lessonVisualRegistry: {
    "position-time-gradient": PositionTimeGradientVisual,
    "velocity-time-area": VelocityTimeAreaVisual,
    "suvat-derivation": SuvatGraphicalDerivationVisual
  },
  lectureNoteVisualRegistry: {
    "interactive:position-time-gradient": PositionTimeGradientVisual,
    "interactive:velocity-time-area": VelocityTimeAreaVisual,
    "interactive:suvat-derivation": SuvatGraphicalDerivationVisual
  }
};

const part3Definition: PartDefinition = {
  id: "part-3",
  shortLabel: "Part 3",
  content: part3Content,
  workedExamples: part3WorkedExamples,
  practiceProblems: part3PracticeProblems,
  lectureNoteMarkdown: part3LectureNote,
  lessonVisualRegistry: {
    "equation-selection": EquationSelectionVisual
  },
  lectureNoteVisualRegistry: {
    "interactive:equation-selection": EquationSelectionVisual
  }
};

const part4Definition: PartDefinition = {
  id: "part-4",
  shortLabel: "Part 4",
  content: part4Content,
  workedExamples: part4WorkedExamples,
  practiceProblems: part4PracticeProblems,
  lectureNoteMarkdown: part4LectureNote,
  lessonVisualRegistry: {
    "derivative-chain": DerivativeChainVisual
  },
  lectureNoteVisualRegistry: {
    "interactive:derivative-chain": DerivativeChainVisual
  }
};

const part5Definition: PartDefinition = {
  id: "part-5",
  shortLabel: "Part 5",
  content: part5Content,
  workedExamples: part5WorkedExamples,
  practiceProblems: part5PracticeProblems,
  lectureNoteMarkdown: part5LectureNote,
  lessonVisualRegistry: {
    "method-selection": MethodSelectionVisual
  },
  lectureNoteVisualRegistry: {
    "interactive:method-selection": MethodSelectionVisual
  }
};

const part6Definition: PartDefinition = {
  id: "part-6",
  shortLabel: "Part 6",
  content: part6Content,
  workedExamples: part6WorkedExamples,
  practiceProblems: part6PracticeProblems,
  lectureNoteMarkdown: part6LectureNote,
  lessonVisualRegistry: {
    "which-method": WhichMethodVisual
  },
  lectureNoteVisualRegistry: {
    "interactive:which-method": WhichMethodVisual
  }
};

export const parts: PartDefinition[] = [part1Definition, part2Definition, part3Definition, part4Definition, part5Definition, part6Definition];

export const getPartById = (id: string): PartDefinition =>
  parts.find((part) => part.id === id) ?? parts[0];
