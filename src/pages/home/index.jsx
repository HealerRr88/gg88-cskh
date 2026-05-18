import { useQuery } from "react-query";
import MBPage from "./mb";
import PCPage from "./pc";
import { isMobile } from "react-device-detect";
import LinkService from "../../services/link";
import PageLoading from "../../components/loading/page";
import GifService from "../../services/gif";
import { DEVICES } from "../../utils/config";

export default function HomePage() {
  const LINKS_KEY = 'links';
  const GIFS_KEY = 'gifs';

  const linkService = new LinkService();
  const gifService = new GifService();

  const linksData = useQuery(
    [LINKS_KEY],
    () => linkService.getAll(),
    {
      retry: false,
    }
  );

  const gifsData = useQuery(
    [GIFS_KEY],
    () => gifService.getAll(),
    {
      retry: false,
    }
  );

  if (linksData.isLoading) {
    return <PageLoading />
  }

  return (
    <>
      {
        isMobile ?
          <MBPage
            links={linksData.data?.filter(item => item.device === DEVICES.MOBILE || item.device === DEVICES.ALL) || []}
            gifs={gifsData.data?.filter(item => item.device === DEVICES.MOBILE || item.device === DEVICES.ALL) || []}
          /> :
          <PCPage
            links={linksData.data?.filter(item => item.device === DEVICES.DESKTOP || item.device === DEVICES.ALL) || []}
            gifs={gifsData.data?.filter(item => item.device === DEVICES.DESKTOP || item.device === DEVICES.ALL) || []}
          />
      }
    </>
  )
}