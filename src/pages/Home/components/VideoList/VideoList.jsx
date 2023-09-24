import { IconDot, IconPerson, IconVerified } from "@/assets/icons";
import { IconButton } from "@/components";
import style from "./VideoList.module.css";

export const VideoList = ({ videos }) => {
  return (
    <section className={style.videoList}>
      {videos.map((video) => (
        <Video key={video.id} video={video} />
      ))}
    </section>
  );
};

const Video = ({ video }) => {
  const viewsFormatted = new Intl.NumberFormat("en-US", { notation: "compact", compactDisplay: "short" }).format(
    video.views
  );

  return (
    <div className={style.video}>
      <figure className={style.thumbnail}>
        {video.thumbnail ? (
          <img
            className={style.thumbnailImg}
            src={video.thumbnail}
            alt="Image video"
            loading="lazy"
            draggable="false"
          />
        ) : null}
        <figcaption className={style.thumbnailDuration}>{video.duration}</figcaption>
      </figure>
      <div className={style.details}>
        <span className={style.detailsAvatar}>
          {video.avatar ? (
            <img src={video.avatar} alt="Image channel" title={video.channel} loading="lazy" draggable="false" />
          ) : (
            <IconPerson />
          )}
        </span>
        <div className={style.meta}>
          <p className={style.metaTitle}>{video.title}</p>
          <div className={style.byline}>
            <strong className={style.channelName} title={video.channel}>
              {video.channel}
            </strong>
            {video.verified && (
              <span className={style.badge} title="Verified">
                <IconVerified />
              </span>
            )}
          </div>
          <div className={style.metaData}>
            <span className={style.metaDataViews}>{viewsFormatted} views</span>
            <span className={style.metaDataUpdate}>{video.updateTime} ago</span>
          </div>
        </div>
        <IconButton icon={<IconDot />} label="Action menu" className={style.menuButton} />
      </div>
    </div>
  );
};
