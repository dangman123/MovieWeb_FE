import { CinemaCornerTab } from "./constants";

interface TabNavigationProps {
  tabs: readonly { id: CinemaCornerTab; label: string }[];
  activeTab: CinemaCornerTab;
  onTabChange: (tabId: CinemaCornerTab) => void;
}

export default function TabNavigation({
  tabs,
  activeTab,
  onTabChange,
}: TabNavigationProps) {
  return (
    <div className="flex items-center flex-wrap gap-6 md:gap-8">
      <div className="hidden md:flex items-center">
        <span className="border-l-4 border-solid border-orange-500 mr-2"></span>
        <h1 className="mr-10 text-xl font-bold uppercase not-italic">
          Góc điện ảnh
        </h1>
      </div>

      <ul
        className="flex mb-0 list-none flex-wrap flex-row gap-6 md:gap-8"
        role="tablist"
      >
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className="-mb-px flex-auto text-center transition-all duration-300 cursor-pointer ease-in-out relative"
          >
            <button
              onClick={() => onTabChange(tab.id)}
              className={`text-base font-bold not-italic block leading-normal transition-all duration-300 ease-in-out ${
                activeTab === tab.id
                  ? "text-orange-500 opacity-100"
                  : "text-gray-800 hover:text-orange-500 opacity-70"
              }`}
              role="tab"
              aria-selected={activeTab === tab.id}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
