import MainContent from '@/components/MainContent/MainContent';
import Sidebar from '@/components/Sidebar/Sidebar';

export default function Home() {
  return (
    <section>
      <div className="flex h-fit">
        <Sidebar />
        <MainContent />
      </div>
    </section>
  );
}
