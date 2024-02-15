import React from 'react';

class FullscreenImage extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }

  toggleFullscreen = () => {
    const image = this.imageRef.current;
    if (image) {
      if (!document.fullscreenElement) {
        image.requestFullscreen().catch(err => {
          console.error('Error attempting to enable full-screen mode:', err);
        });
      } else {
        document.exitFullscreen();
      }
    }
  };

  render() {
    const { src, alt } = this.props;
    return (
      <div>
        <img
          ref={this.imageRef}
          src={src}
          alt={alt}
          onClick={this.toggleFullscreen}
        //   style={{ cursor: 'pointer' }}
        />
      </div>
    );
  }
}

export default FullscreenImage;