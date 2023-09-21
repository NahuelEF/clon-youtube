import { IconVerified, IconDot } from "@/assets/icons";
import { IconButton } from "@/components";
import style from "./VideoList.module.css";

export const VideoList = ({ videos }) => {
  return (
    <section className={style.videoList}>
      {videos.map((video) => (
        <Video key={video.id}>
          <Thumbnail thumbnail={video.thumbnail} duration={video.duration} />
          <Video.Container className={style.details}>
            <Avatar avatar={video.avatar} channel={video.channel} />
            <Video.Container className={style.meta}>
              <MetaTitle title={video.title} />
              <Video.Container className={style.byline}>
                <ChannelName channel={video.channel} />
                {video.verified && <Badge />}
              </Video.Container>
              <Video.Container className={style.metaData}>
                <DataViews views={video.views} />
                <DataUpdate updateTime={video.updateTime} />
              </Video.Container>
            </Video.Container>
            <IconButton icon={<IconDot />} label="Action menu" className={style.menuButton} />
          </Video.Container>
        </Video>
      ))}
    </section>
  );
};

const Video = ({ children }) => <div className={style.video}>{children}</div>;

const Thumbnail = ({ thumbnail, duration }) => (
  <figure className={style.thumbnail}>
    {thumbnail && (
      <img className={style.thumbnailImg} src={thumbnail && ""} alt="Image video" loading="lazy" draggable="false" />
    )}
    <figcaption className={style.thumbnailDuration}>{duration}</figcaption>
  </figure>
);

const Container = ({ children, className }) => <div className={className}>{children}</div>;

const MetaTitle = ({ title }) => <p className={style.metaTitle}>{title}</p>;

const Avatar = ({ avatar, channel }) => (
  <img
    className={style.detailsAvatar}
    src={avatar && ""}
    alt={`Avatar of ${channel}`}
    title={channel}
    loading="lazy"
    draggable="false"
  />
);

const ChannelName = ({ channel }) => (
  <strong className={style.channelName} title={channel}>
    {channel}
  </strong>
);

const Badge = () => (
  <span className={style.badge} title="Verified">
    <IconVerified />
  </span>
);

const DataViews = ({ views }) => {
  const viewFormat = new Intl.NumberFormat("en-US", { notation: "compact", compactDisplay: "short" }).format(views);

  return <span className={style.metaDataViews}>{viewFormat} views</span>;
};

const today = new Date();
const TODAY = { DATE: today.getDate(), FULL_YEAR: today.getFullYear(), MONTH: today.getMonth() };

const DataUpdate = ({ updateTime }) => {
  const formatUpdate = new Date(updateTime);
  const UPDATE_TIME = {
    DATE: formatUpdate.getDate(),
    FULL_YEAR: formatUpdate.getFullYear(),
    MONTH: formatUpdate.getMonth(),
  };

  let formatUpdateTime = "";
  if (UPDATE_TIME.FULL_YEAR !== TODAY.FULL_YEAR) {
    const calcYear = TODAY.FULL_YEAR - UPDATE_TIME.FULL_YEAR;

    return (formatUpdateTime += `${calcYear} years`);
  }
  if (UPDATE_TIME.MONTH !== TODAY.MONTH) {
    const calcMonth = TODAY.MONTH - UPDATE_TIME.MONTH;

    return (formatUpdateTime += `${calcMonth} months`);
  }

  return <span className={style.metaDataUpdate}>{formatUpdateTime} ago</span>;
};

Video.Container = Container;
