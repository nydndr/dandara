import ResumeView from "./ResumeView";
import resumeData from "@/content/resume/data";

export const metadata = {
  title: "Resumé",
  description:
    "Dandara — Product Designer and Design Engineer. Download resume in English or Portuguese.",
};

export default function ResumePage() {
  return <ResumeView resumeData={resumeData} />;
}
