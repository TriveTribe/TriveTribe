import HeaderComponent from "@/components/eventComponents/HeaderComponent";
import TextComponent from "@/components/eventComponents/TextComponent";


export default async function Home() {

  return (
    <main className="flex flex-col pl-5">
      <HeaderComponent title="Annoucements" />
      <TextComponent msg="This is an example of the annoucement" />
      <HeaderComponent title="Upcoming Events" />
    </main>
  );
}
