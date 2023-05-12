import Storeies from "./Stories";
import Posts from "./Posts";
import SideBar from "./SideBar";

export default function Body() {
  return (
    <div class="corpo">
      <div class="esquerda">
        <Storeies />
        <Posts />
      </div>
      <SideBar />
    </div>
  );
}
