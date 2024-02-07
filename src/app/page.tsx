import HeaderComponent from "@/components/generalComponents/HeaderComponent";
import TextComponent from "@/components/generalComponents/TextComponent";


export default async function Home() {

  return (
    <main className="flex flex-col pl-5">
      <HeaderComponent title="Annoucements" />
      <TextComponent msg="This is an example of the annoucement" />
      <HeaderComponent title="Upcoming Events" />
    </main>
  );
}
