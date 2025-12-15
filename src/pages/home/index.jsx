import { useQuery } from "react-query";
import MBPage from "./mb";
import PCPage from "./pc";
import { isMobile } from "react-device-detect";
import LinkService from "../../services/link";
import PageLoading from "../../components/loading/page";
import { setLinks } from "../../redux/slices/links";
import { useDispatch } from "react-redux";

export default function HomePage() {
  const LINKS_KEY = 'links';
  const linkService = new LinkService();
  const dispatch = useDispatch();

  const linksData = useQuery(
    [LINKS_KEY],
    () => linkService.getAll(),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: true,
    }
  );

  if (linksData.isLoading) {
    return <PageLoading />
  }

  if (linksData.isFetched) {
    dispatch(setLinks(linksData.data));
  }

  return (
    <div className="App">
      {
        isMobile
          ? <MBPage />
          : <PCPage />
      }
    </div>
  )
}