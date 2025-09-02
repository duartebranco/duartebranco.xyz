import React, { useEffect } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const ImageZoomModal = ({ isOpen, onClose, imageUrl, imageAlt }) => {
    // Handle escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.85)",
                zIndex: 1000,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0",
            }}
        >
            {/* Close button */}
            <button
                onClick={onClose}
                style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    color: "#2c3e50",
                    border: "2px solid #2c3e50",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s ease",
                    zIndex: 1001,
                }}
                onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
                    e.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
                    e.target.style.transform = "scale(1)";
                }}
            >
                ×
            </button>

            {/* Zoom controls and image */}
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <TransformWrapper
                    initialScale={1}
                    minScale={0.3}
                    maxScale={6}
                    wheel={{
                        step: 0.15,
                        smoothStep: 0.005,
                    }}
                    pinch={{
                        step: 8,
                    }}
                    pan={{
                        disabled: false,
                        lockAxisX: false,
                        lockAxisY: false,
                        velocityDisabled: false,
                    }}
                    doubleClick={{
                        disabled: false,
                        step: 0.6,
                        mode: "zoomIn"
                    }}
                    limitToBounds={true}
                    centerOnInit={true}
                >
                    {({ zoomIn, zoomOut, resetTransform }) => (
                        <>
                            {/* Zoom Controls */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: "20px",
                                    left: "20px",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px",
                                    zIndex: 1001,
                                }}
                            >
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        zoomIn();
                                    }}
                                    style={{
                                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                                        color: "#2c3e50",
                                        border: "2px solid #2c3e50",
                                        width: "50px",
                                        height: "50px",
                                        borderRadius: "50%",
                                        fontSize: "1.5rem",
                                        fontWeight: "bold",
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        transition: "all 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
                                        e.target.style.transform = "scale(1.1)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
                                        e.target.style.transform = "scale(1)";
                                    }}
                                >
                                    +
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        zoomOut();
                                    }}
                                    style={{
                                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                                        color: "#2c3e50",
                                        border: "2px solid #2c3e50",
                                        width: "50px",
                                        height: "50px",
                                        borderRadius: "50%",
                                        fontSize: "1.5rem",
                                        fontWeight: "bold",
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        transition: "all 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
                                        e.target.style.transform = "scale(1.1)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
                                        e.target.style.transform = "scale(1)";
                                    }}
                                >
                                    −
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        resetTransform();
                                    }}
                                    style={{
                                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                                        color: "#2c3e50",
                                        border: "2px solid #2c3e50",
                                        width: "50px",
                                        height: "50px",
                                        borderRadius: "50%",
                                        fontSize: "1rem",
                                        fontWeight: "bold",
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        transition: "all 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
                                        e.target.style.transform = "scale(1.1)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
                                        e.target.style.transform = "scale(1)";
                                    }}
                                >
                                    ⌂
                                </button>
                            </div>

                            <TransformComponent
                                wrapperStyle={{
                                    width: "100vw",
                                    height: "100vh",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                                contentStyle={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "100%",
                                    height: "100%",
                                }}
                            >
                                <img
                                    src={imageUrl}
                                    alt={imageAlt}
                                    style={{
                                        maxWidth: "95vw",
                                        maxHeight: "95vh",
                                        width: "auto",
                                        height: "auto",
                                        objectFit: "contain",
                                        borderRadius: "8px",
                                        backgroundColor: "#5d7fa3",
                                        cursor: "grab",
                                        userSelect: "none",
                                        WebkitUserSelect: "none",
                                        MozUserSelect: "none",
                                        msUserSelect: "none",
                                    }}
                                    onError={(e) => {
                                        e.target.style.backgroundColor = "#5d7fa3";
                                        e.target.style.color = "#f8f8ff";
                                        e.target.style.display = "flex";
                                        e.target.style.alignItems = "center";
                                        e.target.style.justifyContent = "center";
                                        e.target.style.fontSize = "4rem";
                                        e.target.innerHTML = "";
                                    }}
                                    draggable={false}
                                />
                            </TransformComponent>
                        </>
                    )}
                </TransformWrapper>
            </div>
        </div>
    );
};

export default ImageZoomModal;
