export interface EducationItem {
  week: number;
  title: string;
  type: string;
  icon: string;
}

export const EDUCATION_CONTENT: Record<string, EducationItem[]> = {
  team: [
    { week: 1, title: "Case Updates: How Milestone-Driven Data Collection Works", type: "Feature Deep Dive", icon: "🔄" },
    { week: 2, title: "Case Clerk AI: Extracting Case Data from Attorney Reports", type: "Feature Deep Dive", icon: "🤖" },
    { week: 3, title: "Data Import: CSV Upload and Field Mapping", type: "How-To Guide", icon: "📊" },
    { week: 4, title: "Building Your Precedent Dataset: What Fields Matter Most", type: "Strategy Guide", icon: "⚖️" },
    { week: 5, title: "Configuring Docket Exceptions: Budget, Aging, and Intervention Rules", type: "How-To Guide", icon: "📋" },
    { week: 6, title: "Case Updates in Action: Real Workflow Examples", type: "Case Study", icon: "✨" },
    { week: 8, title: "Case Clerk AI Advanced: Training Extraction on Your Document Types", type: "How-To Guide", icon: "🤖" },
    { week: 10, title: "Chambers Queries: Asking Your Portfolio the Right Questions", type: "Feature Deep Dive", icon: "💬" },
  ],
  exec: [
    { week: 1, title: "Litigation Intelligence: The Docket Dashboard Vision", type: "Executive Brief", icon: "📊" },
    { week: 2, title: "Precedent: Measuring Attorney Value Beyond Legal Spend", type: "Executive Brief", icon: "⚖️" },
    { week: 4, title: "Your Data is Loading: First Look at Precedent Insights", type: "Progress Update", icon: "📈" },
    { week: 6, title: "Docket Dashboard Preview: Your Open Portfolio Exceptions", type: "Progress Update", icon: "🎯" },
    { week: 8, title: "Chambers & Chronicle: AI That Answers and Narrates", type: "Executive Brief", icon: "💬" },
    { week: 10, title: "Pre-Readout: What Your Data is Telling Us", type: "Insight Report", icon: "🔍" },
    { week: 12, title: "Executive Readout: Full Litigation Intelligence Assessment", type: "Final Deliverable", icon: "🏆" },
  ],
};
