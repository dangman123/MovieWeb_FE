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
    <div className="flex items-center">
      <div className="hidden md:block">
      <span className="border-l-4 border-solid border-[#034ea2] mr-2"></span>
        <h1 className="mr-10 text-xl font-bold uppercase not-italic inline text-[#4a4a4a]">
          Góc điện ảnh
        </h1>
      </div>
      <div className="flex flex-wrap">
        <ul
          className="flex mb-0 list-none flex-wrap flex-row"
          role="tablist"
        >
          {tabs.map((tab, index) => (
            <li
              key={tab.id}
              className={`-mb-px mr-6 md:mr-8 last:mr-0 flex-auto text-center transition-all duration-300 cursor-pointer ease-in-out relative`}
            >
              <span
                onClick={() => onTabChange(tab.id)}
                className={`text-base font-bold not-italic block leading-normal text-[#333333] hover:text-[#0000EE] transition-all duration-300 ease-in-out ${
                  activeTab === tab.id
                    ? "text-blue-30 tab__active opacity-100"
                    : "opacity-50"
                }`}
                data-toggle="tab"
                role="tablist"
              >
                {tab.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
