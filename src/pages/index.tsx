import DefaultLayout from "@/layouts/default";
import HomePage from "@/components/HomePage"; // Ensure HomePage is imported

function IndexPage() {
  return (
    <DefaultLayout>
      <HomePage/>
    </DefaultLayout>
  );
}

export default IndexPage;
