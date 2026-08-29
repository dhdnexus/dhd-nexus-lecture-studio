export interface LecturerCue {
  narrationPrompt: string;
  keyPoints: string[];
  misconceptionAlert?: string;
  hallQuestion?: string;
  expectedAnswer?: string;
  timeGuidanceMin?: number;
}

export interface LessonSection {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  content: string[];
  equations?: string[];
  lecturerCue: LecturerCue;

  /*
   * Optional key resolved against the active part's visual registry
   * to insert an interactive concept visual beneath this section.
   * Additive field — sections that omit it render exactly as before.
   */
  visualKey?: string;
}

export type WorkedExampleStepName =
  | "PROBLEM"
  | "THINK"
  | "WHAT IS HAPPENING?"
  | "REFERENCE FRAME"
  | "KNOWN"
  | "UNKNOWN"
  | "CONCEPT"
  | "WHY THIS METHOD?"
  | "SOLUTION"
  | "INTERPRETATION"
  | "CHECK";

export interface WorkedExampleStep {
  stepName: WorkedExampleStepName;
  content: string;
  equations?: string[];
  mathBlocks?: string[];
}

export interface WorkedExample {
  id: string;
  title: string;

  /*
   * Canonical worked-example metadata.
   */
  provenance: string;
  provenanceDetails?: string;

  /*
   * Canonical examination problem.
   */
  problemStatement?: string;

  /*
   * Progressive DHD Nexus reasoning sequence.
   */
  steps?: WorkedExampleStep[];

  /*
   * Lecturer-only guidance.
   */
  lecturerNotes?: string;

}

/**
 * A single task/question inside an interactive checkpoint.
 *
 * Supports:
 * - multi-part numerical/conceptual checkpoints
 * - multiple-choice questions
 * - reasoning reveals
 * - optional mathematical rendering
 */
export interface CheckpointTask {
  id: string;
  label?: string;
  prompt: string;
  options?: string[];
  correctAnswer?: string;
  reasoning?: string;
  mathBlocks?: string[];
}

/**
 * Canonical DHD Nexus interactive checkpoint.
 *
 * A checkpoint may contain one or more tasks.
 * This allows a single checkpoint to represent either:
 * - one conceptual examination question, or
 * - a multi-part examination problem.
 */
export interface Checkpoint {
  id: string;
  title: string;

  /*
   * Examination/source provenance.
   */
  provenance?: string;
  provenanceDetails?: string;

  /*
   * The primary student-facing checkpoint prompt.
   */
  prompt: string;

  /*
   * Optional pause duration for lecturer-led delivery.
   */
  pauseSeconds?: number;

  /*
   * One or more student tasks/questions.
   */
  tasks: CheckpointTask[];
}

export interface PracticeProblem {
  id: string;
  title: string;
  provenance: string;
  problem: string;
  solution: string;
  reasoning?: string;
}

export interface PartContent {
  title: string;
  subtitle: string;
  sections: LessonSection[];
  checkpoints: Checkpoint[];
}

