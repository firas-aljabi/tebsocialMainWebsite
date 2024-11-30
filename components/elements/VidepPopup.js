import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import "../../node_modules/react-modal-video/css/modal-video.css"

export default function VideoPopup({ style }) {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            {style === 1 &&
                <a className="video-popup1" onClick={() => setOpen(true)}>
                    <div className="video-btn play-icon-tra">
                        <div className="video-block-wrapper">
                            <i className="fas fa-play" />
                        </div>
                    </div>
                </a>
            }
            {style === 2 &&
                <a className="video-popup2" onClick={() => setOpen(true)}>
                    <div className="video-btn play-icon-pink">
                        <div className="video-block-wrapper">
                            <i className="fas fa-play" />
                        </div>
                    </div>
                    <img className="img-fluid" src="/images/tab-2-img.png" alt="video-preview" />
                </a>
            }
            {style === 3 &&
                <a onClick={() => setOpen(true)} className="video-popup2 btn btn-tra">
                    Take Quick Tour <i className="far fa-play-circle" />
                </a>
            }
            {style === 4 &&
                <a className="video-popup2" onClick={() => setOpen(true)}>
                    <div className="video-btn play-icon-pink">
                        <div className="video-block-wrapper">
                            <i className="fas fa-play" />
                        </div>
                    </div>
                    <img className="img-fluid" src="/images/hero-6-img.png" alt="video-preview" />
                </a>
            }
            {style === 5 &&
                <a className="video-popup2" onClick={() => setOpen(true)}>
                    <div className="video-btn play-icon-pink">
                        <div className="video-block-wrapper">
                            <i className="fas fa-play" />
                        </div>
                    </div>
                    <img className="img-fluid" src="/images/hero-2-img.png" alt="video-preview" />
                </a>
            }
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="c238xxeDdFI" onClose={() => setOpen(false)} />
        </>
    )
}