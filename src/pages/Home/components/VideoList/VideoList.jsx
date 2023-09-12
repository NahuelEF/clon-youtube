import { IconVerified,IconDot } from "@/assets/icons";
import { IconButton } from "@/components";
import style from "./VideoList.module.css";

export const VideoList = ({ videos }) => {
  return (
    <section className={style.videoList}>
      {videos.map((video) => (
        <Video key={video.id} video={video}/>
      ))}
    </section>
  );
};

const Video = ({ video }) => {
  return (
    <div className={style.video}>
      <figure className={style.thumbnail}>
        {video.thumbnail && <img className={style.thumbnailImg} src={video.thumbnail} alt="Image video" loading="lazy" draggable="false" />}
        <figcaption className={style.thumbnailDuration}>{video.duration}</figcaption>
      </figure>
      <div className={style.details}>
        <img className={style.detailsAvatar} src={video.avatar} alt="Image channel" title={video.channelName}  loading="lazy" draggable="false" />
        <div className={style.meta}>
          <p className={style.metaTitle}>{video.title}</p>
          <div className={style.byline}>
            <strong className={style.channelName} title={video.channelName}>{video.channelName}</strong>
            {video.verified && (<span className={style.badge} title="Verified">
              <IconVerified />
            </span>)}
          </div>
          <div className={style.metaData}>
            <span className={style.metaDataViews}>{video.views} views</span>
            <span className={style.metaDataUpdate}>{video.updateTime} ago</span>
          </div>
        </div>
        <IconButton icon={<IconDot/>} label="Action menu" className={style.menuButton}/>
      </div>
    </div>
  );
};
