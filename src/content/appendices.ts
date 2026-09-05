import type React from "react";
import type { PartContent, WorkedExample, PracticeProblem } from "../types/course";

import { appendixContent } from "./appendix";
import { appendixWorkedExamples } from "./appendixWorkedExamples";
import { appendixPracticeProblems } from "./appendixPractice";
import { appendixLectureNote } from "./appendixLectureNote";

/**
 * A supplementary teaching Appendix for the Lecture Studio.
 *
 * Appendices deliberately live outside the curriculum `parts[]` collection.
 * They reuse the same content/rendering contracts as Parts without becoming
 * another numbered curriculum Part.
 */
export interface AppendixDefinition {
  id: string;
  shortLabel: string;
  content: PartContent;
  workedExamples: WorkedExample[];
  practiceProblems: PracticeProblem[];
  lectureNoteMarkdown: string;
  lessonVisualRegistry: Record<string, React.FC>;
  lectureNoteVisualRegistry: Record<string, React.FC>;
}

export const appendixDefinition: AppendixDefinition = {
  id: "appendix-roots",
  shortLabel: "Appendix — Roots",
  content: appendixContent,
  workedExamples: appendixWorkedExamples,
  practiceProblems: appendixPracticeProblems,
  lectureNoteMarkdown: appendixLectureNote,
  lessonVisualRegistry: {},
  lectureNoteVisualRegistry: {}
};

export const appendices: AppendixDefinition[] = [appendixDefinition];

export const getAppendixById = (id: string): AppendixDefinition =>
  appendices.find((appendix) => appendix.id === id) ?? appendices[0];
