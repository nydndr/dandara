export default function ChangelogBadge({ type, done }) {
  let element = {
    style:
      "rounded-full border-1 border-stone-700/20 px-2 py-0.5 font-mono whitespace-nowrap text-stone-700/70 lowercase",
    label: "Add",
  };

  if (done) {
    switch (type) {
      case "add":
        element = {
          style:
            "rounded-full border-1 border-green-700/20 bg-green-700/10 px-2 py-0.5 font-mono whitespace-nowrap text-green-700/70 lowercase",
          label: "Added",
        };
        break;
      case "change":
        element = {
          style:
            "rounded-full border-1 border-orange-700/20 bg-orange-700/10 px-2 py-0.5 font-mono whitespace-nowrap text-orange-700/70 lowercase",
          label: "Changed",
        };
      case "deprecate":
        element = {
          style:
            "rounded-full border-1 border-red-700/20 bg-red-700/10 px-2 py-0.5 font-mono whitespace-nowrap text-red-700/70 lowercase",
          label: "Deprecated",
        };
        break;
      case "remove":
        element = {
          style:
            "rounded-full border-1 border-red-700/20 bg-red-700/10 px-2 py-0.5 font-mono whitespace-nowrap text-red-700/70 lowercase",
          label: "Removed",
        };
        break;
      case "fix":
        element = {
          style:
            "rounded-full border-1 border-blue-700/20 bg-blue-700/10 px-2 py-0.5 font-mono whitespace-nowrap text-blue-700/70 lowercase",
          label: "Fixed",
        };
        break;
      case "security":
        element = {
          style:
            "rounded-full border-1 border-purple-700/20 bg-purple-700/10 px-2 py-0.5 font-mono whitespace-nowrap text-purple-900/70 lowercase",
          label: "Security",
        };
        break;
      case "learn":
        element = {
          style:
            "rounded-full border-1 border-pink-700/20 bg-pink-700/10 px-2 py-0.5 font-mono whitespace-nowrap text-pink-900/70 lowercase",
          label: "Security",
        };
        break;
    }
  } else {
    switch (type) {
      case "add":
        element.label = "Add";
        break;
      case "change":
        element.label = "Change";
        break;
      case "deprecate":
        element.label = "Deprecate";
        break;
      case "remove":
        element.label = "Remove";
        break;
      case "fix":
        element.label = "Fix";
        break;
      case "security":
        element.label = "Security";
        break;
      case "learn":
        element.label = "Learn";
        break;
    }
  }

  return <span className={element.style}>{element.label}</span>;
}
