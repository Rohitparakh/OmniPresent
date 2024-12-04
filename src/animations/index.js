export const slideDown = {
  hidden: { y: -50, opacity:0 },
  visible: { y: 0, opacity:1, transition: { duration: 0.8, ease: "easeOut" } },
};

export const slideUp = {
  hidden: { y: 50, opacity:0},
  visible: { y: 0, opacity:1, transition: { duration: 0.8, ease: "easeOut" } },
};

export const slideUp40 = {
  hidden: { y: 50, opacity:0, zIndex: 40},
  visible: { y: 0, opacity:1, zIndex: 40, transition: { duration: 0.8, ease: "easeOut" } },
};

export const slideUp50 = {
  hidden: { y: 50, opacity:0, zIndex: 50},
  visible: { y: 0, opacity:1, zIndex: 50, transition: { duration: 0.8, ease: "easeOut" } },
};


export const slideUpDelay = {
  hidden: { y: 50, opacity:0 },
  visible: {
    y: 0,
    opacity:1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

export const slideLeft = {
  hidden: { x: '100%' },
  visible: { x: 0, transition: { duration: 0.8, ease: "easeOut"} },
};

export const slideLeftDelay = {
  hidden: { x: '100%' },
  visible: { x: 0, transition: { duration: 0.8, ease: "easeOut", delay:0.6 } },
};

export const slideRight = {
  hidden: { x: '-100%' },
  visible: { x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export const slideRightDelay1 = {
  hidden: { x: '-100%' },
  visible: { x: 0, transition: { duration: 0.8, ease: "easeOut", delay:0.2 } },
};

export const slideRightDelay2 = {
  hidden: { x: '-100%' },
  visible: { x: 0, transition: { duration: 0.8, ease: "easeOut", delay:0.4 } },
};

export const growFromTop = {
  hidden: { height: 0 },
  visible: {
    height: "100%",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const growFromTopDelay = {
  hidden: { height: 0 },
  visible: {
    height: "100%",
    transition: { duration: 0.8, ease: "easeOut", delay: 0.1 },
  },
};

export const growFromLeft = {
  hidden: { width: 0, originX: 0 },
  visible: {
    width: "20rem",
    originX: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const growFromLeftDelay = {
  hidden: { width: 0 },
  visible: {
    width: "20rem",
    transition: { duration: 0.8, ease: "easeOut", delay: 0.1 },
  },
};

export const growFromRight = {
  hidden: { width: 0, originX: 1 },
  visible: {
    width: "20rem",
    originX: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};
