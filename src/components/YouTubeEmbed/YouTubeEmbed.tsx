import styles from './YouTubeEmbed.module.scss';
const YouTubeEmbed = ({ embedUrl }: { embedUrl: string }) => {
  console.log(embedUrl);
  return (
    <div className={styles.videoResponsive}>
      <iframe
        width="300"
        height="225"
        src={`${embedUrl}?autoplay=1`}
        allowFullScreen
        title="Trailer"
        // frameBorder="0"
        // controls={1}
      />
    </div>
  );
};

export default YouTubeEmbed;
