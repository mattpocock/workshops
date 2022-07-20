const backendProgramModeEnumMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  SELF_DIRECTED: "selfDirected",
  PLANNED_ONE_ON_ONE: "planned1on1",
  PLANNED_SELF_DIRECTED: "plannedSelfDirected",
} as const;

type Programs = typeof backendProgramModeEnumMap;

type Program = Programs[keyof Programs];

type IndividualPrograms = Programs[
  | "ONE_ON_ONE"
  | "SELF_DIRECTED"
  | "PLANNED_ONE_ON_ONE"
  | "PLANNED_SELF_DIRECTED"];

type GroupPrograms = Programs["GROUP"];
