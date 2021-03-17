export const animfadeIn = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  }
}

export const animDockerLogo = {
  ease: "Sine.easeOut",
  from: {
    opacity: 0,
    transform: "rotateY(180deg)"
  },
  to: {
    opacity: 1,
    transform: "rotateY(0deg)"
  }
}

export const animItemFadeIn = {
  ease: "Elastic.easeOut.config(1, 0.3)",
  from: {
    opacity: 0,
    width: 0,
    height: 0,
  },
  to: {
    opacity: 1,
    width: 51,
    height: 51,
    borderRadius: 5,
    backgroundColor: "white",
    boxShadow: "0px 0px 60px #E0F0FF"
  }
}

export const animExtendNodeFadeIn = {
  ease: "Elastic.easeOut.config(1, 0.3)",
  from: {
    opacity: 0,
    width: 0,
    height: 0,
  },
  to: {
    opacity: 1,
    width: 141,
    height: 51,
    borderRadius: 5,
    backgroundColor: "white",
    boxShadow: "0px 0px 60px #E0F0FF"
  }
}

export const animLine = {
  from: {
    strokeDasharray: 81,
    strokeDashoffset: 81,
  },
  to: {
    strokeDashoffset: 0,
  }
}