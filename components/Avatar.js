function Avatar({ url }) {
  return (
    <img
      src={url}
      loading="lazy"
      className="h-10 rounded-full animate-bounce cursor-pointer transition duration-150 transform hover:scale-110 "
      alt="profile pic"
    />
  );
}

export default Avatar;
