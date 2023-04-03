import { Sidebar } from "./Sidebar";
import { SiteContent } from "./SiteContent";

export function Body() {
  return (
    <main className="sitebody">
      <div className="main-content wrapper">
        <Sidebar />
        <SiteContent />
      </div>
    </main>
  );
}
