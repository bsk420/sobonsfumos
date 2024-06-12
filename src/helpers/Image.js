/* A simple iframe wrapper that makes 16:9 responsive embed */
import React from 'react';

export default ({ url, background="black", className="video" }) => {
  return (
    <div
      className={className}
      style={{
        position: "relative",
        background: background,
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 25,
        height: 0
      }}
    >
      <img
        alt='image'
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
        src='https://media.discordapp.net/attachments/1141912139649536000/1236144847501529259/Front_Card_Final_1.png?ex=6665be5a&is=66646cda&hm=8cfeae0ac0c225f574ec5ffa6d41f4f0fa71b55038f32ce42aa05f9c4acdda4e&=&format=webp&quality=lossless'
      />
    </div>
  );
};
