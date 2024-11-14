export const slideUp = {
  hidden: { y: 50 },
  visible: { y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export const slideUpDelay = {
  hidden: { y: 50 },
  visible: {
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.2,
    },
  },
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
